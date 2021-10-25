/**
 * Binary Search finds elements in sorted arrays in logarithmic
 * time (O(lg n))
 *
 * @param Array
 * @param Number|String
 *
 * @return Boolean
 */
const binarySearch = (sortedArray, element) => {
  let init = 0;
  let end = sortedArray.length - 1;

  while (end >= init) {
    const m = ((end - init) >> 1) + init;
    if (sortedArray[m] === element) return m;

    if (sortedArray[m] < element) init = m + 1;
    else end = m - 1;
  }

  return -1;
};

/**
 * lowerBound returns index of the first element greater than the search key
 * in logarithmic time (O(log n))
 *
 * @param Array
 * @param Number|String
 *
 * @return Number
 */
const lowerBound = (sortedArray, element) => {
  let lo = 0;
  let hi = sortedArray.length - 1;

  while (lo <= hi) {
    const mid = ((hi - lo) >> 1) + lo;
    if (sortedArray[mid] > element) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};

export default {
  binarySearch,
  lowerBound,
};
