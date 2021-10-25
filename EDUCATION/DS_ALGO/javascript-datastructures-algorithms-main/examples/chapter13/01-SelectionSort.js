const { bubbleSort } = PacktDataStructuresAlgorithms;

function createNonSortedArray() {
  const array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const array = bubbleSort(createNonSortedArray());
console.log(array);
