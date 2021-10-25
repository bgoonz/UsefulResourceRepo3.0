var d3_selectionPrototype = require("./selection")._selectionPrototype;

d3_selectionPrototype.datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.property("__data__");
};
