const { MongoClient } = require('mongodb');
const co = require('co');
const moment = require('moment');

const uri = 'mongodb://localhost:27017/crybackup';
const data = getOhlc('gdax.BTC-USD', 'days', 7, 28);
data.then(r => {
  console.log('r', r);
});

// console.log('kk data', data);

/**
 * Get OHLC data
 * @param {String} tickerId provider and pair e.g. gdax.BTC-USD
 * @param {String} resolution either minutes, hours, days, weeks, months
 * @param {Number} multiplier resolution multiplier. E.g. 7 days
 * @param {Number} period limit amount of data to retrive
 */
async function getOhlc(tickerId, resolution, multiplier, period) {
  const db = await MongoClient.connect(uri);
  const collection = db.collection(`${tickerId.toLowerCase()}-${resolution}`);

  // aggregation pipeline
  const descOrder = { $sort: { _id: -1 } };
  const ascOrder = { $sort: { _id: 1 } };
  const limit = { $limit: period };
  const toArray = {
    $group: {
      _id: null,
      data: { $push: '$$ROOT' }
    }
  };
  const addOrdinal = {
    $unwind: {
      path: '$data',
      includeArrayIndex: 'sequence'
    }
  };
  const addGroupId = {
    $addFields: {
      groupId: { $subtract: ['$sequence', { $mod: ['$sequence', multiplier] }] }
    }
  };
  const aggregateData = {
    $group: {
      _id: '$groupId',
      id: { $first: '$data._id' },
      open: { $first: '$data.open' },
      close: { $last: '$data.close' },
      high: { $max: '$data.high' },
      low: { $min: '$data.low' },
      volume: { $sum: '$data.volume' },
      sold: { $sum: '$data.sold' },
      bought: { $sum: '$data.bought' },
      count: { $sum: '$data.count' },
      timestamp: { $first: '$data.values.open.time' },
      n: { $sum: 1 },
    }
  };
  const pipeline = [descOrder, limit, toArray, addOrdinal, addGroupId, aggregateData, ascOrder];
  const cursor = collection.aggregate(pipeline, { allowDiskUse: true });
  const result = await cursor.toArray();
  return result;
}