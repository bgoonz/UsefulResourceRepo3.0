var app = require("http").createServer(function (req, res) {
    res.writeHead(200);
    res.end("Nothing to see here, folks.");
  }),
  io = require("/usr/local/lib/node_modules/socket.io").listen(app);
app.listen(80, "xx.yy.zz.ww");

io.configure(function () {
  io.enable("browser client minification"); // send minified client
  io.enable("browser client etag"); // apply etag caching logic based on version number
  //  io.set('log level', 1);                    // reduce logging
  io.set("transports", [
    // enable all transports (optional if you want flashsocket)
    "websocket",
    "flashsocket",
    "htmlfile",
    "xhr-polling",
    "jsonp-polling",
  ]);
});

io.sockets.on("connection", function (socket) {
  console.log("connection established!");

  //socket.on('my other event', function (data) {
  //  console.log("DATA:"+data);
  //});

  socket.emit("news", { hello: "world" }, function (data) {
    console.log("received:" + data);
  });
});
