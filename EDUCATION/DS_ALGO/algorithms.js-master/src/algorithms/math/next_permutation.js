import Comparator from "../../util/comparator";

/**
 * Narayana's algorithm computes the subsequent permutation
 *   in lexicographical order.
 * Complexity: O(n).
 *
 * @param {Array} array
 * @param {function} [compareFn] - Custom compare function.
 * @return {boolean} Boolean flag indicating whether the algorithm succeeded,
 *   true unless the input permutation is lexicographically the last one.
 */
const nextPermutation = (array, compareFn) => {
  if (!array.length) {
    return false;
  }
  const cmp = new Comparator(compareFn);

  // Find pivot and successor indices.
  let pivot = array.length - 1;
  while (pivot && cmp.greaterThanOrEqual(array[pivot - 1], array[pivot])) {
    pivot -= 1;
  }
  if (!pivot) {
    // Permutation is sorted in descending order.
    return false;
  }
  const pivotValue = array[--pivot];
  let successor = array.length - 1;
  while (cmp.lessThanOrEqual(array[successor], pivotValue)) {
    successor -= 1;
  }

  // Swap values.
  array[pivot] = array[successor];
  array[successor] = pivotValue;

  // Reverse the descending part.
  for (let left = pivot, right = array.length; ++left < --right; ) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  return true;
};

export default nextPermutation;
