// @ts-check
/* eslint-disable */

let num = 1; // {1}
num = 3; // {2}

const price = 1.5; // {3}
const myName = "Packt"; // {4}
const trueValue = true; // {5}
const nullVar = null; // {6}
let und; // {7}

console.log(`num: ${num}`);
console.log(`myName: ${myName}`);
console.log(`trueValue: ${trueValue}`);
console.log(`price: ${price}`);
console.log(`nullVar: ${nullVar}`);
console.log(`und: ${und}`);

// ******* Variable Scope

const myVariable = "global";
myOtherVariable = "global";

function myFunction() {
  const myVariable = "local";
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = "local";
  return myOtherVariable;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}

console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}
