function* foo() {
  throw "from foo";
}

function* bar() {
  yield "from bar 1";
  yield* foo();
  yield "from bar 2";
}

var it = bar();

console.log(it.next().value); // from bar 1

try {
  console.log(it.next().value);
} catch (err) {
  console.log("err:", err); // err: from foo
}

// this is the line that exposes the different behavior
console.log(it.next().value);

// In Chrome:
// Uncaught Error: Generator is already running

// In FF:
// undefined
