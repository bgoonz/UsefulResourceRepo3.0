const { MongoClient } = require('mongodb');
const co = require('co');
const moment = require('moment');
const debug = require('debug')('crybot:db');
const _ = require('lodash');

const VERSION = 2;
const CONFIG = require('../../config');
// TODO: fix "time" : "2017/Aug(35" + "2017/Sep(35",
// 'YYYY/W(MMM)DD+HH:mm_ss.SSS' need to fix "*-weeks" with migration
const FORMAT = 'YYYY/MMM(W)DD+HH:mm_ss.SSS';
const TIMES = {
  minutes: '_',
  hours: ':',
  days: '+',
  weeks: ')',
  months: '('
};

const TIME = {
  MINUTES: 'minutes',
  HOURS: 'hours',
  DAYS: 'days',
  WEEKS: 'weeks',
  MONTHS: 'months'
}

const TIME2INDEX = {
  'minutes': 0,
  'hours': 1,
  'days': 2,
  'weeks': 3,
  'months': 4
}

// 1000 is the max. See: https://docs.mongodb.com/manual/reference/limits/#Write-Command-Operation-Limit-Size
const CHUNK_SIZE = 1000 - 1;

debug('Databse: ', CONFIG.db.uri);

async function saveTickAggregation(productId, allTicks, saveSequence, uri) {
  // debug('saveTickAggregation [verbose]', productId, `bulk operation #${saveSequence} [start]`, allTicks.length);
  const db = await MongoClient.connect(uri || CONFIG.db.uri);
  const chunks = _.chunk(allTicks, CHUNK_SIZE);
  const totalChunks = Math.ceil(allTicks.length / CHUNK_SIZE);
  const allResults = [];

  for (let index = 0; index < chunks.length; index++) {
    const ticks = chunks[index];

    const promises = Object.values(TIME).map((time, index) => {
      // const promises = Object.values(TIME).map((time, index) => {
      const bulkUpdateTicks = ticks.map(tick => getUpdateOneFromTick(tick, time));

      const collectionName = `${productId.toLowerCase()}-${index}-${time}-v${VERSION}`;
      const collection = db.collection(collectionName);

      // console.log('saveTickAggregation', collectionName, CONFIG.db.uri, JSON.stringify(bulkUpdateTicks));
      return collection.bulkWrite(bulkUpdateTicks, { ordered: true, w: 1, j:1 }); // j:1 is needed
    });

    const results = await Promise.all(promises).then(results => {
      const r = results.reduce((acc, i) => {
        const s = serializeMongoResults(i);
        return _.mergeWith(s, acc, (obj, src) => {
          return obj + src;
        });
      }, {});
      debug(`${productId} bulk operation #${saveSequence} [end] ${totalChunks > 1 ? '(' + index + '/' + totalChunks + ')' : ''}: %o [verbose]`, r);
      return r;
    });
    allResults.push(results);
  }

  // debug('Closing db after saveTickAggregation... [verbose]');
  db.close();
  return allResults;
}

function getUpdateOneFromTick(tick, time) {
  const price = parseFloat(tick.price);
  const volume = parseFloat(tick.size);
  const bought = tick.side === 'buy' ? volume : 0;
  const sold = tick.side === 'sell' ? volume : 0;
  const timestamp = getTimeGroup(time, tick.time);
  const timestampWeek = moment.utc(tick.time).format('gggg-WW');

  tick.time = new Date(tick.time); // convert string to date

  const setOnInsert = {
    open: price,
    openingTick: tick
  };

  const set = {
    close: price,
    closingTick: tick,
    timestamp,
    timestampWeek
  };

  const push = {
    ticks: tick
  };

  let filter;
  if (time === TIME.WEEKS) {
    filter = { timestampWeek };
  } else {
    filter = { timestamp };
  }

  const update = {
    $max: { high: price },
    $min: { low: price },
    $setOnInsert: setOnInsert,
    $inc: {
      count: 1,
      volume: volume,
      bought: bought,
      sold: sold
    },
    $set: set
  };

  if(time === TIME.MINUTES) {
    update.$push = push;
  }

  return { updateOne: { filter, update, upsert: true } };
}

/**
 * Clear
 * @param {*} timeframe
 * @param {*} date
 */
function getTimeGroup(timeframe, time) {
  const date = new Date(time);

  // No break statements so it run all the following after a match is found
  switch (timeframe) {
    case TIME.MONTHS:
      date.setUTCDate(1);

    case TIME.WEEKS:
    case TIME.DAYS:
      date.setUTCHours(0);

    case TIME.HOURS:
      date.setUTCMinutes(0);

    case TIME.MINUTES:
      date.setUTCMilliseconds(0);
      date.setUTCSeconds(0);
  }

  return date;
}

/**
 * @deprecated use saveTickAggregation instead
 * @param {Array} data multiple prices
 * @param {String} productId product id such as BTC-USD or ETH-USD
 */
function updateAggregatedData(productId, data) {
  debug('updateAggregatedData*** deprecated!');
  // console.log('db::updateAggregatedData');
  // return new Promise(() => { });

  return co(function* updateAggregatedDataGen() {
    const db = yield MongoClient.connect(CONFIG.db.uri);

    // console.log('updateAggregatedData: ', productId, (data && data.length), CONFIG.db.uri)

    for (const time of Object.keys(TIMES)) {
      const bulkWrite = prepareBulkWrite(data, time);
      const collectionName = `${productId.toLowerCase()}-${time}`;
      const collection = db.collection(collectionName);
      // console.log('---bulkWrite---', bulkWrite);
      // console.log('saveTickAggregation', collectionName, CONFIG.db.uri, JSON.stringify(bulkWrite));
      const r = yield collection.bulkWrite(bulkWrite, { ordered: true, w: 1 });
      const { nUpserted, modifiedCount } = r;
      debug(`${productId} bulk operation to ${collectionName}: `, JSON.stringify(r), '[verbose]'); // too many
    }

    db.close();
  }).catch(error => console.error(new Error(error)));
}

function prepareBulkWrite(data, time) {
  const bulkWrite = [];
  let seq = 100;

  const splitter = TIMES[time];

  for (const doc of data) {
    const price = parseFloat(doc.price);
    const volume = parseFloat(doc.size);
    const bought = doc.side === 'buy' ? volume : 0;
    const sold = doc.side === 'sell' ? volume : 0;
    const timestamp = moment.utc(doc.time);
    const [aggregatorFormat, keyFormat] = FORMAT.split(splitter);
    const aggregator = timestamp.format(aggregatorFormat);

    const set = {};
    const setOnInsert = { open: price };
    if (time === 'minutes') {
      seq = seq > 900 ? 100 : seq + 1;
      const microseconds = Math.round((timestamp.format('ss.SSS') + seq) * 1e6);
      set[`values.${microseconds}`] = doc; // don't save for agg higher than minutes
    } else {
      set['values.close'] = doc;
      setOnInsert['values.open'] = doc;
    }
    set.close = price;

    const filter = {
      time: aggregator
    };

    const update = {
      $max: { high: price },
      $min: { low: price },
      $setOnInsert: setOnInsert,
      $inc: {
        count: 1,
        volume: volume,
        bought: bought,
        sold: sold
      },
      $set: set
    };

    bulkWrite.push({ updateOne: { filter, update, upsert: true } });
  }
  return bulkWrite;
}

function saveTrade(data) {
  debug('saveTrade');
  // console.log('db::saveTrade');
  // return new Promise(() => { });

  return co(function*(){
    const db = yield MongoClient.connect(CONFIG.db.uri);
    const collection = db.collection('orders');

    const results = yield collection.updateOne({
      provider: `${data.provider}.${data.trade.product_id}`,
      status: 'open',
      target: data.order.target,
      side: data.order.side
    }, {
      $set: {
        status: 'done',
        position: data.trade,
        result: data.result
      }
    });

    const { nUpserted, modifiedCount } = results;
    debug(`Trades operation saved `, JSON.stringify(results));

    db.close();
  }).catch(error => console.error(new Error(error)));
}

/**
 * Updates trigger/trailing/trade/status attributes for (open) matching orders
 * @param {*} order
 */
function updateSingleOrder(order) {
  debug('updateSingleOrder');

  return co(function *() {
    const db = yield MongoClient.connect(CONFIG.db.uri);
    const collection = db.collection('orders');
    const status = 'open';

    const settings = {}; // only update present fields
    if (order.trigger) settings.trigger = order.trigger;
    if (order.trailing) settings.trailing = order.trailing;
    if (order.trade) settings.trade = order.trade;
    if (order.status) settings.status = order.status;

    const r = yield collection.updateOne({
      provider: order.provider,
      side: order.side,
      target: order.target,
      status
    }, { $set: settings });
    const { nUpserted, modifiedCount } = r;
    debug(`Updating order `, JSON.stringify(r));
    db.close();
    return r;
  });
}

function saveOrders(data) {
  debug('saveOrders %o', data);

  // console.log('db::saveOrders');
  // return new Promise(() => { });
  // console.log('---- db.saveOrders', data);

  return co(function* () {
    const db = yield MongoClient.connect(CONFIG.db.uri);

    const collection = db.collection('orders');
    const status = 'open';

    const orders = Object.entries(data).reduce((orders, [provider, trades]) => {
      trades.forEach(trade => {
        const t = Object.assign({}, { provider, status, trailing: {}, trade: {} }, trade);
        delete t._id; // don't _id to be updated/set
        orders.push({
          updateOne: {
            filter: { provider, status, side: t.side, target: t.target },
            update: { $set: t },
            upsert: true
          }
        });
      });

      return orders;
    }, []);

    // console.log('collection.bulkWrite', JSON.stringify(orders));

    const r = yield collection.bulkWrite(orders);
    const { nUpserted, modifiedCount } = r;
    debug(`Orders operation saved `, JSON.stringify(r)); // too many

    db.close();
    return r;
  }).catch(error => console.error(error.stack));
}

function loadOrders(query = {status: 'open'}) {
  // console.log('db::loadOrders');
  // return new Promise(() => {});

  return co(function* () {
    const db = yield MongoClient.connect(CONFIG.db.uri);
    const collection = db.collection('orders');
    const docs = yield collection.find(query).toArray();
    const results = {};

    docs.reduce((r, d) => {
      const newOrder = {
        side: d.side,
        target: d.target,
        _id: d._id
      };

      if(d.trailing) newOrder.trailing = d.trailing;
      if (d.trade) newOrder.trade = d.trade;
      if (d.trigger) newOrder.trigger = d.trigger;

      if (!r[d.provider]) {
        r[d.provider] = [];
      }

      r[d.provider].push(newOrder);
      return r;
    }, results);

    db.close();

    debug('loadOrders %o', results);

    return results;
  }).catch(error => console.error(error.stack));
}

/**
 * Get OHLC data
 *
 * Note: the most current day will change with every new value added to it and can't be counted as final
 *
 * @param {String} tickerId provider and pair e.g. gdax.BTC-USD
 * @param {String} resolution either minutes, hours, days, weeks, months
 * @param {Number} multiplier resolution multiplier. E.g. 7 (days) or 5 (minutes)
 * @param {Number} limit limit amount of data to retrive
 */
async function getOhlc({tickerId = 'gdax.btc-usd', resolution = TIME.MINUTES, limit = 50, multiplier = 1} = {}) {
  // const db = await MongoClient.connect('mongodb://localhost:27017/crybackup' || CONFIG.db.uri);
  const db = await MongoClient.connect(CONFIG.db.uri);
  const index = TIME2INDEX[resolution];
  const collectionName = `${tickerId.toLowerCase()}-${index}-${resolution}-v${VERSION}`;
  const collection = db.collection(collectionName);

  // aggregation pipeline
  const descOrder = { $sort: { timestamp: -1 } };
  const ascOrder = { $sort: { timestamp: 1 } };
  const limitResults = { $limit: parseInt(limit) * parseInt(multiplier) };
  const toArray = {$group: {
    _id: null,
    data: { $push: '$$ROOT' }
  }};
  const addOrdinal = {$unwind: {
    path: '$data',
    includeArrayIndex: 'sequence'
  }};
  const addGroupId = {$addFields: {
    groupId: {$subtract: ['$sequence', {$mod: ['$sequence', parseInt(multiplier)]}]}
  }};
  const aggregateData = {$group: {
    _id: '$groupId',
    firstId: {$first: '$data._id'},
    open: { $first: '$data.open' },
    close: { $last: '$data.close' },
    high: { $max: '$data.high' },
    low: { $min: '$data.low' },
    volume: { $sum: '$data.volume' },
    sold: {$sum: '$data.sold'},
    bought: {$sum: '$data.bought'},
    count: {$sum: '$data.count'},
    timestamp: { $first: '$data.timestamp'},
    aggregated: {$sum: 1},
    aggregatedDates: { $push: '$data.timestamp' },
    openingTick: { $first: '$data.openingTick' },
    closingTick: { $last: '$data.closingTick' },
  }};
  const removeGroupId = {$project: {_id: 0}};
  const addId = { $addFields: { _id: '$firstId'}};
  const removeFirstId = { $project: { firstId: 0 } };

  const pipeline = [descOrder, limitResults, ascOrder, toArray, addOrdinal, addGroupId, aggregateData, removeGroupId, addId, removeFirstId];
  const cursor = collection.aggregate(pipeline, { allowDiskUse: true });
  const result = await cursor.toArray();

  // debug('getOhlc %o', { tickerId, resolution, multiplier, limit, collectionName });
  // debug('getOhlc %O', { tickerId, resolution, multiplier, limit, collectionName, result });

  db.close();
  return result;
}

/**
 * This is very similar to getOhlc but there are some key differences:
 *   - the grouping instead of order of data, it's by days since epoch time
 *
 * See: https://docs.mongodb.com/manual/reference/method/db.collection.mapReduce/
 *
 * @param {*} param0
 */
async function getAbsoluteOhlc({ tickerId = 'gdax.btc-usd', resolution = TIME.MINUTES, limit = 50, multiplier = 1 } = {}) {
  debug(`getAbsoluteOhlc %o`, { tickerId, resolution, limit, multiplier });

  const db = await MongoClient.connect(CONFIG.db.uri);
  const index = TIME2INDEX[resolution];
  const collectionName = `${tickerId.toLowerCase()}-${index}-${resolution}-v${VERSION}`;
  const collection = db.collection(collectionName);

  let converter = 1; //1000 / 60 / 60 / 24;

  // No break statements so it run all the following after a match is found
  switch (resolution) {
    case TIME.MONTHS:
      converter *= 4;

    case TIME.WEEKS:
      converter *= 7;

    case TIME.DAYS:
      converter *= 24;

    case TIME.HOURS:
      converter *= 60;

    case TIME.MINUTES:
      converter *= 1000 * 60;
  }

  const mapDaysSinceEpoch = function () {
    const d = this.timestamp;
    const id = d.getTime() / converter | 0; // days since epoh time (absolute)
    const groupId = id - (id % +multiplier);
    emit(groupId, this);
  }

  // Note: MongoDB will not call the reduce function for a key that has only a single value. The values argument is an array whose elements are the value objects that are “mapped” to the key.
  const reduceOhlc = function (key, values) {
    // since: sort: { timestamp: -1 },
    const last = 0;
    const first = values.length - 1;

    return {
      firstId: values[first]._id,
      timestamp: values[first].timestamp,
      aggregated: values.length,
      aggregatedDates: values.map(t => t.timestamp),
      open: values[first].open,
      close: values[last].close,
      high: Math.max.apply(null, values.map(t => t.high)),
      low: Math.min.apply(null, values.map(t => t.low)),
      volume: values.reduce((sum, d) => sum + d.volume, 0),
      bought: values.reduce((sum, d) => sum + d.bought, 0),
      count: values.reduce((sum, d) => sum + d.count, 0),
      sold: values.reduce((sum, d) => sum + d.sold, 0),
      openingTick: values[first].openingTick,
      closingTick: values[last].closingTick
    };
  }

  // catch errors when collection doesn't exists
  try {
    const output = await collection.mapReduce(mapDaysSinceEpoch, reduceOhlc, {
      out: { inline: 1 },
      sort: { timestamp: -1 },
      scope: { converter, multiplier }, // pass read-only variables
      limit: parseInt(limit) * parseInt(multiplier),
      // include _id in results
      finalize: function (key, reducedValue) { reducedValue._id = key; return reducedValue; }
    });

    const results = output.map(r => r.value);

    // debug('results', results);
    // debug('output', output);
    db.close();
    return results;
  } catch (error) {
    debug(`getAbsoluteOhlc.mapReduce.error with ${collectionName}`, error);
  }

  return [];
}

async function deleteDb() {
  debug(`Dropping ${CONFIG.db.uri}`);
  const db = await MongoClient.connect(CONFIG.db.uri);
  const r = await db.dropDatabase();
  db.close();
  return r;
}

/**
 * group them buy entryOrderCreation and return the pair.
 *
 * $match: {strategyName: ... }, $sort: {_id: -1}, $limit: 2, $group: {_id: entryOrderCreated, orders: {$push: $$ROOT} }
 *
 * @param {string} strategyName
 */
async function getLastOrdersByStrategy(match){
  const db = await MongoClient.connect(CONFIG.db.uri);
  const collection = db.collection('orders');

  const find = { $match: match }
  const desc = {$sort: { _id: -1 }};
  const limit = {$limit: 2};
  const asc = { $sort: { _id: 1 } };
  const group = {$group: {
    _id: '$entryOrderCreated',
    orders: {$push: '$$ROOT' }
  }}

  const pipeline = [find, desc, limit, asc, group];
  const cursor = collection.aggregate(pipeline, { allowDiskUse: true });
  const result = await cursor.toArray();
  const orders = _.get(result, '0.orders', []);

  db.close();
  return orders;

}

function serializeMongoResults(results) {
  const t = JSON.parse(JSON.stringify(results));
  const { ok, nMatched, nModified, nInserted, nUpserted, nRemoved } = t;
  return { ok, nMatched, nModified, nInserted, nUpserted, nRemoved };
}

module.exports = {
  connect: (cb) => { // for e2e's
    debug(`connecting to ${CONFIG.db.uri}`);
    return MongoClient.connect(CONFIG.db.uri, cb);
  },
  // MongoClient,
  updateAggregatedData,
  saveOrders,
  loadOrders,
  updateSingleOrder,
  saveTrade,
  getOhlc,
  deleteDb,
  saveTickAggregation,
  getLastOrdersByStrategy,
  getAbsoluteOhlc
};