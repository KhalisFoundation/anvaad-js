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
  Ï: 'ੵ',
  æ: '਼',
  Î: '੍ਯ',
  ì: 'ਯ',
  í: '੍ਯ',
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
  '¡': 'ੴ',
  Å: 'ੴ',
  Ú: 'ਃ',
  Ç: '☬',
  '@': 'ੑ',
  '‚': '❁',
  '•': '੶',
  ' ': ' ',
};

const reverseMapping = {
  ਇ: 'ie',
  ਉ: 'au',
  ਊ: 'aU',
  ਆ: 'Aw',
  ਆਂ: 'AW',
  ਐ: 'AY',
  ਔ: 'AO',
  ਈ: 'eI',
  ਏ: 'ey',
  'ੋੁ': 'uo',
  '੍ਵ': 'Í',
  '੍ਚ': 'ç',
  '੍ਟ': '†',
  '੍ਤ': 'œ',
  '੍ਨ': '˜',
  'ੵ': '´',
  '਼': 'æ',
  '੍ਯ': 'Î',
  ਨੂੰ: 'ƒ',
  '੍ਹ': 'H',
  '੍ਰ': 'R',
  '': '₁₅',
  '੦': '0',
  '੧': '1',
  '੨': '2',
  '੩': '3',
  '੪': '4',
  '੫': '5',
  '੬': '6',
  '੭': '7',
  '੮': '8',
  '੯': '9',
  ੳ: 'a',
  ਅ: 'A',
  ਸ: 's',
  ਸ਼: 'S',
  ਦ: 'd',
  ਧ: 'D',
  ਡ: 'f',
  ਢ: 'F',
  ਗ: 'g',
  ਘ: 'G',
  ਹ: 'h',
  ਜ: 'j',
  ਝ: 'J',
  ਕ: 'k',
  ਖ: 'K',
  ਲ: 'l',
  ਲ਼: 'L',
  ਤ: 'q',
  ਥ: 'Q',
  'ਾ': 'w',
  'ਾਂ': 'W',
  ੲ: 'e',
  ਓ: 'E',
  ਰ: 'r',
  ਟ: 't',
  ਠ: 'T',
  'ੇ': 'y',
  'ੈ': 'Y',
  'ੁ': 'u',
  'ੂ': 'U',
  'ਿ': 'i',
  'ੀ': 'I',
  'ੋ': 'o',
  'ੌ': 'O',
  ਪ: 'p',
  ਫ: 'P',
  ਜ਼: 'z',
  ਗ਼: 'Z',
  ਣ: 'x',
  ਯ: 'X',
  ਚ: 'c',
  ਛ: 'C',
  ਵ: 'v',
  ੜ: 'V',
  ਬ: 'b',
  ਭ: 'B',
  ਨ: 'n',
  'ਂ': 'N',
  ਮ: 'm',
  'ੰ': 'M',
  'ੱ': '`',
  ਖ਼: '^',
  ਫ਼: '&',
  ਞ: '\\',
  ਙ: '|',
  '।': '[',
  '॥': ']',
  ੴ: '<>',
  'ਃ': 'Ú',
  '☬': 'Ç',
  'ੑ': '@',
  '❁': '‚',
  '੶': '•',
  '': '₁',
  '': '₂',
  '': '₃',
  '': '₄',
  '': '₅',
  '': '₆',
  '': '₈',
  ' ': ' ',
  '': '₁',
  '': '₂',
  '': '₃',
  '': '₄',
  '': '₆',
};

const asciiCorrections = [
  '@W',
  '@w',
  '@o',
  '@O',
  '@y',
  '@Y',
  '@ü',
  '@`',
  'ÍY',
  'Ry',
  'RY',
  'RM',
  'RN',
  'YN',
  'yN',
  'YM',
  'yM',
  'uN',
  'UN',
  'üN',
  'uM',
  'UM',
  'üM',
  'R`',
  'u`',
  'U`',
  'ü`',
  'Iˆ',
  'IN',
];

const halfChars = [
  'H',
  'R',
  '®',
  'Í',
  'ç',
  '†',
  'œ',
  '˜',
  '´',
  'Î',
  'Ï',
  'í',
  'æ',
];

const aboveChars = [
  'ੇ',
  'ੈ',
  'ੋ',
  'ੌ',
];

/**
 * Convert Gurmukhi Unicode to ascii for webakhar
 *
 * @since 1.0.0
 * @param {string} unicode text script to be converted
 * @param {boolean} do simplify bindi chars (true) or not (false)
 * @returns {string} Returns ascii text
 * @example
 *
 * ascii('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥');
 * // => 'Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'
 */

function ascii(text = '', simplify = false) {
  const convertedText = [];

  const chars = text.split('');

  for (let j = 0; j < chars.length; j += 1) {
    const currentChar = chars[j];
    const nextChar = chars[j + 1];
    const nextNextChar = chars[j + 2];

    if (currentChar === 'ਿ') {
      const lastElement = convertedText.pop();
      convertedText.push('i');
      convertedText.push(lastElement);
    } else if (currentChar === '੍') {
      if (nextNextChar === 'ਿ') {
        const lastElement = convertedText.pop();
        convertedText.push('i');
        convertedText.push(lastElement);
        j += 1;
      }
      convertedText.push(reverseMapping[currentChar + nextChar]);
      if (nextNextChar === 'ੁ') {
        convertedText.push('ü');
        j += 1;
      } else if (nextNextChar === 'ੂ') {
        convertedText.push('¨');
        j += 1;
      }
      j += 1;
    } else if (currentChar === 'ੑ') {
      convertedText.push(reverseMapping[currentChar] || currentChar);
      if (nextChar === 'ੁ') {
        convertedText.push('ü');
        j += 1;
      } else if (nextChar === 'ੂ') {
        convertedText.push('¨');
        j += 1;
      }
    } else if (currentChar === 'ਨ' && nextChar === 'ੂ' && nextNextChar === 'ੰ') {
      convertedText.push('ƒ');
      j += 2;
    } else if (currentChar === 'ੋ' && nextChar === 'ੁ') {
      convertedText.push(reverseMapping[currentChar + nextChar]);
      j += 1;
    } else if (currentChar === 'ੱ' && aboveChars.includes(nextNextChar)) {
      convertedText.push('¤');
    } else if (currentChar === 'ਾ' && nextChar === 'ਂ') {
      convertedText.push('W');
      j += 1;
    } else if (currentChar === 'ਆ' && nextChar === 'ਂ') {
      convertedText.push('AW');
      j += 1;
    } else if (currentChar === 'ਈ' && nextChar === '') {
      convertedText.push('eˆØI');
      j += 1;
    } else if (currentChar === 'ਈ' && nextChar === '') {
      convertedText.push('eµØI');
      j += 1;
    } else if (
      (currentChar === 'ਂ' && nextChar === 'ੀ')
      || (currentChar === 'ੀ' && nextChar === '')
    ) {
      convertedText.push('ˆØI');
      j += 1;
    } else if (
      (currentChar === 'ੰ' && nextChar === 'ੀ')
      || (currentChar === 'ੀ' && nextChar === '')
    ) {
      convertedText.push('µØI');
      j += 1;
    } else if (simplify && nextChar === '਼') {
      switch (currentChar) {
        case 'ਸ':
          convertedText.push('S');
          j += 1;
          break;
        case 'ਜ':
          convertedText.push('z');
          j += 1;
          break;
        case 'ਖ':
          convertedText.push('^');
          j += 1;
          break;
        case 'ਗ':
          convertedText.push('Z');
          j += 1;
          break;
        case 'ਫ':
          convertedText.push('&');
          j += 1;
          break;
        case 'ਲ':
          convertedText.push('L');
          j += 1;
          break;
        default:
          convertedText.push(reverseMapping[currentChar]);
      }
    } else {
      convertedText.push(reverseMapping[currentChar] || currentChar);
    }
  }

  return convertedText.join('');
}

/**
 * Convert Gurmukhi script to Unicode
 *
 * @since 1.0.0
 * @param {string} text Gurbani Akhar or unicode script to be converted
 * @param {boolean} do a unicode to ascii (true) or not (false)
 * @param {boolean} do simplify bindi chars (true) or not (false)
 * @returns {string} Returns unicode text
 * @example
 *
 * unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥'
 *
 * unicode('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥', true);
 * // => 'Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'
 */

function unicode(text = '', reverse = false, simplify = false) {
  if (text === '' || typeof text !== 'string') {
    return text;
  }

  if (reverse) {
    return ascii(text, simplify);
  }

  let convertedText = '';

  let str = text
    .replace(/>/gi, '')
    .replace(/Ø/gi, '')
    .replace(/Æ/g, '');

  asciiCorrections.forEach((e) => {
    str = str.replace(new RegExp(e.split('').reverse().join(''), 'g'), e);
  });

  const chars = str.split('');

  for (let j = 0; j < chars.length; j += 1) {
    const currentChar = chars[j];
    const nextChar = chars[j + 1];
    const nextNextChar = chars[j + 2];

    if (currentChar === 'i') {
      if (nextChar != null) {
        if (nextChar === 'e') {
          convertedText += 'ਇ';
        } else if (halfChars.includes(nextNextChar)) {
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
    } else if (currentChar === '1' && nextChar === 'E' && nextNextChar === 'å') {
      convertedText += 'ੴ';
      j += 2;
    } else if (currentChar === 'u' && nextChar === 'o') {
      convertedText += 'ੋੁ';
      j += 1;
    } else if (simplify && nextChar === 'æ') {
      switch (currentChar) {
        case 's':
          convertedText += 'ਸ਼';
          j += 1;
          break;
        case 'j':
          convertedText += 'ਜ਼';
          j += 1;
          break;
        case 'K':
          convertedText += 'ਖ਼';
          j += 1;
          break;
        case 'g':
          convertedText += 'ਗ਼';
          j += 1;
          break;
        case 'P':
          convertedText += 'ਫ਼';
          j += 1;
          break;
        case 'l':
          convertedText += 'ਲ਼';
          j += 1;
          break;
        default:
          convertedText += mapping[currentChar];
      }
    } else {
      convertedText += mapping[currentChar] || currentChar;
    }
  }

  return convertedText;
}

module.exports = unicode;
