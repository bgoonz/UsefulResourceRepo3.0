const MIN_WORD_LENGTH = 3;

const EXCLUDED_WORDS = [
  // articles
  'a', 'an', 'the',
  // conjunctions
  'for', 'and', 'nor', 'or', 'but', 'yet', 'so',
  'after', 'although', 'as', 'because', 'before', 'even', 'when', 'where', 'whenever',
  // pronous
  'i', 'you', 'he', 'she', 'it', 'we', 'you', 'they',
  'me', 'him', 'her', 'it', 'us', 'them',
  'my', 'your', 'his',
  // others
  'all', 'that', 'not', 'are', 'which', 'with', 'this', 'get', 'who', 'more', 'what', 'must',
  'there', 'from', 'upon', 'every', 'into', 'one', 'to', 'of', 'in', 'by', 'if',
];
const EXCLUDED_WORDS_MAP = EXCLUDED_WORDS.reduce((map, word) => (map[word] = true, map), {});

function tokenize(word) {
  return word.toLowerCase().trim();
}

function hasOnlyWhitespace(word) {
  return !word || !word.trim().length || /\W/.test(word);
}

function isTooShort(word) {
  return hasOnlyWhitespace(word) || word.length < MIN_WORD_LENGTH;
}

function isExcludedWord(word) {
  return isTooShort(word) || !!EXCLUDED_WORDS_MAP[word];
}

function not(cb) {
  return arg => !cb(arg);
}

function getWordFrecuency(text) {
  return text.split(/\b/)
    .map(tokenize)
    .filter(not(isExcludedWord))
    .reduce((map, token) => {
      if (map.has(token)) {
        map.set(token, 1 + map.get(token));
      } else {
        map.set(token, 1);
      }

      return map;
    }, new Map());
}

function getPhrases(text, grouping = 1) {
  const phrases = new Map();
  const words = text
    .split(/\b/)
    .map(tokenize)
    .filter(not(isExcludedWord));
    // .filter(isTooShort);

  for (let index = 1; index < words.length; index++) {
    const prev = words[index - 1];
    const curr = words[index];
    const phrase = `${prev} ${curr}`.trim();

    if (phrases.has(phrase)) {
      phrases.set(phrase, 1 + phrases.get(phrase));
    } else {
      phrases.set(phrase, 1);
    }
  }

  return phrases;
}

function getNPhrases(text, grouping = 1) {
  const phrases = new Map();
  const words = text
    .split(/\b/)
    .map(tokenize)
    // .filter(isExcludedWord);
    .filter(not(isTooShort));

  for (let index = grouping; index < words.length; index++) {
    const phrase = words.slice(index - grouping, index + 1).join(' ').trim();

    if (phrases.has(phrase)) {
      phrases.set(phrase, 1 + phrases.get(phrase));
    } else {
      phrases.set(phrase, 1);
    }
  }

  return phrases;
}

function sortByFrecuency(map) {
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
}

function topKeys(map, top = 10) {
  return sortByFrecuency(map).filter(a => a[1] > 1).slice(0, top);
}

function findLongestPhrasesOld(text) {
  const phrases = new Map();

  const words = text
    .split(/\b/)
    .map(tokenize)
    // .filter(isExcludedWord);
    .filter(isTooShort);

  // console.log({words});

  const grouping = 4;

  for (let index = grouping; index < words.length; index++) {
    const phrase = words.slice(index - grouping, index).join(' ').trim();

    for (let index2 = index + 1; index2 < words.length; index2++) {
      const phrase2 = words.slice(index2 - grouping, index2).join(' ').trim();

      if (phrase.length < 1 || phrase !== phrase2) continue;

      // console.log({phrase, phrase2, index, index2})
      if (phrases.has(phrase)) {
        phrases.set(phrase, 1 + phrases.get(phrase));
      } else {
        phrases.set(phrase, 2);
      }
    }
  }

  return phrases;
}

function indexOfAll(text, word) {
  let count = -1;
  for (let index = 0; index < text.length; index++) {
    const newIndex = text.slice(index).indexOf(word); // bottleneck
    if (newIndex > -1) {
      count += 1;
      index += newIndex;
    }
  }
  return count < 0 ? 0 : (count + 1);
}

function findLongestPhrasesFrecuency(text, numWords = 4) {
  const words = text
    .split(/\b/)
    .map(tokenize)
    .filter(not(hasOnlyWhitespace));
    // .filter(isExcludedWord);
    // .filter(isTooShort);

  // console.log({words})

  const joinedWords = words.join(' ');

  const repeated = findLongestRepeatedPhrases(words, numWords);
  for (const [phrase] of repeated.entries()) {
    const count = indexOfAll(joinedWords, phrase); // bottleneck
    repeated.set(phrase, count);
  }
  return repeated;
}

/**
 * Find duplicated phrases in a text.
 * Longest common substring
 * @param {*} words
 * @param {*} numWords
 */
function findLongestRepeatedPhrases(words, numWords = 3) {
  const phrases = new Map();

  for (let index = 0; index < words.length; index++) {
    let longest = '';
    let distance = 0;
    const joinedWords = words.slice(index).join(' ');
    // console.log({joinedWords});

    for (let grouping = numWords; grouping < words.length; grouping++) {
      const phrase = words.slice(index, index + grouping).join(' ').trim();
      // console.log({ phrase, grouping, index, slice: (index + phrase.length), found: index + phrase.length + joinedWords.slice(index + phrase.length).indexOf(phrase) });

      if (joinedWords.slice(phrase.length).indexOf(phrase) > -1) {
        longest = phrase;
        distance = grouping;
      } else {
        break;
      }
    }

    const len = longest.length;
    if (len) {
      phrases.set(longest, 2);
      index += distance;
    }
  }

  return phrases;
}

module.exports = {
  hasOnlyWhitespace,
  isTooShort,
  isExcludedWord,
  getWordFrecuency,
  topKeys,
  getPhrases,
  getNPhrases,
  indexOfAll,
  findLongestPhrasesFrecuency,
  findLongestRepeatedPhrases,
};
