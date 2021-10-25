var D3Selection = require("./selection"),
    d3_selectionPrototype = D3Selection._selectionPrototype,
    d3_document = require("./core")._document,
    d3_select = D3Selection._select,
    D3NS = require("./ns");

// TODO insert(node, function)?
// TODO insert(function, string)?
// TODO insert(function, function)?
d3_selectionPrototype.insert = function(name, before) {
  name = D3NS.qualify(name);

  function insert() {
    return this.insertBefore(
        d3_document.createElementNS(this.namespaceURI, name),
        d3_select(before, this));
  }

  function insertNS() {
    return this.insertBefore(
        d3_document.createElementNS(name.space, name.local),
        d3_select(before, this));
  }

  return this.select(name.local ? insertNS : insert);
};
