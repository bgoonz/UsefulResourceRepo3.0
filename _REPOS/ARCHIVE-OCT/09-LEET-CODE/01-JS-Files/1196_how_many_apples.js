/*
You have some apples, where arr[i] is the weight of the i-th apple.  You also have a basket that can carry up to 5000 units of weight.

Return the maximum number of apples you can put in the basket.



Example 1:

Input: arr = [100,200,150,1000]
Output: 4
Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.
Example 2:

Input: arr = [900,950,800,1000,700,800]
Output: 5
Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.
*/

var maxNumberOfApples = function (arr) {
  let sumWeight = 0;
  let counter = 0;
  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    sumWeight += sortedArr[i];
    if (sumWeight <= 5000) {
      counter += 1;
    }
  }
  return counter;
};

console.log(maxNumberOfApples([900, 950, 800, 1000, 700, 800]))