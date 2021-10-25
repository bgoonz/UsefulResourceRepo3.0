var D3Transition = require("./transition"),
    d3_transitionPrototype = D3Transition._transitionPrototype,
    d3_selection_each = require("./selection-each")._each;

d3_transitionPrototype.each = function(type, listener) {
  var id = this.id;
  if (arguments.length < 2) {
    var inherit = D3Transition._transitionInherit,
        inheritId = D3Transition._transitionInheritId;
    D3Transition._transitionInheritId = id;
    d3_selection_each(this, function(node, i, j) {
      D3Transition._transitionInherit = node.__transition__[id];
      type.call(node, node.__data__, i, j);
    });
    D3Transition._transitionInherit = inherit;
    D3Transition._transitionInheritId = inheritId;
  } else {
    d3_selection_each(this, function(node) {
      node.__transition__[id].event.on(type, listener);
    });
  }
  return this;
};
