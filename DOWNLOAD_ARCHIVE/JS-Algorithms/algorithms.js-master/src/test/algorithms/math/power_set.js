import { Math as math } from "../../..";
const powerSet = math.powerSet;
import assert from "assert";

/**
 * Deep equal for arrays
 */
function testArrayEqual(a, b) {
  let arrayEqual = true;
  a.forEach((elem, index) => {
    if (a[index] !== b[index]) {
      arrayEqual = false;
    }
  });
  return arrayEqual && a.length === b.length;
}

/**
 * Tests if one array is an element of another
 */
function testArrayInArray(a, b) {
  let arrayInArray = false;
  b.forEach((array) => {
    if (testArrayEqual(a, array)) {
      arrayInArray = true;
    }
  });
  return arrayInArray;
}

describe("Power set", () => {
  describe("#iterative()", () => {
    it("returns the right elements of power set", () => {
      const zeroElementTest = powerSet([]);
      assert(zeroElementTest.length === 0);

      const oneElementTest = powerSet([0]);
      assert(testArrayInArray([], oneElementTest));
      assert(testArrayInArray([0], oneElementTest));
      assert(oneElementTest.length === 2);

      const twoElementTest = powerSet([0, 1]);
      assert(testArrayInArray([], twoElementTest));
      assert(testArrayInArray([0], twoElementTest));
      assert(testArrayInArray([1], twoElementTest));
      assert(testArrayInArray([0, 1], twoElementTest));
      assert(twoElementTest.length === 4);

      const threeElementTest = powerSet([0, 1, 2]);
      assert(testArrayInArray([], threeElementTest));
      assert(testArrayInArray([0], threeElementTest));
      assert(testArrayInArray([1], threeElementTest));
      assert(testArrayInArray([2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(testArrayInArray([0, 2], threeElementTest));
      assert(testArrayInArray([1, 2], threeElementTest));
      assert(testArrayInArray([0, 1, 2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(threeElementTest.length === 8);

      const fourElementTest = powerSet([0, 1, 2, 3]);
      assert(testArrayInArray([], fourElementTest));
      assert(testArrayInArray([0], fourElementTest));
      assert(testArrayInArray([1], fourElementTest));
      assert(testArrayInArray([2], fourElementTest));
      assert(testArrayInArray([3], fourElementTest));
      assert(testArrayInArray([0, 1], fourElementTest));
      assert(testArrayInArray([0, 2], fourElementTest));
      assert(testArrayInArray([0, 3], fourElementTest));
      assert(testArrayInArray([1, 2], fourElementTest));
      assert(testArrayInArray([1, 3], fourElementTest));
      assert(testArrayInArray([2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2], fourElementTest));
      assert(testArrayInArray([0, 1, 3], fourElementTest));
      assert(testArrayInArray([0, 2, 3], fourElementTest));
      assert(testArrayInArray([1, 2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2, 3], fourElementTest));
      assert(fourElementTest.length === 16);
    });
  });

  describe("#recursive()", () => {
    it("returns the right elements of power set", () => {
      const zeroElementTest = powerSet.recursive([]);
      assert(zeroElementTest.length === 0);

      const oneElementTest = powerSet.recursive([0]);
      assert(testArrayInArray([], oneElementTest));
      assert(testArrayInArray([0], oneElementTest));
      assert(oneElementTest.length === 2);

      const twoElementTest = powerSet.recursive([0, 1]);
      assert(testArrayInArray([], twoElementTest));
      assert(testArrayInArray([0], twoElementTest));
      assert(testArrayInArray([1], twoElementTest));
      assert(testArrayInArray([0, 1], twoElementTest));
      assert(twoElementTest.length === 4);

      const threeElementTest = powerSet.recursive([0, 1, 2]);
      assert(testArrayInArray([], threeElementTest));
      assert(testArrayInArray([0], threeElementTest));
      assert(testArrayInArray([1], threeElementTest));
      assert(testArrayInArray([2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(testArrayInArray([0, 2], threeElementTest));
      assert(testArrayInArray([1, 2], threeElementTest));
      assert(testArrayInArray([0, 1, 2], threeElementTest));
      assert(testArrayInArray([0, 1], threeElementTest));
      assert(threeElementTest.length === 8);

      const fourElementTest = powerSet.recursive([0, 1, 2, 3]);
      assert(testArrayInArray([], fourElementTest));
      assert(testArrayInArray([0], fourElementTest));
      assert(testArrayInArray([1], fourElementTest));
      assert(testArrayInArray([2], fourElementTest));
      assert(testArrayInArray([3], fourElementTest));
      assert(testArrayInArray([0, 1], fourElementTest));
      assert(testArrayInArray([0, 2], fourElementTest));
      assert(testArrayInArray([0, 3], fourElementTest));
      assert(testArrayInArray([1, 2], fourElementTest));
      assert(testArrayInArray([1, 3], fourElementTest));
      assert(testArrayInArray([2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2], fourElementTest));
      assert(testArrayInArray([0, 1, 3], fourElementTest));
      assert(testArrayInArray([0, 2, 3], fourElementTest));
      assert(testArrayInArray([1, 2, 3], fourElementTest));
      assert(testArrayInArray([0, 1, 2, 3], fourElementTest));
      assert(fourElementTest.length === 16);
    });
  });
});
