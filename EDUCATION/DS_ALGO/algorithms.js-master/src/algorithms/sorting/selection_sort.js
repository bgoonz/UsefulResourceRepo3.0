import Comparator from "../../util/comparator";
/**
 * Selection sort algorithm O(n^2)
 */
const selectionSort = (a, comparatorFn) => {
  const comparator = new Comparator(comparatorFn);
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (comparator.greaterThan(a[min], a[j])) {
        min = j;
      }
    }
    if (min !== i) {
      const tmp = a[i];
      a[i] = a[min];
      a[min] = tmp;
    }
  }

  return a;
};

export default selectionSort;
