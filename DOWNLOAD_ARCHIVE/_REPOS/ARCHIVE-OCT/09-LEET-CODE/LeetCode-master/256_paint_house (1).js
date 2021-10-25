// There are a row of n houses, each house can be painted one of three colors: red, green, and blue
// the cost of painting each house with a certain color is different.
// Paint all the houses so that no two adjacent houses are the same color.

// the cost of painting a house with a certain color is represented by an n x 3 matrix.
// Find the minimum cost to paint all houses

/*
Input: [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
             Minimum cost: 2 + 5 + 3 = 10.
*/

// you want to find the minimum sum for each possible combination.
// by starting at idx 1, you += previous idx values. 
// But only += the minimum of the two remaining options (bc you can't take a value from the idx where you're at now)
// bc you want to end up with the minimum possible sum

// Note that it doesn't matter which index represents which color, only that they don't overlap
//  i.e. you just make sure you don't += a value from the same idx position. This will ensure no overlap
// you're updating the input array as you go, so by the time you return the last array at the end, 
//  you've got a cumulative sum.
var minCost = function (costs) {
  if (!costs.length || costs === null) return null;

  let minCost = 0;
  for (let i = 1; i < costs.length; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2])
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2])
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1])
  }

  return Math.min(Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1]), costs[costs.length - 1][2])
}; 

console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]));
