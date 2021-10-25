function* foo() {
  throw "Oops!";
}

function* bar() {
  try {
    // QUESTION: but also... I *can* catch an error passing through, if I want to!?
    yield* foo();
  } catch (err) {
    console.log("Error: " + err);
  }
}

var it = bar();

it.next(); // Error: Oops!
