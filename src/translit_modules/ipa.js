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
 * // => 'aai mil gurasikh aai mil too mayray guroo kay piaaaray ||'
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
  trans = trans.replace(regex, full => full.split('').reverse().join(''));

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
            ['E','o'],
            ['au','ɵ'],
            ['aU','u'],
            ['A','ə'],
            ['Aw','ɑ'],
            ['AY','ɛ'],
            ['AO','ɔ'],
            ['ie','ɪ'],
            ['eI','i'],
            ['ey','e'],
            ['s','s'],
            ['S','ʃ'],
            ['h','h'],
            ['k','k'],
            ['K','kʰ'],
            ['^','qʰ'],
            ['g','G'],
            ['Z','gʰ'],
            ['G','Gʰə̀'],
            ['|','N'],
            ['c','t͡ʃ'],
            ['C','t͡ɕ'],
            ['j','d͡ʒ'],
            ['z','z'],
            ['J','ɖ͡ʐ'],
            ['\\','ŋ'],
            ['t','ʈ'],
            ['T','ʈʰ'],
            ['f','ɖ'],
            ['F','ʈə̀'],
            ['x','ɳ'],
            ['q','t̪'],
            ['Q','t̪ʰ'],
            ['d','d̪'],
            ['D','t̪ə̀'],
            ['n','n'],
            ['p','p'],
            ['P','f'],
            ['&','ɸ'],
            ['b','b'],
            ['B','ɓʰə̀'],
            ['m','m'],
            ['X','j'],
            ['r','ɾ'],
            ['l','l'],
            ['L','lʰ'],
            ['v','ʋ'],
            ['V','ɽ'],
            ['ੱ','ੱ'],
            ['N','ⁿ'],
            ['M','(n)'],
            ['´','j'],
            ['¨','u'],
            ['<','ɪk oən'],
            ['>','kɑɾ'],
            ['µ','(n)'],
            ['-','-'],
            [',',','],
            [':',':'],
            ['!','!'],
            ['?','?'],
            ['/','/'],
            ['‘','‘'],
            ['’','’'],
            ['(','('],
            [')',')'],
            ['[','.'],
            [']','.'],
            ['®','ʳ'],
            ['@','@'],
            ['¤','¤'],
            ['˜','n'],
            ['†','ʈ'],
            ['0','0'],
            ['1','1'],
            ['2','2'],
            ['3','3'],
            ['4','4'],
            ['5','5'],
            ['6','6'],
            ['7','7'],
            ['8','8'],
            ['9','9'],
            ['a','ɵ'],
            ['ç','t͡ʃ'],
            ['e','e'],
            ['H','ʰ'],
            ['i','ɪ'],
            ['I','i'],
            ['Í','ʋ'],
            ['î','j'],
            ['Î','j'],
            ['o','ɔ'],
            ['O','ɒ'],
            ['Ø',''],
            ['œ','t̪'],
            ['R','ʳ'],
            ['ŧ',''],
            ['u','ɵ'],
            ['U','u'],
            ['Ú',':'],
            ['ü','ɵ'],
            ['w','ɑ'],
            ['W','ɑⁿ'],
            ['y','e'],
            ['Y','æ'],
    ];

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
      thisLetter !== '' && // 2.1.1. Is not empty
      'aeou ooaiee'.indexOf(thisLetter.toLowerCase()) === -1 && // 2.1.2. does not exist in this string (capital or lowercase): "aeou ooaiee"
      /^[a-zA-Z]+$/.test(thisLetter) && // 2.1.3. It is alphanumeric
        // 2.1.4. It is not "(n)", "(N)", "hoo", "ye", "noo(n)", "ik", "Oankaar", "ay"
        thisLetter !== step2Values[step2Keys.indexOf('N')] &&
        thisLetter !== step2Values[step2Keys.indexOf('M')] &&
        thisLetter !== 'hoo' &&
        thisLetter !== 'ye' &&
        thisLetter !== 'noo(n)' &&
        thisLetter !== step2Values[step2Keys.indexOf('<')] &&
        thisLetter !== step2Values[step2Keys.indexOf('>')] &&
        thisLetter !== 'ay' &&
      // 2.2. next letter:
      nextLetter && nextLetter !== '' && // 2.2.1. It is not empty; end of line
      'iaeouyw'.indexOf(nextLetter.toLowerCase()) === -1 && // 2.2.2. It does not exist in this string (capital or lowercase): "iaeouyw"
      '@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()'.indexOf(nextLetter) === -1 && // 2.2.3. It does not exist in this string (case sensitive): "@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()"
      // 2.3. THIS IS NOT TRUE:
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
    const formalNumbers = [' ',
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

  //* *********************
  //    STEP 4
  //* *********************


  const step4 = [
    ['(N)', 'n'],
    ['ah ', 'eh '],
    ['eee', "e'ee"],
    ['uu', 'au'],
    ['Aih', 'ahai'],
    ['aaa', 'aa'],
    ['ii', 'i'],
    ['eay', 'ey'],
    ['jIA', 'jee'],
    ["a'eh", 'eh'],
    ['u ', ' '],
    ["Re'ee", 'Reeay'],
    ["re'ee", 'reeay'],
  ];

  // replace step 4 values
  step4.forEach((e) => {
    trans = trans.replace(new RegExp(e[0], 'g'), e[1]);
  });

  // return transliterated string
  return trans;
};
