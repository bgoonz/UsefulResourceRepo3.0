// Without cheating by running the code,
// what do these 3 result in?

function foo(a) {
  a();
  function a() {
    console.log("yay");
  }
}

foo(); // ??
foo(undefined); // ??
foo(function () {
  console.log("bam");
}); // ??
