var express = require("express");
var app = express();
var port = 8000;

app.use(log);

app.get("/", log, hello);

function log(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

function hello(req, res) {
  res.write("Hello \n" + "World");
  res.end();
  // next();
}

app.listen(port, function () {
  console.log("server started on port 8000 ");
});
