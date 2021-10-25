const Gdax = require('gdax');
const FakeWebServer = require('../helpers/fakeWebServer');
const config = require('../../config');

console.log('config.gdax.wss', config.gdax.wss);

const websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD'], { websocketURI: config.gdax.wss, heartbeat: true });
// const websocket = new FakeWebServer();

websocket.on('message', data => {
  console.log('ws.data', data);
});

websocket.on('error', err => { console.log('error', err); });
websocket.on('close', () => { console.log('close'); });

setTimeout(() => {
  websocket.disconnect();
}, 1000);