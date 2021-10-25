var d3_selectionPrototype = require("./selection")._selectionPrototype;

d3_selectionPrototype.empty = function() {
  return !this.node();
};
