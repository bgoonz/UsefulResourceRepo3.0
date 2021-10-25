/*

  mongoimport -d cryrecover -c gdax.btc-usd-ticker-all --file data/ticker/btc-usd-ticker-all.json # imported 3,009,298 documents
  mongoimport -d cryrecover -c gdax.eth-usd-ticker-all --file data/ticker/eth-usd-ticker-all.json # imported 1,818,575 document
  mongoimport -d cryrecover -c gdax.ltc-usd-ticker-all --file data/ticker/ltc-usd-ticker-all.json # imported 18,864 documents

  # import previosly V1
  for COIN in btc eth ltc
  do
      for TIME in 0-minutes 1-hours 2-days 3-weeks 4-months
      do
          echo "Importing $COIN in $TIME"
          mongoimport -d cryrecover -c gdax.$COIN-usd-$TIME-v2 --file data/tmp/gdax.$COIN-usd-$TIME-v2.json
      done
  done


  mongodump -h 165.227.113.186:53562 -d crydb -u cryuser -p pass-mongodb-1gb-nyc3-01 -o data/dumps/2017.10.28/
  mongodump -d cryrecover -o data/dumps/2017.10.28-ticker-all/

  mongorestore -d cryrecover data/dumps/2017.10.28/crydb

  // remove gdax.btc-usd-0-minutes-v1
  var v = 1;
  var PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd', 'gdax.btc-usd'].reverse();
  var TIMEFRAMES = ['minutes', 'hours', 'days', 'weeks', 'months'];

  var collections = PAIRS.map(p => TIMEFRAMES.map((t, i) => `${p}-${i}-${t}-v${v}`)).reduce((a, e) => a.concat(e), []);
  print(collections)
  collections.forEach(name => db.getCollection(name).drop());

  // remove: gdax.btc-usd-minutes
  var v = 1;
  var PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd', 'gdax.btc-usd'].reverse();
  var TIMEFRAMES = ['minutes', 'hours', 'days', 'weeks', 'months'];

  var collections = PAIRS.map(p => TIMEFRAMES.map((t, i) => `${p}-${t}`)).reduce((a, e) => a.concat(e), []);
  print(collections)
  collections.forEach(name => db.getCollection(name).drop());

  db.getCollection('gdax.btc-usd-4-months-v2').find({}).sort({'closingTick.time': 1})


////////

  mongorestore -d cryrecover data/dumps/2017.10.28-ticker-all/cryrecover

  // merge duplicated
  var name = 'gdax.btc-usd-4-months-v2';
  var sort = {$sort: {'closingTick.time': 1 }}

  var group = {$group: {
    _id: { year: { $year:'$timestamp'},
      week: { $week:'$timestamp'},
      month: { $month:'$timestamp'},
      day: { $dayOfMonth:'$timestamp'},
      hour: { $hour:'$timestamp'},
      minute: { $minute:'$timestamp'}
    },
    objectId: {$min: '$_id'},
    timestamp: { $first: '$timestamp' },
    open: { $first: '$open' },
    close: { $last: '$close' },
    high: { $max: '$high' },
    low: { $min: '$low' },
    sold: { $sum: '$sold' },
    bought: { $sum: '$bought' },
    volume: { $sum: '$volume' },
    count: { $sum: '$count' },
    openingTick: {$first: '$openingTick'},
    closingTick: {$last: '$closingTick'},
    timestampWeek: {$first: '$timestampWeek'}
  }};

  var removeId = {$project: {_id: 0}};
  var addId = {$addFields: {_id: '$objectId'}};
  var removeObjId = {$project: {objectId: 0}};

  var pipeline = [sort, group, removeId,addId,removeObjId, sort];

  db.getCollection(name).aggregate(pipeline);


  // server

  mongorestore -h 165.227.113.186:53562 -d crydb -u cryuser -p pass-mongodb-1gb-nyc3-01 data/dumps/2017.10.28-ticker-all/cryrecover

*/
const { MongoClient } = require('mongodb');

const DEBUG = false;

const VERSION = 2;
// const DATABASES = ['mongodb://localhost:27017/cryrecover'];
const DATABASES = ['mongodb://cryuser:pass-mongodb-1gb-nyc3-01@165.227.113.186:53562/crydb'];
const PAIRS = ['gdax.ltc-usd', 'gdax.eth-usd', 'gdax.btc-usd'];
const TIMEFRAMES = ['1-hours', '2-days', '3-weeks', '4-months'];

runMigration({
  version: VERSION,
  databases: DATABASES,
  pairs: PAIRS,
  timeframes: TIMEFRAMES,
  collectionFn
}).then(() => {
  console.log('done!');
}).catch(error => {throw error});

async function runMigration({version, databases, pairs, timeframes, collectionFn}) {
  const collections = pairs.map(p => timeframes.map(t => `${p}-${t}-v${version}`)).reduce((a, e) => a.concat(e), []);
  const results = [];

  for(const name of collections) {
    for (const uri of databases) {
      const db = await MongoClient.connect(uri);
      const result = await collectionFn(db, name);
      results.push(result);
      db.close();
    }
  }

}

async function collectionFn(db, name) {
  const collection = db.collection(name);

  const sort = { $sort: { 'closingTick.time': 1 } }
  const group = {
    $group: {
      objectId: { $min: '$_id' },
      timestamp: { $first: '$timestamp' },
      open: { $first: '$open' },
      close: { $last: '$close' },
      high: { $max: '$high' },
      low: { $min: '$low' },
      sold: { $sum: '$sold' },
      bought: { $sum: '$bought' },
      volume: { $sum: '$volume' },
      count: { $sum: '$count' },
      openingTick: { $first: '$openingTick' },
      closingTick: { $last: '$closingTick' },
      timestampWeek: { $first: '$timestampWeek' }
    }
  };

  if (/week/i.test(name)) {
    group.$group._id = '$timestampWeek';
  } else {
    group.$group._id = {
      year: { $year: '$timestamp' },
      week: { $week: '$timestamp' },
      month: { $month: '$timestamp' },
      day: { $dayOfMonth: '$timestamp' },
      hour: { $hour: '$timestamp' },
      minute: { $minute: '$timestamp' }
    };
  }

  const removeId = { $project: { _id: 0 } };
  const addId = { $addFields: { _id: '$objectId' } };
  const removeObjId = { $project: { objectId: 0 } };
  // const out = {$out: `m-${name}`};
  const out = { $out: name };

  const pipeline = [sort, group, removeId, addId, removeObjId, sort, out];

  const cursor = collection.aggregate(pipeline, { allowDiskUse: true });
  return cursor.toArray();
}
