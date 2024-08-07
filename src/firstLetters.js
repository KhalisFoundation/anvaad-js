/**
 * Retrieve the first letter of each word from a string
 *
 * @since 1.0.0
 * @param {string} words The string from which to get first letters
 * @param {boolean} eng Whether the string is English (default=false)
 * @param {boolean} simplify Whether to remove lagga matra/bindia (default=false)
 * @returns {string} Returns a single string of characters
 * @example
 *
 * firstLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'AmgAmqmgkp'
 */

const simplifications = [
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
  ['ਨੂੰ', 'ਨ'],
  ['&', 'P'],
  ['ਫ਼', 'ਫ'],
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

function firstLetters(words = '', eng = false, simplify = false) {
  if (words === '' || typeof words !== 'string') {
    return words;
  }
  let newWords = words;

  if (simplify) {
    simplifications.forEach((e) => {
      newWords = newWords.replace(new RegExp(e[0], 'g'), e[1]);
    });
  }

  newWords = newWords
    .replace(/\]/g, '')
    .replace(/\[/g, '')
    .replace(/॥/g, '')
    .replace(/।/g, '')
    .replace(/rhwau dUjw/g, '')
    .replace(/rhwau/g, '')
    .replace(/ਰਹਾਉ/g, '')
    .replace(/ਰਹਾਉ ਦੂਜਾ/g, '')
    .replace(/[0-9]/g, '')
    .replace(/[੦-੯]/g, '')
    .replace(/[;,.]/g, '');

  function firstLetter(word) {
    if (word) {
      if (word[0] === 'i' && !eng) return word[1];
      return word[0];
    }
    return '';
  }

  let letters = newWords.split(' ').map(firstLetter).join('');
  vowels.forEach((e) => {
    letters = letters.replace(new RegExp(e[0], 'g'), e[1]);
  });
  return !eng ? letters : letters.replace(/\|/g, '');
}

module.exports = firstLetters;
