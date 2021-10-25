import Comparator from "../../util/comparator";

/**
 * Insertion sort algorithm O(n + d)
 */
const insertionSort = (vector, comparatorFn) => {
  const comparator = new Comparator(comparatorFn);

  for (let i = 1, len = vector.length; i < len; i++) {
    const aux = vector[i];
    let j = i;

    while (j > 0 && comparator.lessThan(aux, vector[j - 1])) {
      vector[j] = vector[j - 1];
      j--;
    }

    vector[j] = aux;
  }

  return vector;
};

export default insertionSort;
