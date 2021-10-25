# Book Summarizer

Get the most used words and phrases in hopes of getting the central ideas.

## Usage

Clone this repo and update the `src/runner.js` with you filename

```
node ./src/runner.js
```

## Example

Example of the output

```
$ time node ./src/runner.js                                                                                     v12.3.1
{
  sortedWord1: [
    [ 'will', 256 ],
    [ 'can', 187 ],
    [ 'rich', 171 ],
    [ 'things', 149 ],
    [ 'have', 146 ],
    [ 'man', 123 ],
    [ 'way', 100 ],
    [ 'thought', 100 ],
    [ 'mind', 93 ],
    [ 'want', 91 ]
  ]
}
{
  sortedWord2: [
    [ 'getting rich', 55 ],
    [ 'certain way', 47 ],
    [ 'formless substance', 24 ],
    [ 'faith purpose', 24 ],
    [ 'science getting', 22 ],
    [ 'man can', 17 ],
    [ 'use will', 16 ],
    [ 'things certain', 16 ],
    [ 'thinking substance', 14 ],
    [ 'mental image', 13 ]
  ]
}
{
  sortedWord3: [
    [ 'what you want', 42 ],
    [ 'science getting rich', 22 ],
    [ 'the certain way', 22 ],
    [ 'faith and purpose', 22 ],
    [ 'the science getting', 17 ],
    [ 'the man who', 15 ],
    [ 'that you are', 15 ],
    [ 'you are not', 14 ],
    [ 'you want and', 14 ],
    [ 'that you should', 12 ]
  ]
}
{
  sortedWordN: [
    [ 'science of getting rich', 21 ],
    [ 'in a certain way', 19 ],
    [ 'in the certain way', 18 ],
    [ 'the science of getting rich', 17 ],
    [ 'of what you want', 13 ],
    [ 'what you want and', 11 ],
    [ 'what you want to', 10 ],
    [ 'which all things are made', 10 ],
    [ 'you do not have to', 10 ],
    [ 'do not have to', 10 ],
    [ 'from which all things', 10 ],
    [ 'to do things in', 9 ],
    [ 'things in a certain way', 9 ],
    [ 'the thing he thinks about', 9 ],
    [ 'with faith and purpose', 9 ],
    [ 'stuff from which all things are made', 8 ],
    [ 'in this substance produces the', 8 ],
    [ 'your faith and purpose', 8 ],
    [ 'you want to do', 8 ],
    [
      'there is a thinking stuff from which all things are made and ' +
        'which in its original state permeates penetrates and fills the ' +
        'interspaces of the universe a thought in this substance ' +
        'produces the thing that is imaged by the thought man can form ' +
        'things in his thought and by impressing his thought upon ' +
        'formless substance can cause the thing he thinks about to be ' +
        'created',
      7
    ],
    [ 'of the science of', 7 ],
    [ 'man or woman who', 6 ],
    [ 'in a certain way a', 6 ],
    [ 'do not try to', 6 ],
    [ 'into the right business', 6 ],
    [ 'of the science of getting rich', 6 ],
    [ 'you will get rich', 5 ],
    [ 'want to get rich', 5 ],
    [ 'the most of yourself', 5 ],
    [ 'from the competitive to the creative', 5 ],
    [ 'step toward getting rich', 5 ],
    [ 'to use your will', 5 ],
    [ 'you what you want', 5 ],
    [ 'to do what you', 5 ],
    [ 'must form a clear', 5 ],
    [ 'of the things he', 5 ],
    [ 'on the creative plane', 5 ],
    [ 'vision of what you want', 5 ],
    [ 'in the science of getting rich', 4 ],
    [ 'is an exact science', 4 ]
  ]
}
node ./src/runner.js  366.88s user 1.68s system 99% cpu 6:09.46 total
```

Related topics:
- https://en.wikipedia.org/wiki/Longest_common_substring_problem
- https://en.wikipedia.org/wiki/N-gram
- https://en.wikipedia.org/wiki/Suffix_array
