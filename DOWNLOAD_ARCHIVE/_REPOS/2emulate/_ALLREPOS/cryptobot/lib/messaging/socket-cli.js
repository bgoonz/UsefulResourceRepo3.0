const net = require('net');
const port = require('../config').socket.port;

function server(callback) {
  const server = net.createServer(callback);

  server.on('error', (err) => {
    console.error('ERROR: receiving message on socket server. ', err);
  });

  server.listen(port, () => {
    console.log('TCP/IP Server on ', server.address());
  });
}


function client(message, callback) {
  const client = net.createConnection({ port: port }, () => {
    console.log('connected to server on port ', port);
    client.write(message);
  });

  client.setEncoding('utf8');

  client.on('data', (data) => {
    console.log('socket.client.data', data);
    callback(null, data);
    client.end();
  });

  client.on('error', callback);

  client.on('end', () => {
    console.log('disconnected from server');
  });
}

module.exports = {
  server,
  client
};