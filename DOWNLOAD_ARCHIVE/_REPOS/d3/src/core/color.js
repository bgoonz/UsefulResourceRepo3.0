function d3_Color() {}

d3_Color.prototype.toString = function() {
  return this.rgb() + "";
};

exports._Color = d3_Color;
