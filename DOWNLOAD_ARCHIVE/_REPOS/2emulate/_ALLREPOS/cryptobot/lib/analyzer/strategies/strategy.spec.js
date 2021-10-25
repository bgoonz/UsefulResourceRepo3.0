const { expect } = require('chai');
const sinon = require('sinon');

const mongo = require('../../ticker/db');
const amqp = require('../../messaging/amqp');
const { Strategy } = require('./strategy');

const strat = { order: { trade: { base: 1 } }, tickerId: 'gdax.BTC-USD', sellingFactor: 0.25 };
const position = {size: 1};
const doneOrder = { status: 'done', position };
const openOrder = { status: 'open' };
const TIMEOUT = 5;

describe('Strategy', function () {
  this.timeout(100);
  let orderSent;

  beforeEach(() => {
    if (mongo.getLastOrdersByStrategy.restore) mongo.getLastOrdersByStrategy.restore();
    if (amqp.client.restore) amqp.client.restore();
    orderSent = sinon.stub(amqp, 'client').callsFake((d, fn) => {fn()});
  });

  afterEach(() => {
    orderSent.reset();
  });

  describe('Long', () => {

    describe('entry', () => {
      it('should make an order if no other order has been made', done => {
        const entryOrder = null;
        const exitOrder = null;
        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.entry(strat);

        setTimeout(() => {
          expect(orderSent.called).to.equal(true);
          expect(orderSent.lastCall.args[0]['gdax.BTC-USD'][0].strategyDetails.position).to.eql('entry');
          expect(orderSent.lastCall.args[0]['gdax.BTC-USD'][0].strategyDetails.type).to.eql('long');
          done();
        }, TIMEOUT);
      });

      it('should make an order if all other orders are close', done => {
        const entryOrder = doneOrder;
        const exitOrder = doneOrder;

        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.entry(strat);
        setTimeout(() => {
          expect(orderSent.called).to.equal(true);
          done()
        }, TIMEOUT);
      });

      // entryOrder=done, exitOrder=open
      it('should not make an entry if there is already an unfulfill exit', done => {
        const entryOrder = doneOrder;
        const exitOrder = openOrder;

        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.entry(strat);
        setTimeout(() => {
          expect(orderSent.called).to.equal(false);
          done()
        }, TIMEOUT);
      });

      it('should not make an entry if there is already an unfulfill entry', done => {
        const entryOrder = openOrder;
        const exitOrder = doneOrder;

        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.entry(strat);
        setTimeout(() => {
          expect(orderSent.called).to.equal(false);
          done()
        }, TIMEOUT);
      });

      it('should not make an entry if there is already an unfulfill exit and entry', done => {
        const entryOrder = openOrder;
        const exitOrder = openOrder;

        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.entry(strat);
        setTimeout(() => {
          expect(orderSent.called).to.equal(false);
          done()
        }, TIMEOUT);
      });
    });

    describe('exit', () => {
      it('should not exit if not entry order is set', done => {
        const entryOrder = null;
        const exitOrder = null;
        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.exit(strat);

        setTimeout(() => {
          expect(orderSent.called).to.equal(false);
          // sinon.assert.calledOnce(amqp.client);
          done();
        }, TIMEOUT);
      });

      it('should not execute exit if entry is still open', done => {
        const entryOrder = openOrder;
        const exitOrder = null;
        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.exit(strat);

        setTimeout(() => {
          expect(orderSent.called).to.equal(false);
          // sinon.assert.calledOnce(amqp.client);
          done();
        }, TIMEOUT);
      });

      it('should not execute exit if entry is still open', done => {
        const entryOrder = openOrder;
        const exitOrder = openOrder;
        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.exit(strat);

        setTimeout(() => {
          expect(orderSent.called).to.equal(false);
          // sinon.assert.calledOnce(amqp.client);
          done();
        }, TIMEOUT);
      });

      it('should do execute exit if entry is close', done => {
        const entryOrder = doneOrder;
        const exitOrder = null;
        sinon.stub(mongo, 'getLastOrdersByStrategy').resolves([entryOrder, exitOrder]);
        Strategy.long.exit(strat);

        setTimeout(() => {
          sinon.assert.calledOnce(amqp.client);
          expect(orderSent.lastCall.args[0]['gdax.BTC-USD'][0].trade).to.eql({base: 0.25});
          expect(orderSent.lastCall.args[0]['gdax.BTC-USD'][0].strategyDetails.position).to.eql('exit');
          expect(orderSent.lastCall.args[0]['gdax.BTC-USD'][0].strategyDetails.type).to.eql('long');
          done();
        }, TIMEOUT);
      });
    });
  });
});