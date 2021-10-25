import sortTestCase from "./sort.testcase.js";
const insertionBinarySort = require("../../src/sorting/" +
  "insertion-binary-sort.js").insertionBinarySort;

sortTestCase(insertionBinarySort, "Insertion binary sort");
