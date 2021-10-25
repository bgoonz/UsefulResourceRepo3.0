const countingSort = require("../../..").Sorting.countingSort;
import assert from "assert";

const firstObject = {
  someProperty: "The",
  key: 12,
};

const secondObject = {
  someProperty: "chosen",
  key: 66,
};

const thirdObject = {
  someProperty: "one!",
  key: 43,
};

let array = [
  thirdObject,
  firstObject,
  secondObject,
  secondObject,
  firstObject,
  firstObject,
];

describe("Counting Sort", () => {
  it("sorts the given array", () => {
    array = countingSort(array);

    // Asserts that the array is truly sorted
    assert.deepEqual(array.indexOf(firstObject), 0);
    assert.deepEqual(array.indexOf(secondObject), 4);
    assert.deepEqual(array.indexOf(thirdObject), 3);
    assert.deepEqual(array.indexOf({ key: 99 }), -1);
  });
});
