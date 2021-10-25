/**
 * Finds the maximum key from an array of objects
 *
 * Asymptotic Complexity: O(array.length)
 *
 * @param Array
 * @return Integer
 */
const maximumKey = (array) => {
  let max = array[0].key;
  const length = array.length;

  for (let i = 1; i < length; i++) {
    if (array[i].key > max) {
      max = array[i].key;
    }
  }

  return max;
};

/**
 * Sorts an array of objects according to their 'key' property
 * Every object inside the array MUST have the 'key' property with
 * a integer value.
 *
 * Execution Time: (3 * array.length - 1)
 * Asymptotic Complexity: O(array.length + maximumKey)
 *
 * @param Array
 * @return Array
 */
const countingSort = (array) => {
  const max = maximumKey(array);
  const auxiliaryArray = [];
  const length = array.length;
  let i;

  for (i = 0; i < length; i++) {
    const position = array[i].key;

    if (auxiliaryArray[position] === undefined) {
      auxiliaryArray[position] = [];
    }

    auxiliaryArray[position].push(array[i]);
  }

  array = [];
  let pointer = 0;

  for (i = 0; i <= max; i++) {
    if (auxiliaryArray[i] !== undefined) {
      const localLength = auxiliaryArray[i].length;

      for (let j = 0; j < localLength; j++) {
        array[pointer++] = auxiliaryArray[i][j];
      }
    }
  }

  return array;
};

export default countingSort;
