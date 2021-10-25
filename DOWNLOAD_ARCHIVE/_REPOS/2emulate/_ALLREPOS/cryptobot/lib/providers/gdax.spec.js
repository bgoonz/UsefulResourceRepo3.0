const { expect } = require('chai');
const sinon = require('sinon');
const Gdax = require('gdax');

const gdax = require('./gdax');
const {accounts, buy} = require('../../test/responses/gdax');

describe('GDAX', function () {
  this.timeout(100);

  const authedClient = {
    getAccounts: () => { },
    sell: () => { },
    buy: () => { }
  };

  beforeEach(() => {
    sinon.stub(Gdax, 'AuthenticatedClient').returns(authedClient);
    sinon.stub(authedClient, 'getAccounts').callsFake(cb => cb(null, null, accounts));
    sinon.stub(authedClient, 'buy').callsFake((p, cb) => cb(null, null, buy));
    sinon.stub(authedClient, 'sell').callsFake((p, cb) => cb(null, null, buy));
  });

  afterEach(() => {
    Gdax.AuthenticatedClient.restore();
    authedClient.getAccounts.restore();
    authedClient.buy.restore();
    authedClient.sell.restore();
  });

  describe('# get Funds', () =>{
    it('should get fudns', done =>{
      gdax.getFunds((err, res, data) => {
        expect(data).to.eql(accounts);
        done();
      });
    });
  });

  describe('# set order', () =>{
    it('should sell', done =>{
      const size = 0.3;
      const side = 'sell';
      const price = 3250;
      const product_id = 'BTC-USD';
      gdax.setOrder({ size, side, price, product_id}, (err, res, data) => {
        done();
      })
    });
  });
});