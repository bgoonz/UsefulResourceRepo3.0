/**
 * Extended Euclidean algorithm to calculate the solve of
 *   ax + by = gcd(a, b)
 * gcd(a, b) is the greatest common divisor of integers a and b.
 *
 * @param Number
 * @param Number
 *
 * @return {Number, Number}
 */
const extEuclid = (a, b) => {
  let s = 0;
  let oldS = 1;
  let t = 1;
  let oldT = 0;
  let r = b;
  let oldR = a;
  let quotient;
  let temp;
  while (r !== 0) {
    quotient = Math.floor(oldR / r);

    temp = r;
    r = oldR - quotient * r;
    oldR = temp;

    temp = s;
    s = oldS - quotient * s;
    oldS = temp;

    temp = t;
    t = oldT - quotient * t;
    oldT = temp;
  }

  return {
    x: oldS,
    y: oldT,
  };
};

export default extEuclid;
