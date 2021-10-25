//=============== Largest Contiguous Sum =============== //
function sumArray(arr) {
  let ans = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(0, ans + arr[i]);
    sum = Math.max(sum, ans);
  }

  return sum;
}

//=============== Insertion Sort =============== //
// v1.0
function insertionSort(array) {
   for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

// // v2.0
// function insertionSort (array) {
//     for(var i = 1 ; i < array.length ;){
//         if(array[i] < array[i-1]){
//             var temp = array[i];
//             array[i] = array[i -1];
//             array[i -1] = temp;
//             i--;
//         } else{i++}
//     }
//     return array;
// }

//=============== Sum and Product =============== //
// v1.0
function sumAndProduct(sum, product) {
  for (let i = 0; i <= sum / 2; i++) {
    if (i * (sum - i) === product) return [i, (sum - i)];
  }
  return null;
}

// // v2.0 Quadratic Equation
// function sumAndProduct(sum, product) {
//   /**
//   * sum = x + y
//   *  y = sum - x
//   * product = x * y
//   *  y product/x
//   * 
//   *  sum - x = product / x
//   *  sum * x = product + x^2
//   *   0 = x^2 - ( sum * x) + product  => Quadratic Equation
//   *  
//   *  Quadratic Equation: X = -b +/- Math.sqr( b^2 - 4ac ) / 2
//   *  
//   */
//   const x1 = (sum + Math.sqrt(Math.pow(sum, 2) - 4 * 1 * product)) / 2;
//   const x2 = (sum - Math.sqrt(Math.pow(sum, 2) - 4 * 1 * product)) / 2;
//   const result = x1 < x2 ? [x1,x2] : [x2,x1];
//   // console.log(x1,x2,y1,y2);
//   return isNaN(x1) || (!Number.isInteger(x1) && !Number.isInteger(x2)) ? null : result;
// }