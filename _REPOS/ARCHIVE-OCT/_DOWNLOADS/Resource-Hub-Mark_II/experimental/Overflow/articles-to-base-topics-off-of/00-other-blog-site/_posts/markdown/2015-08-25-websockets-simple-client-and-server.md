<!--


---
 "WebSocket : Simple client and Server"
excerpt: "WebSocket : Simple client and Server in NodeJS"
date: 2015-08-25 00:00:00 IST
updated: 2015-08-25 00:00:00 IST
categories: javascript, websocket
tags: javascript, websocket
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

When I was looking for samples of WebSocket Server in NodeJS most results where using [socket.io](http://socket.io). But since I was learning I needed some more basic one. First I thought of using simple `net.Socket`, later I came to know that its just a TCP socket and WebSocket won't works with it unless you use [websockify](https://github.com/kanaka/websockify) to bridge in between.

Then I found [ws](https://github.com/websockets/ws), a basic WebSocket implementation. So I build a simple websocket server using `ws`.

```js
// server.js
var Server = require("ws").Server;
var port = process.env.PORT || 9030;
var ws = new Server({ port: port });

ws.on("connection", function (w) {
  w.on("message", function (msg) {
    console.log("message from client");
  });

  w.on("close", function () {
    console.log("closing connection");
  });
});
```

Now this server can accept connection.
Next we need a client.

```js
var connection = new WebSocket("ws://localhost:9030");

connection.onopen = function () {};

// Log errors
connection.onerror = function (error) {
  console.error("WebSocket Error " + error);
};

// Log messages from the server
connection.onmessage = function (e) {};
```

Now we can send message via WebSocket from server to client and back.

```js
w.on("message", function (msg) {
  console.log("message from client :: ", msg);
});

w.send("message to client");
```

And I in client I received it message in `onmessage` event and from client I can send the message using `send` method.

```js
// Log messages from the server
connection.onmessage = function (e) {
  console.log("message from server", e.data);
};

connection.send("hello from client");
```

Now when I need to send some message to individual client, I want to keep some reference/indetifier to each client. So I used `sec-websocket-key` in header. when each client gets connected I keep the object of connection in an array.

```js
var Server = require("ws").Server;
var port = process.env.PORT || 9030;
var ws = new Server({ port: port });

var sockets = [];
ws.on("connection", function (w) {
  var id = w.upgradeReq.headers["sec-websocket-key"];
  console.log("New Connection id :: ", id);
  w.send(id);
  w.on("message", function (msg) {
    var id = w.upgradeReq.headers["sec-websocket-key"];
    var message = JSON.parse(msg);

    sockets[message.to].send(message.message);

    console.log("Message on :: ", id);
    console.log("On message :: ", msg);
  });

  w.on("close", function () {
    var id = w.upgradeReq.headers["sec-websocket-key"];
    console.log("Closing :: ", id);
  });

  sockets[id] = w;
});
```

And for client I just I send a JSON with info whome this message should be delivered like

```js
var data = {
  to: "sec-websocket-identifier",
  message: "hello from client 1",
};
connection.send(JSON.stringify(data));
```

I think this is the base of 1-1 chat application.
