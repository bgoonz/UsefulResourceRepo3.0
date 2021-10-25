//=============== Consecutive Strings =============== //
// v1.0
function longestConsecutive(arr, k) {
  if (arr.length === 0 || k > arr.length || k <= 0) return '';
  let longestString = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr.slice(i, i + k).join('');
    if (temp.length > longestString.length) {
      longestString = temp;
    }
  }
  return longestString;
}

// // v2.0
// function longestConsecutive(arr, k) {
//   if (arr.length === 0 || arr.length < k || k <= 0) return '';
//   return arr
//     .map((value, index) => (
//       arr.slice(index, index + k).join('')
//     ))
//     .reduce((longest, current) => current.length > longest.length ? current : longest);
// }

//=============== Expanded Numbers =============== //
function expandedNums (num) {
  return num.toString().split('').reduce(function (currentVal, nextVal, index, array) {
    if (array[index] === '0') {
      return currentVal + nextVal;
    }
  return currentVal + '0'.repeat(array.length - index) + ' + ' + nextVal;
  });
}

//=============== Chained Functions =============== //
// v1.0 ES5
function chainedFunctions(arr) {
  function chain(x) {
    for (let i = 0; i < arr.length; i++) {
      let f = arr[i];
      x = f(x);
    }
    return x;
  }
  return chain;
}

// // v1.1 ES5 anonymous inner function
// function chainedFunctions(arr) {
//   return function(x) {
//     for (let i = 0; i < arr.length; i++) {
//       let f = arr[i];
//       x = f(x);
//     }
//     return x;
//   };
// }

// // v1.2 ES5 .forEach()
// function chainedFunctions(arr) {
//   return function(x) {
//     arr.forEach(function(f) { x = f(x) });
//     return x;
//   };
// }

// // v1.3 ES6
// const chainedFunctions = (arr) => {
//   const chain = (x) => {
//     arr.forEach((f) => {
//       x = f(x);
//     });
//     return x;
//   };
//   return chain;
// };

// // v1.4 ES6
// const chainedFunctions = (arr) => {
//   return (x) => {
//     arr.forEach((f) => {
//       x = f(x);
//     });
//     return x;
//   };
// };

function one(x) { return x + x; }
function two(x) { return x * 2; }
console.log(chainedFunctions([one,two])); // <--- [Function] or v1.0: [Function: chain]
console.log(chainedFunctions([one,two])(3)); // <--- 12

function a(x) { return x + "!" }
function b(x) { return x + "?" }
function c(x) { return "Hello " + x }
function d(x) { return x + " ¯\\_(ツ)_/¯" }
console.log(chainedFunctions([c, a, a, d, b])('Ryan')); // <--- Hello Ryan!! ¯\_(ツ)_/¯?

//=============== Rock,Paper,Scissors =============== //
// v1.0
function rockPaperScissors(n) {
  const actions = ['rock', 'paper', 'scissors'];
  const mapNewResults = action => responseArr.map(arr => [action, ...arr]);
  let currentNum = n;
  let responseArr = actions.map(action => [action]);
  while (currentNum > 1) {
    responseArr = actions.reduce((accum, action) => [...accum, ...mapNewResults(action)], []);
    currentNum -= 1;
  }
  return responseArr;
}

// // v2.0
// function rockPaperScissors(n) {
//   const rounds = n;
//   const results = [];
//   const weapons = ['rock', 'paper', 'scissors'];
//   const recurse = function(roundsLeft, played) {
//     if( roundsLeft === 0) {
//       results.push(played);
//         return;
//     }
//     for(let i = 0; i < weapons.length; i++) {
//       const current = weapons[i];
//       recurse( roundsLeft-1, played.concat(current) );
//     }};
//   recurse(rounds, []);
//   return results;
// }

// // v3.0 recursion INCEPTION!
// function rockPaperScissors(n) {
// const outcomes = [];
// const plays = ['rock', 'paper', 'scissors'];
// function findOutcome (roundsLeft, result) {
//   console.log(roundsLeft, result);
//   if (roundsLeft === 0) {
//     outcomes.push(result);
//     return;
//   }
//   plays.forEach((play) => {
//     console.log(play);
//     findOutcome(roundsLeft - 1, result.concat(play));
//   });
// }
//   findOutcome(n, []);
//   return outcomes;
// }