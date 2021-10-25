import root from "../../..";
const gcd = root.Math.gcd;
import assert from "assert";

describe("GCD", () => {
  it("calculates the GCD between two numbers", () => {
    assert.equal(gcd(1, 0), 1);
    assert.equal(gcd(2, 2), 2);
    assert.equal(gcd(2, 4), 2);
    assert.equal(gcd(4, 2), 2);
    assert.equal(gcd(5, 2), 1);
    assert.equal(gcd(10, 100), 10);
    assert.equal(gcd(10000000, 2), 2);
    assert.equal(gcd(7, 49), 7);
    assert.equal(gcd(7, 5), 1);
    assert.equal(gcd(35, 49), 7);
  });

  it("calculates the GCD between two numbers using the binary method", () => {
    const gcdb = gcd.binary;
    assert.equal(gcdb(1, 0), 1);
    assert.equal(gcdb(0, 1), 1);
    assert.equal(gcdb(0, 0), 0);
    assert.equal(gcdb(2, 2), 2);
    assert.equal(gcdb(2, 4), 2);
    assert.equal(gcdb(4, 2), 2);
    assert.equal(gcdb(5, 2), 1);
    assert.equal(gcdb(10, 100), 10);
    assert.equal(gcdb(10000000, 2), 2);
    assert.equal(gcdb(7, 49), 7);
    assert.equal(gcdb(7, 5), 1);
    assert.equal(gcdb(35, 49), 7);
  });
});
