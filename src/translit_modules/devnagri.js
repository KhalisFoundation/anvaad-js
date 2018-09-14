const map = [
  ['i', 'ि'],
  ['1', '१'],
  ['2', '२'],
  ['3', '३'],
  ['4', '४'],
  ['5', '५'],
  ['6', '६'],
  ['7', '७'],
  ['8', '८'],
  ['9', '९'],
  ['0', '०'],
  ['k', 'क'],
  ['K', 'ख'],
  ['g', 'ग'],
  ['G', 'घ'],
  ['|', 'ङ'],
  ['V', 'ड'],
  ['F', 'ढ'],
  ['c', 'च'],
  ['C', 'छ'],
  ['j', 'ज'],
  ['J', 'झ'],
  ['\\', 'ञ'],
  ['t', 'ट'],
  ['T', 'ठ'],
  ['f', 'ड'],
  ['D', 'ध'],
  ['x', 'ण'],
  ['q', 'त'],
  ['Q', 'थ'],
  ['d', 'द'],
  ['D', 'ध'],
  ['n', 'न'],
  ['p', 'प'],
  ['P', 'फ'],
  ['b', 'ब'],
  ['B', 'भ'],
  ['m', 'म'],
  ['X', 'य'],
  ['r', 'र'],
  ['l', 'ल'],
  ['v', 'व'],
  ['S', 'श'],
  ['S', 'ष'],
  ['s', 'स'],
  ['h', 'ह'],
  ['l', 'ळ'],
  ['S', 'क्ष'],
  ['G', 'ज्ञ'],
  ['A', 'अ'],
  ['Aw', 'आ'],
  ['a', 'उ'],
  ['w', 'ा'],
  ['W', 'ां'],
  ['I', 'ी'],
  ['u', 'ु'],
  ['U', 'ू'],
  ['y', 'े'],
  ['Y', 'ै'],
  ['e', 'इ'],
  ['o', 'ो'],
  ['O', 'ौ'],
  ['M', 'ं'],
  ['R', '्र'],
  [']', '॥'],
  ['!', '!'],
  ['&', ''], // phapha pair bindi
  ["'", "'"],
  ['(', '('],
  [')', ')'],
  [',', ','],
  ['-', '-'],
  ['/', '/'],
  [':', ':'],
  ['<', 'ੴ'],
  ['>', ''],
  ['?', '?'],
  ['[', '।'],
  ['¨', 'ू'],
  ['®', '्र'],
  ['Ú', ':'],
  ['ü', 'ु'],
  ['‘', '‘'],
  ['’', '’'],  
  ['@', ''], // halant
  ['E', 'ऄ'], // open oora
  ['H', 'ह्'], // pair haha
  ['L', 'ऴ'], // lala pair bindi
  ['N', 'ं'], // tippee
  ['Z', 'ग़'], // gaga pair bindi
  ['^', 'ख़'], // khakha pair bindi
  ['`', 'ँ'], // adhak over letter
  ['z', 'ज़'], // jaja pair bindi zaza
  ['~', 'ँ'], // adhak after letter
  ['¤', 'ँ'], // adhak after letter
  ['´', 'य्'], // yakash (pair yaya)
  ['µ', 'ं'], // bindi
  ['Í', 'व्'], // pair vava
  ['Î', 'य्'], // half yaya
  ['Ø', ''], // extra top line (extender)
  ['ç', 'च्'], // pair chacha
  ['œ', 'त्'], // pair tata
  ['ŧ', ''], // bad char
  ['˜', 'न्'], // pair nana
  ['†', 'ट्'], // pair tanka
];

module.exports = gurmukhi =>
  map.reduce((_str, [gurmukhiLetter, devnagriUnicode]) => {
    let str = _str;

    str = str.replace(/<>/gi, 'ੴ');

    // // Gurakhar places i before the letter it's applied to, while devnagri unicode placed it after.
    // if (gurmukhiLetter === 'i') {
    //   str = str.replace(/i./gm, full =>
    //     full
    //       .split('')
    //       .reverse()
    //       .join('')
    //   );
    // }

    while (str.includes(gurmukhiLetter)) {
      str = str.replace(gurmukhiLetter, devnagriUnicode, 'g');
    }

    return str;
  }, gurmukhi);
