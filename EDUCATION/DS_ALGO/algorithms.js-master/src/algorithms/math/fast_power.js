const multiplicationOperator = (a, b) => a * b;

/**
 * Raise value to a positive integer power by repeated squaring.
 *
 * @param {*} base
 * @param {number} power
 * @param {function} [mul] - Multiplication function,
 *   standard multiplication operator by default.
 * @param {*} identity - Identity value, used when power == 0.
 *   If mul is not set, defaults to 1.
 * @return {*}
 */
const fastPower = (base, power, mul, identity) => {
  if (mul === undefined) {
    mul = multiplicationOperator;
    identity = 1;
  }
  if (power < 0 || Math.floor(power) !== power) {
    throw new Error("Power must be a positive integer or zero.");
  }

  // If the power is zero, identity value must be given (or set by default).
  if (!power) {
    if (identity === undefined) {
      throw new Error("The power is zero, but identity value not set.");
    }
    return identity;
  }

  // Iterative form of the algorithm avoids checking the same thing twice.
  let result;
  const multiplyBy = (value) => {
    result = result === undefined ? value : mul(result, value);
  };
  for (
    let factor = base;
    power > 0;
    power >>>= 1, factor = mul(factor, factor)
  ) {
    if (power & 1) {
      multiplyBy(factor);
    }
  }
  return result;
};

export default fastPower;
