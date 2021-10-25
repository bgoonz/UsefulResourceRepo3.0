// DEBUG='crybot:*' nodemon lib/web
// DEBUG='crybot:*' ENV='simulation' nodemon lib/web

const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('crybot:web');
const path = require('path')

const mongo = require('../ticker/db');
const port = require('../../config').web.port;
const amqp = require('../messaging/amqp');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')) // login
app.use(express.static(path.join(__dirname, 'client')));

app.get('/orders', function (req, res) {
  getOrders(res);
});

/**
 * /ohlc?limit=5&multiplier=3&tickerId=gdax.btc-usd&resolution=days
 */
app.get('/ohlc', (req, res) => {
  const params = req.query;
    // mongo.getOhlc(params)
  mongo.getAbsoluteOhlc(params)
    .then(ticks => res.json(ticks))
    .catch(error => res.status(500).json({ error: error }));
});

app.post('/orders', (req, res) => {
  const body = req.body;
  amqp.client(body, (err, data) => {
    if(err) {
      debug('Error:', err);
      res.status(500).json({ error: err });
    } else {
      setTimeout(function() {
        getOrders(res, data);
      }, 2e3);
    }
  });
});

const server = app.listen(port, function () {
  console.log(`HTTP server on port http://0.0.0.0:${port}`);
});

function shutdown() {
  debug('graceful shutdown express');
  server.close(function () {
    debug('closed express');
    process.exit(0);
  });
}

// process.on('exit', shutdown);
process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);

function getOrders(res, data) {
  mongo.loadOrders().then(orders => {
    res.json(orders);
  }).catch(error => {
    console.error(error.stack);
    res.json(data || {error});
  });
}
