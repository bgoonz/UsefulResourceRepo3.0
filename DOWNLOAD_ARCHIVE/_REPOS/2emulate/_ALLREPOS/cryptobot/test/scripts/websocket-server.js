const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7171 });

let count = 0;

wss.on('connection', function connection(ws) {
  console.log('connected');

  ws.on('message', function incoming(message) {
    console.log('> ', message);
    ws.send(message);
  });

  const t = setInterval(() => {
    console.log('> ', `#${count} - ${+(new Date())}`);
    ws.send(`#${count} - ${+(new Date())}`);

    if(count > 10) {
      console.log('closing...');
      clearInterval(t);
      wss.close();
    } else {
      count++;
    }
  }, 1e3);
});