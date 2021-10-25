if (!Object.get) {
  Object.get = function (key, obj) {
    if (obj) {
      return obj[key];
    } else {
      // curry `key` for next call
      return Object.get.bind(null, key);
    }
  };
}

// Simple example:

var myObject = {
  a: 2,
};

Object.get("a", myObject); // 2
Object.get("a")(myObject); // 2

// More example comparison:

var p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve(myObject);
  }, 100);
});

// **************

p.then(function (obj) {
  return obj.a;
});

// vs.

p.then(Object.get("a"));
