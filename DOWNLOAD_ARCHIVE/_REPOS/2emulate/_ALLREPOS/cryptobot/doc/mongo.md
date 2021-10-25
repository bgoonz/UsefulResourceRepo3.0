see private/mongo.md for full details.

# Logs

```sh
/Users/admejiar/workspace/mongodb/mongo.log
/var/log/mongodb/mongod.log mongod.log
```

# Indexes
```js
// asc
db.getCollection('gdax.btc-usd-0-minutes-v1').createIndex({'timestamp':-1})
// desc
db.getCollection('gdax.btc-usd-0-minutes-v1').createIndex({'timestamp':1})
```

# Login

```sh
export IP='165.227.113.186'

# SECURITY RISK!! If you can do this:
mongo $IP:27017 -u cryuser -p $PASSWORD --authenticationDatabase crydb

mongo $IP:27017 -u adrian -p $PASSWORD --authenticationDatabase admin
```

# Backup Database

```sh
scp root@165.227.113.186:/var/log/mongodb/mongod.log mongod.log

# backup
mongodump -h ds151232.mlab.com:51232 -d heroku_2frz56zq -u heroku_2frz56zq -p $PASSWORD -o data
mongodump -h 104.131.94.76:27017 -d crydb -u crybot -p $PASSWORD -o data

mongodump -h 104.131.94.76:27017 -d crydb -u crybot -p $PASSWORD -o data/mongodb-512mb-nyc3-01/
mongodump --db crybot2 -o data/crybot2/

mongodump -h 165.227.113.186:53562 -d crydb -u cryuser -p $PASSWORD -o data/dumps/2017.10.26/
mongodump -h 165.227.113.186:53562 -d crydb -u cryuser -p $PASSWORD -o data/dumps/2017.10.27/
mongodump -h 165.227.113.186:53562 -d crydb -u cryuser -p $PASSWORD -o data/dumps/2017.10.28/

mongo mongodb://cryuser:pass-mongodb-1gb-nyc3-01@165.227.113.186:53562/crydb
TF='daily' DIR='/home/admejiar/dumps' TS=$(date "+%Y-%m-%dT%H:%M:%S"); cd $DIR && mongodump -h 165.227.113.186:53562 -d crydb -u cryuser -p $PASSWORD -o $TS && tar -zcvf crydb-$TF.tar.gz $TS && rm -rfv $TS

TF='daily' DIR='/home/admejiar/dumps' TS=$(date "+%Y-%m-%dT%H:%M:%S"); cd $DIR && mongodump -h localhost:53562 -d crydb -u cryuser -p $PASSWORD -o $TS && tar -zcvf crydb-$TF.tar.gz $TS && rm -rfv $TS

TF='weekly' DIR='/home/admejiar/dumps' TS=$(date "+%Y-%m-%dT%H:%M:%S"); cd $DIR && mongodump -h localhost:53562 -d crydb -u cryuser -p $PASSWORD -o $TS && tar -zcvf crydb-$TF.tar.gz $TS && rm -rfv $TS

TF='monthly' DIR='/home/admejiar/dumps' TS=$(date "+%Y-%m-%dT%H:%M:%S"); cd $DIR && mongodump -h localhost:53562 -d crydb -u cryuser -p $PASSWORD -o $TS && tar -zcvf crydb-$TF.tar.gz $TS && rm -rfv $TS

# import backup
mongorestore -h localhost:27017 -d crybackup2 data/heroku_2frz56zq/
mongorestore -h localhost:27017 -d crybackup3 data/mongodb-512mb-nyc3-01/crydb/

mongorestore -d cryrecover data/dumps/2017.10.27/
mongorestore -d crybackup data/dumps/2017.10.28/
```

# backup JSON

```sh
# get data backup
mongoexport -h ds151232.mlab.com:51232 -d heroku_2frz56zq -c btc-usd-ticker -u heroku_2frz56zq -p $PASSWORD -o data/btc-usd-ticker.json
mongoexport -h ds151232.mlab.com:51232 -d heroku_2frz56zq -c eth-usd-ticker -u heroku_2frz56zq -p $PASSWORD -o data/eth-usd-ticker.json

# import data # mongoimport -h ds151232.mlab.com:51232 -u <user> -p $PASSWORD -d heroku_2frz56zq -c <collection> --file <input file>

mongoimport -d crybackup2 -c eth-usd-ticker --file data/eth-usd-ticker.json
mongoimport -d crybackup2 -c gdax.eth-usd-months --file data/eth-usd-months.json
mongoimport -d crybackup2 -c gdax.eth-usd-weeks --file data/eth-usd-weeks.json
mongoimport -d crybackup2 -c gdax.eth-usd-days --file data/eth-usd-days.json
mongoimport -d crybackup2 -c gdax.eth-usd-hours --file data/eth-usd-hours.json
mongoimport -d crybackup2 -c gdax.eth-usd-minutes --file data/eth-usd-minutes.json

mongoimport -d crybackup2 -c gdax.btc-usd-months --file data/btc-usd-months.json
mongoimport -d crybackup2 -c gdax.btc-usd-weeks --file data/btc-usd-weeks.json
mongoimport -d crybackup2 -c gdax.btc-usd-days --file data/btc-usd-days.json
mongoimport -d crybackup2 -c gdax.btc-usd-hours --file data/btc-usd-hours.json
mongoimport -d crybackup2 -c gdax.btc-usd-minutes --file data/btc-usd-minutes.json

mongoimport -d crybackup -c gdax.eth-usd-ticker --file data/ticker/eth-usd-ticker.json
mongoimport -d crybackup -c gdax.btc-usd-ticker --file data/ticker/btc-usd-ticker.json


mongoexport -d crybackup -c test -o data/ticker/btc-usd-ticker-v1.json
mongoimport -d crybackup -c gdax.btc-usd-ticker --file data/ticker/btc-usd-ticker-v1.json

mongoexport -d crybackup -c test -o data/ticker/eth-usd-ticker-v1.json
mongoimport -d crybackup -c gdax.eth-usd-ticker --file data/ticker/eth-usd-ticker-v1.json

mongoexport -d crybackup -c gdax.btc-usd-ticker -o data/ticker/btc-usd-ticker-all.json
mongoexport -d crybackup -c gdax.eth-usd-ticker -o data/ticker/eth-usd-ticker-all.json

mongoimport -d crybackup -c gdax.btc-usd-ticker --file data/backups/ticks-btc-usd-minutes-mongo-new.json


cat data/backups/ticks-eth-usd-minutes-mongo-new.js | sed -e 's/_id/"sequence"/g;s/price/"price"/g;s/size/"size"/g;s/time/"time"/g;s/},/}/g;s/\.0,/,/g' > data/backups/ticks-eth-usd-minutes-mongo-new.json

mongoimport -d crybackup -c gdax.eth-usd-ticker --file data/backups/ticks-eth-usd-minutes-mongo-new.json
mongoexport -d crybackup -c gdax.eth-usd-ticker -o data/ticker/eth-usd-ticker-all.json

cat data/backups/ticks-ltc-usd-minutes-mongo.js | sed -e 's/_id/"sequence"/g;s/price/"price"/g;s/size/"size"/g;s/time/"time"/g;s/},/}/g;s/\.0,/,/g' > data/backups/ticks-ltc-usd-minutes-mongo-new.json

mongoimport -d crybackup -c gdax.ltc-usd-ticker --file data/backups/ticks-ltc-usd-minutes-mongo-new.json
mongoexport -d crybackup -c gdax.ltc-usd-ticker -o data/ticker/ltc-usd-ticker-all.json


mongoimport -d cryrecover -c gdax.btc-usd-ticker-all --file data/ticker/btc-usd-ticker-all.json # imported 3,009,298 documents
mongoimport -d cryrecover -c gdax.eth-usd-ticker-all --file data/ticker/eth-usd-ticker-all.json # imported 1,818,575 document
mongoimport -d cryrecover -c gdax.ltc-usd-ticker-all --file data/ticker/ltc-usd-ticker-all.json # imported 18,864 documents


mongoexport -d cryrecover -c gdax.btc-usd-0-minutes-v1 -o data/tmp/gdax.btc-usd-0-minutes-v1.json
cat data/tmp/gdax.btc-usd-0-minutes-v1.json | head -n 1 | sed -e 's/"time":"\([0-9]*-[0-9]*-[0-9]*T[0-9]*:[0-9]*:[0-9]*.[0-9]*Z\)"/"time":{"$date":"\1"}/g'

# export and transform the date
for COIN in btc eth ltc
do
    for TIME in 0-minutes 1-hours 2-days 3-weeks 4-months
    do
        echo "Processing $COIN in $TIME"
        mongoexport -d cryrecover -c gdax.$COIN-usd-$TIME-v1 -o data/tmp/gdax.$COIN-usd-$TIME-v2.json

        # format time field as a date ($date)
        sed -i '' 's/"time":"\([0-9]*-[0-9]*-[0-9]*T[0-9]*:[0-9]*:[0-9]*.[0-9]*Z\)"/"time":{"$date":"\1"}/g' data/tmp/gdax.$COIN-usd-$TIME-v2.json
    done
done

# Locally merge away the transformed data
for COIN in btc eth ltc
do
    for TIME in 0-minutes 1-hours 2-days 3-weeks 4-months
    do
        echo "Importing $COIN in $TIME"
        mongoimport -d cryrecover -c gdax.$COIN-usd-$TIME-v2 --file data/tmp/gdax.$COIN-usd-$TIME-v2.json
    done
done

# Server
for COIN in btc eth ltc
do
    for TIME in 0-minutes 1-hours 2-days 3-weeks 4-months
    do
        echo "Importing to SERVER $COIN in $TIME"
        mongoimport -h 165.227.113.186:53562 -u cryuser -p $PASSWORD -d crydb -c gdax.$COIN-usd-$TIME-v2 --file data/tmp/gdax.$COIN-usd-$TIME-v2.json
    done
done


```
# Notes

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

```js
// Transform data (date and get sold and bought from $side and $size)
var project = { $project : {
  _id: 0,
  price: 1,
  sold: { $cond: [{$eq: ['$side', 'sell']}, '$size', 0] },
  bought: { $cond: [{$eq: ['$side', 'buy']}, '$size', 0] },
  year: { $year: "$time" },
  month: { $month: "$time" },
  week: { $week: "$time" },
  day: { $dayOfMonth: "$time" },
  hour: { $hour: "$time" },
  minute: { $minute: "$time" },
}};

// Group by time
var group = {
    _id : { year: '$year', week: '$week', month: '$month', day: '$day', hour: '$hour', minute: '$minute' },
    open: { $first: '$price' },
    close: { $last: '$price' },
    high: { $max: '$price' },
    low: { $min: '$price' },
    sold: { $sum: '$sold' },
    bought: { $sum: '$bought' },
    num: { $sum: 1 }
}

var byMinute = [project, {$group: group}, {$limit: 60}];

// By Hour
var groupByHour = Object.assign({}, group, {_id : { year: '$year', week: '$week', month: '$month', day: '$day', hour: '$hour' }});
var byHour = [project, {$group: groupByHour}, {$limit: 24 }];

// By Day

var groupByDay = Object.assign({}, group, {_id : { year: '$year', week: '$week', month: '$month', day: '$day' }});
var byDay = [project, {$group: groupByDay}, {$limit: 7 }];

// By Week

var groupByWeek = Object.assign({}, group, {_id : { year: '$year', month: '$month', week: '$week' }});
var byWeek = [project, {$group: groupByWeek}, {$limit: 4 }];

// By Month

var groupByMonth = Object.assign({}, group, {_id : { year: '$year', month: '$month' }});
var byMonth = [project, {$group: groupByMonth}, {$limit: 12 }];

// volatility
//{ $subtract: ['$high', '$low'] } //{ $divide: [ , '$open' ] }
var volatilityMap = { $project: {
    _id: 0,
    diff: { $subtract: ['$high', '$low'] },
    volatility: { $divide: [ { $multiply: [{ $subtract: ['$high', '$low'] }, 100]} , '$open' ] }
}};

var volatilityReduce = { $group: {
    _id: null,
    high: { $max: '$volatility'},
    avg: { $avg: '$volatility' },
    low: { $min: '$volatility' },
    highDiff: { $max: '$diff'},
    avgDiff: { $avg: '$diff' },
    lowDiff: { $min: '$diff' }
}};



db.getCollection('btc-usd-ticker').aggregate(byMinute.concat(volatilityMap, volatilityReduce));
db.getCollection('btc-usd-ticker').aggregate(byHour.concat(volatilityMap, volatilityReduce));
db.getCollection('btc-usd-ticker').aggregate(byDay.concat(volatilityMap, volatilityReduce));
db.getCollection('btc-usd-ticker').aggregate(byWeek.concat(volatilityMap, volatilityReduce));
// db.getCollection('btc-usd-ticker').aggregate(byMonth.concat(volatilityMap, volatilityReduce));

// db.getCollection('btc-usd-ticker').aggregate(byMinute);
// db.getCollection('btc-usd-ticker').aggregate(byHour);
// db.getCollection('btc-usd-ticker').aggregate(byDay);
// db.getCollection('btc-usd-ticker').aggregate(byWeek);
// db.getCollection('btc-usd-ticker').aggregate(byMonth);

```


Orderbook (Market depth)
  - sell orders volume & limits
  - buy orders volume & limits

# Archive

```js
//*
var project = { $project : {
  _id: 0,
  price: 1,
  size: 1,
  side : 1,
  year: { $year: "$time" },
  month: { $month: "$time" },
  week: { $week: "$time" },
  day: { $dayOfMonth: "$time" },
  hour: { $hour: "$time" },
  minute: { $minute: "$time" },
}};

var groupByMinute = { $group: {
    _id : { year: '$year', month: '$month', week: '$week', day: '$day', $hour: '$hour', $minute: '$minute' },
    open: { $first: '$price' },
    close: { $last: '$price' },
    high: { $max: '$price' },
    low: { $min: '$price' },
    vol: { $sum: '$size' },
    num: { $sum: 1 }
}}

db.getCollection('btc-usd-ticker').aggregate([project, groupByMinute]);
//*/
```

## Getting OHLC

```js
// without ID
db.getCollection('btc-usd-days').aggregate({$sort:{_id: -1}}, {$project: {_id: 0, values: 0}}, {$limit: 30});

// with ID
db.getCollection('btc-usd-days').aggregate({$sort:{_id: -1}}, {$limit: 30}, {$project: {values: 0}});

// group by 7
const group = {$group: {
  _id: 1,
  open: { $first: '$open' },
  close: { $last: '$close' },
  high: { $max: '$high' },
  low: { $min: '$low' },
  sold: { $sum: '$sold' },
  bought: { $sum: '$bought' },
  volume: { $sum: '$volume' },
  count: { $sum: '$count' },
  times: { $push: '$time' }
}};

// {$project: {values: 0}}
var addGroupId = {$project: {
  groupId: { $sum: 1 }
}};

var noValues = {$project: {
  values: 0
}}

db.getCollection('btc-usd-days').aggregate({$sort:{_id: -1}}, {$limit: 28}, noValues);
```

# Consolidating data

## move data from one to another
mongoexport -d crybackup -c eth-usd-months -o data/eth-usd-months.json && mongoimport -d crybackup -c gdax.eth-usd-months --file data/eth-usd-months.json

## Consolidate joint data

```js
// doesn't work for minutes!!
var name = 'gdax.btc-usd-months';

var sortAsc = {$sort: {_id: 1}};

var groupByTime = {$group: {
    _id: '$time',
    id: {$first: '$_id'},
    high: {$max: '$high'},
    low: {$min: '$low'},
    open: {$first: '$open'},
    close: {$last: '$close'},
    volume: {$sum: '$volume'},
    sold: {$sum: '$sold'},
    bought: {$sum: '$bought'},
    count: {$sum: '$count'},
    valuesOpen: {$first: '$values.open'},
    valuesClose: {$last: '$values.close'},
//     values: {$addToSet: {open: {$first: '$values.open'}, close: {$last: '$values.close'} }}
//     'values.open': {$first: '$values.open'},
//     'values.close': {$last: '$values.close'}
}};

var joinValues = {$addFields: {
    time: '$_id',
    _id: '$id',
    values: {
        open: '$valuesOpen',
        close: '$valuesClose'
    }
}};

var removeTempVars = {$project: {
    valuesOpen: 0, valuesClose: 0, id: 0
}}

var newName = name + '-fixed';
var writeResults = {$out: newName};
db.getCollection(name).aggregate(sortAsc, groupByTime, joinValues, removeTempVars, writeResults);
db.getCollection(name).find({}).sort({_id: 1});
db.getCollection(newName).find({}).sort({_id: 1});
```

## Minutes consolidation

```js
// Only minutes! Requires mongod v3.5.6+ because of $mergeObjects https://github.com/mongodb/mongo/commit/896687b8ae6b7f848da88c7186a44bf3163c2254
var name = 'gdax.eth-usd-minutes';

var sortAsc = {$sort: {_id: 1}};

var groupByTime = {$group: {
    _id: '$time',
    id: {$first: '$_id'},
    high: {$max: '$high'},
    low: {$min: '$low'},
    open: {$first: '$open'},
    close: {$last: '$close'},
    volume: {$sum: '$volume'},
    sold: {$sum: '$sold'},
    bought: {$sum: '$bought'},
    count: {$sum: '$count'},
    values: {$mergeObjects: '$values'}
}};

var joinValues = {$addFields: {
    time: '$_id',
    _id: '$id'
}};

var removeTempVars = {$project: {
    id: 0
}}

var newName = name + '-fixed';
var writeResults = {$out: newName};
db.getCollection(name).aggregate([sortAsc, groupByTime, joinValues, removeTempVars, writeResults], {allowDiskUse: true});
db.getCollection(name).find({}).sort({_id: 1});
db.getCollection(newName).find({}).sort({_id: 1});
```


## merging data

```sh
mongodump -d crybackup3 -o data/crybot3/
mongodump -d crybackup2 -o data/crybot2/

// insert data 2 in data 3
mongorestore -d crybackup3 data/crybackup2


mongodump -d crybackup3 -o data/backups/
mongorestore -h 165.227.113.186:27017 -u cryuser -p $PASSWORD -d crydb data/backups/crybackup3/

// make a final backup
mongodump -h 165.227.113.186:27017 -u cryuser -p $PASSWORD -d crydb -o data/backups/
// load the backup locally
mongorestore -d crybackup data/backups/crydb
mongorestore -d crybackup /Users/admejiar/dumps/2017-11-09T16:06:55/crydb/
```

# Grouping

```
// last 7 days groups
var resolution = 'days';
var multiplier = 7;
var limit = 100;

var descOrder = {$sort: {_id: -1}};
var ascOrder = {$sort: {_id: 1}};
var limit = {$limit: limit};
var toArray = {$group: {
    _id: null,
    data: {$push: '$$ROOT'}
}}
var addOrdinal = {$unwind: {
    path: '$data',
    includeArrayIndex: 'sequence'
}}
var addGroupId = {$addFields: {
    groupId: {$subtract: ['$sequence', {$mod: ['$sequence', multiplier]}]}
}}
var aggregateData = {$group: {
    _id: '$groupId',
    id: {$first: '$data._id'},
    open: { $first: '$data.open' },
    close: { $last: '$data.close' },
    high: { $max: '$data.high' },
    low: { $min: '$data.low' },
    volume: { $sum: '$data.volume' },
    sold: {$sum: '$data.sold'},
    bought: {$sum: '$data.bought'},
    count: {$sum: '$data.count'},
//     times: {$push: '$data.time'},
    timestamp: {$first: '$data.values.open.time'},
    n: {$sum: 1},
//     valuesOpen: {$first: '$data.values.open'},
//     valuesClose: {$last: '$data.values.close'}
}}

db.getCollection('gdax.btc-usd-' + resolution).aggregate(descOrder, limit)
db.getCollection('gdax.btc-usd-' + resolution).aggregate(descOrder, limit, toArray, addOrdinal, addGroupId, aggregateData, ascOrder);
```



```js
var collection = 'gdax.btc-usd-minutes';
var newCollection = collection + '-test2';

var limit = {$limit: 1};

var convertValuesObjToArray = {$addFields: {
    ticks: {$map: {input: {$objectToArray: '$values'}, as: 'tick', in: '$$tick.v'}}
}}

var removeValues = {$project:{values: 0}}

var addTicks ={$addFields: {
    openTick: { $arrayElemAt: ['$ticks', 0] },
    closeTick: { $arrayElemAt: ['$ticks', -1] },
}}

var addTimestamp = {$addFields: { week: {$literal: '$_id'} }}

var out = {$out: newCollection}

// db.getCollection(collection).aggregate([limit, convertValuesObjToArray, removeValues, addTicks, addTimestamp])
db.getCollection(collection).aggregate([limit, convertValuesObjToArray, removeValues, addTicks, addTimestamp, out])

db.getCollection(newCollection).find({}).forEach(d => {
    const ts = ISODate(d.openTick.time);
    ts.setMilliseconds(0);
    ts.setSeconds(0);

    db.getCollection(newCollection).update(d, {$set: {timestamp: ts}});
});

var addWeek = {$addFields: {week: {$week: '$timestamp'}, year: {$year: '$timestamp'} }}
var remove = {$project: {time: 0}}
db.getCollection(newCollection).aggregate([addWeek, remove, out]);

db.getCollection(newCollection).find({});

```


Get tickets
```js
var timeFilter = {$match: {timestamp: {$gte: ISODate("2017-09-28T21:58:00.000Z"), $lt: ISODate("2017-09-28T22:00:00.000Z") }}}
var onlyTicks = {$project: {ticks: 1, _id: 0}};
var array = {$unwind: '$ticks'};
db.getCollection('gdax.ltc-usd-minutes-1').aggregate([timeFilter, onlyTicks, array])
```


Extract ticks
```js
var limit = {$limit: 1}
var unwind = {$unwind: '$ticks'}
var project = {$project: {ticks: 1}}
var ticksRoot = {$replaceRoot: {newRoot: '$ticks'}}
var addSequence = {$addFields: {sequence: '$_id'}}
var removeId = {$project: {_id: 0}}
var out = {$out: 'test'}
db.getCollection('gdax.btc-usd-0-minutes-v1').aggregate([project, unwind, ticksRoot, addSequence, removeId, out], {allowDiskUse: true})
```


```js
var sort = {$sort: {_id: 1}}

var limit = {$limit: 2};

var project = { $project : {
  price: 1,
  size: 1,
  side: 1,
  time: 1,
  sold: { $cond: [{$eq: ['$side', 'sell']}, '$size', 0] },
  bought: { $cond: [{$eq: ['$side', 'buy']}, '$size', 0] },
  year: { $year: "$time" },
  month: { $month: "$time" },
  week: { $week: "$time" },
  day: { $dayOfMonth: "$time" },
  hour: { $hour: "$time" },
  minute: { $minute: "$time" },
  yearWeek: { $concat: [
      {$substr: [{ $year: "$time" }, 0, 4]},
      '-',
      {$substr: [{ $week: "$time" }, 0, 2]}
  ]},
//   timestamp: {$add: [new Date({ $year: "$time" }, { $month: "$time" }, { $dayOfMonth: "$time" }) ]}
   timestamp: {$add: [new Date(2017, 7, 11, 16, 15, 14, 123)]}
}};

var ohlc = {
    open: { $first: '$price' },
    close: { $last: '$price' },
    high: { $max: '$price' },
    low: { $min: '$price' },
    sold: { $sum: '$sold' },
    bought: { $sum: '$bought' },
    volume: { $sum: '$size' },
    count: { $sum: 1 },
    timestamp: {},
    timestampWeek: { $first: '$yearWeek'}
}

var groupByMinutes = {$group: {
    _id : {
        year: '$year',
        week: '$week',
        month: '$month',
        day: '$day',
        hour: '$hour',
        minute: '$minute'
    },

}}

db.getCollection('gdax.btc-usd-ticker').aggregate([sort, limit, project], {allowDiskUse: true})
```


## Map Reduce

```js
// db.getCollection('gdax.btc-usd-2-days-v2').find({})
// var addGroupId = {$addFields: {ts:   {$mod: [{$dateToString: { format: "%Y%m%d", date: "$timestamp" }}, 3]}      }}
// db.getCollection('gdax.btc-usd-2-days-v2').aggregate([addGroupId])


// days

// https://docs.mongodb.com/manual/reference/method/db.collection.mapReduce/
var collection = db.getCollection('gdax.btc-usd-2-days-v2');
var limit = 10;
var multiplier = 4;

 var converter = 1; //1000 / 60 / 60 / 24;

  // No break statements so it run all the following after a match is found
//   switch (resolution) {
//     case TIME.MONTHS:
//       converter *= 4;

//     case TIME.WEEKS:
//       converter *= 7;

//     case TIME.DAYS:
      converter *= 24;

//     case TIME.HOURS:
      converter *= 60;

//     case TIME.MINUTES:
      converter *= 1000 * 60;
//   }

  var mapDaysSinceEpoch = function () {
    const d = this.timestamp;
    const id = d.getTime() / converter | 0; // days since epoh time (absolute)
    const groupId = id - (id % +multiplier);

    emit(groupId, this);
  }

  var reduceOhlc = function (key, values) {
    // since: sort: { timestamp: -1 },
    var last = 0;
    var first = values.length - 1;

    return {
      timestamp: values[first].timestamp,
      aggregated: values.length,
      aggregatedDates: values.map(t => t.timestamp),
      open: values[first].open,
      close: values[last].close,
      high: Math.max.apply(null, values.map(t => t.high)),
      low: Math.min.apply(null, values.map(t => t.low)),
      volume: values.reduce((sum, d) => sum + d.volume, 0),
      bought: values.reduce((sum, d) => sum + d.bought, 0),
      sold: values.reduce((sum, d) => sum + d.sold, 0),
      count: values.reduce((sum, d) => sum + d.count, 0),
      openingTick: values[first].openingTick.time,
      closingTick: values[last].closingTick.time
    };
  }

  var output = collection.mapReduce(mapDaysSinceEpoch, reduceOhlc, {
      out: { inline: 1 },
      sort: { timestamp: -1 },
      scope: { converter, multiplier }, // pass read-only variables
      limit: parseInt(limit) * parseInt(multiplier),
      // include _id in results
//       finalize: function (key, reducedValue) { reducedValue._id = key; return reducedValue; }
    });

var results = output.results.map(r => r.value);
results
// output
```

```sh
# etc/cron.daily$ cat crydb-backup
#!/bin/sh -e
TF='daily' DIR='/home/admejiar/dumps' TS=$(date "+%Y-%m-%dT%H:%M:%S"); cd $DIR && mongodump -h localhost:53562 -d crydb -u cryuser -p $PASSWORD -o $TS && tar -zcvf crydb-$TF.tar.gz $TS && rm -rfv $TS

0 3 * * * date "+%n-------%nDATE: %Y-%b-%d%nTIME: %H:%M:%S%n" >> /home/admejiar/logs/rsync.log; rsync -avzhe "ssh -p $PASSWORD /home/admejiar/dumps/ adrian@pi.softwareeaters.com:~/dumps/ >> /home/admejiar/logs/rsync.log

# digital ocean
#scp -p $PASSWORD 165.227.113.186:~/dumps/crydb-monthly.tar.gz data
scp -p $PASSWORD 165.227.113.186:~/dumps/crydb-daily.tar.gz data

tar -xvf crydb-monthly.tar.gz
cd data && tar -xvf crydb-daily.tar.gz && cd ..

mongorestore -d crybackup data/**/crydb
#mongorestore -d crylocal data/2017-11-18T21:56:34/crydb


db.getCollection('gdax.btc-usd-2-days-v2').find({timestamp: {$gte: new Date("2017-11-08T00:00:00.000Z")}})
```
