//================== Reverse Case =======================//
// v1.0
function reverseCase(str) {
  let result = '';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < str.length; i++) {
    if (lowerCase.includes(str[i])) {
      for (let j = 0; j < lowerCase.length; j++) {
        if (str[i] === lowerCase[j]) {
          result += upperCase[j];
        }
      }
    } else if (upperCase.includes(str[i])) {
      for (let k = 0; k < upperCase.length; k++) {
        if (str[i] === upperCase[k]) {
          result += lowerCase[k];
        }
      }
    } else result += str[i];
  }
  return result;
}

// // v2.0 .toUpperCase() & .toLowerCase()
// // .split(), .forEach(), .join()
// function reverseCase(str) {
//   const charArr = str.split('');
//   charArr.forEach(function(char, i) {
//     if (char.toUpperCase() === char) {
//       charArr[i] = char.toLowerCase();
//     } else {
//       charArr[i] = char.toUpperCase();
//     }
//   });
//   const joined = charArr.join('');
//   return joined;
// }

// // v2.1 ES6 version
// const reverseCase = (str) => {
//   const charArr = str.split('');
//   charArr.forEach(function(char, i) {
//     if (char.toUpperCase() === char) {
//       charArr[i] = char.toLowerCase();
//     } else {
//       charArr[i] = char.toUpperCase();
//     }
//   });
//   return charArr.join('');
// };

// // v3.0 "dot chaining" .split(), .map(), .join()
// // just return it!
// function reverseCase(str) {
//   return str
//     .split('')
//     .map(function(char) {
//       if (char.toUpperCase() === char) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join('');
// }

// // v3.1 ES6 dot chaining
// const reverseCase = (str) => {
//   return str
//     .split('')
//     .map((char) => {
//       if (char.toUpperCase() === char) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join('');
// };

// // v4.0 ES5 Conditional Ternary Operator
// function reverseCase(str) {
//   return str
//     .split('')
//     .map(function(char) {
//       return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
//     })
//     .join('');
// }

// // v4.1 ES6
// const reverseCase = str => {
//   return str.split('')
//     .map(char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase())
//     .join('');
// };

// // v5.0 Regular Expressions ES5
// function reverseCase(str) {
//     let result = '', i;
//     for (i = 0; i < str.length; i++){
//        if (/[A-Z]/.test(str[i])) {
//          result += str[i].toLowerCase();
//        } else {
//          result += str[i].toUpperCase();
//        }
//     }
//     return result;
// }

// // v5.1 Regular Expressions ES6
// const reverseCase = (str) => {
//     let result = '', i;
//     for (i = 0; i < str.length; i++){
//        if (/[A-Z]/.test(str[i])) {
//          result += str[i].toLowerCase();
//        } else {
//          result += str[i].toUpperCase();
//        }
//     }
//     return result;
// };

// // v5.2 ES6 Regex and dot chaining
// function reverseCase(str) {
//     return str
//         .split('')
//         .map( el => {
//         return /[A-Z]/.test(el) ?
//           el.toLowerCase():el.toUpperCase();
//             })
//         .join('');
// }

// // v5.3
// function reverseCase(str) {
//   return str.split('').map((char) => {
//     return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
//   }).join('');
// }

const string = 'HELLO world!';
console.log(reverseCase(string)); // <--- hello WORLD!

//================== Common Elements =======================//
// v1.0 for loop
function commonElements(arr1, arr2) {
  const matches = [];
  let i, len = arr1.length;
  for (i = 0; i < len; i++) {
    if (arr2.includes(arr1[i])) {
      if(!matches.includes(arr1[i])) {
        matches.push(arr1[i]);
      }
    }
  }
  return matches;
}

// // v1.1
// function commonElements(arr1, arr2) {
//  const matches = [];
//  for (let item of arr1) {
//    if (arr2.includes(item)) {
//      matches.push(item);
//    }
//   }
//  return matches;
// }

// // v1.2 Array method .forEach()
// function commonElements(arr1, arr2) {
//   const matches = [];
//   arr1.forEach(element => {
//     if (arr2.includes(element)) {
//       if(!matches.includes(element)) {
//         matches.push(element);
//       }
//     }
//   });
//   return matches;
// }

// // v2.0
// function commonElements(arr1, arr2) {
//   return arr1.filter((element, position) => {
//     if (arr1.indexOf(element) === position)
//     return arr2.includes(element);
//   });
// }

console.log(commonElements([1, 2, 3, 4, 4, 6], [3, 4, 5, 6])); // <--- [ 3, 4, 6 ]

//================== String to Camelcase =======================//
// v1.0
function toCamelCase(str) {
  if (str === '') return str;
  let snakeCase = str[0];
  strArr = str.split('');
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === '-') {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
    }
    else if (strArr[i] === '_') {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
    }
    else snakeCase += strArr[i];
  }
  return snakeCase;
}

// // v2.0 for loop with logical inclusive OR operator
// function toCamelCase(str) {
//   let arr = str.split('');
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i] === '_' || arr[i] === '-') {
//       arr[i] = '';
//       arr[i + 1] = arr[i + 1].toUpperCase();
//     }
//   }
//   return arr.join('');
// }

// // v3.0 Regular expressions
// function toCamelCase(str){
//   const arr = str.split(/[-_]/);
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   }
//   return arr.join('');
// }

// // v4.0 - Global Expressions
// function toCamelCase(str) {
//   return str.replace(/(_|-)\w/g, function(m) {return m[1].toUpperCase();});
// }

// // v4.1
// function toCamelCase(str) { 
//   return str.replace(/[_-][a-zA-Z]/g, letter => letter[1].toUpperCase());
// }

//================== Sort String =======================//
// v1.0
function sortString(str) {
  const arr = str.split('');
  const sorted = arr.sort();
  const joined = sorted.join('');
  return joined;
}

// // v2.0
// function sortString(str) {
//   return str.split('').sort().join('');
// }

// // v3.0
// // There's gotta be a better way than this!
// // NOTE: like above this sorts ALL UPPERCASE before lowercase
// function sortString(str) {
//   let alpha = {
//     'A': 0,
//     'B': 0,
//     'C': 0,
//     'D': 0,
//     'E': 0,
//     'F': 0,
//     'G': 0,
//     'H': 0,
//     'I': 0,
//     'J': 0,
//     'K': 0,
//     'L': 0,
//     'M': 0,
//     'N': 0,
//     'O': 0,
//     'P': 0,
//     'Q': 0,
//     'R': 0,
//     'S': 0,
//     'T': 0,
//     'U': 0,
//     'V': 0,
//     'W': 0,
//     'X': 0,
//     'Y': 0,
//     'Z': 0,
//     'a': 0,
//     'b': 0,
//     'c': 0,
//     'd': 0,
//     'e': 0,
//     'f': 0,
//     'g': 0,
//     'h': 0,
//     'i': 0,
//     'j': 0,
//     'k': 0,
//     'l': 0,
//     'm': 0,
//     'n': 0,
//     'o': 0,
//     'p': 0,
//     'q': 0,
//     'r': 0,
//     's': 0,
//     't': 0,
//     'u': 0,
//     'v': 0,
//     'w': 0,
//     'x': 0,
//     'y': 0,
//     'z': 0
//   };
//   let strArr = [];
//   let sortedString = '';
//   for(i = 0; i < str.length; i++) {
//     strArr.push(str.charAt(i));
//   }
//   for(i = 0; i < strArr.length; i++) {
//     if (strArr[i] === 'A') alpha[strArr[i]]++;
//     if (strArr[i] === 'a') alpha[strArr[i]]++;
//     if (strArr[i] === 'B') alpha[strArr[i]]++;
//     if (strArr[i] === 'b') alpha[strArr[i]]++;
//     if (strArr[i] === 'C') alpha[strArr[i]]++;
//     if (strArr[i] === 'c') alpha[strArr[i]]++;
//     if (strArr[i] === 'D') alpha[strArr[i]]++;
//     if (strArr[i] === 'd') alpha[strArr[i]]++;
//     if (strArr[i] === 'E') alpha[strArr[i]]++;
//     if (strArr[i] === 'e') alpha[strArr[i]]++;
//     if (strArr[i] === 'F') alpha[strArr[i]]++;
//     if (strArr[i] === 'f') alpha[strArr[i]]++;
//     if (strArr[i] === 'G') alpha[strArr[i]]++;
//     if (strArr[i] === 'g') alpha[strArr[i]]++;
//     if (strArr[i] === 'H') alpha[strArr[i]]++;
//     if (strArr[i] === 'h') alpha[strArr[i]]++;
//     if (strArr[i] === 'I') alpha[strArr[i]]++;
//     if (strArr[i] === 'i') alpha[strArr[i]]++;
//     if (strArr[i] === 'J') alpha[strArr[i]]++;
//     if (strArr[i] === 'j') alpha[strArr[i]]++;
//     if (strArr[i] === 'K') alpha[strArr[i]]++;
//     if (strArr[i] === 'k') alpha[strArr[i]]++;
//     if (strArr[i] === 'L') alpha[strArr[i]]++;
//     if (strArr[i] === 'l') alpha[strArr[i]]++;
//     if (strArr[i] === 'M') alpha[strArr[i]]++;
//     if (strArr[i] === 'm') alpha[strArr[i]]++;
//     if (strArr[i] === 'N') alpha[strArr[i]]++;
//     if (strArr[i] === 'n') alpha[strArr[i]]++;
//     if (strArr[i] === 'O') alpha[strArr[i]]++;
//     if (strArr[i] === 'o') alpha[strArr[i]]++;
//     if (strArr[i] === 'P') alpha[strArr[i]]++;
//     if (strArr[i] === 'p') alpha[strArr[i]]++;
//     if (strArr[i] === 'Q') alpha[strArr[i]]++;
//     if (strArr[i] === 'q') alpha[strArr[i]]++;
//     if (strArr[i] === 'R') alpha[strArr[i]]++;
//     if (strArr[i] === 'r') alpha[strArr[i]]++;
//     if (strArr[i] === 'S') alpha[strArr[i]]++;
//     if (strArr[i] === 's') alpha[strArr[i]]++;
//     if (strArr[i] === 'T') alpha[strArr[i]]++;
//     if (strArr[i] === 't') alpha[strArr[i]]++;
//     if (strArr[i] === 'U') alpha[strArr[i]]++;
//     if (strArr[i] === 'u') alpha[strArr[i]]++;
//     if (strArr[i] === 'V') alpha[strArr[i]]++;
//     if (strArr[i] === 'v') alpha[strArr[i]]++;
//     if (strArr[i] === 'W') alpha[strArr[i]]++;
//     if (strArr[i] === 'w') alpha[strArr[i]]++;
//     if (strArr[i] === 'X') alpha[strArr[i]]++;
//     if (strArr[i] === 'x') alpha[strArr[i]]++;
//     if (strArr[i] === 'Y') alpha[strArr[i]]++;
//     if (strArr[i] === 'y') alpha[strArr[i]]++;
//     if (strArr[i] === 'Z') alpha[strArr[i]]++;
//     if (strArr[i] === 'z') alpha[strArr[i]]++;
//   }
//   keys = Object.keys(alpha);
//   // console.log(keys);
//   for(i = 0; i < keys.length; i++) {
//     for (j = 0; j < alpha[keys[i]]; j++) {
//       sortedString = sortedString + keys[i];
//     }
//   }
//   return sortedString;
// }

console.log(sortString('AzycxbCwBaA')); // <--- AABCabcwxyz
console.log(sortString('azycxbcwbaa')); // <--- aaabbccwxyz