// Given an array of n integers where n > 1, return an array 'output' such that 'output[i]' is equal to the product 
//  of all the elements of nums except nums[i]
// input: [1, 2, 3, 4]
// output: [24, 12, 8, 6]

// **can't use division
// **must solve in O(n) time and constant space

// with division, but not allowed in this problem:
// Also, doesn't cover edge cases where there is a 0 in the array
var productExceptSelfWithDivision = function(nums) {
  let res = [];
  let totalProd = nums.reduce((a, b) => a * b)

  for (let i = 0; i < nums.length; i++) {
    res.push(totalProd/nums[i])  
  }
  return res;
}

// brute force:
// this works, and doesn't use division, but times out
var productExceptSelfBruteForce = function (nums) {
  let resMap = {};

  for (let i = 0; i < nums.length; i++) {
    let sub = nums.slice(0, i).concat(nums.slice(i + 1))
    let prod = sub.reduce((a, b) => a * b)
    resMap[i] = prod
  }

  return Object.values(resMap)
};

// the key is that the array product without an element is equal to that element's left-neighbor prefix product
//  times it's right-neighbor postfix product.
// by left/prefix and right/postfix products, we mean the current element times all the elements to it's left or right

// i.e. for input of arr = [1, 2, 3, 4]:
// the left / prefix products are: [1, 2, 6, 24]
// the first element is 1, becuase at arr[0], there is nothing to the left of it. 
//    so the product of it times everything to the left of it is just itself.
// the right / postfix products are: [24, 24, 12, 4]
// similarly, the last element in the postfix array is the last element in the input array.
//    starting at the right/end, the first element is 4. There's nothing to the right of that,
//    so we the product of itself times everything to the right of it is just itself.

// the result is obtained by looking at an index position, and multiplying the value to it's left and the value to it's right:
// if we are looking for element 3:
// pre: [1, 2, 6, 24]
// post: [24, 24, 12, 4]
// so the el to the left of el 3 is el 2
// el 2 in pre === 2
// the el to the right of el 3 is 4
// el 4 in post === 4
// so the value we want to put at postition/element 3 in the results array is 2 * 4, or 8


var productExceptSelf = function(nums) {
  // you can also do:
  // const res = [];
  // but I find the below easier to see progression of calculation

  const res = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
 
  // this is building up the left/prefix array. 
  // in each iteration, you first replace what is at res[i] with the product of that element * what is currently left
  // then you replace left with the product of what is currently left * the element at that index in the original nums array
  // **even though it appears that you're including yourself in the multiplication, you're not actually doing anything with that left
  //    value until the next iteration, when you're one element away already.
  // the left variable is acting as the reducer/accumulating the product of each element as you move along the array
  // the res[i] is replacing each element in that position with that number.
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i]
  }
  console.log(`before post res ${res}`);
  
  // this is doing the same but working backwards.
  // the reason this works in place, is because after the first iteration going left to right, each element represents 
  //    the product of everything to the left of it. 
  // so the 4th element, the value at index 3, is the product of elements 1, 2, and 3.
  // and as before, right represents an accumulation of the products of everything to the right.
  // now when you traverse the same res array backwards and replace it with the product of itself * what is right,
  //    you are essentially multiplying everything to the left * everything to the right EXCEPT for itself. 
  // (the original res elements don't include themselves)
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= right;
    right *= nums[j]
  }
  
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]))
