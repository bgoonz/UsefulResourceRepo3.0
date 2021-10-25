// my-common-js-module.js

prefix = "ABC_";
// NOTE: this is "better", IMO, in that it's initialized up here where it's needed,
//   but it's still declared down below, alongside other private implementation details

// my public API for my module
module.exports = {
  [`${prefix}1`]: 42,
  [`${prefix}2`]: 100,
  foo,
  bar,
};

// all my private implementation details for my module
// ******************************

var prefix;
var privStuff = [1, 5, 4];

function foo() {
  return privStuff[1];
}
function bar() {
  return privStuff[2];
}
