/*==================== Stack Class ====================*/
// Input/Output matching using class keyword
class Stack {
  constructor() {
    this.storage = [];
  }
  add(item) {
    this.storage.push(item);
  }
  remove() {
    return this.storage.pop();
  }
  // get numOfItems() { // <--- allows invocation of method without parentheses
  numOfItems() {
    if (this.storage.length === 0) {
      return `There are no items in your ${this.constructor.name}.`;
    }
    return this.storage.length;
  }
}

// // Input/Output matching using "this" construction
// function Stack() {
//   this.storage = [];
//   this.add = function(item) {
//     this.storage.push(item);
//   };
//   this.remove = function() {
//     return this.storage.pop();
//   };
//   this.numOfItems = function() {
//     if (this.storage.length === 0) {
//       return `There are no items in your ${this.constructor.name}.`;
//     }
//     return this.storage.length;
//   };
// }

// // Input/Output matching using prototypes
// function Stack() {
//   this.storage = [];
// }
// Stack.prototype.add = function(item) {
//   this.storage.push(item);
// };
// Stack.prototype.remove = function() {
//   return this.storage.pop();
// };
// Stack.prototype.numOfItems = function() {
//   if (this.storage.length === 0) {
//     return `There are no items in your ${this.constructor.name}.`;
//   }
//   return this.storage.length;
// };

// Ouput to match:
const myStack = new Stack();
console.log(myStack.numOfItems()); // <--- There are no items in your Stack.
myStack.add('first');
myStack.add('second');
myStack.add('third');
console.log(myStack.numOfItems()); // <--- 3
console.log(myStack.storage); // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first' ]
myStack.remove();
console.log(myStack.numOfItems()); // <--- There are no items in your Stack.
console.log(myStack.storage); // <--- []

/*==================== Vowel Count ====================*/
// v1.0 Fundamental JavaScript "for Loop" solution:
// String https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Arithmetic Operator: Increment ++ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()
// for https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// if...else https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// Comparison operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
// Equality comparisons and sameness https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// let https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// const https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// var https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // lowercase vowels
    if (str.charAt(i) === 'a') count++;
    if (str.charAt(i) === 'e') count++;
    if (str.charAt(i) === 'i') count++;
    if (str.charAt(i) === 'o') count++;
    if (str.charAt(i) === 'u') count++;
    // UPPERCASE vowels
    if (str.charAt(i) === 'A') count++;
    if (str.charAt(i) === 'E') count++;
    if (str.charAt(i) === 'I') count++;
    if (str.charAt(i) === 'O') count++;
    if (str.charAt(i) === 'U') count++;
  }
  return count;
}

// // v1.1 DRY
// // .toLowerCase() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // lowercase and UPPERCASE vowels with toLowerCase()
//     if (str.charAt(i).toLowerCase() === 'a') count++;
//     if (str.charAt(i).toLowerCase() === 'e') count++;
//     if (str.charAt(i).toLowerCase() === 'i') count++;
//     if (str.charAt(i).toLowerCase() === 'o') count++;
//     if (str.charAt(i).toLowerCase() === 'u') count++;
//   }
//   return count;
// }

// // v1.2
// /* In JavaScript, Strings are not Arrays of characters.
// Strings are just _kind of like_ Arrays in some aspects.
// Strings have indexes. Characters can be retrieved by
// their indexes (like Arrays), but this convenience comes
// with some warning. As an example: */
// console.log(""[-4]);        // ---> undefined
// console.log("".charAt(-4)); // ---> ""

// /* Unlike the "bracket notation" used with Arrays, bracket
// notation with strings is a "shortcut". The `charAt()` method,
// on the other hand, ensures that a string is returned.
// See here: https://stackoverflow.com/q/5943726/5225057
// for some more discussion. */
// // v1.3
// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // lowercase and UPPERCASE vowels
//     if (str[i].toLowerCase() === 'a') count++;
//     if (str[i].toLowerCase() === 'e') count++;
//     if (str[i].toLowerCase() === 'i') count++;
//     if (str[i].toLowerCase() === 'o') count++;
//     if (str[i].toLowerCase() === 'u') count++;
//   }
//   return count;
// }

// //v2.0
// /* Logical Operators & forEach
// Inclusive Or is represented in JavaScript with this symbol: `||`
// | term1 | operator | term2 | evaluates to | ????? |
// |-------|----------|-------|--------------|-------|
// | True  |    or    | True  | ~~~~~~~~~~~> |  True |
// | True  |    or    | False | ~~~~~~~~~~~> |  True |
// | False |    or    | True  | ~~~~~~~~~~~> |  True |
// | False |    or    | False | ~~~~~~~~~~~> | False |
// Example */

// console.log(true || true);   // <--- true
// console.log(true || false);  // <--- true
// console.log(false || true);  // <--- true
// console.log(false || false); // <--- false

// // v2.1 Inclusive OR Logical Operator
// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // lowercase and UPPERCASE vowels
//     if (str.charAt(i).toLowerCase() === 'a' ||
//         str.charAt(i).toLowerCase() === 'e' ||
//         str.charAt(i).toLowerCase() === 'i' ||
//         str.charAt(i).toLowerCase() === 'o' ||
//         str.charAt(i).toLowerCase() === 'u') {
//       count++;
//     }
//   }
//   return count;
// }

// // v2.2 .forEach() Array method and .split() String method
// // .forEach - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// // .split() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// // Array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// function vowelCount(str) {
//   let count = 0;
//   arr = str.split('');
//   arr.forEach(function(item) {
//     if (item.toLowerCase() === 'a' ||
//         item.toLowerCase() === 'e' ||
//         item.toLowerCase() === 'i' ||
//         item.toLowerCase() === 'o' ||
//         item.toLowerCase() === 'u') {
//       count++;
//     }
//   });
//   return count;
// }

// // v2.3
// // Switch statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     switch (str.charAt(i).toLowerCase()) {
//       case 'a': count++; break;
//       case 'e': count++; break;
//       case 'i': count++; break;
//       case 'o': count++; break;
//       case 'u': count++; break;
//       default:
//         console.log('something went wrong');
//     }
//   }
//   return count;
// }

// // v3
// // Declarative vs. Expressive Functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// // Dot chaining methods
// // Array.from() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// // Array.prototype.filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// // Array.prototype.includes() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// // ES5
// // v3.1
// function vowelCount(str) {
//   return Array
//           .from(str)
//           .filter(function(vowel) {return 'aeiouAEIOU'
//             .includes(vowel)})
//           .length;
// }

// // ES6 Arrow Functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// // ES6 In Depth: Arrow Functions https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
// // v3.2
// const vowelCount = str => Array
//                             .from(str)
//                             .filter(vowel => 'aeiouAEIOU'
//                               .includes(vowel))
//                             .length;

// // v4
// // Regular Expressions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// // - g	Global search.
// // - i	Case-insensitive search.
// // - ^ Negated https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-character-set
// // replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// // v4.1
// function vowelCount(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// }

// // v5
// // Conditional Ternary Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// // SYNTAX: if the condition is true ? then do this : otherwise do that
// // Example:
// function ternary(arg) {
//   return arg ? "it's true!" : "it's false!";
// }
// console.log(ternary(true));  // it's true!
// console.log(ternary(false)); // it's false!

// // ES5
// // v5.1
// function vowelCount(str) {
//   return (str.match(/[aeiou]/gi) === null) ? 0 : str.match(/[aeiou]/gi).length;
// }

// // ES6
// // v5.2
// const vowelCount = str =>
//   (str.match(/[aeiou]/gi) === null) ? 0 : str.match(/[aeiou]/gi).length;

// "TEST SUITE"
console.log(vowelCount('-bcd-fgh-jklmn-pqrst-vwxyz')); // ~~~> 0
console.log(vowelCount('Hello world!')); // <--- 3
console.log(vowelCount('Pinto beans')); // <--- 4
console.log(vowelCount('The quick brown fox jumped over the lazy dog.')); // <--- 12
console.log(vowelCount('Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.')); // <--- 58
console.log(vowelCount('All I have ever wanted is to be an Uber driver!')); // <--- 16

/*==================== To Binary String ====================*/
// v1.0
function toBinaryString(number) {
  let num = Number(number); // Input remains unaltered
  let result = '';
  if (number === 0) return '0';
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  console.log(number, num); // Input remains unaltered
  return result;
}

// // v2.0
// function toBinaryString(number) {
//   let result = '';
//   while(number > 0) {
//     result = (number % 2) + result;
//     number >>= 1; // "number >>= 1;" - what does that do?
//   }
//   return result || "0";
// }

// // v2.1
// function toBinaryString(number) {
//   let arr = [];
//   if (number === 0) return '0';
//   while (number > 0) {
//     arr.unshift(number % 2);
//     number >>= 1;
//   }
//   return arr.join('');
// }

// // v3.0
// function toBinaryString(number) {
//   let remainders = [];
//   do {
//     remainders.unshift(number % 2);
//     number = Math.floor(number / 2);
//   }
//   while (number > 0);
//   return remainders.join('');
// }


// // v4.0
// function toBinaryString(number) {
//   let result = '';
//   if (number === 0) return '0';
//   while (number > 0) {
//     console.log(`number starts: ${number}`);
//     // Conditional Ternary Operator
//     // SYNTAX (if this conditino is true) ? (do this) : (otherwise do that)
//     const bit = (Math.floor(number % 2) !== 0) ? '1' : '0';
//     console.log(`bit          : ${bit}`);
//     result = bit + result;
//     console.log(`the return is: ${result} <--- it's GROWING`);
//     number = Math.floor(number / 2);
//     console.log(`number is now: ${number}\n`);
//     }
//   console.log('COUNTING IN BINARY IS SO MUCH FUN!!!!!');
//   return result;
// }
// // console.log(toBinaryString(13));  // <--- 0

console.log(toBinaryString(0));

/*==================== Operators ====================*/
function negCheck (num1, num2) {
  const arr = [false];
  if (num1 < 0) {
    arr[0] = !arr[0];
    arr.push(0 - num1);
  } else {
    arr.push(num1);
  }
  if (num2 < 0) {
    arr[0] = !arr[0];
    arr.push(0 - num2);
  } else {
    arr.push(num2);
  }
  return arr;
}

function multiply(x, y) {
  const arr = negCheck(x, y);
  let answer = 0;
  for (var i = 0; i < arr[2]; i++) {
    answer += arr[1];
  }
  if (arr[0]) answer = 0 - answer;
  return answer;
}

function divide(x, y) {
  const arr = negCheck(x, y);
  let remainder = arr[1];
  let answer = 0;
  while(remainder >= arr[2]) {
    answer += 1;
    remainder -= arr[2];
  }
  if (arr[0]) answer = 0 - answer;
  return answer;
}

function modulo(x, y) {
  const arr = negCheck(x, y);
  let remainder = arr[1];
  while(remainder >= arr[2]) {
    remainder -= arr[2];
  }
  if (x < 0) return (0 - remainder);
  return remainder;
}

console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
console.log(multiply(3, 4)); //     <--- 12
console.log(multiply(-3, 4)); //    <--- -12
console.log(multiply(3, -4)); //    <--- -12
console.log(multiply(-3, -4)); //   <--- 12
console.log(divide(10, 3)); //      <--- 3
console.log(divide(-10, 3)); //     <--- -3
console.log(divide(10, -3)); //     <--- -3
console.log(divide(-10, -3)); //    <--- 3
console.log(modulo(10, 3)); //      <--- 1
console.log(modulo(-10, 3)); //     <--- -1
console.log(modulo(10, -3)); //     <--- 1
console.log(modulo(-10, -3)); //    <--- -1
