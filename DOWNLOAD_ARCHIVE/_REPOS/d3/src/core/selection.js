var d3_arraySubclass = require("./array")._arraySubclass,
    d3_document = require("./core")._document;

function d3_selection(groups) {
  d3_arraySubclass(groups, d3_selectionPrototype);
  return groups;
}

var d3_select = function(s, n) { return n.querySelector(s); },
    d3_selectAll = function(s, n) { return n.querySelectorAll(s); },
    d3_selectRoot = d3_document.documentElement,
    d3_selectMatcher = d3_selectRoot.matchesSelector || d3_selectRoot.webkitMatchesSelector || d3_selectRoot.mozMatchesSelector || d3_selectRoot.msMatchesSelector || d3_selectRoot.oMatchesSelector,
    d3_selectMatches = function(n, s) { return d3_selectMatcher.call(n, s); };

// Prefer Sizzle, if available.
if (typeof Sizzle === "function") {
  d3_select = function(s, n) { return Sizzle(s, n)[0] || null; };
  d3_selectAll = function(s, n) { return Sizzle.uniqueSort(Sizzle(s, n)); };
  d3_selectMatches = Sizzle.matchesSelector;
}

var d3_selectionPrototype = [];

var D3Selection = function() {
  return require("./selection-root")._selectionRoot;
};

D3Selection.prototype = d3_selectionPrototype;

D3Selection._selectionPrototype = d3_selectionPrototype;
D3Selection._select = d3_select;
D3Selection._selectAll = d3_selectAll;
D3Selection._selectRoot = d3_selectRoot;
D3Selection._selectMatches = d3_selectMatches;
D3Selection._selection = d3_selection;

module.exports = D3Selection;
