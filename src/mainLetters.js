/**
 * Removes vowel symbols from a Gurmukhi string
 *
 * @since 1.0.0
 * @param {string} words The string from which to get main letters
 * @returns {string} Returns a single string of characters
 * @example
 *
 * mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'Ae ml grsK Ae ml q mr gr k pAr'
 */

function mainLetters(words) {
  return words
    .replace(/[^A-Za-z ]/g, '')
    .replace(/[uUiIyYwWoOMNØRH@~®`]/g, '')
    .trim();
}

module.exports = mainLetters;
