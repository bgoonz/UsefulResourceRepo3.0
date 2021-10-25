/**
 * Newton's method to calculate square root
 *
 * @param Number n - the number which the square root should be calculated
 * @param Number tolerance - The error margin accepted (Default 1e-7)
 * @param Number maxIterations - The max number of iterations (Default 1e7)
 */
const sqrt = (n, tolerance = 1e-7, maxIterations = 1e7) => {
  let upperBound = n;
  let lowerBound = 0;

  let i = 0;
  let square;
  let x;
  do {
    i++;
    x = (upperBound - lowerBound) / 2 + lowerBound;
    square = x * x;
    if (square < n) lowerBound = x;
    else upperBound = x;
  } while (Math.abs(square - n) > tolerance && i < maxIterations);

  // Checks if the number is a perfect square to return the exact root
  const roundX = Math.round(x);
  if (roundX * roundX === n) x = roundX;

  return x;
};

export default sqrt;
