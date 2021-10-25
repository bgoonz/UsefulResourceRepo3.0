#!/usr/bin/env node

const program = require('commander');

const package = require('../../package');
const {Ticker} = require('../ticker/ticker');
const Analyzer = require('../analyzer');

// const orders = require('../ticker/order');
const CONFIG = require('../../config');
const debug = require('debug')('crybot:cli');

let subscriptions = [];

// process.once('exit', shutdown('exit'));
process.once('SIGTERM', shutdown('SIGTERM'));
process.once('SIGINT', shutdown('SIGINT'));

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.error('unhandledRejection', error.message, error.stack);
});

// setTimeout(function() {
//   shutdown('TIMEOUT')();
// }, 15000);

function setupProgram() {
  program
    .version(package.version);

  /**
   * bin/cli ticker --provider gdax:BTC-USD,ETH-USD,LTC-USD --provider poloniex:BTC-ETH --modifier bufferTime:30000
   * DEBUG=* node bin/cli ticker --provider gdax:BTC-USD,ETH-USD --modifier bufferTime:30000
   */
  program
    .command('ticker')
    .description('Get market ticks for a given security')
    .option('-p, --provider <provider>', 'provider: products id. e.g. gdax:BTC-USD,ETH-USD', parseToObjectList, {})
    .option('-m, --modifier <modifier>', 'modifier: products id. e.g. bufferTime:30000', parseToObject, {})
    .action((options = {}) => {
      // default or env settings
      const defaultProviders = JSON.parse(CONFIG.ticker.providers);
      const defaultModifiers = JSON.parse(CONFIG.ticker.modifiers);

      const provider = isEmpty(options.provider) ? defaultProviders : options.provider;
      const modifier = isEmpty(options.modifier) ? defaultModifiers : options.modifier;

      const ticker = new Ticker(provider, modifier);
      ticker.start();

      subscriptions.push(ticker);
    });

  program
    .command('analyzer')
    .action((options = {}) => {
      const analyzer = new Analyzer();
      analyzer.start();
      subscriptions.push(analyzer);
    });

  /**
   * ./cli.js order
   * ./cli.js order --side buy --size 0.04 --price 2500
   * ./cli.js order --cancel
   */
  // program
  //   .command('order')
  //   .description('Shows current open orders')
  //   .option('-s --side <side>', 'buy or sell', /^(sell|buy)$/i)
  //   .option('-p --price <price>', 'Price per bitcoin', parseFloat)
  //   .option('-vol --size <size>', 'Amount of BTC to buy or sell', parseFloat)
  //   .option('-c --cancel [orderId]', 'Cancel all orders or the one with the order id')
  //   .action(orders);

  program
    .command('*')
    .action(() => program.help());

  return program;
}

function shutdown(event) {
  return function() {
    console.log('cli got', event);
    if (subscriptions.length > 0) {
      debug(`Unsubscribing from all processes...`);
      subscriptions.forEach(t => t.stop());
      setTimeout(() => {
        debug(`done!`);
        process.exit(0);
      }, 1000);
    } else {
      debug(`Exiting...`);
      process.exit(0);
    }
  }
}

function parseToObjectList(val, map) {
  const [provider, productIds] = val.split(':');
  map[provider] = productIds.split(',');
  return map;
}

function parseToObject(val, map) {
  const [key, value] = val.split(':');
  map[key] = value;
  return map;
}

function isEmpty(object) {
  return Object.keys(object).length < 1;
}

module.exports = setupProgram;