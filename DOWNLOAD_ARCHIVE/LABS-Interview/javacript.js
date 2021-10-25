/*
#
Find all the pairs of two integers in an * unsorted * array that sum up to a given S.##For example,
if the array is[ 3, 5, 2, -4, 8, 11 ] and the sum is 7, 
your program should: 
**return [ [ 11, -4 ], [ 2, 5 ] ]**
because 11 + -4 = 7 and 2 + 5 = 7.
*/
// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum( arr, S ) {
  let sums = [];
  // check each element in array
  for ( let i = 0; i < arr.length; i++ ) {
    // check each other element in the array
    for ( let j = i + 1; j < arr.length; j++ ) {
      // determine if these two elements sum to S
      if ( arr[ i ] + arr[ j ] === S ) {
        sums.push( [ arr[ i ], arr[ j ] ] );
      }
    }
  }
  // return all pairs of integers that sum to S
  return sums;
}

console.log( `\n`, 'twoSum( [ 3, 5, 2, -4, 8, 11 ], 7 ) : ', twoSum( [ 3, 5, 2, -4, 8, 11 ], 7 ), `\n` );

// our two sum function which will return
// all pairs in the array that sum up to S


//-----------------------------------------//Better Solution:\\------------------------------------
function twoSum2( arr, S ) {
  let sums = [];
  let hashTable = {};
  // check each element in array
  for ( let i = 0; i < arr.length; i++ ) {
    // calculate S - current element
    let sumMinusElement = S - arr[ i ];
    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if ( hashTable[ sumMinusElement.toString() ] !== undefined ) {
      sums.push( [ arr[ i ], sumMinusElement ] );
    }
    // add the current number to the hash table
    hashTable[ arr[ i ].toString() ] = arr[ i ];
  }
  // return all pairs of integers that sum to S
  return sums;
}
console.log( `\n`, `-----------------------------------------//Better Solution:\\------------------------------------` )
console.log( `\n`, ' twoSum2( [ 3, 5, 2, -4, 8, 11 ], 7 ) : ', twoSum2( [ 3, 5, 2, -4, 8, 11 ], 7 ) );
