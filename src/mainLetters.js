/**
 * Removes vowel symbols from a Gurmukhi string
 *
 * @since 1.0.0
 * @param {string} words The string from which to get main letters
 * @param {boolean} simplify Whether to simplify half-chars
 * @returns {string} Returns a single string of characters
 * @example
 *
 * mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'Ae ml grsK Ae ml q mr gr k pAr'
 */

const simplifications1 = [
  ['E', 'a'],
  ['L', 'l'],
  ['S', 's'],
  ['z', 'j'],
  ['Z', 'g'],
  ['\\^', 'K'],
  ['ƒ', 'n'],
  ['&', 'P'],
];

const simplifications2 = [
  ['H', 'h'],
  ['R', 'r'],
  ['®', 'r'],
  ['Í', 'v'],
  ['œ', 'q'],
  ['ç', 'c'],
  ['†', 't'],
  ['˜', 'n'],
  ['´', 'X'],
  ['Î', 'X'],
  ['ì', 'X'],
  ['í', 'X'],
];

function mainLetters(words = '', simplify = false) {
  if (words === '' || typeof words !== 'string') {
    return words;
  }

  let newWords = words;

  // remove embedded lagga matra and bindia
  simplifications1.forEach((e) => {
    newWords = newWords.replace(new RegExp(e[0], 'g'), e[1]);
  });

  // optionally transform half-letters to full letters
  if (simplify) {
    simplifications2.forEach((e) => {
      newWords = newWords.replace(new RegExp(e[0], 'g'), e[1]);
    });
  } else {
    newWords = newWords.replace(/[HR]/g, '');
  }

  return newWords
    .replace(/[^A-Za-z ]/g, '')
    .replace(/[uUiIyYwWoOMN]/g, '')
    .replace(/[ \s]+/g, ' ')
    .trim();
}

module.exports = mainLetters;
