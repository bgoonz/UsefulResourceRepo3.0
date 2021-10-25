var d3_transitionPrototype = require("./transition")._transitionPrototype;

d3_transitionPrototype.text = function(value) {
  return require("./transition-tween")._tween(this, "text", value, d3_transition_text);
};

function d3_transition_text(b) {
  if (b == null) b = "";
  return function() { this.textContent = b; };
}
