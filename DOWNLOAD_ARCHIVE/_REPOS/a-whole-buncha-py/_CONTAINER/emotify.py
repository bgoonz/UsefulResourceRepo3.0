"""
Challenge #4:
Create a function that changes specific words into emoticons. Given a sentence
as a string, replace the words `smile`, `grin`, `sad`, and `mad` with their
corresponding emoticons.
word -> emoticon
---
smile -> :D
grin -> :)
sad -> :(
mad	-> :P
Examples:
- emotify("Make me smile") ➞ "Make me :D"
- emotify("Make me grin") ➞ "Make me :)"
- emotify("Make me sad") ➞ "Make me :("
Notes:
- The sentence always starts with "Make me".
- Try to solve this without using conditional statements like if/else.
"""

def emotify(txt):
    # Solution 1
    return txt.replace("smile", ":D").replace("grin", ":)").replace("sad", ":(").replace("mad", ":P")

    # Solution 2
    d = {'smile': ':D',
         'grin': ':)',
         'sad': ':(',
         'mad': ':P'}
    for k, v in d.items():
        txt = txt.replace(k, v)
    return txt

    # Solution 3
    sub = {'smile': ':D', 'grin': ':)', 'sad': ':(', 'mad': ':P'}
    return txt[:8] + sub[txt[8:]]

    # Solution 4
    emoticon = {'smile': ':D', 'grin': ':)', 'sad': ':(', 'mad': ':P'}
    return 'Make me {}'.format(emoticon[txt[8:]])
