// function isCryptSolution(crypt, solution) {
//   let cipherkey = {};
//   let c1 = crypt[0]
//   let c2 = crypt[1]
//   let c3 = crypt[2];
//   let ciphers = []

//   for (let i = 0; i < solution.length; i++) {
//     cipherkey[solution[i][0]] = solution[i][1]
//   }
//     if (cipherkey[c1[0]] == '0') {
//     return false;
//   } 
//   for (let i = 0; i < c1.length; i++) {
//     ciphers[i] = cipherkey[c1[i]]
//   }
//   c1 = ciphers;
//   ciphers = [];
//   if (cipherkey[c2[0]] == '0') {
//     return false;
//   } 
//   for (let i = 0; i < c2.length; i++) {
//     ciphers[i] = cipherkey[c2[i]]
//   }
//   c2 = ciphers;
//   ciphers = []
//   if (cipherkey[c3[0]] == '0') {
//     return false;
//   } 
//   for (let i = 0; i < c3.length; i++) {
//     ciphers[i] = cipherkey[c3[i]]
//   }
//   c3 = ciphers;

//   console.log('c1', c1, '\nc2', c2, '\nc3', c3)
//   return parseInt(c1.join('')) + parseInt(c2.join('')) === parseInt(c3.join(''))
// }

function isCryptSolution(crypt, solution) {
  let c1 = crypt[0].split('')
  let c2 = crypt[1].split('')
  let c3 = crypt[2].split('')
  let cipherkey = {};

   for (let i = 0; i < solution.length; i++) {
    cipherkey[solution[i][0]] = solution[i][1]
  }
  if ((cipherkey[c1[0]] === '0' && c1.length > 1) || (cipherkey[c2[0]] === '0' && c2.length > 1) || (cipherkey[c3[0]] === '0' && c3.length > 1)) return false;

  for (let i = 0; i < longestArrayLength(crypt); i++) {
    if (c1.length > i) {
      c1[i] = cipherkey[c1[i]]
    }
    if (c2.length > i) {
      c2[i] = cipherkey[c2[i]]
    }
    if (c3.length > i) {
      c3[i] = cipherkey[c3[i]]
    }
  }
  return parseInt(c1.join('')) + parseInt(c2.join('')) === parseInt(c3.join(''))
}

function longestArrayLength(array) {
  return array[0].length > array[1].length ? array[0].length : array[1].length > array[2].length ? array[1].length : array[2].length;
}


let crypt = ["A", 
 "A", 
 "A"]
solution = [["A","0"]]

isCryptSolution(crypt, solution)