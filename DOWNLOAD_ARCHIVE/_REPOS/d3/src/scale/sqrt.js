var D3ScalePow = require("./pow");

var D3ScaleSqrt = function() {
  return D3ScalePow().exponent(.5);
};

module.exports = D3ScaleSqrt;
