import collections
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

words = ["rules", "school", "lambda", "lambda", "school", "rocks"]
k = 2

def top_k_frequent_old(words, k):
    """
    Input:
    words -> List[str]
    k -> int

    Output:
    List[str]
    """
    # Build a frequency dict
    freq_dict = {}

    for word in words:
        if word not in freq_dict:
            freq_dict[word] = 1
        else:
            freq_dict[word] += 1


    sorted_words = sorted(freq_dict, key=lambda dict_key: (-freq_dict[dict_key], dict_key))
    return sorted_words[:k]

# almost one line solution using Counter instead of manually building our dictionary
def top_k_frequent(words, k):
    counts = dict(collections.Counter(words))
    return sorted(counts,  key=lambda dict_key: (-counts[dict_key], dict_key))[:k]
print(top_k_frequent(words, k))