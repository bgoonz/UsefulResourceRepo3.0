function EightQueens(strArr) { 
   const queens = {};
  
   //gets the coordinates for every queen
   for(let i = 0; i < strArr.length; i++) {
       let coordinates = strArr[i].match(/\d/g)
       .map(val => {
         return Number(val);
       });

       queens[`queen${i}`] = {
           x: coordinates[0],
           y: coordinates[1]
       };
   }
   function getAttackCoordinates(x, y) {
     return `(${x},${y})`;
   }
   const amountOfQueens = Object.keys(queens).length;
   
     for(let out = 0; out < amountOfQueens; out++) {
       let outerQueen = queens[`queen${out}`];
       let { x, y } = outerQueen;
       for(let i = out + 1; i < amountOfQueens; i++) {
         let innerQueen = queens[`queen${i}`];
        
         //checks vertical coordinates
         if(outerQueen.y === innerQueen.y) {
           return getAttackCoordinates(x, y);
         }
         //checks horizontal coordinates
         if(outerQueen.x === innerQueen.x) {
           return getAttackCoordinates(x, y);
         }
         //check diagnol coordinates
         let diagnolX = Math.abs(outerQueen.x - innerQueen.x);
         let diagnolY = Math.abs(outerQueen.y - innerQueen.y);
         if(diagnolX === diagnolY) {
           return getAttackCoordinates(x, y);
         }
       } // for i
     } // for out

   return true;
}
  
  
  console.log(EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]))
  //should return "(2,1)"

  console.log(EightQueens(["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"]))
  //should return "(5,3)"
  
  
  console.log(EightQueens(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]))
  //should return true