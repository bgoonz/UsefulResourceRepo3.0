var D3Transition = require("./transition"),
    d3_transitionPrototype = D3Transition._transitionPrototype,
    d3_transitionNode = D3Transition._transitionNode,
    d3_transition = D3Transition._transition;

d3_transitionPrototype.transition = function() {
  var id0 = this.id,
      id1 = ++D3Transition._transitionId,
      subgroups = [],
      subgroup,
      group,
      node,
      transition;

  for (var j = 0, m = this.length; j < m; j++) {
    subgroups.push(subgroup = []);
    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
      if (node = group[i]) {
        transition = Object.create(node.__transition__[id0]);
        transition.delay += transition.duration;
        d3_transitionNode(node, i, id1, transition);
      }
      subgroup.push(node);
    }
  }

  return d3_transition(subgroups, id1);
};
