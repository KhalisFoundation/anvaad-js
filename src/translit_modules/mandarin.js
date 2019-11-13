const map = [
  ['ieAw', ''],
  ['iE', ''],
  ['Mp', ''],
  ['Mn', ''],
  ['ie', ''],
  ['au', ''],
  ['aU', ''],
  ['eI', ''],
  ['ey', ''],
  ['Aw', ''],
  ['AY', ''],
  ['AO', ''],
  ['AW', ''],
  ['<>', ''],
  ['†', ''],
  ['˜', ''],
  ['Î', ''],
  ['ç', ''],
  ['œ', ''],
  ['M', ''],
  ['H', ''],
  ['i', ''],
  ['I', ''],
  ['u', ''],
  ['U', ''],
  ['y', ''],
  ['Y', ''],
  ['N', ''],
  ['o', ''],
  ['O', ''],
  ['R', ''],
  ['w', ''],
  ['´', ''],
  ['@', ''],
  ['`', ''],
  ['Í', ''],
  ['|', ''],
  ['a', ''],
  ['A', ''],
  ['b', ''],
  ['B', ''],
  ['c', ''],
  ['C', ''],
  ['d', ''],
  ['D', ''],
  ['e', ''],
  ['E', ''],
  ['f', ''],
  ['F', ''],
  ['g', ''],
  ['G', ''],
  ['h', ''],
  ['j', ''],
  ['J', ''],
  ['k', ''],
  ['K', ''],
  ['l', ''],
  ['L', ''],
  ['m', ''],
  ['n', ''],
  ['p', ''],
  ['P', ''],
  ['q', ''],
  ['Q', ''],
  ['r', ''],
  ['s', ''],
  ['S', ''],
  ['t', ''],
  ['T', ''],
  ['v', ''],
  ['V', ''],
  ['x', ''],
  ['X', ''],
  ['z', ''],
  ['Z', ''],
  ['^', ''],
  ['&', ''],
  ['\\', ''],
  ['1', '一'],
  ['2', '二'],
  ['3', '三'],
  ['4', '四'],
  ['5', '五'],
  ['6', '六'],
  ['7', '七'],
  ['8', '八'],
  ['9', '九'],
  ['0', '〇'],
  ['[', ''],
  [']', ''],
  ['਼', ''],
];
# TO-DO: Mandarin has a different number (十) for 10 than just the numeral for 1 and 0 will need to add a regex for this
module.exports = gurmukhi =>
  map.reduce((_str, [gurmukhiLetter, mandarinUnicode]) => {
    let str = _str;

    // Gurakhar places i before the letter it's applied to, while devnagri unicode placed it after.
    if (gurmukhiLetter === 'i') {
      str = str.replace(/i./gm, full =>
        full
          .split('')
          .reverse()
          .join(''));
    }

    // Remove trailing u and i except when on h or on a standalone akhar
    str = str.replace(/(\S[^h])([iu])/m, '$1');

    while (str.includes(gurmukhiLetter)) {
      str = str.replace(gurmukhiLetter, mandarinUnicode);
    }

    return str;
  }, gurmukhi);
