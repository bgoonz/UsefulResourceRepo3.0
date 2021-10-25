function isMagical(square){
  for (var i = 0; i < square.length; i += 3){
    var rowSum = square.slice(i,i+3).reduce(function(total,x){
      return total += x;
    });
    if (rowSum !== 15){
      return false;
    }
  }
  for (var j = 0; j < 3; j++){
    var colSum = square[j] + square[j+3] + square[j+6];
    if (colSum !== 15){
      return false;
    }
  }
  var diaSum1 = square[0] + square[4] + square[8];
  var diaSum2 = square[2] + square[4] + square[6]
  if (diaSum1 !== 15 || diaSum2 !== 15){
    return false;
  }
  for (i = 0; i < square.length; i+=3){
    if (square[i] === square[i+1] && square[i] === square[i+2]){
      return false;
    }
  } 
  return true;
}