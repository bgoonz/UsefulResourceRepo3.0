#!/usr/bin/env node

// DEBUG='crybot:*' nodemon migrations/002-recover-ticks.js
// DEBUG='crybot:*' node migrations/002-recover-ticks.js && echo "---- done ----"

const { MongoClient } = require('mongodb');

const mongo = require('../lib/ticker/db');
const OhlcAggregator = require('../lib/common/ohlc-aggregator');

const DEBUG = true;

const VERSION = 1;
const DATABASES = ['mongodb://localhost:27017/cryrecover'];
const PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd', 'gdax.btc-usd'].reverse();
// const PAIRS = ['gdax.ltc-usd'];
// const PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd'];
const TIMEFRAMES = ['minutes', 'hours', 'days', 'weeks', 'months'];
/**
 *

   TF='btc-usd-minutes'; grep 'update crydb.gdax.'$TF mongod.log |  cut -d ' ' -f 48-59 > ticks-$TF-mongo.json
   TF='eth-usd-minutes'; grep 'update crydb.gdax.'$TF mongod.log |  cut -d ' ' -f 48-59 > ticks-$TF-mongo.json
   TF='ltc-usd-minutes'; grep 'update crydb.gdax.'$TF mongod.log |  cut -d ' ' -f 48-59 > ticks-$TF-mongo.json

  grep 'update crydb.gdax.btc-usd-minutes' mongod.log | head | cut -d ' ' -f 48-59
  { _id: 4040566033.0, price: 3726.5, side: "sell", size: 2.67e-06, time: "2017-09-16T23:57:02.786000Z" },
  { _id: 4040566177.0, price: 3726.49, side: "buy", size: 0.02557894, time: "2017-09-16T23:57:07.887000Z" },
  { _id: 4040567137.0, price: 3726.5, side: "sell", size: 2.67e-06, time: "2017-09-16T23:57:32.179000Z" },
  { _id: 4040569229.0, price: 3726.5, side: "sell", size: 0.04999466, time: "2017-09-16T23:58:11.083000Z" },
  { _id: 4040570200.0, price: 3726.5, side: "sell", size: 2.67e-06, time: "2017-09-16T23:58:21.529000Z" },
  { _id: 4040570885.0, price: 3726.5, side: "sell", size: 2.67e-06, time: "2017-09-16T23:58:31.902000Z" },
  { _id: 4040572208.0, price: 3726.51, side: "sell", size: 2.67e-06, time: "2017-09-16T23:58:52.156000Z" },
  { _id: 4040572757.0, price: 3726.51, side: "sell", size: 2.67e-06, time: "2017-09-16T23:59:01.958000Z" },
  { _id: 4040572772.0, price: 3726.51, side: "sell", size: 0.00026767, time: "2017-09-16T23:59:02.235000Z" },
  { _id: 4040574372.0, price: 3726.5, side: "buy", size: 0.08, time: "2017-09-16T23:59:24.604000Z" },

  mongoimport -d cryrecover -c gdax.btc-usd-ticker-all --file data/ticker/btc-usd-ticker-all.json # imported 3,009,298 documents
  mongoimport -d cryrecover -c gdax.eth-usd-ticker-all --file data/ticker/eth-usd-ticker-all.json # imported 1,818,575 document
  mongoimport -d cryrecover -c gdax.ltc-usd-ticker-all --file data/ticker/ltc-usd-ticker-all.json # imported 18,864 documents


  // Bulk drop

  var v = 1;
  var PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd', 'gdax.btc-usd'].reverse();
  var TIMEFRAMES = ['minutes', 'hours', 'days', 'weeks', 'months'];

  var collections = PAIRS.map(p => TIMEFRAMES.map((t, i) => `${p}-${i}-${t}-v${v}`)).reduce((a, e) => a.concat(e), []);
  print(collections)
  collections.forEach(name => db.getCollection(name).drop());


  // migration appy
  mongodump --db cryrecover -o data/dumps/2017.10.05/

  mongorestore -d crybackup data/dumps/2017.10.05/cryrecover/

  mongorestore -h 165.227.113.186:27017 -u cryuser -p pass-mongodb-1gb-nyc3-01 -d crydb data/dumps/2017.10.05/cryrecover/


  mongodump -h 165.227.113.186:53562 -d crydb -u cryuser -p pass-mongodb-1gb-nyc3-01 -o data/dumps/2017.10.26/
  mongorestore -d cryrecover data/dumps/2017.10.26/crydb/

 */

async function runPipeline(uri, productId, version) {
  const db = await MongoClient.connect(uri);
  const collection = db.collection(`${productId}-ticker-all`);

  const ohlc = new OhlcAggregator({
    format: 'YYYY-MM-DD 00:00:00.000', // by day
    cb: ticks => {
      // console.log(productId, 'tick', ticks);
      mongo.saveTickAggregation(productId, ticks, null, uri);
    }
  });

  collection.find({}).forEach(doc => {
    // console.log(productId, doc);
    ohlc.update(Object.assign({}, doc, {size: 0}));
  }, error => {
    if(error) {
      // error
      console.error('error', error);
    }
    else {
      // done
      db.close();
      ohlc.flush();
    }
  });
}

async function runMigration(version, databases, pairs, timeframes) {
  for(const uri of databases) {
    for(const pair of pairs) {
      await runPipeline(uri, pair, version);
    }
  }
}

runMigration(VERSION, DATABASES, PAIRS, TIMEFRAMES).then(results => {

}).catch(error => {
  console.error('Failed running migration ${v} because', error);
});