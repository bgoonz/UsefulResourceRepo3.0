// Allow the user to customize the Promise type returned by this library.
let mypromise = global.Promise;
module.exports = function getOrSetPromise(p) {
  if (p) {
    mypromise = p;
  }
  return mypromise;
};
