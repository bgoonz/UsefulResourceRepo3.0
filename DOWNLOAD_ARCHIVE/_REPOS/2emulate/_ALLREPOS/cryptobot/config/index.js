const _ = require('lodash');

const env = process.env.ENV || process.env.NODE_ENV;
const HOURS = 1000 * 60 * 60;

let config = {
  gdax: {
    key: process.env.GDAX_SANDBOX_KEY,
    b64secret: process.env.GDAX_SANDBOX_SECRET,
    passphrase: process.env.GDAX_SANDBOX_PASSPHRASE,
    wss: process.env.GDAX_WSS || 'wss://ws-feed.gdax.com',
    api: process.env.GDAX_API || 'https://api-public.sandbox.gdax.com' // to avoid buying on real server by mistake
  },

  db: {
    uri: process.env.MONGODB_URI || process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost:27017/crylocal',
    backup: process.env.MONGODB_URI_BACKUP || 'mongodb://localhost:27017/crybackup' // use for simulation
  },

  web: {
    port: process.env.PORT || 8000
  },

  socket: {
    port: process.env.NET_PORT || 7777
  },

  amqp: {
    url: process.env.CLOUDAMQP_URL || 'amqp://localhost',
    rpcQueue: process.env.AMQP_RPC_QUEUE || 'cryRpcQueue',
    simpleQueue: process.env.AMQP_SIMPLE_QUEUE || 'crySimpleQueue'
  },

  ticker: {
    providers: process.env.CRYBOT_TICKER_PROVIDERS || '{"gdax": ["BTC-USD", "ETH-USD", "LTC-USD"]}',
    // bufferTime (ms) - interval collecting data before saving
    modifiers: process.env.CRYBOT_TICKER_MODIFIERS || '{"bufferTime": 10000}'
  },

  analyzer: {
    strategy: process.env.CRYBOT_ANALYZER_STRATEGY || 'weekly-close-diff',
    interval: process.env.CRYBOT_ANALYZER_INTERVAL || 6 * HOURS
  }
};

// load the env file and overrite params
if(env) {
  try {
    const envConfig = require(`./${env}`);
    _.merge(config, envConfig);
  } catch (error) {
    console.log(`No env config found for <${env}>, using default. ${error}`);
  }
}

module.exports = config;