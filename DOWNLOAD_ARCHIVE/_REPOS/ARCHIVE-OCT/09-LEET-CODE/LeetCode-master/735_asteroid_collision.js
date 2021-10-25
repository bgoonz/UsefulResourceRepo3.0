/*
Given an array of asteroids, return the state of the asteroids after all collisons.
Each absolute value of an integer represents size of asteroid
Negative ingetger indicates it's moving left
Positive integer indicates it's moving right
Two asteroids moving in the same direction will never collide
If two asteroids collide, the smaller size will explode
*/

/*
- There is only 1 scenario in which there will be a collision: 
  if the left int is positive, and the right int is negative
- Need to continually check the array. Can't just iterate once, since
  an asteroid could avoid collision initially, but collide with another asteroid further down the line.
- Use a stack data structure to allow for continual checking.
- We only want to add positive ints to the stack, because those are the only ones which could potentially 
  collide further on. 
- If we come across a negative int, we need to deal with it then. Will it collide? 
  If yes, then only push it to the stack if it 'beats' the previous positive int
  If no, then move on and don't add it to the stack
*/

var asteroidCollition = function(asteroids) {
  let res = []

  for (let i = 0; i < asteroids.length; i++) {
    // There is only one scenario where we want to push a neg int to the stack:
    //  - the stack is empty / it's top el is neg AND the current asteroid is also neg
    // this is because two negatives will never collide, so they should be ignored/left in stack
    if ((!res.length || res[res.length - 1] < 0) && asteroids[i] < 0) {
      res.push(asteroids[i])
    // if the asteroid is positive, it has potential to collide in future so we definitley want 
    //  to add to the stack
    } else if (asteroids[i] > 0) {
      res.push(asteroids[i])
    // if it doesn't satisfy either of the above, it's a negative int, so needs to be evaluated:
    } else {
      // we're always going to be evaluating against the top of the stack => stack.pop()
      const check = res.pop();
      // We know that if we are here in this condition, the top of stack is pos && current el is neg
      //  if the top of stack beats current el, current el explodes and we don't want to add it to stack
      //  we do, however, want to add the popped top of stack back to the stack to re-evaluate later.
      if (Math.abs(check) > Math.abs(asteroids[i])) {
        res.push(check);
      // otherwise the current el beats top of stack and top of stack explodes
      //  we've already popped it off stack, so we don't need to worry about removing it.
      //  we do, however, want to make sure to examine the current asteroid against the next top of stack.
      //  so we use i-- to stay in place.
      } else if (Math.abs(check) < Math.abs(asteroids[i])) {
        // the i-- is a way of keeping the index position in place.
        // here we decrement, so actually put it back one position - but when the
        //  for loop continues, it will move on, so re-evaluate the same index as before,
        //  essentially 'staying in place'
        i--
      // else means that both top of stack and current el are equal, so we just want to continue.
      //  however important to note the difference with above:
      //  above, we're staying in place and examining the current asteroid against the next item in stack.
      //  here, we're moving on on both the stack and the asteroids:
      //  The stack lost top of stack (popped) and we are continuing on with the next element in stack
      //  the asteroids are moving on in the for loop, to the next asteroid in array.
      } else {
        continue;
      }
    }
  }

  return res;
}