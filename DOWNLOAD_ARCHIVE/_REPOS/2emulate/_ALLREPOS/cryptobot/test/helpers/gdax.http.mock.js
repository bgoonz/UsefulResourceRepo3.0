const http = require('http');
const https = require('https');
const fs = require('fs');
const debug = require('debug')('crybot:mock:http');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { accounts, orders } = require('../responses/gdax');

// curl - k https://localhost:7777/accounts
// https://www.akadia.com/services/ssh_test_certificate.html
// to avoid "unable to verify the first certificate" use NODE_TLS_REJECT_UNAUTHORIZED=0
// use NODE_TLS_REJECT_UNAUTHORIZED=0 --- https://github.com/request/request/issues/2061
var options = {
  key: fs.readFileSync('/Users/admejiar/scripts/certs/localhost/server.key'),
  cert: fs.readFileSync('/Users/admejiar/scripts/certs/localhost/server.crt'),
  // requestCert: false,
  // rejectUnauthorized: false,
  // ciphers: 'DES-CBC3-SHA' // https://github.com/nodejs/node/issues/9845#issuecomment-264032107

  // ciphers: 'ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384',
  // honorCipherOrder: true,
  // secureProtocol: 'TLSv1_2_method'

  // requestCert: true,
  // rejectUnauthorized: true
};

// https://github.com/nodejs/node/issues/13461
class GdaxHttpMock {
  constructor({port = 7777} = {}) {
    this.promise = new Promise(resolve => {
      // const app = this.getExpressApp();
      const app = express();
      app.use((req, res, next) => {
        debug(`req`, req.method, req.url)
        debug(`------- something ------------------------`);
      });

      // this.server = https.createServer(options, (req, res) => {
      //   debug(`-----***-- something ------------------------`);
      // })
      // this.server = https.createServer(options, app)
      // this.server = https.createServer(options, this.requestHandler)
      this.server = https.createServer(options, this.getExpressApp())
      .listen(port, () => {
        debug(`HTTP listening on ${port}`);
        resolve(port);
        // setTimeout(function() {
        //   resolve(port);
        // }, 2000);
      }).on('close', () => {
        debug('Closing HTTP server');
      }).on('clientError', (err, socket) => {
        debug(`clientError %o`, err);
        // debug('parser error', err.code);
        // socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
        // get request and do something with it...
      });
    });
  }

  getExpressApp() {
    const app = express();
    // app.use(bodyParser.json()); // for parsing application/json
    // app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(morgan('dev', {
      stream: process.stdout
    })); // login

    app.get('/accounts', (req, res) => {
      res.json(accounts);
    });

    app.get('/funding', (req, res) => {
      res.json(accounts);
    });

    app.get('/orders', (req, res) => {
      res.json(accounts);
    });

    app.post('/orders', (req, res) => {
      res.json(orders);
    });

    // app.use(function (req, res, next) {
    //   req.socket.on("error", function (error) {
    //     debug(`Socket error: `, error)
    //   });
    //   res.socket.on("error", function (error) {
    //     debug(`Socket error: `, error)
    //   });
    //   next();
    // });

    return app;
  }

  isConnected() {
    return this.promise;
  }

  getAccount(request, response) {
    if (request.method === 'GET' && request.url === '/accounts') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(accounts));
      return true;
    }
  }

  getEcho(request, response) {
    if (request.method === 'GET' && request.url === '/echo') {
      let body = [];
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');

      request.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.end(body);
      });
      return true;
    }
  }


  requestHandler(request, response) {
    // this.server = http.createServer((request, response) => {
    debug('request', request.method, request.url);

    // const hasMatch = [
      this.getAccount(request, response),
      // this.getEcho(request, response)
    // ].some(i => i);

    // if (!hasMatch) {
      // response.statusCode = 404;
      response.end();
    // }
  }

  close() {
    this.server.close();
  }
}

module.exports = GdaxHttpMock;