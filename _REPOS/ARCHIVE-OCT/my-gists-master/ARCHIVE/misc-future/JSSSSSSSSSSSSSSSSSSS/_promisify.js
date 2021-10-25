// freeze Array#slice, just in case of funny business later.
const _slice = Array.prototype.slice;
const getPromise = require("./_promise.js");

// deferred gets its own scope to prevent inadvertent capture in the closure
const deferred = (options) => {
  const Promise = getPromise();
  let resolve;
  let reject;

  const p = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  const pattern = options && options.pattern;
  const noError = options && options.noError;
  const cb = pattern
    ? function (err) {
        if (err && !noError) {
          return reject(err);
        }
        const result = {};
        let i;
        const offset = noError ? 0 : 1;
        for (i = 0; i < pattern.length; i++) {
          result[pattern[i]] = arguments[i + offset];
        }
        resolve(result);
      }
    : noError
    ? resolve
    : (err, val) => {
        if (err) {
          reject(err);
        } else {
          resolve(val);
        }
      };
  return { promise: p, callback: cb };
};
const promisify = (module.exports = (context, func, mandatoryArgs, options) => {
  if (options && options.callbackIsFirstArg) {
    // duplicate some code here so we don't have to process this unusual
    // situation at runtime in the common case.
    return function (cb) {
      if (typeof cb === "function") {
        return func.apply(context, arguments);
      }
      const d = deferred(options);
      const a = _slice.call(arguments, 0);
      a.unshift(d.callback);
      func.apply(context, a);
      return d.promise;
    };
  }
  return function () {
    const cb = arguments[arguments.length - 1];
    if (typeof cb === "function") {
      return func.apply(context, arguments);
    }
    // ooh, promises.
    const d = deferred(options);
    const a = _slice.call(arguments, 0);
    while (a.length < mandatoryArgs) {
      a.push(undefined);
    }
    a.push(d.callback);
    const retval = func.apply(context, a);
    if (options && options.returnsObject) {
      // it would be nice to have a better convention here
      Object.defineProperty(retval, "promise", { value: d.promise });
      return retval;
    }
    return d.promise;
  };
});
