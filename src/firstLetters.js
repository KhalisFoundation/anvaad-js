/**
 * Retrieve the first letter of each word from a string
 *
 * @since 1.0.0
 * @param {string} words The string from which to get first letters
 * @param {boolean=} [eng=false] Whether the string is English
 * @returns {string} Returns a single string of characters
 * @example
 *
 * firstLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'AmgAmqmgkp'
 */

function firstLetters(words = '', eng = false) {
  const newWords = words
    .replace(/\]/g, '')
    .replace(/rhwa/g, '')
    .replace(/[0-9]/g, '');

  function firstLetter(word) {
    if (word) {
      if (word[0] === 'i' && !eng) return word[1];
      return word[0];
    }
    return '';
  }

  return newWords.split(' ').map(firstLetter).join('').replace(/\|/g, '');
}

module.exports = firstLetters;
