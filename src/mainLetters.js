/**
 * Removes vowel symbols from a Gurmukhi string
 *
 * @since 1.0.0
 * @param {string} words The string from which to get main letters
 * @param {boolean} simplify Whether to remove lagga matra/bindia (default=false)
 * @param {boolean} simplifyConsonants Whether to simplify half-chars (default=false)
 * @returns {string} Returns a single string of characters
 * @example
 *
 * mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'Ae ml grsK Ae ml q mr gr k pAr'
 */

// simplify characters
const simplifications1 = [
  ['E', 'a'],
  ['ਓ', 'ੳ'],
  ['<>', 'a'],
  ['ੴ', 'ੳ'],
  ['L', 'l'],
  ['ਲ਼', 'ਲ'],
  ['S', 's'],
  ['ਸ਼', 'ਸ'],
  ['z', 'j'],
  ['ਜ਼', 'ਜ'],
  ['Z', 'g'],
  ['ਗ਼', 'ਗ'],
  ['\\^', 'K'],
  ['ਖ਼', 'ਖ'],
  ['ƒ', 'n'],
  ['&', 'P'],
  ['ਫ਼', 'ਫ'],
];

// transform half-letters to full letters
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
  ['Ï', 'X'],
];

const vowels = [
  ['ਆ', 'ਅ'],
  ['ਇ', 'ੲ'],
  ['ਈ', 'ੲ'],
  ['ਉ', 'ੳ'],
  ['ਊ', 'ੳ'],
  ['ਏ', 'ੲ'],
  ['ਐ', 'ਅ'],
  ['ਔ', 'ਅ'],
];

function mainLetters(words = '', simplify = false, simplifyConsonants = false) {
  if (words === '' || typeof words !== 'string') {
    return words;
  }

  let newWords = words;

  if (simplify) {
    simplifications1.forEach((e) => {
      newWords = newWords.replace(new RegExp(e[0], 'g'), e[1]);
    });
  }

  if (simplifyConsonants) {
    simplifications2.forEach((e) => {
      newWords = newWords.replace(new RegExp(e[0], 'g'), e[1]);
    });
    newWords = newWords
      .replace(/੍/g, '')
      .replace(/ੵ/g, 'ਯ');
  } else {
    newWords = newWords
      .replace(/[HR]/g, '')
      .replace(/੍ਹ/g, '')
      .replace(/੍ਰ/g, '');
  }

  vowels.forEach((e) => {
    newWords = newWords.replace(new RegExp(e[0], 'g'), e[1]);
  });

  return newWords
    .replace(/[^A-Za-z\u0A00-\u0A7F ]/g, '')
    .replace(/[uUiIyYwWoOMN]/g, '')
    .replace(/[\u0A00-\u0A04]/g, '')
    .replace(/[\u0A3C-\u0A51]/g, '')
    .replace(/[\u0A60-\u0A71]/g, '')
    .replace(/[ \s]+/g, ' ')
    .trim();
}

module.exports = mainLetters;
