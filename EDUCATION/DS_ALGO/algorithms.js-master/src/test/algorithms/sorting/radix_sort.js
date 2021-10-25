const radixSort = require("../../..").Sorting.radixSort;
import assert from "assert";

const firstObject = {
  someProperty: "The",
  key: 88541234132,
};

const secondObject = {
  someProperty: "winter",
  key: 90071992540992,
};

const thirdObject = {
  someProperty: "is",
  key: 0,
};

const fourthObject = {
  someProperty: "coming",
  key: 65234567,
  anotherProperty: "!",
};

describe("Radix Sort", () => {
  it("sorts the given array", () => {
    const sorted = radixSort([
      thirdObject,
      fourthObject,
      firstObject,
      secondObject,
      secondObject,
      firstObject,
      firstObject,
      fourthObject,
    ]);

    // Asserts that the array is truly sorted
    assert.deepEqual(sorted, [
      thirdObject,
      fourthObject,
      fourthObject,
      firstObject,
      firstObject,
      firstObject,
      secondObject,
      secondObject,
    ]);

    assert.deepEqual(radixSort([thirdObject, thirdObject]), [
      thirdObject,
      thirdObject,
    ]);
  });
});
