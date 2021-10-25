Two words are *[blanagrams](https://en.wikipedia.org/wiki/Blanagram)* if they are [anagrams](keyword://anagram) but exactly one letter has been substituted for another.

Given two words, check if they are *blanagrams* of each other.

Example

- For `word1 = "tangram"` and `word2 = "anagram"`, the output should be\
  `checkBlanagrams(word1, word2) = true`;

  After changing the first letter `'t'` to `'a'` in the `word1`, the words become anagrams.

- For `word1 = "tangram"` and `word2 = "pangram"`, the output should be\
  `checkBlanagrams(word1, word2) = true`.

  Since a word is an *anagram* of itself (a so-called *trivial anagram*), we are not obliged to rearrange letters. Only the substitution of a single letter is required for a word to be a *blanagram*, and here `'t'` is changed to `'p'`.

- For `word1 = "aba"` and `word2 = "bab"`, the output should be\
  `checkBlanagrams(word1, word2) = true`.

  You can take the first letter `'a'` of `word1` and change it to `'b'`, obtaining the word `"bba"`, which is an anagram of `word2 = "bab"`. It is also possible to change the first letter `'b'` of `word2` to `'a'` and obtain `"aab"`, which is an anagram of `word1 = "aba"`.

- For `word1 = "silent"` and `word2 = "listen"`, the output should be\
  `checkBlanagrams(word1, word2) = false`.

  These two words are *anagrams* of each other, but no letter substitution was made (the trivial substitution of a letter with itself shouldn't be considered), so they are not *blanagrams*.

Input/Output

- [execution time limit] 4 seconds (py3)

- [input] string word1

  A string consisting of lowercase letters.

  _Guaranteed constraints:_\
  `1 ≤ word1.length ≤ 100`.

- [input] string word2

  A string consisting of lowercase letters.

  _Guaranteed constraints:_\
  `word2.length = word1.length`.

- [output] boolean

  Return `true` if `word1` and `word2` are *blanagrams* of each other, otherwise return `false`.

# My code for the preceding problem was as follows:

```py

def checkBlanagrams(word1, word2):
    lenWord1 = len(word1)
    lenWord2 = len(word2)
    freq1 = [0] * 26
    freq2 = [0] * 26
    count = 0
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord('a')] += 1
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord('a')] += 1
    for i in range(26):
        count += min(freq1[i], freq2[i])
    return count == lenWord1-1 == lenWord2-1
if __name__ == "__main__":
    print(checkBlanagrams('tangram', 'anagram'))


```

## Conventions:

> the length of the words is represented by lenWord1 & lenWord2 respectively....

> freq1 & freq2 are lists of length 26 (corresponding with the length of the alphabet) ... (which we will use to calculate the frequency of each character that occurs in the words)... both are initially populated with the value 0

> count is a variable that stores the number of valid pairs

**The ord() function returns an integer representing the Unicode character.**

#### The loop:

```py
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord('a')] += 1
```

#### will be used to update the frequencies of the characters of string word1

##### Likewise: the second loop shown below will be used to update the frequencies of the characters of string word2.

```py
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord('a')] += 1

```

#### The third loop:

```py
    for i in range(26):
        count += min(freq1[i], freq2[i])
```

#### Is used to update the count of the number of characters in each string that have the same frequency as each other.

#### Finally:

```py
    return count == lenWord1-1 == lenWord2-1
```

### We return the boolean expression evaluating if the number of common characters between the strings is equal to the length of the strings minus the one overlapping string that should differ as per the definition of a Blanagram.

## The only real difficulty I encountered was knowing where to start... as I initially attempted to use python libraries and other builtin functions like zip() ... before settling on doing a fully native implementation.

# Code:

```py
def checkBlanagrams(word1, word2):
    lenWord1 = len(word1)
    lenWord2 = len(word2)
    freq1 = [0] * 26
    freq2 = [0] * 26
    count = 0
    for i in range(lenWord1):
        freq1[ord(word1[i]) - ord('a')] += 1
    for i in range(lenWord2):
        freq2[ord(word2[i]) - ord('a')] += 1
    for i in range(26):
        count += min(freq1[i], freq2[i])
    return count == lenWord1-1 == lenWord2-1
if __name__ == "__main__":
    print(checkBlanagrams('tangram', 'anagram'))

```

# Time Complexity: O(n1 + n2)

# Space Complexity: O(1)

> here n1 and n2 are the lengths of word1 and word2 respectively...

---

> Some list methods perform the same number of basic operations, irrespective of list size, so use constant time complexity of O(1). For other list methods, the number of operations they perform is proportional to the number of items in the list, so use linear time complexity of O(n).

| Operation       | Example            | Big-O      |
| --------------- | ------------------ | ---------- |
| Index           | list[0]            | O(1)       |
| Store           | list[0] = 0        | O(1)       |
| Append          | list.append(4)     | O(1)       |
| Pop             | list.pop()         | O(1)       |
| Clear           | list.clear()       | O(1)       |
| Length          | len(list)          | O(1)       |
| Pop Index       | list.pop(0)        | O(n)       |
| Remove          | list.remove('x')   | O(n)       |
| Insert          | list.insert(0,'a') | O(n)       |
| Del operator    | del list           | O(n)       |
| Iteration       | for v in list:     | O(n)       |
| Containment     | 'x' in list1       | O(n)       |
| Equality        | list1 == list2     | O(n)       |
| Copy            | list.copy()        | O(n)       |
| Reverse         | list.reverse()     | O(n)       |
| get slice [x:y] | list[a:b]          | O(k)       |
| del slice       | del list[a:b]      | O(n)       |
| set slice       |                    | O(n+k)     |
| concatenate     |                    | O(k)       |
| Sort            | list.sort()        | O(n log n) |
| Multiply        | 5 \* list          | O(k n)     |

Even though there are three loops in my solution none of them are nested and they each scale with the length of the words provided... thus their time complexity reduces to:

# O(n1 + n2) ≈ O(n)

For iterative algorithms we have to consider the variables and the respective abstract (or native) data structures we assign to them. For example declaring an list of size n would add to the space complexity by a factor of O(n)...

### Since we declare lists of a fixed (or constant) length of 26... our space complexity is O(1)

    ---
    ---

## You are given a sorted array in ascending order that is rotated at some unknown pivot (i.e., \`[0,1,2,4,5,6,7]\` might become \`[4,5,6,7,0,1,2]\`) and a target value.

# Write a function that returns the target value's index. If the target value is not present in the array, return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: `nums = [4,5,6,7,0,1,2], target = 0`\
Output: `4`

Example 2:

Input: `nums = [4,5,6,7,0,1,2], target = 3`\
Output: `-1`

- [execution time limit] 4 seconds (py3)

- [input] array.integer nums

- [input] integer target

- [output] integer

---

---

    ---
    ---

Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

The binary search algorithm breaks the list down in half on every iteration, rather than sequentially combing through the list. On large lists, this method can be really useful.

The time complexity of the binary search algorithm is O(log n). The best-case time complexity would be O(1) when the central index would directly match the desired value. The worst-case scenario could be the values at either extremity of the list or values not in the list.

---

---

    ---
    ---

---

---
