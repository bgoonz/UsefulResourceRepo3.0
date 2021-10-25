/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Adding binary numbers:
  0 1 0 1 0 0 1 1
+ 0 1 1 1 0 1 1 0
------------------
  1 1 0 0 1 0 0 1

1 + 0 = 1
0 + 0 = 0
1 + 1 = 10
1 + 1 + 1 = 11

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

// In order to add up the correct digits, need to take the last digit in each adding iteration
// start from the right, and work your way left
// when adding two numbers:
//    need a way to carry over a number, and replace a 0 if one of the nums is 0

var addBinary = function (a, b) {
  let maxLen = Math.max(a.length, b.length);
  let sum = [];
  let holding = 0;
  let aRev = a.split("").reverse();
  let bRev = b.split("").reverse();

  for (let i = 0; i < maxLen; i++) {
    // here we assign the current A or B val either a 1 or 0
    // if it's a 0, it will not contribute to the sum. It's value won't increase the sum at all, so it remains 0
    // if it's a 1, then we need to keep it as 1, as that will contribute to/change the sum
    let currA = aRev[i] === "1" ? 1 : 0
    let currB = bRev[i] === "1" ? 1 : 0

    // the value that we push to the sum array is the sum of all values. 
    // current A and B, as well as whatever is currently in the holding
    // doing % 2 ensures that we get a 1 or 0 result. 
    // 0 % anything will always be 0. So if both A and B are 0, then we will get zero.
    // 1 % 2 will give us 1, which is what 1 + 0 is
    // 2 % 2 will give us 0, which is the value that we want to push. The 1 gets carried over, and we take care of that on the next line.
    // 3 % 2 will give us 1, which is the value we want to push, and again, the 1 gets carried over/taken care of on the next line.
    sum.push((currA + currB + holding) % 2);

    // this line takes care of the holding value, or the value that's carried over.
    // the only value that will get carried over is 1. Both 3 / 2 and 2 / 2 will give us that. 
    // we only want the value in the tens place so we divide by 2.
    // if we were to divide 0 by 2, we get 0 so the carried over amount is 0.
    holding = Math.floor((currA + currB + holding) / 2);
  }

  // at the end, we need to make sure to add whatever is in holding. If it is truthy, it will get concated, if not it will concat undefined.
  // we reverse the array and join to make it back into a string. 
  return sum.concat(holding || undefined).reverse().join("");
};

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))
console.log(addBinary("1", "0"))