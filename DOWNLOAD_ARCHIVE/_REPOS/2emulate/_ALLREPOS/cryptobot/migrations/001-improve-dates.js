#!/usr/bin/env node

const { MongoClient } = require('mongodb');

const DEBUG = false;

const VERSION = 1;
const DATABASES = ['mongodb://localhost:27017/crybackup'];
const PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd', 'gdax.btc-usd'];
const TIMEFRAMES = ['minutes', 'hours', 'days', 'weeks', 'months'];

// const currentVersion = null;

/**
 *
 *  $ nodemon migrations/001-improve-dates.js
 *
 * This migration is need for the simulator because:
 * - It needs to have a timestamp field to get ticks so it can filter by time ranges
 *
 * Other issues:
 *
 * - Weeks timestamp breaks when it has multiple months. e.g Aug/week35, Sep/week35
 * - Make values and array instead of an object.
 * - Ticks.time should be ISODate
 *
 *

 {
    "_id" : ObjectId("59bd7624811ccd711d1e39e5"),
    "timestamp": ISODate("2017-09-16T19:06:00Z") +++ new (add index and group by date rather) --- new ISODate(""+yr+"-"+mo+"-01T00:00:00Z");
    "time" : "2017/Sep(37)16+19:06", --- remove
    "week": "2017-W37" +++ add
    "high" : 52.99,
    "low" : 52.85,
    "open" : 52.99,
    "count" : 50,
    "volume" : 627.35290511,
    "bought" : 590.30711696,
    "sold" : 37.04578815,
    "close" : 52.33,
    "openingTick": {
      "_id" : 514496186,
      "price" : 52.34,
      "side" : "sell",
      "size" : 0.00019048,
      "time" : "2017-09-16T19:56:02.042000Z"
    }
    "closingTick": {
        "_id" : 514496851,
        "price" : 52.33,
        "side" : "buy",
        "size" : 3.45682,
        "time" : "2017-09-16T19:56:20.480000Z"
      }
    "ticks": [ +++--- change 'values' for 'ticks'
      {
        "_id" : 514496186,
        "price" : 52.34,
        "side" : "sell",
        "size" : 0.00019048,
        "time" : "2017-09-16T19:56:02.042000Z"
      },
      {
        "_id" : 514496186,
        "price" : 52.34,
        "side" : "sell",
        "size" : 0.00019048,
        "time" : "2017-09-16T19:56:02.042000Z"
      }
    ]


  // Bulk drop

  var v = VERSION;
  var collections = PAIRS.map(p => TIMEFRAMES.map((t, i) => `${p}-${i}-${t}-v${v}`)).reduce((a, e) => a.concat(e), []);
  print(collections)
  collections.forEach(name => db.getCollection(name).drop());

  //# Rename databases
  var v = VERSION;
  var collections = PAIRS.map(p => TIMEFRAMES.map((t, i) => {
      return {
          next: `${p}-${i}-${t}`,
          prev: `${p}-${t}`
      };
  })).reduce((a, e) => a.concat(e), []);

  print(collections);
  collections.forEach(name => db.getCollection(name.prev).renameCollection(name.next) );
  // collections.forEach(name => print(name.prev, name.next) );
  // collections.forEach(name => db.getCollection(name.prev).find({}).limit(1) );
 }
 */

async function runMigration(version, databases, pairs, timeframes) {
  const collections = pairs.map(p => timeframes.map((t, i) => `${p}-${i}-${t}`)).reduce((a, e) => a.concat(e), []);
  const pipelines = [];

  console.log('Collections', JSON.stringify(collections));

  databases.forEach(uri => {
    collections.forEach(collection => {
      const promise = runPipeline(uri, collection, version);
      pipelines.push(promise);
    });
  });

  return Promise.all(pipelines);
}

async function runPipeline(uri, name, version) {
  const db = await MongoClient.connect(uri);
  const collection = db.collection(name);
  const outCollection = `${name}-v${version}`;
  await aggregateTicksData(collection, name, version, outCollection);
  // const result =
  await addTimestampAndWeek(outCollection, db);
  const result =
  await aggregateAddWeekYear(db, outCollection, version, outCollection);
  db.close();
  return result;
}

async function aggregateAddWeekYear(db, name, version, outCollection) {
  const collection = db.collection(name);
  const addWeekYear = { $addFields: {
    // week: { $week: '$timestamp' },
    // year: { $year: '$timestamp' },
    timestampWeek: { $concat: [{ $substr: [{ $year: '$timestamp' }, 0, 4] }, '-', { $substr: [{ $week: '$timestamp' }, 0, 2] }]}
    // month: { $month: '$timestamp' },
  } }

  const out = { $out: outCollection };

  const pipeline = [addWeekYear, out];

  const cursor = collection.aggregate(pipeline, { allowDiskUse: true });

  return cursor.toArray();
}

async function addTimestampAndWeek(outCollection, db) {
  const collection = db.collection(outCollection);

  return new Promise(resolve => {
    collection.find({}).forEach(d => {
      const ts = new Date(d.openingTick.time);
      ts.setUTCMilliseconds(0);
      ts.setUTCSeconds(0);

      if (is('hours', outCollection) || is('days', outCollection) || is('months', outCollection)) {
        ts.setUTCMinutes(0);
      }

      if (is('days', outCollection) || is('months', outCollection)) {
        ts.setUTCHours(0);
      }

      if (is('months', outCollection)) {
        ts.setUTCDate(1);
      }

      collection.update(d, { $set: { timestamp: ts } });
    }, resolve);
  });
}

async function aggregateTicksData(collection, name, version, outCollection) {
  const convertValuesObjectToTicksArray = {
    $addFields: {
      ticks: { $map: { input: { $objectToArray: '$values' }, as: 'tick', in: '$$tick.v' } }
    }
  };

  const addTicks = {
    $addFields: {
      openingTick: { $arrayElemAt: ['$ticks', 0] },
      closingTick: { $arrayElemAt: ['$ticks', -1] },
    }
  }

  const removeFields = {
    $project: {
      values: 0,
      time: 0
    }
  };

  // remove ticks for timeframe that are not minutes
  if(!is('minutes', name)) {
    removeFields.$project.ticks = 0;
  }

  const out = { $out: outCollection };

  const pipeline = [convertValuesObjectToTicksArray, addTicks, removeFields, out];
  if (DEBUG) { pipeline.unshift({$limit: 5}); }
  if (DEBUG) { pipeline.unshift({ $sort: { _id: -1 } }); }

  const cursor = collection.aggregate(pipeline, { allowDiskUse: true });

  return cursor.toArray();
}

function is(time, name) {
  return (new RegExp(time, 'i')).test(name);
}

runMigration(VERSION, DATABASES, PAIRS, TIMEFRAMES).then(results => {
  console.log('Results', results);
}).catch(error => {
  console.error('Failed running migration ${v} because', error);
});
