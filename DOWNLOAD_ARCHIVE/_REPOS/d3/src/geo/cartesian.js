// TODO
// cross and scale return new vectors,
// whereas add and normalize operate in-place

function d3_geo_cartesian(spherical) {
  var _u03bb = spherical[0],
      _u03c6 = spherical[1],
      cos_u03c6 = Math.cos(_u03c6);
  return [
    cos_u03c6 * Math.cos(_u03bb),
    cos_u03c6 * Math.sin(_u03bb),
    Math.sin(_u03c6)
  ];
}

function d3_geo_cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function d3_geo_cartesianCross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

function d3_geo_cartesianAdd(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  a[2] += b[2];
}

function d3_geo_cartesianScale(vector, k) {
  return [
    vector[0] * k,
    vector[1] * k,
    vector[2] * k
  ];
}

function d3_geo_cartesianNormalize(d) {
  var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l;
  d[1] /= l;
  d[2] /= l;
}

exports._cartesian = d3_geo_cartesian;
exports._cartesianDot = d3_geo_cartesianDot;
exports._cartesianCross = d3_geo_cartesianCross;
exports._cartesianAdd = d3_geo_cartesianAdd;
exports._cartesianScale = d3_geo_cartesianScale;
exports._cartesianNormalize = d3_geo_cartesianNormalize;
