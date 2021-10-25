<!--


---
 "Nodejs : handling http headers"
excerpt: "Nodejs : How to set and get http headers"
date: 2015-08-21 00:00:00 IST
updated: 2015-08-21 00:00:00 IST
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

In a [simple nodejs http server](/2015/08/nodejs-simple-http-server.html) all the request headers in are available on `.headers` on [http.IncomingMessage](https://nodejs.org/api/http.html#http_http_incomingmessage) object. So if you want to get any header value you can do

```js
requestObj.headers.HEADER_NAME;
```

so if you want to get `host`, you can use

```js
var server = require("http").createServer(function (req, res) {
  // get request header
  var host = req.headers.host;

  req.write("<h1>Hello World :: " + host + " </h1>");
  res.end();
});
var port = process.env.PORT || 9001;
server.listen(port);
server.on("listening", function () {
  console.log("Listening to ", port);
});
```

And if you want to set an header for your response, you can use `setHeader` method on [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) object.

```js
var server = require("http").createServer(function (req, res) {
  var headerStr = JSON.stringify(req.headers);

  // set response header
  res.setHeader("content-type", "application/json");

  res.write(headerStr);
  res.end();
});
var port = process.env.PORT || 9001;
server.listen(port);
server.on("listening", function () {
  console.log("Listening to ", port);
});
```

Please note that, you want to make sure that you set the header before sending first byte of response.

Thank You.
