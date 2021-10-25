// NODE_TLS_REJECT_UNAUTHORIZED=0 DEBUG='crybot:*' nodemon /Users/admejiar/Code/cryptobot/test/scripts/gdax.http.mock.js
const Gdax = require('gdax');

const Http = require('../helpers/gdax.http.mock');
const http = new Http();

http.isConnected().then(port => {
  console.log('connected from promise', port);
  setTimeout(sendOrder, 1e3);
}).catch(error => {
  console.log(error);
});

function sendOrder() {
  // authedClient.getFundings({}, callback);
  authedClient().getAccounts(callback);
  authedClient().getOrders(callback);
}

function callback(error, response, data) {
  console.log('--->', response.statusCode, error, data);
}

function authedClient() {
  const key = process.env.GDAX_SANDBOX_KEY;
  const b64secret = process.env.GDAX_SANDBOX_SECRET;
  const passphrase = process.env.GDAX_SANDBOX_PASSPHRASE;
  const apiURI = 'https://localhost:7777';

  return new Gdax.AuthenticatedClient(key, b64secret, passphrase, apiURI);
}