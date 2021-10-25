/**
 * Analyzer
 *
 * This module perform the Technical Analisys with data from (mongo) db.
 *
 * Based on the data it will trigger:
 *  - entry strategy (buy) and
 *  - exit stregies (sell with take-profit [T/P] and stop-loss [S/L])
 *
 * Analyzer gets notified through AMQP when a new insert is made in the db
 * When Analyzer needs to send a signal (entry/exit) it will do it through AMQP like the regular orders
 *
 * Analyzer instanciate strategies that pull securities on a given timeframe and performs operations using indicators (SMA, EMA, MACD, lowest, highest)
 *
 * ** Strategy **
 *
 * There are two basic strategies long and short.
 *
 * For long you want to buy an a lower price and sell at a higher price (30%+).
 *
 * Info
 * - http://www.investopedia.com/articles/trading/04/092904.asp
 * - https://github.com/butor/blackbird/issues/100
 */
const config = require('../../config');
const debug = require('debug')('crybot:analyzer');

class Analyzer {
  constructor() {
    // loading strategy
    debug(`Loading <${config.analyzer.strategy}> strategy...`);
    const Strategy = require(`./strategies/${config.analyzer.strategy}.strategy`);
    const strategy = new Strategy({interval: config.analyzer.interval});
    this.strategy = strategy;
  }

  start() {
    debug(`Starting <${config.analyzer.strategy}> strategy...`);
    return this.strategy.start();
  }

  stop() {
    debug(`Stopping strategy ${this.strategy && this.strategy.constructor.name}`);
    if(this.strategy) {
      this.strategy.stop();
    }
  }
}

module.exports = Analyzer;