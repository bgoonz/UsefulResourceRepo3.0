
"""
You are given a non-empty list of words.
Write a function that returns the *k* most frequent elements.
The list that you return should be sorted by frequency from highest to lowest.
If two words have the same frequency, then the word with the lower alphabetical
order should come first.


Example 1:
```plaintext
Input:
words = ["lambda", "school", "rules", "lambda", "school", "rocks"]
lambda = 2
school = 2
rules = 1
rocks = 1

["school", "lambda"]

sort the list
["lambda", "school"]

k = 2
Output:
["lambda", "school"]
Explanation:
"lambda" and "school" are the two most frequent words.
```
Example 2:
```plaintext
Input:
words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]
k = 4
Output:
["the", "sky", "is", "cloudy"]
Explanation:
"the", "is", "cloudy", and "sky" are the four most frequent words. The words
are sorted from highest frequency to lowest.
```
Notes:
- `k` is always valid: `1 <= k <= number of unique elements.
- words in the input list only contain lowercase letters.
```
"""
def top_k_frequent(words, k): # O(n)
    """
    Input:
    words -> List[str]
    k -> int
    Output:
    List[str]
    """
    result = None

    # create a dictionary
    frequencies = {}

    # iterate over each word in words
    for word in words:
      # check if the word is in the dictionary
      if word in frequencies:
        frequencies[word] += 1
      else:
        frequencies[word] = 1
      
    def my_thing(word):
      return (frequencies[word] , word)

    # set the result to a sorted list of the dictionary that is sorted via the key in descending order
    result = sorted(frequencies, key=lambda word: (frequencies[word], word), reverse=True) # O(n)
    # ["sky", "cloudy", "the", "is"].sort()   
    # frequecy at word -> 1
    # [(1, "sky"), (2, "cloudy"), (3, "is"), (4, "the")]
    # ["sky", "cloudy", "is", "the"]
    # ["the", "is", "cloudy", "sky"]


    return sorted(result[:k], reverse=True) # O(k)
    # Your code here

words = ["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"]

mylist = top_k_frequent(words, 4)

print(mylist)