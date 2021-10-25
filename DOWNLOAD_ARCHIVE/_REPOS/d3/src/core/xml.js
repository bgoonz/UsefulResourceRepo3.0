var D3XHR = require("./xhr"),
    D3 = require("./core");

var D3XML = function() {
  return D3XHR.apply(D3, arguments).response(d3_xml);
};

function d3_xml(request) {
  return request.responseXML;
}

module.exports = D3XML;
