Let's come up with a plan for the following problem...
```
We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. 

And we'll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. 

Write a function to determine if a number divides itself.

[source - https://codingbat.com/prob/p165941]
```

**Understand**
- should we deal with non numeric values? leave up to engineer
- how should we handle decimal values? we should only take in int
- what should this function return? True or False

**Plan**
# loop through the digits in the number
# - use % to get the rightmost digit
# - use / to discard the rightmost
# - if dividing by the single digit leaves a remainder return false
# - if the digit is a zero return false

# - if the loop exits without returning false then return true

