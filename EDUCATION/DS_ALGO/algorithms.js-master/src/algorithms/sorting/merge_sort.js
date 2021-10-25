import Comparator from "../../util/comparator";

const merge = (a, b, comparator) => {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < a.length && j < b.length) {
    result.push(comparator.lessThan(a[i], b[j]) ? a[i++] : b[j++]);
  }

  // Concats the elements from the sub-array
  // that has not been included yet
  return result.concat(i < a.length ? a.slice(i) : b.slice(j));
};

/**
 * Merge sort
 * O(n.lgn)
 */
const mergeSortInit = (a, compareFn) => {
  const comparator = new Comparator(compareFn);

  return (function mergeSort(a) {
    if (a.length > 1) {
      const middle = a.length >> 1;
      const left = mergeSort(a.slice(0, middle));
      const right = mergeSort(a.slice(middle));
      a = merge(left, right, comparator);
    }

    return a;
  })(a);
};

export default mergeSortInit;
