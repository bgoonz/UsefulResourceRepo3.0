const {
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
} = require('./index');

describe('summarizer', () => {
  describe('hasOnlyWhitespace', () => {
    it('hasOnlyWhitespace', () => {
      expect(hasOnlyWhitespace('aaa')).toEqual(false);
    });

    it('hasOnlyWhitespace', () => {
      expect(hasOnlyWhitespace('   ')).toEqual(true);
    });
  });

  describe('isTooShort', () => {
    it('isTooShort', () => {
      expect(isTooShort('aaa')).toEqual(false);
    });

    it('isTooShort', () => {
      expect(isTooShort('a')).toEqual(true);
    });

    it('isTooShort', () => {
      expect(isTooShort('to')).toEqual(false);
    });
  });

  describe('isExcludedWord', () => {
    it('isExcludedWord', () => {
      expect(isExcludedWord('aaaaa')).toEqual(false);
    });

    it('isExcludedWord', () => {
      expect(isExcludedWord(' ')).toEqual(true);
    });
  });

  describe('getWordFrecuency', () => {
    it('should find repeated', () => {
      expect(getWordFrecuency('aaa eee aaa kkk')).toEqual(new Map([
        ['aaa', 2],
        ['eee', 1],
        ['kkk', 1],
      ]));
    });
  });

  describe('indexOfAll', () => {
    it('should find a duplicate', () => {
      expect(indexOfAll('camara', 'cama')).toEqual(1);
    });

    it('should not find a duplicate', () => {
      expect(indexOfAll('camara', 'coma')).toEqual(0);
    });

    it('should find multiple duplicates', () => {
      expect(indexOfAll('camara con cama', 'cama')).toEqual(2);
    });

    it('should find multiple duplicates', () => {
      expect(indexOfAll('camara', 'a')).toEqual(3);
    });
  });

  describe('findLongestPhrasesFrecuency', () => {
    const sentence = 'clear concept of what he wants to be; who knows that he can become what he wants to be and who is determined to BE what he wants to be.';

    it('should find the longest phrases', () => {
      expect(findLongestPhrasesFrecuency('aaa bbb cc aaa bbb', 2)).toEqual(new Map([
        ['aaa bbb', 2],
      ]));
    });

    it('should find the longest phrases in sentence', () => {
      expect(findLongestPhrasesFrecuency(sentence, 2)).toEqual(new Map([
        ['to be', 4],
        ['what he wants to be', 3],
      ]));
    });

    it('should find the longest phrases by default longer than 4 words', () => {
      expect(findLongestPhrasesFrecuency(sentence)).toEqual(new Map([
        ['what he wants to be', 3],
      ]));
    });

    it('should find the longest phrases frecuency', () => {
      expect(findLongestPhrasesFrecuency('aaa bbb cc aaa bbb aaa bbb', 2)).toEqual(new Map([
        ['aaa bbb', 3],
      ]));
    });

    it('should find the longest phrases frecuency and exclude punctuation', () => {
      expect(findLongestPhrasesFrecuency('aaa bbb. cc aaa bbb aaa bbb.', 2)).toEqual(new Map([
        ['aaa bbb', 3],
      ]));
    });

    it('should find the longest phrases frecuency and not exclude numbers', () => {
      expect(findLongestPhrasesFrecuency('aaa bbb 1 cc aaa bbb aaa bbb 1', 2)).toEqual(new Map([
        ['aaa bbb 1', 2],
        ['aaa bbb', 3],
      ]));
    });

    it('should not find the longest phrases', () => {
      expect(findLongestPhrasesFrecuency('aaa bbbx cc aaa bbb', 2)).toEqual(new Map());
    });
  });

  describe('findLongestRepeatedPhrases', () => {
    it('should find the longest phrases', () => {
      const words = ['aaa', 'bbb', 'cc', 'aaa', 'bbb'];
      expect(findLongestRepeatedPhrases(words, 2)).toEqual(new Map([
        ['aaa bbb', 2],
      ]));
    });

    it('should not find the longest phrases', () => {
      const words = ['aaa', 'bbbx', 'cc', 'aaa', 'bbb'];
      expect(findLongestRepeatedPhrases(words, 2)).toEqual(new Map());
    });

    it('should find the longest phrases', () => {
      const words = ['aaa', 'bbb', 'cc', 'aaa', 'bbb'];
      expect(findLongestRepeatedPhrases(words, 2)).toEqual(new Map([
        ['aaa bbb', 2],
      ]));
    });
  });
});
