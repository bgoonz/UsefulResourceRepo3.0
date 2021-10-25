import Comparator from "../../util/comparator";

/**
 * Bubble sort algorithm O(n^2)
 */
const bubbleSort = (a, comparatorFn) => {
  const comparator = new Comparator(comparatorFn);
  const n = a.length;
  let bound = n - 1;
  let check = false;
  for (let i = 0; i < n - 1; i++) {
    let newbound = 0;
    for (let j = 0; j < bound; j++) {
      if (comparator.greaterThan(a[j], a[j + 1])) {
        const tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
        newbound = j;
        check = true;
      }
    }
    if (!check) return a;
    bound = newbound;
  }
  return a;
};

export default bubbleSort;
