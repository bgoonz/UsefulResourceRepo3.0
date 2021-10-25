var D3Transition = require("./transition"),
    d3_selectionPrototype = require("./selection")._selectionPrototype,
    d3_transitionNode = D3Transition._transitionNode,
    d3_transition = D3Transition._transition;

d3_selectionPrototype.transition = function() {
  var id = D3Transition._transitionInheritId || ++D3Transition._transitionId,
      subgroups = [],
      subgroup,
      node,
      transition = Object.create(D3Transition._transitionInherit);

  transition.time = Date.now();

  for (var j = -1, m = this.length; ++j < m;) {
    subgroups.push(subgroup = []);
    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
      if (node = group[i]) d3_transitionNode(node, i, id, transition);
      subgroup.push(node);
    }
  }

  return d3_transition(subgroups, id);
};
