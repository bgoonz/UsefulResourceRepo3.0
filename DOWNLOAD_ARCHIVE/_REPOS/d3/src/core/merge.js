var D3Merge = function(arrays) {
  return Array.prototype.concat.apply([], arrays);
};

module.exports = D3Merge;
