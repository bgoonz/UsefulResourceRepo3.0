# Exercise I - answers

- The first code is a simplified `O(n^c)` since it has a single while loop and a set of assignments the time is negligable and only expands as data expands. and as it does a few computational operations it could be considered it has a `space of O(n^4)` but since we are concerned with the shape of the line it is in its siplest for of `O(n^c)` so based upon my analisys `a = O(n^c)` for exponential and O(n) for linear but since a is a constand i would astipulate that O(n^c) would be the closest match

- The second snippet has an interesting portion to an extent since we have a nested looping situation. the inner most loop will only ever have a `O(n)` complexity but the next loop will take a time of `O(n^2)` and the outer most loop will do `O(n^2)` work per itteration so then it will run for O(log n) number of itterations and if it runs equal the disors repeat time as in the number of times we have to divide n by 2 before we reach 1 the total workload would hit about `O(n^2 log n)` so the simplification could be noted as `b = O(n log n)`

- the third snippet is a recursive call function so it calls itself once so a linear complexity is implied making a `O(n)` be the time complexity of this snipet of code so we can postulate that `c = O(n)`

# Exercise II - answers
