// In a list of songs, the i-th song has a duration of time[i] seconds.
// Return the count of pairs of songs whose total number of minutes is divisible by 60
// i.e. time[i] + time[j] % 60 === 0

// brute force
// O(n^2)
function numPairsDivisibleBySixty(time) {
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) count += 1
    }
  }
  return count;
}

console.log(numPairsDivisibleBySixty([30, 20, 150, 100, 40]));

