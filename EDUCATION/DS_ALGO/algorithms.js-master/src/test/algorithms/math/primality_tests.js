import root from "../../..";
const primalityTests = root.Math.primalityTests;
import assert from "assert";

const validate = (primalityTest) => {
  assert.equal(primalityTest(1), false);
  assert.equal(primalityTest(2), true);
  assert.equal(primalityTest(3), true);
  assert.equal(primalityTest(4), false);
  assert.equal(primalityTest(5), true);
  assert.equal(primalityTest(14), false);
  assert.equal(primalityTest(21), false);
  assert.equal(primalityTest(37), true);
  assert.equal(primalityTest(209), false);
  assert.equal(primalityTest(211), true);
};

describe("Primality Tests", () => {
  describe("#naiveTest()", () => {
    it("determines whether a number is prime", () => {
      validate(primalityTests.naiveTest);
    });
  });
  describe("#trialDivisionTest()", () => {
    it("determines whether a number is prime", () => {
      validate(primalityTests.trialDivisionTest);
    });
  });
});
