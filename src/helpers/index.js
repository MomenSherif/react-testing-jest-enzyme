const { func } = require('prop-types');

/**
 * @method getLetterMatchCount
 * @param {String} gussedWord - Gussed Word
 * @param {String} secretWord - Secret Word
 * @returns {Number} - Number of letters matched between gussed and secret word
 */
export function getLetterMatchCount(gussedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const gussedLetterSet = new Set(gussedWord.split(''));
  return [...secretLetterSet].filter((letter) => gussedLetterSet.has(letter))
    .length;
}
