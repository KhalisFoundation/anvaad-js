/**
 * Retrieve the first letter of each word from a string
 *
 * @since 1.0.0
 * @param {string} words The string from which to get first letters
 * @returns {string} Returns a single string of characters
 * @example
 *
 * firstLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'Ae ml grsK Ae ml q mr gr k pAr'
 */

function firstLetters(words = null, eng = false) {
  if (!words) { return ''; }

  const newWords = words
    .replace(/\]/g, '')
    .replace(/rhwa/g, '')
    .replace(/[0-9]/g, '');

  function firstLetter(word) {
    if (word) {
      if (word[0] === 'i' && !eng) return word[1];
      if (word[0] === '|') return '';
      return word[0];
    }
    return '';
  }

  return newWords.split(' ').map(firstLetter).join('');
}

module.exports = firstLetters;
