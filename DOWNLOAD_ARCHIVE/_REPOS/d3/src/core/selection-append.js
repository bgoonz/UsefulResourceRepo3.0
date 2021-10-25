var d3_selectionPrototype = require("./selection")._selectionPrototype,
    d3_document = require("./core")._document,
    D3NS = require("./ns");

// TODO append(node)?
// TODO append(function)?
d3_selectionPrototype.append = function(name) {
  name = D3NS.qualify(name);

  function append() {
    return this.appendChild(d3_document.createElementNS(this.namespaceURI, name));
  }

  function appendNS() {
    return this.appendChild(d3_document.createElementNS(name.space, name.local));
  }

  return this.select(name.local ? appendNS : append);
};
