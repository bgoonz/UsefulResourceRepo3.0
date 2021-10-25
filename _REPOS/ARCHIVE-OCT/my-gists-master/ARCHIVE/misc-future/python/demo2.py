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


def are_words_sorted(words, alpha_order):
    """
    Inputs:
    words: List[str]
    alpha_order: str
    Output:
    bool
    """
    # Your code here
    # init a dict to keep track of letters as keys and their altered indices as values
    altered_order_dict = {letter: index for index, letter in enumerate(alpha_order)}

    # this way we can look up each letter in our dictionary to figure out it's altered index
    # once we have the altered indices we can check if they are in the right order

    for i in range(1, len(words)):
        w1 = words[i - 1]
        w2 = words[i]
        # iterate over each of the chars of the 2 words, checking that the current letters adhere to the altered order
        for j in range(min(len(w1), len(w2))):
            ch1 = w1[j]
            ch2 = w2[j]

            # check each of the letters
            if ch1 != ch2:
                if altered_order_dict[ch1] > altered_order_dict[ch2]:
                    return False
                else:
                    break

        # if we end up falling out of the inner loop check if the length of w1 is greater than the length of w2
        if len(w1) > len(w2):
            # return False
            return False

    # once we fall out of the outer loop if we did not already return then we must return true
    return True


print(are_words_sorted(["lambda", "school"], "hlabcdefgijkmnopqrstuvwxyz"))  # => True
print(
    are_words_sorted(["were", "where", "yellow"], "habcdefgijklmnopqrstuvwxyz")
)  # => False
print(are_words_sorted(["lambda", "lamb"], "abcdefghijklmnopqrstuvwxyz"))  # => False
