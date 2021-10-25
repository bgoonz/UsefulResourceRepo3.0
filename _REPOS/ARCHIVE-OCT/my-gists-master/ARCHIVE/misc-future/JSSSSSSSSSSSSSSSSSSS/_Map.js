const getNative = require("./_getNative"),
  root = require("./_root");

/* Built-in method references that are verified to be native. */
const Map = getNative(root, "Map");

module.exports = Map;
