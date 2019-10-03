const mapping = {
  a: 'ੳ',
  A: 'ਅ',
  s: 'ਸ',
  S: 'ਸ਼',
  d: 'ਦ',
  D: 'ਧ',
  f: 'ਡ',
  F: 'ਢ',
  g: 'ਗ',
  G: 'ਘ',
  h: 'ਹ',
  H: '੍ਹ',
  j: 'ਜ',
  J: 'ਝ',
  k: 'ਕ',
  K: 'ਖ',
  l: 'ਲ',
  L: 'ਲ਼',
  q: 'ਤ',
  Q: 'ਥ',
  w: 'ਾ',
  W: 'ਾਂ',
  e: 'ੲ',
  E: 'ਓ',
  r: 'ਰ',
  R: '੍ਰ',
  '®': '੍ਰ',
  t: 'ਟ',
  T: 'ਠ',
  y: 'ੇ',
  Y: 'ੈ',
  u: 'ੁ',
  ü: 'ੁ',
  U: 'ੂ',
  '¨': 'ੂ',
  i: 'ਿ',
  I: 'ੀ',
  o: 'ੋ',
  O: 'ੌ',
  p: 'ਪ',
  P: 'ਫ',
  z: 'ਜ਼',
  Z: 'ਗ਼',
  x: 'ਣ',
  X: 'ਯ',
  c: 'ਚ',
  C: 'ਛ',
  v: 'ਵ',
  V: 'ੜ',
  b: 'ਬ',
  B: 'ਭ',
  n: 'ਨ',
  ƒ: 'ਨੂੰ',
  N: 'ਂ',
  ˆ: 'ਂ',
  m: 'ਮ',
  M: 'ੰ',
  µ: 'ੰ',
  '`': 'ੱ',
  '~': 'ੱ',
  '¤': 'ੱ',
  Í: '੍ਵ',
  ç: '੍ਚ',
  '†': '੍ਟ',
  œ: '੍ਤ',
  '˜': '੍ਨ',
  '´': 'ੵ',
  æ: '਼',
  Î: '੍ਯ',
  1: '੧',
  2: '੨',
  3: '੩',
  4: '੪',
  5: '੫',
  6: '੬',
  '^': 'ਖ਼',
  7: '੭',
  '&': 'ਫ਼',
  8: '੮',
  9: '੯',
  0: '੦',
  '\\': 'ਞ',
  '|': 'ਙ',
  '[': '।',
  ']': '॥',
  '<': 'ੴ',
  Ú: 'ਃ',
  '@': '੍ਹ',
  '‚': '❁',
  ' ': ' ',
};

/**
 * Convert Gurmukhi script to Unicode
 *
 * @since 1.0.0
 * @param {string} text Gurbani Akhar script to be converted
 * @returns {string} Returns unicode text
 * @example
 *
 * unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥'
 */

function unicode(text = '') {
  if (text === '' || typeof text !== 'string') {
    return text;
  }
  let convertedText = '';

  const chars = text
    .replace(/>/gi, '')
    .replace(/Ø/gi, '')
    .split('');

  for (let j = 0; j < chars.length; j += 1) {
    const currentChar = chars[j];
    const nextChar = chars[j + 1];
    const nextNextChar = chars[j + 2];

    if (currentChar === 'i') {
      if (nextChar != null) {
        if (nextChar === 'e') {
          convertedText += 'ਇ';
        } else if (nextNextChar === 'R' || nextNextChar === 'H' ||
                            nextNextChar === 'Í' || nextNextChar === 'ç' ||
                            nextNextChar === '†' || nextNextChar === 'œ' ||
                            nextNextChar === '~' || nextNextChar === '®') {
          convertedText += mapping[nextChar];
          convertedText += mapping[nextNextChar];
          convertedText += 'ਿ';
          j += 1;
        } else {
          convertedText += mapping[nextChar];
          convertedText += 'ਿ';
        }
        j += 1;
      } else {
        convertedText += mapping[currentChar];
      }
    } else if (currentChar === 'a') {
      switch (nextChar) {
        case 'u':
          convertedText += 'ਉ';
          j += 1;
          break;
        case 'U':
          convertedText += 'ਊ';
          j += 1;
          break;
        default:
          convertedText += mapping[currentChar];
      }
    } else if (currentChar === 'A') {
      switch (nextChar) {
        case 'w':
          convertedText += 'ਆ';
          j += 1;
          break;
        case 'W':
          convertedText += 'ਆਂ';
          j += 1;
          break;
        case 'Y':
          convertedText += 'ਐ';
          j += 1;
          break;
        case 'O':
          convertedText += 'ਔ';
          j += 1;
          break;
        default:
          convertedText += mapping[currentChar];
      }
    } else if (currentChar === 'e') {
      switch (nextChar) {
        case 'I':
          convertedText += 'ਈ';
          j += 1;
          break;
        case 'y':
          convertedText += 'ਏ';
          j += 1;
          break;
        default:
          convertedText += mapping[currentChar];
      }
    } else if (currentChar === 'u' && nextChar === 'o') {
      convertedText += 'ੋੁ';
      j += 1;
    } else if ((currentChar === '@' && nextChar === 'Y') || (currentChar === '@' && nextChar === 'y') || (currentChar === '@' && nextChar === 'o') || (currentChar === '@' && nextChar === 'O')) {
      convertedText += mapping[nextChar];
      convertedText += '੍';
      j += 1;
    } else if (currentChar === '@' && nextChar === 'w') {
      convertedText += '੍ਹ';
      convertedText += mapping[nextChar];
      j += 1;
    } else if ((currentChar === 'N' && nextChar === 'I') || (currentChar === 'M' && (nextChar === 'U' || nextChar === 'u' || nextChar === 'ü')) || (currentChar === 'ˆ' && nextChar === 'I') || (currentChar === 'N' && nextChar === 'y')) {
      convertedText += mapping[nextChar];
      convertedText += mapping[currentChar];
      j += 1;
    } else {
      convertedText += mapping[currentChar] || currentChar;
    }
  }

  return convertedText;
}

module.exports = unicode;
