var d3_arraySubclass = require("./array")._arraySubclass,
    d3_selectionPrototype = require("./selection")._selectionPrototype;

function d3_selection_enter(selection) {
  d3_arraySubclass(selection, d3_selection_enterPrototype);
  return selection;
}

var d3_selection_enterPrototype = [];

var D3SelectionEnter = d3_selection_enter;
D3SelectionEnter.prototype = d3_selection_enterPrototype;

d3_selection_enterPrototype.append = d3_selectionPrototype.append;
d3_selection_enterPrototype.insert = d3_selectionPrototype.insert;
d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
d3_selection_enterPrototype.node = d3_selectionPrototype.node;

D3SelectionEnter._enterPrototype = d3_selection_enterPrototype;
D3SelectionEnter._enter = d3_selection_enter;

module.exports = D3SelectionEnter;
