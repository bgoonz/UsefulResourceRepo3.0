function annoyingSong(startingNumber) {
  let bottles = startingNumber;
  let bottlesMinusOne = startingNumber - 1;
  for (bottles = startingNumber; bottles > 0; bottles--) {
    bottlesMinusOne = bottles - 1;
    return (
      bottles.toString() +
      " bottles of soda on the wall, " +
      bottles.toString() +
      " bottles of soda, take one down pass it around " +
      bottlesMinusOne.toString() +
      " bottles of soda on the wall"
    );
  }
}