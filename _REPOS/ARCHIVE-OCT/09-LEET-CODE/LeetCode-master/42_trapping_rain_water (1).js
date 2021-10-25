/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.

input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
output: 6


The first thing to note is that you can't do this by only looking at the current element and it's immediate neighbors.
It's possible that even if the current element is less than it's immediate neighbor, it might still hold even more water
  if the next outer neighbor is even higher.
Therefore at each iteration, you need to be looking at all the preceding numbers, and all the succeeding numbers.
=> so, you want to compare the current value to the MAX of all the numbers preceeding. (this is the max amount of water
  you can hold, between the current element and the maximum height)

The current element has to be less than BOTH of the max heights (the max to the left and the max to the right) in order to trap 
  water.

Once you have the leftMax and the rightMax, AND the current value is less than both of these:
  you need to find the difference between the leftMax and current, rightMax and current, in order to see the max amount of water
  you can trap.
*however, when accumulating, you want to take the minumum of these two values, because if you take the maxiumum, it will end up 
  spilling over the smaller height.
*/

var trapRainwater = function(heightArr) {
  let units = 0;

  for (let i = 0; i < heightArr.length; i++) {
    let left = heightArr.slice(0, i);
    let right = heightArr.slice(i);

    let leftMax = Math.max(...left);
    let rightMax = Math.max(...right);

    let current = heightArr[i]
    if (current < leftMax && current < rightMax) {
      units += Math.min((leftMax - current), (rightMax - current))
    }
  }

  return units
}

console.log(trapRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))