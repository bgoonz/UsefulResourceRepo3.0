const Gdax = require('gdax');
const Rx = require('rxjs/Rx');
const debug = require('debug')('crybot:gdax');

// https://stackoverflow.com/questions/38108814/rx-observable-websocket-immediately-complete-after-reconnect
const config = require('../../config');
const { webSocketFromEventsToObservable } = require('./rx-helper');
// const FakeWebServer = require('../../test/helpers/fakeWebServer');

debug(`REST API ${config.gdax.api}`);

function ticker({callback = ()=>{}, productIds = ['BTC-USD'], retryOnClose = false}) {
  const websocket = new Gdax.WebsocketClient(productIds, { websocketURI: config.gdax.wss, heartbeat: true});

  websocket.on('open', () => debug(`Listening for ${productIds.join(', ')} on GDAX`));
  websocket.on('message', callback);
  websocket.on('error', (e) => console.warn('ERROR websocket: ', e));
  websocket.on('close', () => {
    if (retryOnClose) {
      console.warn(`Stopped listening for ${productIds.join(', ')} on GDAX`);
      console.warn(`Retrying connection ${productIds} in 10s`);
      setTimeout(() => ticker(callback, productIds), 10e3);
    }
  });
}

/**
 * Hot observable
 * @param {String} productIds
 */
function tickerObservable(productIds) {
  const websocket = new Gdax.WebsocketClient(productIds, config.gdax.wss, null, {heartbeat: true});
  // const websocket = new FakeWebServer(productIds, { websocketURI: config.gdax.wss, heartbeat: true });
  debug(`Connecting to ${config.gdax.wss} with ${productIds}`);
  return webSocketFromEventsToObservable(websocket)
    .filter(tick => tick.type === 'match'); // send only matches
}

/**
 * Cancel all orders or the ones with the given id
 * @param {*} callback callback
 * @param {*} orderID [optional] order id
 */
function cancelOrders(callback, orderID) {
  if (orderID && orderID !== true) {
    authedClient().cancelOrder(orderID, callback);
  } else {
    authedClient().cancelAllOrders({ product_id: 'BTC-USD' }, callback);
  }
}

function getOrders(callback) {
  return authedClient().getOrders(callback);
}

/**
 * See https://docs.gdax.com/#place-a-new-order
 * @param {*} params sell params
 * @property {String} params.type [optional] limit, market, or stop (default is limit)
 * - type	[optional] limit, market, or stop (default is limit)
   - side	buy or sell
   - product_id	A valid product id
   - stp	[optional] Self-trade prevention flag
   - price	Price per bitcoin
   - size	Amount of BTC to buy or sell
   - time_in_force	[optional] GTC, GTT, IOC, or FOK (default is GTC)
   - cancel_after	[optional]* min, hour, day
   - post_only	[optional]** Post only flag
 */
function setOrder(params, callback = ()=>{}) {
  params.product_id = params.product_id || 'BTC-USD';

  debug('executing GDAX order: %o', params);
  if(params.side === 'buy') {
    return authedClient().buy(params, callback);
  } else if (params.side === 'sell') {
    return authedClient().sell(params, callback);
  } else {
    console.warn(`Invalid order side ${params.side}`);
  }
}

function getFunds(callback) {
  return authedClient().getAccounts(callback);
}

function executeTrade() {

}

function authedClient() {
  return new Gdax.AuthenticatedClient(
    config.gdax.key,
    config.gdax.b64secret,
    config.gdax.passphrase,
    config.gdax.api
  );
}

module.exports = {
  authedClient,
  ticker,
  getOrders,
  setOrder,
  cancelOrders,
  tickerObservable,
  getFunds,
  executeTrade
};