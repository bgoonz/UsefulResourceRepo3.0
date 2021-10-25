var D3Keys = function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
};

module.exports = D3Keys;
