//=============== Merged Objects =============== //
function mergeObjects(objs) {
  newObj = objs[0];
  for (let i = 1; i < objs.length; i++) {
    for (var key in objs[i]) {
      if (!newObj[key] || newObj[key] !== objs[i][key]) {
        newObj[key] = objs[i][key];
      }
    }
  }
  return newObj;
}

//=============== Equal Sides =============== //
function equalSides (arr) {
  function reduceSide (side) {
    return side.reduce(function(result, currentNum, index, side){
      return result + currentNum;
    }, 0);
  }
  for (var i = 1; i < arr.length; i++) {
    var a = arr.slice(0, i);
    var b = arr.slice(i+1, arr.length);
    if (reduceSide(a) === reduceSide(b)) {
      return i;
    }
  }
  return -1;
}

//=============== Bubble Sort =============== //
function bubbleSort(arr) {
  let swappedValue;
  do {
    swappedValue = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swappedValue = true;
      }
    }
  } while (swappedValue);
  return arr;
}

//=============== Armstrong Numbers =============== //
function isArmstrongNumber(n) {
 let nums = n.toString().split('');
  nums = nums.map(num => Math.pow(parseInt(num), nums.length));
  const sum = nums.reduce((num, total) => num + total);
  return n === sum;
}