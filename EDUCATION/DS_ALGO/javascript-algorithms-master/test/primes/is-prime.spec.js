import { isPrime } from "../../src/primes/is-prime";

describe("Advanced (optimised) method that checks number on prime", () => {
  "use strict";

  it("should give true for number 104743", () => {
    expect(isPrime(104743)).toBe(true);
  });

  it("should give false for number 104744", () => {
    expect(isPrime(104744)).toBe(false);
  });

  it("the 10001st prime number should be 104743", () => {
    let count = 1; //we know that 2 is prime
    let value = 1;

    while (count < 10001) {
      value += 2;

      if (isPrime(value)) {
        count += 1;
      }
    }

    expect(value).toEqual(104743);
  });
});
