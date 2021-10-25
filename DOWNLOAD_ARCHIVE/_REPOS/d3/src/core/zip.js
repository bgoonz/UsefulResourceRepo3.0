var D3Min = require("./min");

var D3Zip = function() {
  if (!(n = arguments.length)) return [];
  for (var i = -1, m = D3Min(arguments, d3_zipLength), zips = new Array(m); ++i < m;) {
    for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n;) {
      zip[j] = arguments[j][i];
    }
  }
  return zips;
};

function d3_zipLength(d) {
  return d.length;
}

module.exports = D3Zip;
