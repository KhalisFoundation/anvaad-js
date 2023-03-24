/* eslint no-useless-escape: 0 */

const unescape = require('lodash.unescape');

/**
 * Returns a transliteration of Gurmukhi script
 *
 * @since 1.1.0
 * @param {string} gurmukhi The string from to generate transliteration
 * @returns {string} Returns a string of text
 * @example
 *
 * translit('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]', 'ipa');
 * // => "əɑeɪ mɪl Gʊrəsɪkʰ əɑeɪ mɪl t̪u mere Gʊru ke pɪəɑre."
 */

module.exports = (gurmukhi) => {
  let trans = gurmukhi;
  //* *********************
  //    STEP 1
  //* *********************

  // replaces all html to normal text
  trans = unescape(trans);

  //* *********************
  //    STEP 3
  //* *********************

  // 1. If current letter is "i", move after next letter
  const regex = /i./gm;
  trans = trans.replace(regex, (full) => full.split('').reverse().join(''));

  // break into single characters
  trans = trans.split('');

  // begin character by character replacement by looping through each
  const transCount = trans.length;
  for (let x = 0; x < transCount; x += 1) {
    let thisLetter = trans[x];
    const nextLetter = trans[x + 1] || '';

    //* *********************
    //    STEP 2
    //* *********************

    const step2 = [
      ['E', 'o'],
      ['au', 'o'],
      ['aU', 'u'],
      ['A', 'ə'],
      ['Aw', 'ɑ'],
      ['AY', 'ɛ'],
      ['AO', 'ɔ'],
      ['ie', 'ɪ'],
      ['eI', 'i'],
      ['ey', 'e'],
      ['s', 's'],
      ['S', 'ʃ'],
      ['h', 'h'],
      ['k', 'k'],
      ['K', 'kʰ'],
      ['^', 'qʰ'],
      ['g', 'G'],
      ['Z', 'gʰ'],
      ['G', 'Gʰə̀'],
      ['|', 'N'],
      ['c', 't͡ʃ'],
      ['C', 'ɕ'],
      ['j', 'd͡ʒ'],
      ['z', 'z'],
      ['J', 'ɖ͡ʐ'],
      ['\\', 'ŋ'],
      ['t', 'ʈ'],
      ['T', 'ʈʰ'],
      ['f', 'ɖ'],
      ['F', 'ʈə̀'],
      ['x', 'ɳ'],
      ['q', 't̪'],
      ['Q', 't̪ʰ'],
      ['d', 'd̪'],
      ['D', 't̪ə̀'],
      ['n', 'n'],
      ['p', 'p'],
      ['P', 'f'],
      ['&', 'ɸ'],
      ['b', 'b'],
      ['B', 'ɓ'],
      ['m', 'm'],
      ['X', 'j'],
      ['r', 'r'],
      ['l', 'l'],
      ['L', 'lʰ'],
      ['v', 'ʋ'],
      ['V', 'ɽ'],
      ['ੱ', 'ੱ'],
      ['N', 'ⁿ'],
      ['M', 'ŋ'],
      ['´', 'j'],
      ['¨', 'u'],
      ['<', 'ɪk oəŋ'],
      ['>', 'kɑɾ'],
      ['µ', 'ⁿ'],
      ['-', '-'],
      [',', ','],
      [':', ':'],
      ['!', '!'],
      ['?', '?'],
      ['/', '/'],
      ['‘', '‘'],
      ['’', '’'],
      ['(', '('],
      [')', ')'],
      ['[', '.'],
      [']', '.'],
      ['®', 'ʳ'],
      ['@', '@'],
      ['˜', 'n'],
      ['†', 'ʈ'],
      ['0', '0'],
      ['1', '1'],
      ['2', '2'],
      ['3', '3'],
      ['4', '4'],
      ['5', '5'],
      ['6', '6'],
      ['7', '7'],
      ['8', '8'],
      ['9', '9'],
      ['a', 'o'],
      ['ç', 't͡ʃ'],
      ['e', 'e'],
      ['H', 'ʰ'],
      ['i', 'ɪ'],
      ['I', 'i'],
      ['Í', 'ʋ'],
      ['î', 'j'],
      ['Î', 'j'],
      ['o', 'ɔ'],
      ['O', 'ɒ'],
      ['Ø', ''],
      ['œ', 't̪'],
      ['R', 'ɹ'],
      ['ŧ', ''],
      ['u', 'ʊ'],
      ['U', 'u'],
      ['Ú', ':'],
      ['ü', 'ʊ'],
      ['w', 'ɑ'],
      ['W', 'ɑⁿ'],
      ['y', 'e'],
      ['Y', 'æ'],
      ['\u0192', 'nuŋ'],
    ];

    const ourCharset = 'EauaUAAwAYAOieeIeysShkK^gZG\\cCjzJtTfFxqQdDnpP&bBmXrlLvVੱNM´¨µ®@˜†0123456789açeHiIÍîÎoOØœRŧuUÚüwWyYƒəɑɛɔɪiesʃhkkʰqʰGgʰGʰə̀Nt͡ʃɕd͡ʒzɖ͡ʐŋʈʈʰɖʈə̀ɳt̪t̪ʰd̪t̪ə̀npfɸbɓmjrllʰʋɽੱⁿŋjuɪk oənkɑɾⁿ\/ʳ@nʈot͡ʃeʰɪiʋjjɔɒt̪ɹʊuʊɑɑⁿeænu';

    const step2Keys = [];
    const step2Values = [];
    step2.forEach((e) => {
      step2Keys.push(e[0]);
      step2Values.push(e[1]);
    });

    // if it's not a space, do the step2 replacement
    // if it doesn't exist, check if it's a number, otherwise delete it
    if (thisLetter !== ' ') {
      if (step2Keys.indexOf(thisLetter) > -1) {
        thisLetter = step2Values[step2Keys.indexOf(thisLetter)];
      } else if (Number.isNaN(thisLetter - parseFloat(thisLetter))) {
        thisLetter = '';
      }
    }

    //* *********************
    //    RESUME STEP 3
    //* *********************

    // 2. Add an "a" after this letter if the following is true for the
    if (
    // 2.1. current letter:
      thisLetter !== '' // 2.1.1. Is not empty
      && 'əɑeɔɵ uæijɪəɛʊ̀'.indexOf(thisLetter) === -1 // 2.1.2. does not exist in this string (capital or lowercase): "aeou ooaiee"
      && (/^[a-zA-Z]+$/.test(thisLetter) || ourCharset.indexOf(thisLetter) > -1) // 2.1.3. It is alphanumeric
        // 2.1.4. It is not "(n)", "(N)", "hoo", "ye", "noo(n)", "ik", "Oankaar", "ay"
        && thisLetter !== step2Values[step2Keys.indexOf('N')]
        && thisLetter !== step2Values[step2Keys.indexOf('M')]
        && thisLetter !== 'nuⁿ'
        && thisLetter !== step2Values[step2Keys.indexOf('<')]
        && thisLetter !== step2Values[step2Keys.indexOf('>')]
        && thisLetter !== 'e'
      // 2.2. next letter:
      && nextLetter && nextLetter !== '' // 2.2.1. It is not empty; end of line
      && 'iaɑeouywɪə̀ɛʊ'.indexOf(nextLetter.toLowerCase()) === -1 // 2.2.2. It does not exist in this string (capital or lowercase): "iaeouyw"
      && (/^[a-zA-Z]+$/.test(nextLetter) || ourCharset.indexOf(nextLetter) > -1)
      && '@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:ɪ[]()'.indexOf(nextLetter) === -1 // 2.2.3. It does not exist in this string (case sensitive): "@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()"
    ) {
      thisLetter = `${thisLetter}ə`;
    }
    // save
    trans[x] = thisLetter;
  } // end loop

  // join it back together
  trans = trans.join('');

  // 4. remove i when
  // 4.1 it is at the end of a word
  // 4.2 it is preceeded by any letter in the string "aeiouy"
  const regex1 = /[^ɑⁿəeæɪiɵouyɒɔɛ]ɪ(\s|$|\|)/gm;
  trans = trans.replace(regex1, (full) => full.replace('ɪ', ''));

  // 5. If a number is preceeded by ‘m:’, ‘mhlw’, ‘mhlu’, ‘Gr’, Transliterate numerals as:
  // regex values account for current state of translit
  const regex2 = /((m:|məhəlɑ|məhəlɵ|Gʰə̀ɾɵ|Gʰə̀ɾ)\s*([0-9]0?))/gm;

  function translitNumbers(full, full2, header, num) {
    const formalNumbers = [' ',
      'pəhɪlɑ',
      'd̪ud͡ʒɑ',
      't̪id͡ʒɑ',
      't͡ʃɵɵt̪ʰɑ',
      'pəŋd͡ʒʋɑ',
      't͡ɕeʋɑ',
      'sət̪ʋɑ',
      'əʈʰʋɑ',
      'nɑʋɑ',
      'd̪səʋɑ',
      'Gɪəɑɾʋɑ',
      'bɑɾhəʋɑ',
      't̪eɾʋɑ',
      't͡ʃɒd̪ʰʋɑ',
      'pəŋd̪ʰɾʋɑ',
      'sɔlʰʋɑ',
      'sət̪ɑɾʋɑ',
    ];

    return `${header.replace('m:', 'mahalaa')} ${formalNumbers[num]}`;
  }

  trans = trans.replace(regex2, translitNumbers);

  // eslint-disable-next-line no-misleading-character-class
  const regex3 = /ə̀[iaɑeouywɪəʊ̀ɔ]/gm;
  trans = trans.replace(regex3, (full) => full.replace('ə̀', ''));

  // **********************
  //    STEP 4
  // **********************

  const step4 = [
    // regexes
    ['(?!(\s)).rəɓ(?!(\s)).', (full) => full.replace('rəɓ', 'rɓ')],
    // letter fixes
    ['eiə', 'ei'],
    // ['ŋ', 'ən'], // not sure why this rule is here but removed because it breaks things
    [' n ', ' nə '],
    [' k ', ' kə '],
    ['əə', 'ə'],
    ['əi', 'i'],
    ['eɪə', 'ɪ'],
    ['ʊ ', ' '],
    ['əæ', 'æ'],
    ['ɑeih', 'ɑɪæh'],
    [' \\.', '.'],
    // words
    // ['nisɑɳ', 'niʂɑɳ'],
    // ['səbəd', 'ʂəbəd'],
    // ['d̪ərəsən', 'd̪ərəʂən'],
  ];

  // replace step 4 values
  step4.forEach((e) => {
    trans = trans.replace(new RegExp(e[0], 'g'), e[1]);
  });

  // return transliterated string
  return trans;
};
