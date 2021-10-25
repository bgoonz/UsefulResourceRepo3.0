const env = 'simulation';
const SECONDS = 1000;

let config = {
  gdax: {
    wss: process.env.GDAX_WSS || `ws://localhost:7771`,
    api: process.env.GDAX_API || 'https://localhost:7777'
  },

  db: {
    uri: process.env.MONGODB_URI || process.env.OPENSHIFT_MONGODB_DB_URL || `mongodb://localhost:27017/crylocal-${env}`
  },

  amqp: {
    rpcQueue: process.env.AMQP_RPC_QUEUE || `cryRpcQueue-${env}`,
    rpcQueue: process.env.AMQP_RPC_QUEUE || `cryRpcQueue-${env}`,
    simpleQueue: process.env.AMQP_SIMPLE_QUEUE || `crySimpleQueue-${env}`
  },

  ticker: {
    providers: process.env.CRYBOT_TICKER_PROVIDERS || '{"gdax": ["BTC-USD", "ETH-USD", "LTC-USD"]}',
    // bufferTime (ms) - interval collecting data before saving
    modifiers: process.env.CRYBOT_TICKER_MODIFIERS || `{"bufferTime": ${0.8 * SECONDS} }`
  },

  analyzer: {
    // strategy: process.env.CRYBOT_ANALYZER_STRATEGY || 'weekly-close-diff',
    // interval: process.env.CRYBOT_ANALYZER_INTERVAL || 6 * HOURS
    interval: process.env.CRYBOT_ANALYZER_INTERVAL || 0.99 * SECONDS
  }
};

module.exports = config;