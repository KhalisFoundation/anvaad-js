/* eslint no-useless-escape: 0 */

const unescape = require('lodash.unescape');

/**
 * Returns a transliteration of Gurmukhi script
 *
 * @since 1.0.0
 * @param {string} gurmukhi The string from to generate transliteration
 * @returns {string} Returns a string of text
 * @example
 *
 * translit('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'aai mil gursikh aai mil too mere guroo ke piaare ||'
 */

module.exports = (gurmukhi = '') => {
  if (gurmukhi === '' || typeof gurmukhi !== 'string') {
    return gurmukhi;
  }
  let trans = gurmukhi;
  //* *********************
  //    STEP 1
  //* *********************

  // replace step 1 values

  const step1 = [
    ['\u00da', ':'],
    ['\u02c6', 'N'],
    ['\u00cd', 'vY'],
    ['vYY', 'vY'],
    ['\u0152', '\u0153'],
    ['\u2020', 't'],
    ['ey', 'e'],
  ];

  step1.forEach(e => {
    trans = trans.replace(new RegExp(e[0], 'g'), e[1]);
  });

  // replaces all html to normal text
  trans = unescape(trans);

  //* *********************
  //    STEP 3
  //* *********************

  // 1. If current letter is "i", move behind next letter
  const regex = /i./gm;
  trans = trans.replace(regex, full =>
    full
      .split('')
      .reverse()
      .join(''),
  );

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
      ['!', '!'],
      ['"', '"'],
      ['#', '#'],
      ['$', '$'],
      ['%', '%'],
      ['&', 'ph'],
      ["'", "'"],
      ['(', '('],
      [')', ')'],
      ['*', 'i'],
      ['+', '+'],
      [',', ','],
      ['-', '-'],
      ['.', '.'],
      // prettier-ignore
      ['\/', '-'],
      [0, '0'],
      [1, '1'],
      [2, '2'],
      [3, '3'],
      [4, '4'],
      [5, '5'],
      [6, '6'],
      [7, '7'],
      [8, '8'],
      [9, '9'],
      [':', ':'],
      [';', ';'],
      ['<', 'ik'],
      ['=', '='],
      ['>', 'Oankaar'],
      ['?', '?'],
      ['@', '(h)'],
      ['A', 'a'],
      ['B', 'bh'],
      ['C', 'chh'],
      ['D', 'dh'],
      ['E', 'o'],
      ['F', 'dd'],
      ['G', 'gh'],
      ['H', 'h'],
      ['I', 'ee'],
      ['J', 'jh'],
      ['K', 'kh'],
      ['L', 'lh'],
      ['M', '(n)'],
      ['N', '(n)'],
      ['O', 'au'],
      ['P', 'f'],
      ['Q', 'th'],
      ['R', 'x'], // using 'x' to deal with pehar rara handling - this gets replaced below
      ['S', 'sh'],
      ['T', 'Th'],
      ['U', 'oo'],
      ['V', 'R'],
      ['W', 'aa(n)'],
      ['X', 'y'],
      ['Y', 'AI'],
      ['Z', 'g(h)'],
      ['[', '|'],
      ['\\', 'n(j)'],
      [']', '||'],
      ['^', 'khh'],
      ['_', '_'],
      ['`', "'"],
      ['a', 'u'],
      ['b', 'b'],
      ['c', 'ch'],
      ['d', 'dh'],
      ['e', 'e'],
      ['f', 'dd'],
      ['g', 'g'],
      ['h', 'h'],
      ['i', 'i'],
      ['j', 'j'],
      ['k', 'k'],
      ['l', 'l'],
      ['m', 'm'],
      ['n', 'n'],
      ['o', 'o'],
      ['p', 'p'],
      ['q', 't'],
      ['r', 'r'],
      ['s', 's'],
      ['t', 'T'],
      ['u', 'u'],
      ['v', 'v'],
      ['w', 'aa'],
      ['x', 'N'],
      ['y', 'e'],
      ['z', 'z'],
      ['{', '{'],
      ['|', 'n(g)'],
      ['}', '}'],
      ['~', "'"],
      ['\u00a1', 'ikOankaar'],
      ['\u00a2', '\u00a2'],
      ['\u00a3', '\u00a3'],
      ['\u00a4', ''],
      ['\u00a5', '\u00a5'],
      ['\u00a7', 'hoo'],
      ['\u00a8', 'oo'],
      ['\u00aa', ''],
      ['\u00ae', 'r'],
      ['\u00b0', ''],
      ['\u00b1', '\u00b1'],
      ['\u00b4', 'ye'],
      ['\u00b5', '(n)'],
      ['\u00b6', '\u00b6'],
      ['\u00b7', '\u00b7'],
      ['\u00bf', 'x'],
      ['\u00c5', 'ik'],
      ['\u00c6', 'Oankaar'],
      ['\u00c7', ''],
      ['\u00cd', 'vY'],
      ['\u00ce', 'y'],
      ['\u00cf', 'y'],
      ['\u00d2', '||'],
      ['\u00d3', ''],
      ['\u00d4', ''],
      ['\u00d8', ''],
      ['\u00da', ':'],
      ['\u00e5', 'Oankaar'],
      ['\u00e6', ''],
      ['\u00e7', 'ch'],
      ['\u00fc', 'u'],
      ['\u0152', ''],
      ['\u0153', 't'],
      ['\u0192', 'noo(n)'],
      ['\u02c6', '(n)'],
      ['\u02dc', 'n'],
      ['\u2013', '\u2013'],
      ['\u2014', '\u2014'],
      ['\u2018', "'"],
      ['\u2019', "'"],
      ['\u201a', ''],
      ['\u201c', '"'],
      ['\u201d', '"'],
      ['\u2020', 'T'],
      ['\u2022', '\u2022'],
      ['\u2026', '\u2026'],
      ['\u2030', ''],
    ];

    const step2Keys = [];
    const step2Values = [];
    step2.forEach(e => {
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
      thisLetter !== '' && // 2.1.1. Is not empty
      'aeiou ooaiee'.indexOf(thisLetter.toLowerCase()) === -1 && // 2.1.2. does not exist in this string (capital or lowercase): "aeou ooaiee"
      /^[a-zA-Z]+$/.test(thisLetter) && // 2.1.3. It is alphanumeric
      // 2.1.4. It is not "(n)", "(N)", "hoo", "ye", "noo(n)", "ik", "Oankaar", "ay"
      thisLetter !== step2Values[step2Keys.indexOf('N')] &&
      thisLetter !== step2Values[step2Keys.indexOf('M')] &&
      thisLetter !== 'hoo' &&
      thisLetter !== 'ye' &&
      thisLetter !== 'noo(n)' &&
      thisLetter !== step2Values[step2Keys.indexOf('<')] &&
      thisLetter !== step2Values[step2Keys.indexOf('>')] && // thisLetter !== 'ay' &&
      // 2.2. next letter:
      nextLetter &&
      nextLetter !== '' && // 2.2.1. It is not empty; end of line
      'iaeouyw'.indexOf(nextLetter.toLowerCase()) === -1 && // 2.2.2. It does not exist in this string (capital or lowercase): "iaeouyw"
      'I@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()'.indexOf(nextLetter) === -1 && // 2.2.3. It does not exist in this string (case sensitive): "@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()"
      // 2.3. THIS IS NOT TRUE:
      // prettier-ignore
      !(
        nextLetter.toLowerCase().indexOf('i') > -1 && // 2.3.0 nextLetter is i
        // 2.3.1 letter after the next letter:
        trans[x + 2] && // 2.3.1.1 It exists
        trans[x + 2] === ' ' // 2.3.1.2 It is " "
      )
    ) {
      thisLetter = `${thisLetter}a`;
    }

    // 3. Transliterate “e” as “i” if
    if (
      thisLetter === 'e' && // 3.1. current letter is “e”
      (trans[x - 1] || trans[x - 1] === ' ' || trans[x - 1] === ']') && // at the beginning of the word and is:
      'i'.indexOf(nextLetter.toLowerCase()) > -1 // 3.1.1: followed by the string “i” or “I”
    ) {
      thisLetter = 'i';
    }
    if (thisLetter === step2Values[step2Keys.indexOf('R')] && trans[x - 1] === 'i') {
      thisLetter = 'i';
      trans[x - 1] = 'r';
    }
    // save
    trans[x] = thisLetter;
  } // end loop

  // join it back together
  trans = trans.join('');

  // 4. remove i when
  // 4.1 it is at the end of a word
  // 4.2 it is preceeded by any letter in the string "aeiouy"
  const regex1 = /[^aeiouy]i(\s|$|\|)/gm;
  trans = trans.replace(regex1, full => full.replace('i', ''));

  // 5. If a number is preceeded by ‘m:’, ‘mhlw’, ‘mhlu’, ‘Gr’, Transliterate numerals as:
  // regex values account for current state of translit
  const regex2 = /((m:|mahalaa|mahalu|ghar|gharu)\s*([0-9]0?))/gm;

  function translitNumbers(full, full2, header, num) {
    const formalNumbers = [
      ' ',
      'pehilaa',
      'doojaa',
      'teejaa',
      'chauthhaa',
      'panjavaa',
      'chhayvaa',
      'satvaa',
      'atthvaa',
      'nauvaa',
      'dasvaa',
      'gayaarvaa',
      'baarvaa',
      'tayrvaa',
      'chaudavaa',
      'pandaravaa',
      'solavaa',
      'sataaravaa',
    ];

    return `${header.replace('m:', 'mahalaa')} ${formalNumbers[num]}`;
  }

  trans = trans.replace(regex2, translitNumbers);

  // 4. Transliterate 'ie' to 'i' if both are true:
  // 4.1 preceeded by a vowel in the string ' aeiou' or one of 'oo,ai,ee'
  // 4.2 proceeded by (case sensitive) by the string "Aw"
  const regex3 = /([aeiou]|oo|ai|ee)(ie)aaa/gm;
  trans = trans.replace(regex3, full => full.replace('ie', 'i'));

  // 6. Transliterate 'ih' to "'eh" if
  // 6.1 next letter is ' ' ; end of the line
  const regex4 = /ih\s+|$/gm;
  trans = trans.replace(regex4, full => full.replace('ih', 'eh'));

  // 8. Transliterate 'ie' to 'ey' if both are true:
  // 8.1 preceeding letter is the vowel 'a'
  // 8.2 the proceeding letters are empty; end of word
  const regex5 = /aie\s+|$/gm;
  trans = trans.replace(regex5, full => full.replace('ie', 'ey'));

  // 9. remove extra vowels in specific words
  // 9.1 guramukh, gurabani, guradhev, gurasikh
  const regex6 = /gura[dmbs][a-zA-Z]+/gm;
  trans = trans.replace(regex6, full => full.replace('gura', 'gur'));
  // 9.2 manamukh
  const regex7 = /mana[m][a-zA-Z]+/gm;
  trans = trans.replace(regex7, full => full.replace('mana', 'man'));

  // 10. fix pehar rara
  const regex8 = /x[a-zA-Z]+/gm;
  trans = trans.replace(regex8, full => full.replace('x', 'r'));
  // 10.1 fix pehar rara for 'a(n)mirat' -> 'a(n)mrit'
  const regex9 = /mirat[a-zA-Z]+/gm;
  trans = trans.replace(regex9, full => full.replace('mirat', 'mrit'));
  //* *********************
  //    STEP 4
  //* *********************

  const step4 = [
    ['uu', 'au'],
    // prettier-ignore
    [' ju ', '\* JU \*'],
    // prettier-ignore
    [' su ', '\* SU \*'],
    // prettier-ignore
    ['ahu ', '\*AHU \*'],
    // prettier-ignore
    ['au ', '\*AU \*'],
    ['u ', ' '],
    ['\\* JU \\*', ' ju '],
    ['\\* SU \\*', ' su '],
    ['\\*AHU \\*', 'ahu '],
    ['\\*AU \\*', 'au '],
    // prettier-ignore
    ['hi ', '\*HI \*'],
    ['i ', ' '],
    ['\\*HI \\*', 'hi '],
    ['ai', 'i'],
    ['AI', 'ai'],
    ['aaa', 'aa'],
    [' n ', ' na '],
    [' t ', ' ta '],
    ['(N)', 'n'],
    ['ah ', 'eh '],
    ['eee', "e'ee"],
    // below this is from balpreet k
    ['Aih', 'ahai'],
    ['ii', 'i'],
    ['eay', 'ey'],
    ['jIA', 'jee'],
    ["a'eh", 'eh'],
    ["Re'ee", "Re'e"],
    ["re'ee", "re'e"],
    // to here
    ['aaa', 'aa'],
    [' au', ' u'],
  ];

  // replace step 4 values
  step4.forEach(e => {
    trans = trans.replace(new RegExp(e[0], 'g'), e[1]);
  });

  // return transliterated string
  return trans;
};
