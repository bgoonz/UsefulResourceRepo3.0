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
["the", "is", "cloudy", "sky"]
Explanation:
"the", "is", "cloudy", and "sky" are the four most frequent words. The words
are sorted from highest frequency to lowest.
```
Notes:
- `k` is always valid: `1 <= k <= number of unique elements.
- words in the input list only contain lowercase letters.
```
"""
def top_k_frequent(words, k):
    """
    Input:
    words -> List[str]
    k -> int
    Output:
    List[str]
    """
    # Your code here
    # use the python built in dictionary
    dictionary = dict()

    # iterate over each word in the words list
    for word in words:
        # if the word is in our dictionary
        if word in dictionary:
            # then increment the count of that word
            dictionary[word] += 1
        # otherwise
        else:
            # set the count of that word to 1
            dictionary[word] = 1
    # sort the words / keys in our dictionary in descending order
    word_list = sorted(dictionary, key=lambda x: (-dictionary[x], x))

    # return a slice of the sorted words from start of list up to the k - 1 element
    return word_list[:k]


# testing

print(top_k_frequent(["lambda", "school", "rules", "lambda", "school", "rocks"], 2))  # => ["lambda", "school"]
print(top_k_frequent(["the", "sky", "is", "cloudy", "the", "the", "the", "cloudy", "is", "is"], 4))  # => ["the", "is", "cloudy", "sky"]
