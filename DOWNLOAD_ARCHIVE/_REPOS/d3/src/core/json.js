var D3XHR = require("./xhr");

var D3Json = function(url, callback) {
  return D3XHR(url, "application/json", callback).response(d3_json);
};

function d3_json(request) {
  return JSON.parse(request.responseText);
}

module.exports = D3Json;
