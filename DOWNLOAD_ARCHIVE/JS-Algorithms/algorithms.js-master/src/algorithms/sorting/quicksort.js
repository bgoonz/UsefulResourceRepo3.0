import Comparator from "../../util/comparator";

/**
 * Swaps two elements in the array
 */
const swap = (array, x, y) => {
  const tmp = array[y];
  array[y] = array[x];
  array[x] = tmp;
};

/**
 * Chooses a pivot and makes every element that is
 * lower than the pivot move to its left, and every
 * greater element moves to its right
 *
 * @return Number the positon of the pivot
 */
const partition = (a, comparator, lo, hi) => {
  // pick a random element, swap with the rightmost and
  // use it as pivot
  swap(a, Math.floor(Math.random() * (hi - lo)) + lo, hi);
  const pivot = hi;

  // dividerPosition keeps track of the position
  // where the pivot should be inserted
  let dividerPosition = lo;

  for (let i = lo; i < hi; i++) {
    if (comparator.lessThan(a[i], a[pivot])) {
      swap(a, i, dividerPosition);
      dividerPosition++;
    }
  }
  swap(a, dividerPosition, pivot);
  return dividerPosition;
};

/**
 * Quicksort recursively sorts parts of the array in
 * O(n.lg n)
 */
const quicksortInit = (array, comparatorFn) => {
  const comparator = new Comparator(comparatorFn);

  return (function quicksort(array, lo, hi) {
    while (lo < hi) {
      const p = partition(array, comparator, lo, hi);
      // Chooses only the smallest partition to use recursion on and
      // tail-optimize the other. This guarantees O(log n) space in worst case.
      if (p - lo < hi - p) {
        quicksort(array, lo, p - 1);
        lo = p + 1;
      } else {
        quicksort(array, p + 1, hi);
        hi = p - 1;
      }
    }

    return array;
  })(array, 0, array.length - 1);
};

export default quicksortInit;
