function foo(done) {
  setTimeout(done, 5000);
}

function bar(done) {
  setTimeout(done, 1000);
}

function baz() {
  alert("all done!");
}

var gate = $AG(foo);

// later

gate.and(bar); // you can keep adding to the gate as much as you want...

// later

gate.then(baz); // ...until you start adding listeners

// later

gate.then(function () {
  // ...and you can have as many listeners for a gate as you want,
  // even if it comes after the gate is already open
  alert("already done awhile ago!");
});
