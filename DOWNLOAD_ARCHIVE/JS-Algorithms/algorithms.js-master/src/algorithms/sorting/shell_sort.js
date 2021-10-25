import Comparator from "../../util/comparator";
/**
 * shell sort  worst:O(n lg n)  best:O(n)
 */
const shellSort = (array, comparatorFn) => {
  const comparator = new Comparator(comparatorFn);
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      const temp = array[i];
      let j = i - gap;
      while (j >= 0 && comparator.greaterThan(array[j], temp)) {
        array[j + gap] = array[j];
        j -= gap;
      }
      array[j + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return array;
};

export default shellSort;
