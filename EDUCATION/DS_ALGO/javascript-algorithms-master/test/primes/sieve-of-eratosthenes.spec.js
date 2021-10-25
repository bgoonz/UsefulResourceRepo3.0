import { sieveOfEratosthenes } from "../../src/primes/sieve-of-eratosthenes";

describe("Sieve Of Eratosthenes", () => {
  "use strict";

  it("should give the right sequence of primes for limit 12", () => {
    expect(sieveOfEratosthenes(12).toString()).toEqual(
      [2, 3, 5, 7, 11].toString()
    );
  });

  it("should give the empty list for limit less or equal 1", () => {
    expect(sieveOfEratosthenes(-12).toString()).toEqual([].toString());
    expect(sieveOfEratosthenes(0).toString()).toEqual([].toString());
    expect(sieveOfEratosthenes(1).toString()).toEqual([].toString());
  });

  it("sum of prime numbers up to 2000000 limit should be 142913828922", () => {
    const sieve = sieveOfEratosthenes(2000000);
    const sumOfPrimes = sieve.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });

    expect(sumOfPrimes).toEqual(142913828922);
  });
});
