let config = {
  gdax: {
    key: process.env.GDAX_SANDBOX_KEY,
    b64secret: process.env.GDAX_SANDBOX_SECRET,
    passphrase: process.env.GDAX_SANDBOX_PASSPHRASE,
    wss: process.env.GDAX_WSS || `ws://localhost:7771`,
    api: process.env.GDAX_API || 'https://api-public.sandbox.gdax.com'
  },

  db: {
    uri: process.env.MONGODB_URI || process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost:27017/crylocal-test'
  },

  amqp: {
    url: process.env.CLOUDAMQP_URL || 'amqp://localhost',
    rpcQueue: process.env.AMQP_RPC_QUEUE || 'cryRpcQueue-test',
    simpleQueue: process.env.AMQP_SIMPLE_QUEUE || 'crySimpleQueue-test'
  }
};

module.exports = config;