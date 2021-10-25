const sinon = require('sinon');
const { expect, assert } = require('chai');
const { MongoClient } = require('mongodb');

const mongo = require('./db');

const find = { toArray: () => {}};
const collection = { insertMany: () => { }, updateOne: () => { }, find: () => { }, bulkWrite: () => { } };
const db = { collection: () => { }, close: () => { } };

describe('db', function () {
  afterEach(() => {
    if (MongoClient.connect.restore) MongoClient.connect.restore();
    if (collection.bulkWrite.restore) collection.bulkWrite.restore();
    if (collection.updateOne.restore) collection.updateOne.restore();
    if (db.collection.restore) db.collection.restore();
  });

  beforeEach(() => {
    sinon.stub(db, 'collection').returns(collection);
    sinon.stub(MongoClient, 'connect').resolves(db);
  });

  describe('# updateAggregatedData', () => {
    beforeEach(done => {
      let times = 0;
      sinon.stub(collection, 'bulkWrite').callsFake(() => {
        times++;
        if(times > 4) done();
        return Promise.resolve({ nUpserted: 1, modifiedCount: 4 });
      });

      mongo.updateAggregatedData('BTC-USD', data);
    });

    it('should call bulk updates for minutes time frame', () => {
      expect(collection.bulkWrite.getCall(0).args[0]).to.eql(bulkUpdateData);
    });

    xit('should call bulk updates for hours time frame', () => {
      expect(collection.bulkWrite.getCall(1).args[0]).to.eql(bulkUpdateData);
    });

    xit('should call bulk updates for months time frame', () => {
      expect(collection.bulkWrite.getCall(4).args[0]).to.eql(bulkUpdateData);
    });
  });

  describe('# saveTrades', () =>{
    beforeEach(done => {
      sinon.stub(collection, 'updateOne').callsFake(() => {
        done();
        return Promise.resolve({ nUpserted: 0, modifiedCount: 1 });
      });
      mongo.saveTrade(trades);
    });

    it('should save trade with the right parameters', () =>{
      expect(collection.updateOne.getCall(0).args).to.eql([
        {
          "provider": "gdax.BTC-USD",
          "side": "sell",
          "status": "open",
          "target": 3000
        },
        {
          "$set": {
            "position": {
              "price": 3001,
              "product_id": "BTC-USD",
              "side": "sell",
              "size": 0.26550696,
            },
            "result": trades.result,
            "status": "done"
          }
        }
      ]);
    });
  });

  describe('# loadOrders', () =>{
    it('should transform order into provider => sides', done =>{
      sinon.stub(find, 'toArray').resolves(orderFromDb);
      sinon.stub(collection, 'find').returns(find);

      mongo.loadOrders().then(orders => {
        expect(orders).to.eql(orderKeyValue);
        done();
      });
    });
  });

  describe('# saveOrders', () => {
    it('should save orders', done => {
      const modified = { nUpserted: 1, modifiedCount: 5};

      sinon.stub(collection, 'bulkWrite').resolves(modified);

      mongo.saveOrders(orderKeyValue).then(results => {
        expect(results).to.eql(modified);
        expect(collection.bulkWrite.getCall(0).args[0]).to.eql(bulkOrder);
        done();
      });
    });
  });

  describe('# updateSingleOrder', () =>{
    it('should save trigger order data', done => {
      const modified = { nUpserted: 0, modifiedCount: 1 };
      sinon.stub(collection, 'updateOne').resolves(modified);

      const orderWithTrigger = Object.assign({}, orderKeyValue['gdax.BTC-USD'][0], {
        provider: 'gdax.BTC-USD',
        trigger: { buy: { price: 2550, trail: 2450 } }
      })

      mongo.updateSingleOrder(orderWithTrigger).then(results => {
        expect(results).to.eql(modified);

        expect(collection.updateOne.getCall(0).args).to.eql([{
          provider: orderWithTrigger.provider,
          side: orderWithTrigger.side,
          target: orderWithTrigger.target,
          status: 'open'
        }, {
          $set: {
            trigger: orderWithTrigger.trigger,
            trailing: orderWithTrigger.trailing,
            trade: orderWithTrigger.trade,
            // status: 'open'
          }
        }]);
        done();
      });
    });
  });
});

const data = [
  {
    "_id": "5988ea7f5968f700045049f8",
    "time": "2017-12-31T23:59:59.998Z",
    "price": 3370.68,
    "size": 0.10608787,
    "side": "sell"
  },
  {
    "_id": "5988ea7f5968f700045049f9",
    "time": "2017-12-31T23:59:59.999Z",
    "price": 3370.69,
    "size": 0.10608787,
    "side": "sell"
  },
  {
    "_id": "5988ea7f5968f700045049f1",
    "time": "2018-01-01T00:00:00.000Z",
    "price": 3370.70,
    "size": 0.10608787,
    "side": "buy"
  },
];

const bulkUpdateData = [{
  updateOne: {
    filter: { time: "2017/Dec(52)31+23:59" },
    "upsert": true,
    update: {
      $inc: { bought: 0, count: 1, sold: 0.10608787, volume: 0.10608787 },
      $max: { high: 3370.68 },
      $min: { low: 3370.68 },
      $set: {
        close: 3370.68,
        'values.59998101': {
          _id: "5988ea7f5968f700045049f8",
          price: 3370.68,
          side: "sell",
          size: 0.10608787,
          time: "2017-12-31T23:59:59.998Z"
        }
      },
      $setOnInsert: { open: 3370.68 }
    }
  }
},
{
  updateOne: {
    filter: { time: "2017/Dec(52)31+23:59" },
    "upsert": true,
    update: {
      $inc: { bought: 0, count: 1, sold: 0.10608787, volume: 0.10608787 },
      $max: { high: 3370.69 },
      $min: { low: 3370.69 },
      $set: {
        close: 3370.69,
        'values.59999102': {
          _id: "5988ea7f5968f700045049f9",
          price: 3370.69,
          side: "sell",
          size: 0.10608787,
          time: "2017-12-31T23:59:59.999Z"
        }
      },
      $setOnInsert: { open: 3370.69 }
    }
  }
}, {
  updateOne: {
    filter: { time: "2018/Jan(1)01+00:00" },
    "upsert": true,
    update: {
      $inc: { bought: 0.10608787, count: 1, sold: 0, volume: 0.10608787 },
      $max: { high: 3370.7 },
      $min: { low: 3370.7 },
      $set: {
        close: 3370.7,
        'values.103': {
          _id: "5988ea7f5968f700045049f1",
          price: 3370.7,
          side: "buy",
          size: 0.10608787,
          time: "2018-01-01T00:00:00.000Z"
        }
      },
      $setOnInsert: { open: 3370.7 }
    }
  }
}];

function s(object) {
  return JSON.stringify(object, null, 2);
}

const trades = {
  "event": "trade",
  "order": {
    "side": "sell",
    "target": 3000
  },
  "provider": "gdax",
  "result": {
    "created_at": "2016-12-08T20:02:28.53864Z",
    "executed_value": "0.0000000000000000",
    "fill_fees": "0.0000000000000000",
    "filled_size": "0.00000000",
    "id": "d0c5340b-6d6c-49d9-b567-48c4bfca13d2",
    "post_only": false,
    "price": "0.10000000",
    "product_id": "BTC-USD",
    "settled": false,
    "side": "buy",
    "size": "0.01000000",
    "status": "pending",
    "stp": "dc",
    "time_in_force": "GTC",
    "type": "limit"
  },
  "trade": {
    "price": 3001,
    "product_id": "BTC-USD",
    "side": "sell",
    "size": 0.26550696
  }
};

const orderFromDb = [
  {
    "_id": "59a5d3671b622df5537bad3b",
    "provider": "gdax.BTC-USD",
    "side": "buy",
    "status": "open",
    "target": 1500,
    "trailing": {
      "amount": 50
    },
    "trade": {
      "percentage": 0.5,
      "amount": 750
    }
  },
  {
    "_id": "59a5d3671b622df5537bad3c",
    "provider": "gdax.BTC-USD",
    "side": "sell",
    "status": "open",
    "target": 5500,
    "trailing": {
      "amount": 50
    },
    "trade": {
      "percentage": 0.8
    }
  },
  {
    "_id": "59a5d3671b622df5537bad3f",
    "provider": "gdax.BTC-USD",
    "side": "buy",
    "status": "open",
    "target": 1000
  }
];

const orderKeyValue = { "gdax.BTC-USD": [
  { "side": "buy", "target": 1500, "_id": "59a5d3671b622df5537bad3b", "trailing": { "amount": 50 }, "trade": { "percentage": 0.5, "amount": 750 } },
  { "side": "sell", "target": 5500, "_id": "59a5d3671b622df5537bad3c", "trailing": { "amount": 50 }, "trade": { "percentage": 0.8 } },
  { "side": "buy", "target": 1000, "_id": "59a5d3671b622df5537bad3f" }
]};

const bulkOrder = [{
  "updateOne": {
    "filter": {
      "provider": "gdax.BTC-USD",
      "status": "open",
      "side": "buy",
      "target": 1500
    },
    "update": {
      "$set": {
        "provider": "gdax.BTC-USD",
        "status": "open",
        "trailing": {
          "amount": 50
        },
        "trade": {
          "percentage": 0.5,
          "amount": 750
        },
        "side": "buy",
        "target": 1500
      }
    },
    "upsert": true
  }
}, {
  "updateOne": {
    "filter": {
      "provider": "gdax.BTC-USD",
      "status": "open",
      "side": "sell",
      "target": 5500
    },
    "update": {
      "$set": {
        "provider": "gdax.BTC-USD",
        "status": "open",
        "trailing": {
          "amount": 50
        },
        "trade": {
          "percentage": 0.8
        },
        "side": "sell",
        "target": 5500
      }
    },
    "upsert": true
  }
}, {
  "updateOne": {
    "filter": {
      "provider": "gdax.BTC-USD",
      "status": "open",
      "side": "buy",
      "target": 1000
    },
    "update": {
      "$set": {
        "provider": "gdax.BTC-USD",
        "status": "open",
        "trailing": {},
        "trade": {},
        "side": "buy",
        "target": 1000
      }
    },
    "upsert": true
  }
}];