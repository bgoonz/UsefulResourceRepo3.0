console.log("Using imperative JS");

const printArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printArray([1, 2, 3, 4, 5]);

//how can we abstract the For flow? Can we use a callback for action?

console.log("Using functional JS");

const forEach = (array, action) => {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
};

const logItem = (item) => {
  console.log(item);
};

forEach([1, 2, 3, 4, 5], logItem);

//how can we abstract the For flow?
console.log("Finding the min value in an array - imperative");

const findMinArray = (array) => {
  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }

  return minValue;
};

console.log(findMinArray([8, 6, 4, 5, 9]));

console.log("Finding the min value in an array - functional ES2015");
const min_ = (array) => {
  return Math.min(...array);
};

//simplifying using arrow functions
const min = (arr) => Math.min(...arr);

console.log(min_([8, 6, 4, 5, 9]));
console.log(min([8, 6, 4, 5, 9]));

//concat + reduce
console.log("merge arrays - imperative");

const mergeArrays_ = (arrays) => {
  const count = arrays.length;
  const newArray = [];
  let k = 0;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      newArray[k++] = arrays[i][j];
    }
  }
  return newArray;
};

console.log(mergeArrays_([[1, 2, 3], [4, 5], [6]]));

console.log("merge arrays - using concat");
const mergeArraysConcat = (arrays) => {
  return arrays.reduce((p, n) => {
    return p.concat(n);
  });
};

console.log(mergeArraysConcat([[1, 2, 3], [4, 5], [6]]));

console.log("merge arrays - ES2015");

const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2, 3], [4, 5], [6]));

console.log("sum values of arrays - imperative");
const sumValues = (array) => {
  let total = array[0];
  for (let i = 1; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

console.log(sumValues([1, 2, 3, 4, 5]));

//reduce
console.log("sum values of arrays - functional");
const sum_ = (array) => {
  return array.reduce((a, b) => {
    return a + b;
  });
};

console.log(sum_([1, 2, 3, 4, 5]));

console.log("sum values of arrays - ES2015");
const sum = (arr) => arr.reduce((a, b) => a + b);

console.log(sum([1, 2, 3, 4, 5]));

//map
const daysOfWeek = [
  { name: "Monday", value: 1 },
  { name: "Tuesday", value: 2 },
  { name: "Wednesday", value: 7 },
];

const daysOfWeekValues_ = [];
for (let i = 0; i < daysOfWeek.length; i++) {
  daysOfWeekValues_.push(daysOfWeek[i].value);
}

//to
const daysOfWeekValues = daysOfWeek.map(({ value }) => {
  return value;
});
console.log(daysOfWeekValues);

//filter
const positiveNumbers_ = (array) => {
  const positive = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positive.push(array[i]);
    }
  }
  return positive;
};
console.log(positiveNumbers_([-1, 1, 2, -2]));

const positiveNumbers = (array) => {
  return array.filter((num) => {
    return num >= 0;
  });
};
console.log(positiveNumbers([-1, 1, 2, -2]));
