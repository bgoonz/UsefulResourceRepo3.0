/**
 * Fisher-Yates shuffles the elements in an array
 * in O(n)
 */
const fisherYates = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
};

export default fisherYates;
