// @ts-check
/* eslint-disable */

//* ****** EcmaScript 2015 (ES6): Default Parameter Values (https://goo.gl/AP5EYb)
function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}
console.log(sum(4, 2)); // outputs 9

// function above is the same as
function sum2(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 2;
  if (z === undefined) z = 3;
  return x + y + z;
}
console.log(sum2(4, 2)); // outputs 9

// or
function sum3(...args) {
  const x = args.length > 0 && args[0] !== undefined ? args[0] : 1;
  const y = args.length > 1 && args[1] !== undefined ? args[1] : 2;
  const z = args.length > 2 && args[2] !== undefined ? args[2] : 3;

  return x + y + z;
}
console.log(sum3(4, 2)); // outputs 9

//* ****** EcmaScript 6: spread operator ('...') (https://goo.gl/8equk5)
let params = [3, 4, 5];
console.log(sum(...params)); // ES2015
console.log(sum(...params)); // ES5

let numbers = [1, 2, ...params]; // pushing values into array
console.log(numbers);

//* ****** EcmaScript 6: rest parameter ('...') (https://goo.gl/LaJZqU)
function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, "hello", true, 7)); // outputs 9;

// code above is the same as ES5:
function restParamaterFunction2(x, y) {
  const a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParamaterFunction2(1, 2, "hello", true, 7));
