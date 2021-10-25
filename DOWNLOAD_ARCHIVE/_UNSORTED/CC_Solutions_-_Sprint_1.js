//=============== Longest String =====================//
// v1.0 for loop
function longestString(arr) {
	let result = '';
	for(let index = 0; index < arr.length; index++) {
	  let currentItem = arr[index];
		if(currentItem.length > result.length) {
			result = arr[index];
		}
	}
	return result;
}

// // v1.1 for loop, declaring variables first
// function longestString(arr) {
// 	let currentItem, index, result = '';
// 	for(index = 0; index < arr.length; index++) {
// 	  currentItem = arr[index];
// 		if(currentItem.length > result.length) {
// 			result = arr[index];
// 		}
// 	}
// 	return result;
// }

// // v1.2 for loop, index starts at 1
// function longestString(arr) {
// 	let currentItem = arr[0];
// 	for(let index = 1; index < arr.length; index++) {
// 		if(arr[index].length > currentItem.length) {
// 			currentItem = arr[index];
// 		}
// 	}
// 	return currentItem;
// }

// // v1.3 "while loop"
// function longestString(arr) {
//   let counter = arr.length;
//   let longest = '';
//   let index = 0;
//   while (counter > 0) {
//     const currentItem = arr[index];
//     if (currentItem.length > longest.length) {
// 			longest = arr[index];
// 		}
// 		index++;
// 		counter--;
//   }
//   return longest;
// }

// // v2.0 for...of
// function longestString(arr) {
// 	let currentItem = arr[0],
// 	    item;
// 	for(item of arr) {
// 		if(item.length > currentItem.length) {
// 			currentItem = item;
// 		}
// 	}
// 	return currentItem;
// }

// // v3.0 ES5 Array method: .forEach()
// function longestString(arr) {
// 	let currentItem = arr[0];
//   arr.forEach(function(item) {
//     if(item.length > currentItem.length) {
//       currentItem = item;
//     }
//   });
// 	return currentItem;
// }

// // v3.1 ES6 .forEach()
// const longestString = (arr) => {
// 	let currentItem = arr[0];
//   arr.forEach((item) => {
//     if(item.length > currentItem.length) {
//       currentItem = item;
//     }
//   });
// 	return currentItem;
// };

// // v4.0 ES5 .sort()
// function longestString(arr) {
//   var sorted = arr.sort(function(a, b) {
//     return b.length - a.length;
//   })[0];
//   return sorted;
// }

// // v4.1 just return it!
// function longestString(arr) {
//   return arr.sort(function(a, b) {return b.length - a.length})[0];
// }

// // v4.2 ES6 .sort()
// const longestString = (arr) => {
//   return arr.sort((a, b) => b.length - a.length)[0];
// };

// // v5.0 ES5 .reduce() and Conditional Ternary operator
// function longestString(arr) {
//   return arr.reduce(function(str1, str2) {
// 		return str1.length - str2.length >= 0? str1 : str2;
// 	});
// }

// // v5.1 ES6 .reduce() and Conditional Ternary operator
// const longestString = arr => {
//   return arr.reduce((str1, str2) => {
// 		return str1.length - str2.length >= 0 ? str1 : str2;
// 	});
// };

// const strings1 = ['short', 'really, really long!', 'medium'];
// console.log(longestString(strings1)); // <--- 'really, really long!'
// const strings2 = ['short', 'first long string!', 'medium', 'abcdefghijklmnopqr'];
// console.log(longestString(strings2)); // <--- 'first long string!'

//=============== Reversed String =====================//
// v1.0
function reverseString(str) {
  return str.split('').reverse().join()
  // let len = str.length;
  // let reversed = '';
  // for (let i = len; i > 0; i--) {
  //   reversed += str[i - 1];
  // }
  // return reversed;
}

// // v1.1
// function reverseString(str) {
//   let len = str.length;
//   let reversed = '';
//   for (let i = len - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// // v2.0 using an array
// function reverseString(str) {
//   let len = str.length;
//   let arr = [];
//   for (let i = len; i > 0; i--) {
//     arr.push(str[i - 1]);
//   }
//   let reversed = '';
//   for (let j = 0; j < arr.length; j++) {
//     reversed += arr[j];  
//   }
//   return reversed;
// }

// // v2.2 using JavaScript methods
// function reverseString(str) {
//   let split =  str.split('');
//   let reversed = split.reverse();
//   let joined = reversed.join('');
//   return joined;
// }

// // v2.3 dot chaining methods & returning their evaluation
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// // v2.4 ES6 style
// const reverseString = (str) => {
//   return str.split('').reverse().join('');

//=============== Reversed Number =====================//
// v1.0
function reverseNumber (num) {
  let str = num.toString();
  let len = str.length;
  let reversed = '';
  for (let i = len; i > 0; i--) {
    reversed += str[i - 1];
  }
  let result = Number(reversed);
  return result;
}

// // v2.0
// function reverseNumber (num) {
//   // console.log(num);
//   let string = num.toString();
//   // console.log(string);
//   // console.log(typeof(string));
//   let arr = string.split('');
//   // console.log(arr);
//   let reverse = arr.reverse();
//   // console.log(reverse);
//   let join = reverse.join('');
//   // console.log(join);
//   let result = Number(join);
//   return result;
// }

// // v3.0 Number()
// function reverseNumber (num) {
//   return Number(num
//     .toString()
//     .split('')
//     .reverse()
//     .join(''));
// }

// // v4.0 parseInt()
// function reverseNumber(num) {
//   return parseInt(num
//     .toString()
//     .split('')
//     .reverse()
//     .join(''));
// }

// // v5.0 Arithmetic Operators *=, +=, -=, /= and % (modulo operator)
// function reverseNumber(num) {
//   let number = num;
//   let reversed = 0;
//   while (number !== 0) {
//     reversed *= 10;
//     reversed += number % 10;
//     number -= number % 10;
//     number /= 10;
//     // console.log(`reversed: ${reversed}, number: ${number}`);
//   }
//   return reversed;
// }

// // v5.1
// function reverseNumber(num) {
//   const arr = [];
//   // This takes numbers from right to left on the num variable
//   while (num > 0) {
//     arr.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   return Number(arr.join(''));
// }

// };