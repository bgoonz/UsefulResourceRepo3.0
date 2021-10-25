// cache algorithm results
const cache = { 1: 1 };

/**
 * Collatz Conjecture algorithm
 *
 * @param Number
 * @return Number
 */
function calculateCollatzConjecture(number) {
  if (!(number in cache)) {
    if (number % 2 === 0) cache[number] = number >> 1;
    else cache[number] = number * 3 + 1;
  }

  return cache[number];
}

/**
 * Generate Collatz Conjecture
 *
 * @param Number
 * @return Array
 */
function generateCollatzConjecture(number) {
  const collatzConjecture = [];

  do {
    number = calculateCollatzConjecture(number);
    collatzConjecture.push(number);
  } while (number !== 1);

  return collatzConjecture;
}

// export Collatz Conjecture methods
export default {
  generate: generateCollatzConjecture,
  calculate: calculateCollatzConjecture,
};
