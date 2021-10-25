const Wss = require('../e2e/gdax.websocket.mock');
const wss = new Wss();

wss.isConnected().then(port => {
  console.log('connected from promise', port);
})