const { expect } = require('chai');
const sinon = require('sinon');

const mongo = require('../../lib/ticker/db');

// ENV=test mocha --watch 'test/**/*spec.js'
// DEBUG='crybot:*' DEBUG_DEPTH=6 NODE_TLS_REJECT_UNAUTHORIZED=0 ENV=test mocha --recursive --watch test/e2e/{**/,}*spec.js
// DEBUG='crybot:*' DEBUG_DEPTH=6 NODE_TLS_REJECT_UNAUTHORIZED=0 ENV=test mocha --recursive test/e2e/{**/,}*spec.js
// ENV=test mocha --recursive test/e2e/{**/,}*spec.js # ~2s

describe.only('db (real connection to mongo)', function () {
  this.timeout(1000);

  //before(done => {
  beforeEach(done => {
    // Delete all data from DB (crytest)
    mongo.deleteDb()
      .then(() => done())
      .catch(done);
  });

  describe('#saveTickAggregation', () => {

    it('should save data minutes with ticks', done => {
      mongo.saveTickAggregation(PRODUCT_ID, TICKS).then(() => {
        return mongo.connect();
      }).then(db => {
        const collection = db.collection('gdax.btc-usd-0-minutes-v2');
        return collection.find({}).toArray();
      }).then(docs => {
        // console.log('docs', (docs));
        expect(docs.length).to.equal(5);

        const tick = docs[0].ticks[0];

        expect(tick.time).to.eql(new Date('2017-12-31T16:00:15.098000Z'));
        done();
      })
      .catch(done);
    });

    it('should save data months withOUT ticks', done => {
      mongo.saveTickAggregation(PRODUCT_ID, TICKS).then(() => {
        return mongo.connect();
      }).then(db => {
        const collection = db.collection('gdax.btc-usd-4-months-v2');
        return collection.find({}).toArray();
      }).then(docs => {
        // expect(docs.length).to.equal(2);
        expect(docs[0].ticks).to.equal(undefined);
        done();
      })
        .catch(done);
    });

  });

  describe('#updateAggregatedData', () => {
    it('should save data "properly"', done => {
      mongo.updateAggregatedData(PRODUCT_ID, TICKS).then(done);
    });
  });

  describe('#getAbsoluteOhlc', () => {

    it('should save data and get ohlc ', async () => {
      const saveResults = await mongo.saveTickAggregation(PRODUCT_ID, TICKS);
      // console.log('saveResults', saveResults);

      const ohlcResults = await mongo.getAbsoluteOhlc();
      console.log('ohlcResults', ohlcResults);

      expect(ohlcResults).to.eql([]);
    });
  });

});

const PRODUCT_ID = 'gdax.BTC-USD';
const TICKS = [
  {
    type: 'match',
    trade_id: 17783460,
    side: 'sell',
    size: '0.07531000',
    price: '2583.88000000',
    product_id: 'BTC-USD',
    sequence: 3510553464,
    time: '2017-12-31T16:00:15.098000Z'
  }, {
    type: 'match',
    trade_id: 17783460,
    side: 'buy',
    size: '0.07531000',
    price: '2583.88000000',
    product_id: 'BTC-USD',
    sequence: 3510553466,
    time: '2017-12-31T16:00:16.099000Z'
  }, {
    type: 'match',
    trade_id: 17783461,
    maker_order_id: 'ced7415c-072c-4544-a0c7-f0d9d1ddac41',
    taker_order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
    side: 'buy',
    size: '0.08531000',
    price: '2583.88000000',
    product_id: 'BTC-USD',
    sequence: 3510553465,
    time: '2017-12-31T17:00:15.099000Z'
  }, {
    type: 'match',
    trade_id: 17783462,
    side: 'sell',
    size: '0.07531000',
    price: '6695.88000000',
    product_id: 'BTC-USD',
    sequence: 3510553464,
    time: '2018-01-01T16:00:15.098000Z'
  }, {
    type: 'match',
    trade_id: 17783463,
    side: 'buy',
    size: '0.07531000',
    price: '7302.88000000',
    product_id: 'BTC-USD',
    sequence: 3510553466,
    time: '2018-01-01T17:00:15.098000Z'
  }, {
    type: 'match',
    trade_id: 17783464,
    maker_order_id: 'ced7415c-072c-4544-a0c7-f0d9d1ddac41',
    taker_order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
    side: 'buy',
    size: '0.08531000',
    price: '8392.88000000',
    product_id: 'BTC-USD',
    sequence: 3510553465,
    time: '2018-01-01T18:00:15.098000Z'
  }
];