"""
You've uncovered a secret alien language. To your surpise, the language is made
up of all English lowercase letters. However, the alphabet is possibly in a
different order (but is some permutation of English lowercase letters).
You need to write a function that, given a sequence of words written in this
secret language, and the order the alphabet, will determine if the given words
are sorted "alphabetically" in this secret language.
The function will return a boolean value, true if the given words are sorted
"alphabetically" (based on the supplied alphabet), and false if they are not
sorted "alphabetically".
Example 1:
```plaintext
Input: words = ["lambda","school"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'l' comes before 's' in this language, then the sequence is
sorted.
```
Example 2:
```plaintext
Input: words = ["were","where","yellow"], order = "habcdefgijklmnopqrstuvwxyz"
Output: false
Explanation: As 'e' comes after 'h' in this language, then words[0] > words[1],
hence the sequence is unsorted.
```
Example 3:
```plaintext
Input: words = ["lambda","lamb"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first four characters "lamb" match, and the second string is
shorter (in size.) According to lexicographical rules "lambda" > "lamb",
because 'd' > '∅', where '∅' is defined as the blank character which is less
than any other character (https://en.wikipedia.org/wiki/Lexicographic_order).
```
Notes:
- order.length == 26
- All characters in words[i] and order are English lowercase letters.
"""
def are_words_sorted(words, alpha_order): # O(i) * O(j) ~> O(n)
    """
    Inputs:
    words: List[str]
    alpha_order: str
    Output:
    bool
    """
    # Your code here

    # create a dictionary where the key of each item is a letter from the alpha_order and the value is an index starting from zero
    order_index = {}

    for i, c in enumerate(alpha_order):
      order_index[c] = i
    

    # iterate over all of the words...
    for i in range(len(words) - 1):
      # extract the word at index of i set it to word1...
      word1 = words[i]
      # extract the word at index of i + 1 and set it to word2
      word2 = words[i + 1]

      # iterate over all chars in the shortest of word1 and word2...
      for j in range(min(len(word1), len(word2))):
        # check if word1 at the index of j is not equal to word2 at the index of j...
        if word1[i] != word2[j]:
          # if the dictionary at the key of word1 at the index of j is greater than the dictionary at the key of word2 at the index of j...
          if order_index[word1[j]] > order_index[word2[j]]:
            # return false to the caller
            return False
          
          # break
          break

        # otherwise
        else:
          # if the length of word1 is greater than the length of word2...
          if len(word1) > len(word2):
            # return false to the caller
            return False

        
    # return true to the caller
    return True



words = ["lambda","lamb"]
order = "abcdefghijklmnopqrstuvwxyz"

print(are_words_sorted(["were","where","yellow"], "habcdefgijklmnopqrstuvwxyz"))
print(are_words_sorted(words, order))
words = ["lambda","school"]
order = "hlabcdefgijkmnopqrstuvwxyz"
print(are_words_sorted(words, order))