//*************** o(1)
function increment(num) {
  console.log(`cost for increment with input ${num} is 1`);
  return ++num;
}

increment(1);
increment(2);

//*************** o(n)

function createNonSortedArray(size) {
  const array = [];

  for (let i = size; i > 0; i--) {
    array[i] = i;
  }

  return array;
}

function sequentialSearch(array, item) {
  let cost = 0;
  for (let i = 0; i < array.length; i++) {
    cost++;
    if (item === array[i]) {
      //{1}
      return i;
    }
  }
  console.log(
    `cost for sequentialSearch with input size ${array.length} is ${cost}`
  );
  return -1;
}

const array = createNonSortedArray(99);
sequentialSearch(array, -1);

//*************** o(nˆ2)

function swap(array, index1, index2) {
  const aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
}

function bubbleSort(array) {
  const length = array.length;
  let cost = 0;
  for (let i = 0; i < length; i++) {
    //{1}
    cost++;
    for (let j = 0; j < length - 1; j++) {
      //{2}
      cost++;
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  console.log(`cost for bubbleSort with input size ${length} is ${cost}`);
}

const array1 = createNonSortedArray(99);
const array2 = createNonSortedArray(999);
const array3 = createNonSortedArray(9999);
bubbleSort(array1);
bubbleSort(array2);
bubbleSort(array3);
