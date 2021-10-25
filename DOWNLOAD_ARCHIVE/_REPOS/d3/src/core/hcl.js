var d3_Color = require("./color")._Color,
    d3_radians = require("./core")._radians;

var D3HCL = function(h, c, l) {
  return arguments.length === 1
      ? (h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l)
      : (h instanceof require("./lab")._Lab ? require("./lab")._hcl(h.l, h.a, h.b)
      : require("./lab")._hcl((h = require("./rgb")._lab((h = require("./rgb")(h)).r, h.g, h.b)).l, h.a, h.b)))
      : d3_hcl(+h, +c, +l);
};

function d3_hcl(h, c, l) {
  return new d3_Hcl(h, c, l);
}

function d3_Hcl(h, c, l) {
  this.h = h;
  this.c = c;
  this.l = l;
}

var d3_hclPrototype = d3_Hcl.prototype = new d3_Color;

d3_hclPrototype.brighter = function(k) {
  return d3_hcl(this.h, this.c, Math.min(100, this.l + require("./lab")._K * (arguments.length ? k : 1)));
};

d3_hclPrototype.darker = function(k) {
  return d3_hcl(this.h, this.c, Math.max(0, this.l - require("./lab")._K * (arguments.length ? k : 1)));
};

d3_hclPrototype.rgb = function() {
  return d3_hcl_lab(this.h, this.c, this.l).rgb();
};

function d3_hcl_lab(h, c, l) {
  return require("./lab")._lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
}

D3HCL._Hcl = d3_Hcl;
D3HCL._hcl = d3_hcl;
D3HCL._lab = d3_hcl_lab;

module.exports = D3HCL;
