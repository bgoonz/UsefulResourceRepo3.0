<!--


---
 "Nodejs : simple http server"
excerpt: "Nodejs : simple http server"
date: 2015-08-20 00:00:00 IST
updated: 2015-08-20 00:00:00 IST
categories: nodejs
tags: nodejs
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

Building a simple http server is pretty easy in nodejs, we can use `createServer` method in [http](https://nodejs.org/api/all.html#all_http) module for this. The `createServer` method will take a function as argument and return the object of `http.Server`.

```js
var server = require("http").createServer(function (req, res) {});
```

The `createServer` callback will be executed when ever a request is received, and a object of `request` and `response` will be passes to it.

You can also listen to `request` event on server.

```js
var http = require("http");
var server = http.createServer();

server.on("request", function (req, res) {});
```

Next in order to accept connection you need to bind it to a port. You can use `listen` method for it.

```js
server.listen(port);
```

You can either pass a callback, or can bind to `listening` event to do something soon after a server is bound to the port.

```js
server.on("listening", function () {
  console.log("Listening to ", port);
});
```

You can also set the port using the [environment variable](/2015/08/nodejs-read-env-variables.html).

For error handling you can you `error` event.

```js
server.on("error", function (err) {});
```

An error object will be passed to the callback on error. Now the code for the simple server will be

```js
// server.js
var http = require("http");
var server = http.createServer();
var port = process.env.PORT || 9001;

server.listen(port);

server.on("request", function (req, res) {
  req.write("<h1>Hello World :: </h1>");

  res.end();
});

server.on("listening", function () {
  console.log("Listening to ", port);
});

server.on("error", function (err) {
  console.log(err);
});
```

Now when you run `node server.js` the application will run on port `9001` and you can request `localhost:9001` on you browser to see the result.

You can also bind other events like `connection` which is emitted when a new connection is made and `close` which will emit when server closes. The close event is emitted only when all the connections are ended.

Hope that helps.
