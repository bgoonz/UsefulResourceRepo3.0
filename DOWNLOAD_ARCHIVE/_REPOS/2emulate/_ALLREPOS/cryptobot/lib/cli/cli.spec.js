const { expect } = require('chai');
const sinon = require('sinon');

const cli = require('./cli');
const t = require('../ticker/ticker');

describe('CLI', function () {
  this.timeout(100);

  describe('# ticker', () =>{
    xit('should process options', done => {
      // var mock = sinon.mock(t);
      sinon.stub(t, 'ticker').callsFake(() => {
        console.log('------------------- done -------');
      });

      const program = cli();

      program.parse(['/Users/admejiar/.nvm/versions/node/v8.1.4/bin/node',
        '/Users/admejiar/Code/cryptobot/bin/cli',
        'ticker',
        '--provider',
        'gdax:BTC-USD,ETH-USD',
        '--modifier',
        'bufferTime:30000']);

        setTimeout(function() {
          sinon.assert.calledWithExactly(t.ticker, {}, {});
          done();
        }, 20);

        t.ticker.restore();
      // mock.expects("ticker").withExactArgs([], {});
      // mock.verify();
      // console.log('done');

    });
  });
});