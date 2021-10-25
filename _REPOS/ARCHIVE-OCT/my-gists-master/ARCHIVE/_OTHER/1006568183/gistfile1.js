// This now works (in a conforming ES6 `for..of` environment)

function step() {
  return ++stepVal;
}

var stepVal = 0;

var isq = ASQ.iterable().then(step).then(step).then(step);

// if you try this code in ES6fiddle or traceur,
// uncomment the next line:
//isq[Symbol.iterator] = isq["@@iterator"];

for (var v of isq) {
  console.log(v);
}
// 1
// 2
// 3
