var d3_document = require("./core")._document,
    d3_array = require("./array")._array,
    d3_selection = require("./selection");

var d3_selectionRoot = d3_selection._selection([[d3_document]]);

d3_selectionRoot[0].parentNode = d3_selection._selectRoot;

// TODO fast singleton implementation!
// TODO select(function)
var D3Select = function(selector) {
  return typeof selector === "string"
      ? d3_selectionRoot.select(selector)
      : d3_selection._selection([[selector]]); // assume node
};

// TODO selectAll(function)
D3Select.all = function(selector) {
  return typeof selector === "string"
      ? d3_selectionRoot.selectAll(selector)
      : d3_selection._selection([d3_array(selector)]); // assume node[]
};

D3Select._selectionRoot = d3_selectionRoot;

module.exports = D3Select;
