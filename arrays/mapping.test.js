const { getLetterCount, testThis } = require('./mapping');

describe('mapping value', () => {
  test('getLetterCount returns an array containing the length of words', () => {
    const words = ['hello', 'world', 'hi', 'bye'];
    const expected = [5, 5, 2, 3];
    const actual = getLetterCount(words);
    expect(actual).toEqual(expected);
  });

  test('getLetterCount returns an empty array when given an empty array', () => {
    const words = [];
    const expected = [];
    const actual = getLetterCount(words);
    expect(actual).toEqual(expected);
  });

  test('testThis', () => {
    const words = ['hello', 'world', 'hi', 'bye'];
    const expected = [9, 9, 6, 7];
    const actual = testThis(words);
    expect(actual).toEqual(expected);
  });
});

