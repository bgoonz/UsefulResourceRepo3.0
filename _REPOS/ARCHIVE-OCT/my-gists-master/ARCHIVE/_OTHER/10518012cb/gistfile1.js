// Without running this code, state what the order of printed numbers will be.

console.log("1");

new Promise(function (resolve) {
  console.log("2");
  resolve();
  console.log("3");
})
  .then(function () {
    console.log("4");
    var p = new Promise(function (resolve) {
      console.log("5");
      resolve();
      console.log("6");
    });
    console.log("7");
    return p;
  })
  .then(function () {
    console.log("8");
  });

console.log("9");
