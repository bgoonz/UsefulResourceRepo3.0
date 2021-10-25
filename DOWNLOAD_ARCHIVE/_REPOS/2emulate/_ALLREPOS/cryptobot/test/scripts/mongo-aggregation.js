/*
Ticks aggregation (min, hr, day, wk, month)
  - open
  - close
  - high
  - low
  - sold (volume)
  - bought (volume)
  - volume (sold+bought)


min
  - miliseconds values 1000
hr
  - minutes values 60
day
  - hours values 24
wk
  - days values 7
mo
  - days values 28-31
*/

const { MongoClient } = require('mongodb');
const co = require('co');
const moment = require('moment');

const uri = 'mongodb://localhost:27017/localbot4';

// -------------------
// iterator
//
// http://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html
// -------------------

// co(function*(){
//   const db = yield MongoClient.connect(uri);
//   const collection = db.collection('btc-usd-ticker');

//   var cursor = collection.find({});
//   var i = 0;

//   while (yield cursor.hasNext()) {
//     console.log(yield cursor.next());
//     if(i++ > 10) break;
//   }

//   db.close();
// });

// -------------------
// iterator //
// -------------------

// -------------------
// Aggregator
// -------------------

co(function* () {

  // db.getCollection('btc-usd-ticker').createIndex({time: 1})
  // db.getCollection('btc-usd-ticker').find({}).sort({time: -1})

  const db = yield MongoClient.connect(uri);
  const collection = db.collection('eth-usd-ticker');

  var cursor = collection.find({}).sort({ time: 1 });
  // var hasNext = yield cursor.hasNext();

  let seq = 100;
  const format = 'YYYY/MMM(W)DD+HH:mm_ss.SSS';
  const times = {
    minutes: '_',
    hours: ':',
    days: '+',
    weeks: ')',
    months: '('
  };

  for(const time of Object.keys(times)) {
    yield db.collection('eth-usd-ticker.' + time).remove({});
  }

  while (yield cursor.hasNext()) {
    var doc = yield cursor.next();
    if(!doc) continue;

    const timestamp = moment.utc(doc.time);
    const price = parseFloat(doc.price);
    const volume = parseFloat(doc.size);
    const bought = doc.side === 'buy' ? volume : 0;
    const sold = doc.side === 'sell' ? volume : 0;

    for (const time of Object.keys(times)) {
      const splitter = times[time];

      const [aggregatorFormat, keyFormat] = format.split(splitter);
      const aggregator = timestamp.format(aggregatorFormat);

      const set = {};
      const setOnInsert = { open: price };
      if(time === 'minutes') {
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

      const options = { upsert: true };

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

      const col = db.collection('eth-usd-ticker.' + time);
      yield col.updateOne(filter, update, options);
      // console.log('eth-usd-ticker.' + time, res.result);
    }
  }

  db.close();
}).catch(error => {
  console.log(error);
});

// 3798688032
// 8032
function last(thing, index = 3) {
  const string = thing.toString();
  return string.substring(string.length - index);
}

// -------------------
// Aggregator //
// -------------------