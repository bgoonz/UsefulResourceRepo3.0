// mongo crybackup < test/scripts/dump-data.js > output.json && wc -l output.json && head output.json && sed 's/}/},/' output.json > output1.json && open output1.json
// mongo crybackup < test/scripts/dump-data.js > output.json && wc -l output.json && head output.json && sed 's/}/},/' output.json > output1.json && open output1.json
// mongo cryuser:pass-mongodb-1gb-nyc3-01@165.227.113.186:53562/crydb < test/scripts/dump-data.js > output.json && wc -l output.json && head output.json && sed 's/}/},/' output.json > output1.json && open output1.json

DBQuery.shellBatchSize = 1000

var collection = db.getCollection('gdax.btc-usd-2-days-v2');
var filter = { $match: { timestamp: { $gte: ISODate("2017-11-06T00:00:00.000Z") } } }
var sort = { $sort: { timestamp: 1 } };
var add = { $addFields: { time: { $dateToString: { format: '%Y-%m-%dT%H:%M:%S.%LZ', date: '$timestamp' } }, price: '$open', side: 'buy', size: 0, diff: { $subtract: ['$high', '$low'] }, ratio: { $multiply: [100, { $divide: [{ $subtract: ['$close', '$open'] }, '$open'] }] } } }
// var project = {$project: {time: 1, price: 1, side: 1, size: 1, high: 1, low: 1, ratio: 1, diff: 1, _id: 0}};
var project = { $project: { time: 1, price: 1, side: 1, size: 1, _id: 0 } };
var pipeline = [filter, sort, add, project];

collection.aggregate(pipeline);