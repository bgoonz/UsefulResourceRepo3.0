/**
 * var collection = db.getCollection('gdax.btc-usd-2-days-v2');
var filter = {$match: { timestamp: {$gte: ISODate("2017-11-06T00:00:00.000Z") }} }
var sort = {$sort: {timestamp: 1}};
var add = {$addFields: {time: {$dateToString: {format: '%Y-%m-%dT%H:%M:%S.%LZ', date: '$timestamp'}}, price: '$open', side: 'buy', size: 0}}
var project = {$project: {time: 1, price: 1, side: 1, size: 1, _id: 0}};
var pipeline = [filter, sort, add, project];

collection.aggregate(pipeline);
 */
module.exports = [
  {
    "time": "2017-11-06T23:00:00.000Z",
    "price": 6969.76,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-07T00:00:00.000Z",
    "price": 7140,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-07T06:00:00.000Z",
    "price": 7205.94,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-07T12:00:00.000Z",
    "price": 7100.02,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-07T18:00:00.000Z",
    "price": 7126.63,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-08T00:00:00.000Z",
    "price": 7396.49,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-08T06:00:00.000Z",
    "price": 7435.51,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-08T12:00:00.000Z",
    "price": 7727,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-08T18:00:00.000Z",
    "price": 7467.96,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-09T00:00:00.000Z",
    "price": 7395,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-09T06:00:00.000Z",
    "price": 7134.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-09T12:00:00.000Z",
    "price": 7189,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-09T18:00:00.000Z",
    "price": 7156,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-10T00:00:00.000Z",
    "price": 7227.92,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-10T06:00:00.000Z",
    "price": 6895,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-10T12:00:00.000Z",
    "price": 6780.36,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-10T18:00:00.000Z",
    "price": 6577.62,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-11T00:00:00.000Z",
    "price": 6724.18,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-11T06:00:00.000Z",
    "price": 6513.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-11T12:00:00.000Z",
    "price": 6382.18,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-11T18:00:00.000Z",
    "price": 6346.7,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-12T00:00:00.000Z",
    "price": 5850.98,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-12T06:00:00.000Z",
    "price": 6370.31,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-12T12:00:00.000Z",
    "price": 6085.22,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-12T18:00:00.000Z",
    "price": 5886.35,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-13T00:00:00.000Z",
    "price": 6255,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-13T06:00:00.000Z",
    "price": 6549.84,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-13T12:00:00.000Z",
    "price": 6498.56,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-13T18:00:00.000Z",
    "price": 6535.87,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-14T00:00:00.000Z",
    "price": 6560,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-14T06:00:00.000Z",
    "price": 6531.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-14T12:00:00.000Z",
    "price": 6561.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-14T18:00:00.000Z",
    "price": 6605,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-15T00:00:00.000Z",
    "price": 6854.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-15T06:00:00.000Z",
    "price": 7122.47,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-15T12:00:00.000Z",
    "price": 7189.95,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-15T18:00:00.000Z",
    "price": 7294,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-16T00:00:00.000Z",
    "price": 7220.08,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-16T06:00:00.000Z",
    "price": 7410.38,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-16T12:00:00.000Z",
    "price": 7695,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-16T18:00:00.000Z",
    "price": 7838.53,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-17T00:00:00.000Z",
    "price": 7919.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-17T06:00:00.000Z",
    "price": 7834,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-17T12:00:00.000Z",
    "price": 7834.56,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-17T18:00:00.000Z",
    "price": 7714.71,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-18T00:00:00.000Z",
    "price": 7735.02,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-18T06:00:00.000Z",
    "price": 7793.31,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-18T12:00:00.000Z",
    "price": 7737.66,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-18T18:00:00.000Z",
    "price": 7777.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-19T00:00:00.000Z",
    "price": 7783,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-19T06:00:00.000Z",
    "price": 7748.95,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-19T12:00:00.000Z",
    "price": 7961.89,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-19T18:00:00.000Z",
    "price": 8031.82,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-20T00:00:00.000Z",
    "price": 8021.9,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-20T06:00:00.000Z",
    "price": 8058.02,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-20T12:00:00.000Z",
    "price": 8268.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-20T18:00:00.000Z",
    "price": 8256.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-21T00:00:00.000Z",
    "price": 8075,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-21T06:00:00.000Z",
    "price": 8207.43,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-21T12:00:00.000Z",
    "price": 8299.9,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-21T18:00:00.000Z",
    "price": 8109,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-22T00:00:00.000Z",
    "price": 8170.04,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-22T06:00:00.000Z",
    "price": 8279.35,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-22T12:00:00.000Z",
    "price": 8158.81,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-22T18:00:00.000Z",
    "price": 8250,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-23T00:00:00.000Z",
    "price": 8251.32,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-23T06:00:00.000Z",
    "price": 8155.65,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-23T12:00:00.000Z",
    "price": 8171.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-23T18:00:00.000Z",
    "price": 8031.16,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-24T00:00:00.000Z",
    "price": 8133.48,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-24T06:00:00.000Z",
    "price": 8260,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-24T12:00:00.000Z",
    "price": 8237.19,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-24T18:00:00.000Z",
    "price": 8215.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-25T00:00:00.000Z",
    "price": 8253.55,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-25T06:00:00.000Z",
    "price": 8475,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-25T12:00:00.000Z",
    "price": 8745,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-25T18:00:00.000Z",
    "price": 8795.5,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-26T00:00:00.000Z",
    "price": 9040,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-26T06:00:00.000Z",
    "price": 9064.93,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-26T12:00:00.000Z",
    "price": 9394.55,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-26T18:00:00.000Z",
    "price": 9401.11,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-27T00:00:00.000Z",
    "price": 9710,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-27T06:00:00.000Z",
    "price": 9770,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-27T12:00:00.000Z",
    "price": 9600,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-27T18:00:00.000Z",
    "price": 9768.71,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-28T00:00:00.000Z",
    "price": 9892.7,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-28T06:00:00.000Z",
    "price": 9949,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-28T12:00:00.000Z",
    "price": 9966.83,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-28T18:00:00.000Z",
    "price": 9949,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-29T00:00:00.000Z",
    "price": 10110.5,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-29T06:00:00.000Z",
    "price": 10911.81,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-29T12:00:00.000Z",
    "price": 10694.46,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-29T18:00:00.000Z",
    "price": 9935.98,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-30T00:00:00.000Z",
    "price": 10486,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-30T06:00:00.000Z",
    "price": 9953.74,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-30T12:00:00.000Z",
    "price": 9730.46,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-11-30T18:00:00.000Z",
    "price": 9903,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-01T00:00:00.000Z",
    "price": 9575,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-01T06:00:00.000Z",
    "price": 9936,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-01T12:00:00.000Z",
    "price": 10426.55,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-01T18:00:00.000Z",
    "price": 10869.84,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-02T00:00:00.000Z",
    "price": 10910,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-02T06:00:00.000Z",
    "price": 10963.19,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-02T12:00:00.000Z",
    "price": 10918.46,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-02T18:00:00.000Z",
    "price": 10930.24,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-03T00:00:00.000Z",
    "price": 11063.88,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-03T06:00:00.000Z",
    "price": 11546.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-03T12:00:00.000Z",
    "price": 11735,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-03T18:00:00.000Z",
    "price": 11290,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-04T00:00:00.000Z",
    "price": 11445.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-04T06:00:00.000Z",
    "price": 11245.49,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-04T12:00:00.000Z",
    "price": 11318.73,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-04T18:00:00.000Z",
    "price": 11643.98,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-05T00:00:00.000Z",
    "price": 11603.42,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-05T06:00:00.000Z",
    "price": 11715,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-05T12:00:00.000Z",
    "price": 11780,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-05T18:00:00.000Z",
    "price": 11718.35,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-06T00:00:00.000Z",
    "price": 12299.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-06T06:00:00.000Z",
    "price": 12778.79,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-06T12:00:00.000Z",
    "price": 12825.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-06T18:00:00.000Z",
    "price": 14090,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-07T00:00:00.000Z",
    "price": 14397,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-07T06:00:00.000Z",
    "price": 14947.98,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-07T12:00:00.000Z",
    "price": 16774.97,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-07T18:00:00.000Z",
    "price": 17390.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-08T00:00:00.000Z",
    "price": 16222,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-08T06:00:00.000Z",
    "price": 15280.04,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-08T12:00:00.000Z",
    "price": 15375.1,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-08T18:00:00.000Z",
    "price": 16367.03,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-09T00:00:00.000Z",
    "price": 15661.43,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-09T06:00:00.000Z",
    "price": 15859.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-09T12:00:00.000Z",
    "price": 14199,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-09T18:00:00.000Z",
    "price": 15309.98,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-10T00:00:00.000Z",
    "price": 13900,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-10T06:00:00.000Z",
    "price": 14248.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-10T12:00:00.000Z",
    "price": 15724.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-10T18:00:00.000Z",
    "price": 15290.01,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-11T00:00:00.000Z",
    "price": 16574,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-11T06:00:00.000Z",
    "price": 16610.7,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-11T12:00:00.000Z",
    "price": 16536,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-11T18:00:00.000Z",
    "price": 16885.76,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-12T00:00:00.000Z",
    "price": 16765.99,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-12T07:00:00.000Z",
    "price": 16895.97,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-12T12:00:00.000Z",
    "price": 17704.95,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-12T18:00:00.000Z",
    "price": 17730.12,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-13T00:00:00.000Z",
    "price": 17240,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-13T06:00:00.000Z",
    "price": 17249.98,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-13T12:00:00.000Z",
    "price": 16750,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-13T18:00:00.000Z",
    "price": 16689.61,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-14T00:00:00.000Z",
    "price": 16700,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-14T06:00:00.000Z",
    "price": 16925,
    "side": "buy",
    "size": 0
  },
  {
    "time": "2017-12-14T12:00:00.000Z",
    "price": 17075,
    "side": "buy",
    "size": 0
  }
];