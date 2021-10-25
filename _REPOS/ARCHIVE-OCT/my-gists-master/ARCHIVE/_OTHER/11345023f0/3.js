(function (a) {
  a(); // yay
  function a() {
    console.log("yay");
  }
})(2);

// **********************
// Contents of the IIFE sorta "hoists" as:

var a;
a = 2;
function a() {
  console.log("yay");
}
a(); // yay
