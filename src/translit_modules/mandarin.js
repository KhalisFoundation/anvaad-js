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
  ['1', ''],
  ['2', ''],
  ['3', ''],
  ['4', ''],
  ['5', ''],
  ['6', ''],
  ['7', ''],
  ['8', ''],
  ['9', ''],
  ['0', ''],
  ['[', ''],
  [']', ''],
  ['਼', ''],
];

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
