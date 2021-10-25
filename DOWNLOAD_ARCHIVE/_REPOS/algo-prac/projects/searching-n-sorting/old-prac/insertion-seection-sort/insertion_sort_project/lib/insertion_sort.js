function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    for (j = i - 1; j >= 0 && currentNum < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentNum;
  }
  return arr;
}

module.exports = {
  insertionSort,
};
