var D3XHR = require("./xhr"),
    D3 = require("./core");

var D3Text = function() {
  return D3XHR.apply(D3, arguments).response(d3_text);
};

function d3_text(request) {
  return request.responseText;
}

module.exports = D3Text;
