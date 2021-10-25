let config = {
  gdax: {
    key: process.env.GDAX_KEY,
    b64secret: process.env.GDAX_SECRET,
    passphrase: process.env.GDAX_PASSPHRASE,
    api: process.env.GDAX_API || 'https://api.gdax.com',
    wss: process.env.GDAX_WSS || 'wss://ws-feed.gdax.com'
  }
};

module.exports = config;