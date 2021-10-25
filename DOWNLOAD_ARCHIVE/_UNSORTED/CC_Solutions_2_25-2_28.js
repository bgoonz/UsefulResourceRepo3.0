//=================Twin Primes=======================//
function isTwinPrime(n) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num >= 2;
  }
  return (isPrime(n) && (isPrime(n - 2) || isPrime(n + 2)));
}

//=================Rotate Image=======================//
function rotateImage(arr) {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    for (let j = i; j < len - i - 1; j++) {
      let bucket = arr[i][j];
      arr[i][j] = arr[j][len - i - 1];
      arr[j][len - i - 1] = arr[len - i - 1][len - j - 1];
      arr[len - i - 1][len - j - 1] = arr[len - j - 1][i];
      arr[len - j - 1][i] = bucket;
    }
  }
  return arr;
}

//=================String Compression=======================//
// v1.0
function stringCompression(str) {
  let cmpresd = '';
  const arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      count++;
    } else {
      arr.push(`${str.charAt(i)}${count}`);
      count = 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    cmpresd += arr[j];
  }
  if (cmpresd.length < str.length) {
    return cmpresd;
  } else {
    return str;
  }
}

// // v1.1 .split, .forEach() & .charAt()
// function stringCompression(str) {
//   let charArr = str.split('');
//   let cmpresd = '';
//   const arr = [];
//   let count = 1;
//   charArr.forEach(function(item, i) {
//     if (item === str.charAt(i + 1)) count++;
//     else {
//       arr.push(`${item}${count}`);
//       count = 1;
//     }
//   });
//   arr.forEach(function(item) {
//     cmpresd += item;
//   });
//   if (cmpresd.length < str.length) return cmpresd;
//   else return str;
// }


// // v2.0 All in one for loop with Logical OR || and Conditional Ternary operator.
// function stringCompression(str) {
//   let curChar = null;
//   let cmpresd = '';
//   let count = 1;
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === curChar) count++;
//     if (curChar === null) curChar = str[i];
//     if (str[i] !== curChar || str[i] === undefined) {
//       cmpresd += curChar;
//       cmpresd += count;
//       count = 1;
//       curChar = str[i];
//     }
//   }
//   return cmpresd.length < str.length ? cmpresd : str;
// }

//=================Quick Sort=======================//
function quickSort(nums) {
  const arr = nums.slice();
  if (nums.length < 2) return nums;
  
  const lessThanOrEqualToPivot = [];
  const greaterThanPivot = [];
  const middleIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(middleIndex, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot[0]) {
      lessThanOrEqualToPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  return [].concat(quickSort(lessThanOrEqualToPivot), pivot, quickSort(greaterThanPivot));
}

const arr1 = [0,1,2,3,4,5,6];
const arr2 = [9,8,7,6,5,4,3];
const arr3 = [1,5,5,5,5,5,9]; 
const arr4 = [55, -5, -10, 4];
console.log(`expect(quickSort([${arr1}]).toEqual([${quickSort(arr1)}])`);
console.log(`expect(quickSort([${arr2}]).toEqual([${quickSort(arr2)}])`);
console.log(`expect(quickSort([${arr3}]).toEqual([${quickSort(arr3)}])`);
console.log(`expect(quickSort([${arr4}]).toEqual([${quickSort(arr4)}])`);