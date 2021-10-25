let http = require("http");
let requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

let server = http.createServer(requestListener);
server.listen(3000, function () {
  console.log("Listening on port 3000");
});
