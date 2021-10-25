var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/data", function (req, res) {
  console.log(req.body);
  res.end();
});

app.listen(3000);
