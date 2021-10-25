const fs = require('fs').promises;

const {
  getWordFrecuency,
  topKeys,
  getPhrases,
  getNPhrases,
  findLongestPhrasesFrecuency,
} = require('./index');

async function main() {
  // read text file
  // const text = await fs.readFile('data/repeated.txt', 'utf8');
  // const text = await fs.readFile('data/The-Science-of-Getting-Rich-summary3.txt', 'utf8');
  // const text = await fs.readFile('data/The-Science-of-Getting-Rich-summary2.txt', 'utf8');
  // const text = await fs.readFile('data/The-Science-of-Getting-Rich-summary1.txt', 'utf8');
  // const text = await fs.readFile('data/The-Science-of-Getting-Rich-summary.txt', 'utf8');
  // const text = await fs.readFile('data/The-Science-of-Getting-Rich.txt', 'utf8');
  const text = await fs.readFile('data/cs-material.txt', 'utf8');

  // get the most repeated words
  const words = getWordFrecuency(text);

  // console.log({text, words});
  const sortedWord1 = topKeys(words);
  console.log({sortedWord1});

  // get 2-word phrases
  const phrases = getPhrases(text);
  const sortedWord2 = topKeys(phrases);
  console.log({sortedWord2});

  // get 3-word phrases
  const phrases3 = getNPhrases(text, 2);
  const sortedWord3 = topKeys(phrases3);
  console.log({sortedWord3});

  // longest repeated phrases
  // Find the longest repeated phrases (could be multiple sentenses).
  const phasesn = findLongestPhrasesFrecuency(text);
  const sortedWordN = topKeys(phasesn, 40);
  console.log({sortedWordN});
}

main();
