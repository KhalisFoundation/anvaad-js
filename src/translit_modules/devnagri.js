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
  ['V', 'ड़'],
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
  // ['S', 'ष'], special case (kept for reference)
  ['s', 'स'],
  ['h', 'ह'],
  // ['l', 'ळ'], special case (kept for reference)
  // ['S', 'क्ष'], special case (kept for reference)
  ['G', 'ज्ञ'],
  ['A', 'अ'],
  ['a', 'उ'],
  ['w', 'ा'],
  ['W', 'ाँ'],
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
  ['&', 'फ़'], // phapha pair bindi
  ['<', 'ੴ'],
  ['>', ''],
  ['[', '।'],
  ['¨', 'ू'],
  ['®', '्र'],
  ['Ú', ':'],
  ['ü', 'ु'],
  // ['@', ' ॑ '], // udaat (used in sanskrit)
  ['@', '्'], // halant (replaced below)
  // ['E', 'ऄ'], // open oora
  ['E', 'ओ'], // open oora
  ['H', '्ह'], // pair haha
  ['L', 'ळ'], // equivalent of lala pair bindi, (ऴ is sanskritized, not used in hindi)
  ['N', 'ं'], // tippee
  ['æ', '़'], // pair bindi
  ['Z', 'ग़'], // gaga pair bindi
  ['^', 'ख़'], // khakha pair bindi
  ['`', '्'], // adhak over letter, use halant to emphasize (replaced below)
  ['z', 'ज़'], // jaja pair bindi zaza
  ['~', '्'], // adhak after letter, use halant to emphasize (replaced below)
  ['¤', '्'], // adhak after letter, use halant to emphasize (replaced below)
  ['´', '्य'], // yakash (pair yaya)
  ['µ', 'ं'], // bindi
  ['ˆ', 'ं'], // bindi
  ['Í', '्व'], // pair vava
  ['Î', '्य'], // half yaya
  ['Ø', ''], // extra top line (extender)
  ['ç', '्च'], // pair chacha
  ['œ', '्त'], // pair tata
  ['ŧ', ''], // bad char
  ['˜', '्न'], // pair nana
  ['†', '्ट'], // pair tanka
];

module.exports = (gurmukhi) => map.reduce((_str, [gurmukhiLetter, devnagriUnicode]) => {
  let str = _str;

  str = str.replace(/<>/gi, 'ੴ');

  // Gurakhar places i before the letter it's applied to, while devnagri unicode placed it after.
  if (gurmukhiLetter === 'i') {
    str = str.replace(/i./gm, (full) => full
      .split('')
      .reverse()
      .join(''));
  }

  // Adhiks: the akhar proceeding the adikh is meant to be emphasized
  // hindi uses a half+full variant of each akhar to indicate emphasis
  // ex: ल + ् + ल = ल्ल
  if (gurmukhiLetter === '`') {
    str = str.replace(/(`|~|¤)./gm, (full) => full
      .repeat(2)
      .slice(1));
  }

  // Udaats (ੑ): the tone of the akhar under which the udaat is placed is made higher
  // closest approximation in modern hindi is the half+full variant akhar
  // ex: न + ् + न = न्न
  if (gurmukhiLetter === '@') {
    str = str.replace(/.@/gm, (full) => full
      .repeat(2)
      .slice(0, -1));
  }

  while (str.includes(gurmukhiLetter)) {
    str = str.replace(gurmukhiLetter, devnagriUnicode, 'g');
  }

  const fixes = [
    ['इी', 'ई'],
    ['अै', 'ऐ'],
    ['इि', 'इ'],
    ['उु', 'उ'],
    ['उू', 'ऊ'],
    ['इे', 'ए'],
    // exceptions for bindi + kanna/unkar/dulainkar
    ['ुं', 'ुँ'],
    ['ूं', 'ूँ'],
    ['ां', 'ाँ'],
    ['आं', 'आँ'], // आ + ं
    ['अां', 'आँ'], // अ + ा + ं
    // exception for sihaaree + pair-rarra
    ['ि्र', 'ृ'],
    // exception for bindi before bihaaree
    ['ंी', 'ीं'],
    // exceptions for the emphasized (adhik) variants of certain akhars
    ['ख्ख', 'क्ख'],
    ['घ्घ', 'ग्घ'],
    ['छ्छ', 'च्छ'],
    ['झ्झ', 'ज्झ'],
    ['ठ्ठ', 'ट्ठ'],
    ['ढ्ढ', 'ड्ढ'],
    ['थ्थ', 'त्थ'],
    ['ध्ध', 'द्ध'],
    ['भ्भ', 'ब्भ'],
    // rendering fixes for Aw, AO
    ['अा', 'आ'], // अ + ा (also handles AW)
    ['अो', 'ओ'], // अो + ो (redundant, Ao does not exist)
    ['अौ', 'औ'], // अ + ौ
  ];

  fixes.forEach((e) => {
    str = str.replace(new RegExp(e[0], 'g'), e[1]);
  });

  return str;
}, gurmukhi);
