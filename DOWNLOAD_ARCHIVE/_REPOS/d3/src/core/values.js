var D3Values = function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
};

module.exports = D3Values;
