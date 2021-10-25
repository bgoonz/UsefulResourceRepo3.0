var d3_selectionPrototype = require("./selection")._selectionPrototype,
    d3_array = require("./array")._array;

d3_selectionPrototype.call = function(callback) {
  var args = d3_array(arguments);
  callback.apply(args[0] = this, args);
  return this;
};
