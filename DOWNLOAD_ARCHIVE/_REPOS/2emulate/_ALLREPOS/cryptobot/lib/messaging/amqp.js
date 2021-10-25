const amqp = require('amqplib');
const uuid = require('uuid');
const debug = require('debug')('crybot:amqp');
const Rx = require('rxjs/Rx');

const { url, rpcQueue: queueName, simpleQueue } = require('../../config').amqp;

function send(message) {
  return amqp.connect(url).then(function (conn) {
    return conn.createChannel().then(function (ch) {
      // var q = 'hello';
      const msg = JSON.stringify(message);

      const ok = ch.assertQueue(simpleQueue, { durable: false });

      return ok.then(function (_qok) {
        // NB: `sentToQueue` and `publish` both return a boolean
        // indicating whether it's OK to send again straight away, or
        // (when `false`) that you should wait for the event `'drain'`
        // to fire before writing again. We're just doing the one write,
        // so we'll ignore it.
        ch.sendToQueue(simpleQueue, Buffer.from(msg));
        debug(" [x] Sent '%s'", msg);
        return ch.close();
      });
    }).finally(function () { conn.close(); });
  }).catch(console.error);
}

function receive(cb) {
  amqp.connect(url).then(function (conn) {
    // process.once('SIGINT', function () { conn.close(); });

    return conn.createChannel().then(function (ch) {
      var ok = ch.assertQueue(simpleQueue, { durable: false });

      ok = ok.then(function (_qok) {
        return ch.consume(simpleQueue, function (msg) {
          debug(" [-] Received '%s'", msg.content.toString());
          cb({
            msg: JSON.parse(msg.content.toString()),
            message: msg,
            connection: conn
          });
        }, { noAck: true });
      });

      return ok.then(function (_consumeOk) {
        debug(' [*] Waiting for messages. To exit press CTRL+C');
      });
    });
  }).catch(console.error);
}

/**
 * see https://github.com/squaremo/amqp.node/tree/master/examples/tutorials#tutorial-six-rpc
 * also see https://github.com/SkippyZA/rx-amqplib#build-it-yourself
 * @param {Function} callback takes as parameter the client message and the return will be the response
 */
function server(callback, onConnection) {
  return amqp.connect(url).then(function (conn) {
    if(onConnection) {
      onConnection(conn);
    }

    return conn.createChannel().then(function (ch) {
      var ok = ch.assertQueue(queueName, { durable: false });
      var ok = ok.then(function () {
        ch.prefetch(1);
        return ch.consume(queueName, reply);
      });
      return ok.then(function () {
        debug('Server::Awaiting RPC (AMQP) requests', queueName);
      });

      function reply(msg) {
        debug('Server::Received: %o', msg.content.toString());
        callback({
          content: msg.content.toString(),
          connection: conn,
          reply: response => {
            ch.sendToQueue(
              msg.properties.replyTo,
              Buffer.from(response.toString()),
              { correlationId: msg.properties.correlationId });

            ch.ack(msg);
            debug('Server::Replied: %o', response.toString());
          }
        });
      }
    });
  }).catch((err) => {
    console.error(`ERROR: connecting to amqp ${url}`);
    console.error(err.stack);
  });
}

/**
 * Send message to queue and wait for response
 * @param {String} message message to send to the queue/server. It will be stringify so you don't have to
 * @param {Function} callback function with error, response from server
 */
function client(message, callback = () => { }) {
  return amqp.connect(url).then(function (conn) {
    return conn.createChannel().then(function (ch) {
      return new Promise(function (resolve) {
        var corrId = uuid();
        function maybeAnswer(msg) {
          if (msg.properties.correlationId === corrId) {
            debug(`Client::Received: %o`, msg.content.toString());
            resolve(msg.content.toString());
          } else {
            console.error(`correlation ID didn't match`, msg.properties.correlationId, corrId);
          }
        }

        var ok = ch.assertQueue('', { exclusive: true })
          .then(function (qok) { return qok.queue; });

        ok = ok.then(function (queue) {
          return ch.consume(queue, maybeAnswer, { noAck: true })
            .then(function () { return queue; });
        });

        ok = ok.then(function (queue) {
          const stringMsg = JSON.stringify(message);
          debug('Client::Sent ', queueName, stringMsg);
          ch.sendToQueue(queueName, Buffer.from(stringMsg), {
            correlationId: corrId, replyTo: queue
          });
        });
      });
    }).then((data) => callback(null, data))
      .finally(function () { conn.close(); });
  }).catch(callback);
}

// Hot observable https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
function serverObservable(processor = JSON.parse) {
  let observable = new Rx.Observable(observer => {
    let connection;

    server(message => {
      try {
        const processedMessage = processor(message.content);
        observer.next(processedMessage);
        message.reply(JSON.stringify(processedMessage));
        close = message.close;
      } catch (error) {
        console.error(error.stack);
        observer.error(error);
        message.reply(error);
      }
    }, conn => {
      connection = conn;
    });

    return () => {
      if (connection) {
        debug(`Closing AMQP server connection...`);
        connection.close();
        connection = null;
      }
    }
  });

  return observable.share();
}

module.exports = {
  server,
  client,
  serverObservable,
  receive,
  send
}