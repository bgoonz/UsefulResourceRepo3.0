function findGrantCap(arr, cap) {
  let min_grant = cap / arr.length;
  let excess = 0;
  let numUnder = 0;
  let sum = 0;

  /* Calculate how much money we can reallocate from grants   whose asking price is less than the minimum grant and average that number to see what grant amount to give those institutions asking for higher than the minimum*/
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min_grant) {
      excess += (min_grant - arr[i]);
      numUnder += 1;
    }
  }
  min_grant += excess / (arr.length - numUnder)

/* Create an array of elements that asked for more than the minimum grant and store the value difference between what they asked for and what the minimum is so that we can redistribute later.  Keep track of the sum of all of the grants and return if the sum after replacing the above-minimum values with the minimum values is equal to the cap.*/
  let overGrant = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min_grant) {
      overGrant[i] = (arr[i] - min_grant)
      arr[i] = min_grant;
    } else {
      overGrant[i] = 0;
    }
    sum += arr[i]
  }
  if (sum === cap) return min_grant;
  /* Keep track of the max, which will represent the number value of the new cap.  In order to affect the fewest grants, create a variable offset that averages the difference between the sum and the cap by an increasing number to spread the offset over the fewest groups. */
  let max = 0;
  let num = 1
  let offset = ((cap - sum) / num)
  /* While the sum is less than the cap, if the difference between asking price and minimum grant is less than the offset amount, increase the grant by the difference and decrease the offset by that amount.  Increase the sum to reflect the increase in allocated budget.

  If the difference is greater than or equal to the offset, increase the grant by the offset and increase the sum.  Update maximum.  

  If the sum is no longer less than the cap, return the max. */
  while (sum < cap) {
    for (let i = 0; i < overGrant.length; i++) {
      if (overGrant[i] > 0 && overGrant[i] < offset) {
        arr[i] += overGrant[i];
        offset -= overGrant[i];
        sum += overGrant[i]
      }
      if ((overGrant[i] >= offset)) {
        arr[i] += offset;
        sum += offset;
        if (arr[i] > max) max = arr[i]
      }
    }
  }
  return max;
}

findGrantCap([2,100,50,120,167], 400)