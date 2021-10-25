// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.
const find = (elements, cb) => {
  let check = elements[0];
  for (let i = 0; i < elements.length; i++) {
    check = cb(elements[i]);
    if (cb(elements[i]) === true) {
      return cb(elements[i]);
    }
  }
  return undefined;
};
