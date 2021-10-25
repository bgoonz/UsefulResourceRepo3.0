// my-common-js-module.js

const prefix = "ABC_";
// NOTE: what's good here is that I'm using a `const`, but what's bad is, it's not
//   located down below where my other "private" implementation details are.

// my public API for my module
module.exports = {
  [`${prefix}1`]: 42,
  [`${prefix}2`]: 100,
  foo,
  bar,
};

// all my private implementation details for my module
// ******************************

var privStuff = [1, 5, 4];

function foo() {
  return privStuff[1];
}
function bar() {
  return privStuff[2];
}
