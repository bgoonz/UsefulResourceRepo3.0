/**
 * Different implementations for finding the divisors
 */

/**
 * Find all the divisors of a natural number
 * This solution has a cost of O(n)
 * This solution uses the naive method to print all divisors
 *
 * @param {number}
 * @returns {number[]} - returns the divisors
 */

const findDivisorsGeneric = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

/**
 * Find all the divisors of a natural number
 * This solution has a cost of O(sqrt(n))
 * This method returns the divisors in an unsorted manner.
 * All divisors of a number are present in pairs.
 * Eg : For n=16: (1, 16), (2, 8), (4, 4).
 *      Include only one of the repeated divisors if any.
 *
 * @param {number}
 * @returns {number[]} - returns the divisors
 */

const findDivisorsByPairingUnsorted = (number) => {
  const divisors = [];

  const sqrt = Math.sqrt(number);

  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      divisors.push(i);
      if (i !== sqrt) {
        divisors.push(number / i);
      }
    }
  }
  return divisors;
};

/**
 * Find all the divisors of a natural number
 * This solution has a cost of O(sqrt(n))
 * This method returns the array in a sorted manner
 * All divisors of a number are present in pairs
 * (divisorLessThanSqrt, divisorGreaterThanSqrt)
 * Reverse the divisorGreaterThanSqrt array and append to divisorLessThanSqrt
 * to sort the result
 * Eg : For n=16: (1, 16), (2, 8), (4, 4).
 * Include only one of the repeated divisors if any
 *
 * @param {number}
 * @returns {number[]} - returns the divisors
 */

const findDivisorsByPairingSorted = (number) => {
  const divisorsLessThanSqrt = [];
  const divisorsMoreThanSqrt = [];

  const sqrt = Math.sqrt(number);
  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      divisorsLessThanSqrt.push(i);
      if (i !== sqrt) {
        divisorsMoreThanSqrt.unshift(number / i);
      }
    }
  }

  return divisorsLessThanSqrt.concat(divisorsMoreThanSqrt);
};

// Use findDivisorsGeneric as the default implementation
findDivisorsGeneric.pairingUnsorted = findDivisorsByPairingUnsorted;
findDivisorsGeneric.pairingSorted = findDivisorsByPairingSorted;
export default findDivisorsGeneric;
