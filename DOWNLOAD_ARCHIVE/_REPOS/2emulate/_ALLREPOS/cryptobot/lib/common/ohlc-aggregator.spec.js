// mocha --bail lib/common/ohlc-aggregator.spec.js
// mocha --watch lib/common/ohlc-aggregator.spec.js
const { expect } = require('chai');
const sinon = require('sinon');
const OhlcAggregator = require('./ohlc-aggregator');

describe('OhlcAggregator', function () {
  this.timeout(100);
  let ohlc;

  describe('# update', () => {
    beforeEach(() => {
      ohlc = new OhlcAggregator();
    });

    it('should get 4 ticks', done => {
      const ticks = [
        { time: '2017-08-07T22:33:47.151000Z', price: 100 },
        { time: '2017-08-07T22:33:47.152000Z', price: 20 },
        { time: '2017-08-07T22:33:47.153000Z', price: 300 },
        { time: '2017-08-07T22:33:47.154000Z', price: 40 },
        { time: '2018-08-07T22:33:47.151000Z', price: 1 },
      ];

      ticks.forEach(t => ohlc.update(t, results => {
        expect(results).to.eql([
          { time: '2017-08-07T22:33:47.151000Z', price: 100 },
          { time: '2017-08-07T22:33:47.152000Z', price: 20 },
          { time: '2017-08-07T22:33:47.153000Z', price: 300 },
          { time: '2017-08-07T22:33:47.154000Z', price: 40 }
        ])
        done();
      }));
    });

    it('should not set duplicates and open = low and close = high', done => {
      const ticks = [
        { time: '2017-08-07T22:33:47.151000Z', price: 10 },
        { time: '2017-08-07T22:33:47.152000Z', price: 20 },
        { time: '2017-08-07T22:33:47.153000Z', price: 30 },
        { time: '2017-08-07T22:33:47.154000Z', price: 40 },
        { time: '2018-08-07T22:33:47.151000Z', price: 1 },
      ];

      ticks.forEach(t => ohlc.update(t, results => {
        expect(results).to.eql([
          { time: '2017-08-07T22:33:47.151000Z', price: 10 },
          { time: '2017-08-07T22:33:47.154000Z', price: 40 }
        ])
        done();
      }));
    });

    it('should flush incompleted data', done => {
      const t = { time: '2017-08-07T22:33:47.151000Z', price: 10 };
      ohlc.update(t);
      ohlc.flush(results => {
        expect(results).to.eql([t]);
        done();
      })
    });

    it('should not flush multiple times', done => {
      const t = { time: '2017-08-07T22:33:47.151000Z', price: 10 };
      ohlc.update(t);
      ohlc.flush();
      ohlc.flush(results => {
        done(new Error('No callback should be called'));
      });

      setTimeout(function() {
        done();
      }, 10);
    });
  });
});