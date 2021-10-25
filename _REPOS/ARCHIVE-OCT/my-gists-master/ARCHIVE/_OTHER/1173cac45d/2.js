class BetterPromise extends Promise {
  static resolve(v) {
    return new this[Symbol.species](function c(res) {
      res(v);
    });
  }

  static reject(v) {
    return new this[Symbol.species](function c(res, rej) {
      rej(v);
    });
  }

  static try(fn) {
    return new this[Symbol.species](function c(res) {
      res(fn());
    });
  }

  static deferred() {
    var resolve;
    var reject;
    var pr = new this[Symbol.species](function c(res, rej) {
      resolve = res;
      reject = rej;
    });
    return { resolve, reject, pr };
  }

  static lift(fn) {
    return (...args) => {
      return new this[Symbol.species](function c(res, rej) {
        fn(...args, function cb(err, any) {
          if (err) rej(err);
          else res(any);
        });
      });
    };
  }

  static control(fn) {
    return (...args) => {
      var token = new AbortController();
      var pr = this[Symbol.species].try(function c() {
        return fn(token.signal, ...args);
      });
      return { pr, cancel: token.abort.bind(token) };
    };
  }

  constructor(fn) {
    super(function c(res, rej) {
      var resolution;
      var rejection;
      var syncComplete = false;
      var resolveCalled = false;
      var rejectCalled = false;

      try {
        fn(
          function resolve(v) {
            if (!syncComplete) {
              resolveCalled = true;
              resolution = v;
            } else {
              res(v);
            }
          },
          function reject(e) {
            if (!syncComplete) {
              rejectCalled = true;
              rejection = e;
            } else {
              rej(e);
            }
          }
        );
        syncComplete = true;
        if (resolveCalled) res(resolution);
        else if (rejectCalled) rej(rejection);
      } catch (err) {
        rej(err);
      }
    });
    this.__fulfilled_handlers = new WeakMap();
    this.__rejected_handlers = new WeakMap();
    this.__resolved_handlers = new WeakMap();
  }

  then(origOnFulfilled, origOnRejected) {
    var thenArgs = [];

    if (typeof origOnFulfilled == "function") {
      let onFulfilled = (...args) => {
        if (this.__fulfilled_handlers.has(origOnFulfilled)) {
          return origOnFulfilled(...args);
        }
        return args[0];
      };
      this.__fulfilled_handlers.set(origOnFulfilled, true);
      thenArgs.push(onFulfilled);
    } else if (origOnFulfilled instanceof Promise) {
      thenArgs.push(() => origOnFulfilled);
    } else {
      thenArgs.push(undefined);
    }

    if (typeof origOnRejected == "function") {
      let onRejected = (...args) => {
        if (this.__rejected_handlers.has(origOnRejected)) {
          return origOnRejected(...args);
        }
        return args[0];
      };
      this.__rejected_handlers.set(origOnRejected, true);
      thenArgs.push(onRejected);
    } else {
      thenArgs.push(undefined);
    }

    return super.then(...thenArgs);
  }

  catch(origOnRejected) {
    return this.then(undefined, origOnRejected);
  }

  finally(origOnResolved) {
    if (typeof origOnResolved == "function") {
      let onResolved = () => {
        if (this.__resolved_handlers.has(origOnResolved)) {
          return origOnResolved();
        }
      };
      this.__resolved_handlers.set(origOnResolved, true);
      return super.finally(onResolved);
    } else {
      return super.finally();
    }
  }

  thenLog() {
    return this.then(function then(v) {
      console.log(v);
      return v;
    });
  }

  catchLog() {
    return this.catch((e) => {
      console.error(e);
      return this.constructor[Symbol.species].reject(e);
    });
  }

  unthen(origOnFulfilled, origOnRejected) {
    if (typeof origOnFulfilled == "function") {
      if (this.__fulfilled_handlers.has(origOnFulfilled)) {
        this.__fulfilled_handlers.delete(origOnFulfilled);
      }
    }
    if (typeof origOnRejected == "function") {
      if (this.__rejected_handlers.has(origOnRejected)) {
        this.__rejected_handlers.delete(origOnRejected);
      }
    }

    return this;
  }

  uncatch(origOnRejected) {
    return unthen(undefined, origOnRejected);
  }

  unfinally(origOnResolved) {
    if (typeof origOnResolved == "function") {
      if (this.__resolved_handlers.has(origOnResolved)) {
        this.__resolved_handlers.delete(origOnResolved);
      }
    }
  }
}
