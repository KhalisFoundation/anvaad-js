const map = [
  ['ieAw', 'يا'],
  ['iE', 'يو'],
  ['Mp', 'مپ'],
  ['Mn', 'نّ'],
  ['ie', 'ِا'],
  ['au', 'اُ'],
  ['aU', 'اُو'],
  ['eI', 'ای'],
  ['ey', 'اے'],
  ['Aw', 'آ'],
  ['AY', 'اَے'],
  ['AO', 'اَو'],
  ['AW', 'آں'],
  ['<>', 'اک اونکار'],
  ['†', 'ٹ'],
  ['˜', 'ن'],
  ['Î', 'ے'],
  ['ç', 'چ'],
  ['œ', 'ت'],
  ['M', 'ں'],
  ['H', 'ھ'],
  ['i', 'ِ'],
  ['I', 'ی'],
  ['u', 'ُ'],
  ['U', 'ُو'],
  ['y', 'ے'],
  ['Y', 'َے'],
  ['N', 'ں'],
  ['o', 'و'],
  ['O', 'َو'],
  ['R', 'ر'],
  ['w', 'ا'],
  ['´', 'ے'],
  ['@', 'ھ'],
  ['`', 'ّ'],
  ['Í', 'و'],
  ['|', 'نگ'],
  ['a', 'ا'],
  ['A', 'ا'],
  ['b', 'ب'],
  ['B', 'بھ'],
  ['c', 'چ'],
  ['C', 'چھ'],
  ['d', 'د'],
  ['D', 'دھ'],
  ['e', 'ا'],
  ['E', 'اَو'],
  ['f', 'ڈ'],
  ['F', 'ڈھ'],
  ['g', 'گ'],
  ['G', 'گھ'],
  ['h', 'ه'],
  ['j', 'ج'],
  ['J', 'جھ'],
  ['k', 'ک'],
  ['K', 'کھ'],
  ['l', 'ل'],
  ['L', 'ل'],
  ['m', 'م'],
  ['n', 'ن'],
  ['p', 'پ'],
  ['P', 'پھ'],
  ['q', 'ت'],
  ['Q', 'تھ'],
  ['r', 'ر'],
  ['s', 'س'],
  ['S', 'ش'],
  ['t', 'ٹ'],
  ['T', 'ٹھ'],
  ['v', 'و'],
  ['V', 'ڑ'],
  ['x', 'ن'],
  ['X', 'ے'],
  ['z', 'ز'],
  ['Z', 'غ'],
  ['^', 'خ'],
  ['&', 'ف'],
  ['\\', 'نج'],
  ['1', '۱'],
  ['2', '۲'],
  ['3', '۳'],
  ['4', '۴'],
  ['5', '۵'],
  ['6', '۶'],
  ['7', '۷'],
  ['8', '۸'],
  ['9', '۹'],
  ['0', '۰'],
  ['[', '۔'],
  [']', '۔۔'],
  ['਼', ''],
];

module.exports = gurmukhi =>
  map.reduce((_str, [gurmukhiLetter, shamukhiUnicode]) => {
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
    str = str.replace(/(\S[^h])([iu])/gm, '$1');

    while (str.includes(gurmukhiLetter)) {
      str = str.replace(gurmukhiLetter, shamukhiUnicode);
    }

    return str;
  }, gurmukhi);
