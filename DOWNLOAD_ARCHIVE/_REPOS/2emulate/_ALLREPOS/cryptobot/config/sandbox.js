let config = {
  gdax: {
    key: process.env.GDAX_SANDBOX_KEY,
    b64secret: process.env.GDAX_SANDBOX_SECRET,
    passphrase: process.env.GDAX_SANDBOX_PASSPHRASE,
    api: process.env.GDAX_API || 'https://api-public.sandbox.gdax.com',
    wss: process.env.GDAX_WSS || 'wss://ws-feed-public.sandbox.gdax.com'
  },

  db: {
    uri: process.env.MONGODB_URI || process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost:27017/crybot-sandbox'
  }
};

module.exports = config;