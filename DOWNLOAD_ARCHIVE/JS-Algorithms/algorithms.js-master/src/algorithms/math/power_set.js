/**
 * Iterative and recursive implementations of power set
 */

/**
 * Iterative power set calculation
 */
const powerSetIterative = (array) => {
  if (array.length === 0) {
    return [];
  }

  const powerSet = [];
  const cache = [];
  let i;

  for (i = 0; i < array.length; i++) {
    cache[i] = true;
  }

  for (i = 0; i < 2 ** array.length; i++) {
    powerSet.push([]);

    for (let j = 0; j < array.length; j++) {
      if (i % 2 ** j === 0) {
        cache[j] = !cache[j];
      }

      if (cache[j]) {
        powerSet[i].push(array[j]);
      }
    }
  }

  return powerSet;
};

/**
 * Recursive power set calculation
 */
const powerSetRecursive = (array) => {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [[], [array[0]]];
  }
  const powerSet = [];
  const firstElem = array[0];

  array.splice(0, 1);

  powerSetRecursive(array).forEach((elem) => {
    powerSet.push(elem);
    const withFirstElem = [firstElem];
    withFirstElem.push(...elem);
    powerSet.push(withFirstElem);
  });

  return powerSet;
};

// Use powerSetIterative as the default implementation
const powerSet = powerSetIterative;
powerSet.recursive = powerSetRecursive;
export default powerSet;
