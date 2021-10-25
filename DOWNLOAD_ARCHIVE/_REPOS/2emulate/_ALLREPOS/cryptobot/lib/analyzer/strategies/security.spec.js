const { expect } = require('chai');
const sinon = require('sinon');
const mongo = require('../../ticker/db');
const {security} = require('./security');

describe('Security', function () {
  this.timeout(100);

  const interval = 10;
  let getOhlcStub;

  beforeEach(() => {
    // if (mongo.getOhlc.restore) mongo.getOhlc.restore();
    if (mongo.getAbsoluteOhlc.restore) mongo.getAbsoluteOhlc.restore();
    // getOhlcStub = sinon.stub(mongo, 'getOhlc');
    getOhlcStub = sinon.stub(mongo, 'getAbsoluteOhlc');
  });

  it('should only send data once and ignore last item', done => {
    var array = [];
    var data = [{ _id: 1 }, { _id: 2 }];

    getOhlcStub.resolves(data);

    const subscription = security({ tickerId: 'gdax.BTC-USD', multiplierResolution: '7D', limit: 1, interval, hasOnlyNewData: true}).subscribe(ticks => {
      // console.log('ticks', ticks);
      array = array.concat(ticks);
    });

    setTimeout(function() {
      subscription.unsubscribe();
      expect(array).to.eql([data[0]]);
      done();
    }, interval);
  });

  it('should only send different data', done => {
    var array = [];
    var data1 = [{ _id: 1 }];
    var data2 = [{ _id: 2 }];
    var data3 = [{ _id: 3 }];
    var data4 = [{ _id: 4 }];

    getOhlcStub.onCall(0).resolves(data1);
    getOhlcStub.onCall(1).resolves(data1.concat(data2));
    getOhlcStub.onCall(2).resolves(data1.concat(data2, data3));
    getOhlcStub.onCall(3).resolves(data1.concat(data2, data3, data4));
    getOhlcStub.resolves(data4);

    const subscription = security({ interval, hasOnlyNewData: true }).subscribe(ticks => {
      // console.log('----- ticks', ticks);
      array = array.concat(ticks);
    });

    setTimeout(function() {
      subscription.unsubscribe();
      expect(array).to.eql(data1.concat(data2, data3));
      done();
    }, interval*5);
  });
});