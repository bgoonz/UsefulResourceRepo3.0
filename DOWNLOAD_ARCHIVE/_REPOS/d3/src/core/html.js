var d3_document = require("./core")._document,
    D3XHR = require("./xhr");

var D3HTML = function(url, callback) {
  return D3XHR(url, "text/html", callback).response(d3_html);
};

function d3_html(request) {
  var range = d3_document.createRange();
  range.selectNode(d3_document.body);
  return range.createContextualFragment(request.responseText);
}

module.exports = D3HTML;
