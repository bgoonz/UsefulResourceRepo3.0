var d3_selectionPrototype = require("./selection")._selectionPrototype,
    D3Ascending = require("./ascending");

d3_selectionPrototype.sort = function(comparator) {
  comparator = d3_selection_sortComparator.apply(this, arguments);
  for (var j = -1, m = this.length; ++j < m;) this[j].sort(comparator);
  return this.order();
};

function d3_selection_sortComparator(comparator) {
  if (!arguments.length) comparator = D3Ascending;
  return function(a, b) {
    return (!a - !b) || comparator(a.__data__, b.__data__);
  };
}
