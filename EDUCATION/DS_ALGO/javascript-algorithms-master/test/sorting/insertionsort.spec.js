import sortTestCase from "./sort.testcase.js";
const insertionSort = require("../../src/sorting/" +
  "insertionsort.js").insertionSort;

sortTestCase(insertionSort, "Insertion sort");
