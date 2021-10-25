var obj = {
  _step: 0,
};

obj[Symbol.iterator] = function () {
  return {
    next: function () {
      return { value: ++obj._step, done: obj._step === 4 };
    },
  };
};

for (var v of obj) {
  console.log(v);
}

// Expect:
//   1
//   2
//   3
//   4

// Get (via traceur and es6fiddle):
//   1
//   2
//   3
