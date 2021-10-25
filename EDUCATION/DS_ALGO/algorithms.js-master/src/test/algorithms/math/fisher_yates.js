import { Math as math } from "../../..";
const fisherYates = math.fisherYates;
import assert from "assert";

describe("Fisher-Yates", () => {
  it("shuffles the elements in the array in-place", () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    fisherYates(a);
    assert.notDeepEqual(a, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  describe("can be used as Array.suffle", () => {
    const a = [1, 2, 3, 4, 5];
    assert.equal(a.shuffle, undefined);
    /* eslint-disable no-extend-native */
    Array.prototype.shuffle = function () {
      fisherYates(this);
    };
    /* eslint-enable no-extend-native */
    a.shuffle();
    assert.notDeepEqual(a, [1, 2, 3, 4, 5]);
  });
});
