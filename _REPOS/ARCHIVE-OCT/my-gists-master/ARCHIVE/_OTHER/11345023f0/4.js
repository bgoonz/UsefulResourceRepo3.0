// For further color on this, consider:

(function (a) {
  var a;
  console.log(a);
})(2); // 2

// There, clearly, the `a` param and the `var a` local variable behave
// hoisting wise as if they're in the same scope and the `var a` is
// redundant and skipped.
