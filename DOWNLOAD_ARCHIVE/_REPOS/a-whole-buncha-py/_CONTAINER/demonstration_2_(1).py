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

Input: words = ["lambda","school"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'l' comes before 's' in this language, then the sequence is
sorted.

Example 2:

Input: words = ["were","where","yellow"], order = "habcdefgijklmnopqrstuvwxyz"
Output: false
Explanation: As 'e' comes after 'h' in this language, then words[0] > words[1],
hence the sequence is unsorted.

Example 3:

Input: words = ["lambda","lamb"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first four characters "lamb" match, and the second string is
shorter (in size.) According to lexicographical rules "lambda" > "lamb",
because 'd' > '∅', where '∅' is defined as the blank character which is less
than any other character (https://en.wikipedia.org/wiki/Lexicographic_order).

Notes:

- order.length == 26
- All characters in words[i] and order are English lowercase letters.
"""
def compare_words(word1, word2, order_dict):
    # return true if word1 < word2
    # go letter by letter of both words
    for i in range(min(len(word1), len(word2))):
        if word1[i] == word2[i]:
            continue
        if order_dict[word1[i]] < order_dict[word2[i]]:
            return True
        else:
            return False
    
    # Compare length
    if len(word2) < len(word1):
        return False
    
    return True

def are_words_sorted(words, alpha_order):
    # Build our order_dict
    order_dict = {}
    for i in range(len(alpha_order)):
        order_dict[alpha_order[i]] = i
    # loop through words
    for i in range(len(words) - 1):
        # compare curr_word to next_word
        curr_word = words[i]
        next_word = words[i + 1]
        if not compare_words(curr_word, next_word, order_dict):
            return False
    return True

words = ["lambda","school"] 
order = "hlabcdefgijkmnopqrstuvwxyz"

print(are_words_sorted(words, order))

words = ["lambda","lamb"] 
order = "abcdefghijklmnopqrstuvwxyz"

print(are_words_sorted(words, order))

words = ["were","where","yellow"]
order = "habcdefgijklmnopqrstuvwxyz"

print(are_words_sorted(words, order))