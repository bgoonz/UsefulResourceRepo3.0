function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// [2, -1, 4, 3, 7, 3]

// sorted side: [2]
// unsorted: [-1, 4, 3, 7, 3]
// each iteration, I have to go through the sorted side (arr.splice(1))
// and see if it's smaller than the value at index pos 0 of the sorted arr

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

selectionSort([2, -1, 4, 3, 7, 3]);

module.exports = {
  selectionSort,
  swap,
};
