/**
 * Checks whether a number is prime using a given primality test
 *
 * @param Function
 * @param Number
 *
 * @return Boolean
 */
const genericPrimalityTest = (primalityTest, n) => {
  if (n <= 1) {
    return false;
  }
  return primalityTest(n);
};

/**
 * Checks whether a number is prime using the naive algorithm O(n)
 *
 * @param Number
 *
 * @return Boolean
 */
const naiveTest = (n) => {
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * Checks whether a number is prime using the trial divison algorithm O(sqrt(n))
 *
 * @param Number
 *
 * @return Boolean
 */
const trialDivisionTest = (n) => {
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export default {
  naiveTest: genericPrimalityTest.bind(null, naiveTest),
  trialDivisionTest: genericPrimalityTest.bind(null, trialDivisionTest),
};
