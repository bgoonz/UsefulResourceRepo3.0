var D3Zip = require("./zip"),
    D3 = require("./core");

var D3Transpose = function(matrix) {
  return D3Zip.apply(D3, matrix);
};

module.exports = D3Transpose;
