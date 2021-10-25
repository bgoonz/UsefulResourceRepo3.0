import { Math as math } from "../../..";
const findDivisors = math.findDivisors;
import assert from "assert";

describe("Find divisors", () => {
  describe("#Generic()", () => {
    it("returns the divisors of the number", () => {
      assert.deepStrictEqual(findDivisors(-2), []);
      assert.deepStrictEqual(findDivisors(0), []);
      assert.deepStrictEqual(findDivisors(1), [1]);
      assert.deepStrictEqual(findDivisors(2), [1, 2]);
      assert.deepStrictEqual(findDivisors(3), [1, 3]);
      assert.deepStrictEqual(findDivisors(4), [1, 2, 4]);
      assert.deepStrictEqual(findDivisors(5), [1, 5]);
      assert.deepStrictEqual(
        findDivisors(100),
        [1, 2, 4, 5, 10, 20, 25, 50, 100]
      );
      assert.deepStrictEqual(findDivisors(182), [1, 2, 7, 13, 14, 26, 91, 182]);
    });
  });

  describe("#PairingUnsorted()", () => {
    it("returns the divisors of the number", () => {
      assert.deepStrictEqual(findDivisors.pairingUnsorted(-2), []);
      assert.deepStrictEqual(findDivisors.pairingUnsorted(0), []);
      assert.deepStrictEqual(findDivisors.pairingUnsorted(1), [1]);
      assert.deepStrictEqual(findDivisors.pairingUnsorted(2), [1, 2]);
      assert.deepStrictEqual(findDivisors.pairingUnsorted(3), [1, 3]);
      assert.deepStrictEqual(findDivisors.pairingUnsorted(4), [1, 4, 2]);
      assert.deepStrictEqual(findDivisors.pairingUnsorted(5), [1, 5]);
      assert.deepStrictEqual(
        findDivisors.pairingUnsorted(100),
        [1, 100, 2, 50, 4, 25, 5, 20, 10]
      );
      assert.deepStrictEqual(
        findDivisors.pairingUnsorted(182),
        [1, 182, 2, 91, 7, 26, 13, 14]
      );
    });
  });

  describe("#PairingSorted()", () => {
    it("returns the divisors of the number", () => {
      assert.deepStrictEqual(findDivisors.pairingSorted(-2), []);
      assert.deepStrictEqual(findDivisors.pairingSorted(0), []);
      assert.deepStrictEqual(findDivisors.pairingSorted(1), [1]);
      assert.deepStrictEqual(findDivisors.pairingSorted(2), [1, 2]);
      assert.deepStrictEqual(findDivisors.pairingSorted(3), [1, 3]);
      assert.deepStrictEqual(findDivisors.pairingSorted(4), [1, 2, 4]);
      assert.deepStrictEqual(findDivisors.pairingSorted(5), [1, 5]);
      assert.deepStrictEqual(
        findDivisors.pairingSorted(100),
        [1, 2, 4, 5, 10, 20, 25, 50, 100]
      );
      assert.deepStrictEqual(
        findDivisors.pairingSorted(182),
        [1, 2, 7, 13, 14, 26, 91, 182]
      );
    });
  });
});
