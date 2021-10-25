function foo(done) {
  setTimeout(done, 5000);
}

function bar(done) {
  setTimeout(done, 1000);
}

function baz() {
  alert("all done!");
}

// this means: execute `foo` and `bar`, wait for both of them to signal completion, then do `baz`
$AG(foo, bar).then(baz);
