function* foo() {
  var y = yield "Hello";
  console.log("y: " + y);
}

function* bar() {
  // QUESTION: why can't I capture `x` here? It passes right on through (in both directions)!
  var x = yield* foo();
  // Neither the "Hello" nor the "Oops!" get assigned into `x`.
  console.log("x: " + x);
}

var it = bar();

it.next();
it.next("Oops!");
// y: Oops!
// x: undefined
