import sortTestCase from "./sort.testcase.js";
const recursiveInsertionSort = require("../../src/sorting/" +
  "recursive-insertionsort.js").recursiveInsertionSort;

sortTestCase(recursiveInsertionSort, "Recursive insertion sort");
