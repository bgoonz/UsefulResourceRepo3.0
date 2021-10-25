#!/usr/bin/env node
const http = require('http');
const path = require('path');

module.exports = function ({target, forward, latency}, cli) {
  http.createServer(function (req, res) {
    if(cli) { cli.info(`${req.method} ${req.url}`); }

    var options = {
      hostname: 'localhost',
      port: target,
      path: req.url,
      method: req.method,
      headers: req.headers
    };

    const proxy = http.request(options, function (response) {
      for(let name in response.headers) {
        res.setHeader(name, response.headers[name]);
      }

      setTimeout(function () {
        response.pipe(res, {
          end: true
        });
      }, latency);
    });

    req.pipe(proxy, {
      end: true
    });
  }).listen(parseInt(forward));

  if(cli) { cli.info(`localhost:${forward} <-- ${latency} ms <-- localhost:${target}`); }
}
