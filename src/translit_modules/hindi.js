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
  ['c', 'च'],
  ['C', 'छ'],
  ['j', 'ज'],
  ['J', 'झ'],
  ['\\', 'ञ'],
  ['t', 'ट'],
  ['T', 'ठ'],
  ['f', 'ड'],
  ['D', 'ढ'],
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
  ['w', 'ा'],
  ['I', 'ी'],
  ['u', 'ु'],
  ['U', 'ू'],
  ['y', 'े'],
  ['Y', 'ै'],
  ['o', 'ो'],
  ['O', 'ौ'],
  [']', '||'],
];

module.exports = gurmukhi =>
  map.reduce((_str, [gurmukhiLetter, hindiUnicode]) => {
    let str = _str;

    // Gurakhar places i before the letter it's applied to, while hindi unicode placed it after.
    if (gurmukhiLetter === 'i') {
      str = str.replace(/i./gm, full =>
        full
          .split('')
          .reverse()
          .join('')
      );
    }

    while (str.includes(gurmukhiLetter)) {
      str = str.replace(gurmukhiLetter, hindiUnicode, 'g');
    }

    return str;
  }, gurmukhi);
