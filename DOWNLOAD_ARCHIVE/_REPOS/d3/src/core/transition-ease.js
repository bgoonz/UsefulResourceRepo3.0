var d3_transitionPrototype = require("./transition")._transitionPrototype,
    d3_selection_each = require("./selection-each")._each,
    D3Ease = require("./ease"),
    D3 = require("./core");

d3_transitionPrototype.ease = function(value) {
  var id = this.id;
  if (arguments.length < 1) return this.node().__transition__[id].ease;
  if (typeof value !== "function") value = D3Ease.apply(D3, arguments);
  return d3_selection_each(this, function(node) { node.__transition__[id].ease = value; });
};
