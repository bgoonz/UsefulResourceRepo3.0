Add your answers to the questions below.

1. What is the runtime complexity of your `depth_first_for_each` method?
   the runtime comnplexity of this one has a largest order of `O(2n)` so the simplified notation would give it a time complexity of `O(n)`

2. What is the space complexity of your `depth_first_for_each` function?
   the largest possible runtime size should be on a factor of `O(2n + 3)` due to the callback call at the start and the possible recursive calls but we can simplify this to `O(2n)` for the space complexity

3. What is the runtime complexity of your `breadth_first_for_each` method?
   the largest order is `O(3^n)` so we are working with an exponential order so we can simplify it to `O(C^n)`

4. What is the space complexity of your `breadth_first_for_each` method?
   and based upon the returns for the recursive functions they only ever return 1 thing therefore a space of `O(n)` is used

5. What is the runtime complexity of your `heapsort` function?
   based on the simplicity of the heap sort i am using 2 loops without nesting so the overall simplified runtime complexity is `O(n)`

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
   The space complexity is `O(3n)` give or take a few data cycles due to it having 2 sets but only stufing a few values per call

   I have done a few bits of breakdown in the source code to elborate on my conclusions.
