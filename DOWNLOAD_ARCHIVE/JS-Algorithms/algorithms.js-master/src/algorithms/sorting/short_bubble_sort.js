import Comparator from "../../util/comparator";

/**
 * short bubble sort algorithm
 * worst: O(n^2) best: O(n)
 */
function shortBubbleSort(array, comparatorFn) {
  const comparator = new Comparator(comparatorFn);
  const length = array.length - 1;
  let i = 0;

  for (i; i < length; i++) {
    const current = array[i];
    const next = array[i + 1];

    /**
     * If the current value if greater than the next:
     * - set current value to next value;
     * - and set next value to current value;
     * - then reset iterator counter to rescan for values to be sorted.
     */

    if (comparator.greaterThan(current, next)) {
      array[i + 1] = current;
      array[i] = next;
      i = -1;
    }
  }

  return array;
}

export default shortBubbleSort;
