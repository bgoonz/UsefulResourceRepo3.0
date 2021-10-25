import gcd from "./gcd.js";

/**
 * Calcule the Least Common Multiple with a given Greatest Common Denominator
 * function
 *
 * @param Number
 * @param Number
 * @param Function
 *
 * @return Number
 */
const genericLCM = (gcdFunction, a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  return (a / gcdFunction(a, b)) * b;
};

/**
 * Algorithm to calculate Least Common Multiple based on Euclidean algorithm
 * calls the generic LCM function passing the division based GCD calculator
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
const lcmDivisionBased = genericLCM.bind(null, gcd);

/**
 * Algorithm to calculate Least Common Multiple based on Stein's Algorithm
 * calls the generic LCM function passing the binary interative GCD calculator
 *
 * @param Number
 * @param Number
 *
 * @return Number
 */
const lcmBinaryIterative = genericLCM.bind(null, gcd.binary);

const lcm = lcmDivisionBased;
lcm.binary = lcmBinaryIterative;
export default lcm;
