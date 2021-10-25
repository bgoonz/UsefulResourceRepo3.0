var d3_number = require("./number")._number,
    D3Quantile = require("./quantile"),
    D3Ascending = require("./ascending");

var D3Median = function(array, f) {
  if (arguments.length > 1) array = array.map(f);
  array = array.filter(d3_number);
  return array.length ? D3Quantile(array.sort(D3Ascending), .5) : undefined;
};

module.exports = D3Median;
