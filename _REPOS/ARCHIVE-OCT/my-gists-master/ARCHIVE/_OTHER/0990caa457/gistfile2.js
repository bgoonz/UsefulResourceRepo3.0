function* foo() {
  var y = yield "Hello";
  console.log("y: " + y);
  return "World";
}

function* bar() {
  var x = yield* foo();
  // QUESTION: but if `foo()` returns (not yields), I *can* capture that "World" value into x!?
  console.log("x: " + x);
}

var it = bar();

it.next();
it.next("Oops!");
// y: Oops!
// x: World
