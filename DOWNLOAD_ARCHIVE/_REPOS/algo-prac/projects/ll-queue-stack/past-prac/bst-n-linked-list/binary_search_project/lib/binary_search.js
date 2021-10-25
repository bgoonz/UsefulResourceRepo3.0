function binarySearch(array, target) {
  if (!array.length) return false;

  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(left, target);
  } else if (target > array[midIdx]) {
    return binarySearch(right, target);
  } else {
    return true;
  }
}

[5, 10, 12, 15, 20, 30, 70], 12;

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
  if (lo === hi) return -1;

  let midIdx = Math.floor((lo + hi) / 2);

  if (target < array[midIdx]) {
    return binarySearchIndex(array, target, lo, midIdx);
  } else if (target > array[midIdx]) {
    return binarySearchIndex(array, target, midIdx + 1, hi);
  } else {
    return midIdx;
  }
}

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12));
console.log(binarySearchIndex([], 12));

module.exports = {
  binarySearch,
  binarySearchIndex,
};
