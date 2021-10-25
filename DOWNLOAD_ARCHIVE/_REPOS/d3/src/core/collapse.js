function d3_collapse(s) {
  return s.trim().replace(/\s+/g, " ");
}

exports._collapse = d3_collapse;
