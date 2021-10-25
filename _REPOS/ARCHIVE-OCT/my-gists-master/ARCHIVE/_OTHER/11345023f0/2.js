var a = 2;

a(); // TypeError

function a() {
  console.log("yay");
}

// **********************
// Hoists as:

function a() {
  console.log("yay");
}
var a;
a = 2;
a(); // TypeError
