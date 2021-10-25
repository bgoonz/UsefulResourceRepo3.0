const { expect } = require('chai');
const sinon = require('sinon');
const GdaxWebsocketMock = require('./gdax.websocket.mock');

describe('Websocket Mock Server', function () {
  this.timeout(100);
  let wss;

  beforeEach(() => {
    const timeFilter = {
      $match: {
        timestamp: {
          // $gte: new Date("2017-08-25T21:58:00.000Z"), // explodes CPU 700%+
          // $gte: new Date("2017-09-20T21:58:00.000Z"), // still is too much
          $gte: new Date("2017-09-28T20:00:00.000Z"),
          $lt: new Date("2017-09-28T20:02:00.000Z")
        }
      }
    };
    const onlyTicks = { $project: { ticks: 1, _id: 0 } };
    const unwind = { $unwind: '$ticks' };

    // Start up mock services (provider's WSS)
    wss = new GdaxWebsocketMock({
      collection: {
        name: 'gdax.btc-usd-0-minutes-v1',
        dateFormat: 'YYYY-MM-DD HH:00:00.000',
        pipeline: [timeFilter, onlyTicks, unwind]
      }
    });
  });

  describe('', () => {
    it('', done => {

    });
  });
});