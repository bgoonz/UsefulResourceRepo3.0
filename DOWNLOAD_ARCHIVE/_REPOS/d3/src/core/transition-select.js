var D3Transition = require("./transition"),
    d3_transitionPrototype = D3Transition._transitionPrototype,
    d3_selection_selector = require("./selection-select")._selector,
    d3_transitionNode = D3Transition._transitionNode,
    d3_transition = D3Transition._transition;

d3_transitionPrototype.select = function(selector) {
  var id = this.id,
      subgroups = [],
      subgroup,
      subnode,
      node;

  if (typeof selector !== "function") selector = d3_selection_selector(selector);

  for (var j = -1, m = this.length; ++j < m;) {
    subgroups.push(subgroup = []);
    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
      if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        d3_transitionNode(subnode, i, id, node.__transition__[id]);
        subgroup.push(subnode);
      } else {
        subgroup.push(null);
      }
    }
  }

  return d3_transition(subgroups, id);
};
