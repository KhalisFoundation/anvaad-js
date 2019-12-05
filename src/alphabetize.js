/**
 * Sorts the array of shabads alphabetically
 * Works with unicode and english
 *
 * @since 1.1.0
 * @param {string[]} sentenceArray Array of sentences to be sorted
 * @param {string} language Can have two possible values: english or unicode
 * @returns {string[]} Returns an array of sorted sentences
 *
 * @example Unicode example
 * alphabetize([
 *   "ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥",
 *   "ਤੁਧੁ ਵਿਣੁ ਸਿਧੀ ਕਿਨੈ ਨ ਪਾਈਆ ॥",
 *   "ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਕਰਿ ਵੇਖਹੁ ਮਨਿ ਵੀਚਾਰਿ ॥",
 *   "ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥",
 *   "ਹਉ ਹਉ ਕਰਤੀ ਸਭ ਮੁਈ ਸੰਪਉ ਕਿਸੈ ਨ ਨਾਲਿ ॥",
 * ]);
 * // => [
 *   "ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥",
 *   "ਹਉ ਹਉ ਕਰਤੀ ਸਭ ਮੁਈ ਸੰਪਉ ਕਿਸੈ ਨ ਨਾਲਿ ॥",
 *   "ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥",
 *   "ਤੁਧੁ ਵਿਣੁ ਸਿਧੀ ਕਿਨੈ ਨ ਪਾਈਆ ॥",
 *   "ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਕਰਿ ਵੇਖਹੁ ਮਨਿ ਵੀਚਾਰਿ ॥"
 * ]
 *
 * @example English example
 * alphabetize([
 *   "kyqIAw surqI syvk kyqy nwnk AMqu n AMqu ]35]",
 *   "quDu ivxu isDI iknY n pweIAw ]",
 *   "ibnu siqgur iknY n pwieE kir vyKhu min vIcwir ]",
 *   "AMqu n isPqI khix n AMqu ]",
 *   "hau hau krqI sB mueI sMpau iksY n nwil ]",
 * ]);
 * // => [
 *   "AMqu n isPqI khix n AMqu ]",
 *   "hau hau krqI sB mueI sMpau iksY n nwil ]",
 *   "kyqIAw surqI syvk kyqy nwnk AMqu n AMqu ]35]",
 *   "quDu ivxu isDI iknY n pweIAw ]",
 *   "ibnu siqgur iknY n pwieE kir vyKhu min vIcwir ]",
 * ]
*/

const sorted = {
  a: 'ੳ',
  A: 'ਅ',
  e: 'ੲ',
  s: 'ਸ',
  h: 'ਹ',
  k: 'ਕ',
  K: 'ਖ',
  g: 'ਗ',
  G: 'ਘ',
  '|': 'ਙ',
  c: 'ਚ',
  C: 'ਛ',
  j: 'ਜ',
  J: 'ਝ',
  '\\': 'ਞ',
  t: 'ਟ',
  T: 'ਠ',
  f: 'ਡ',
  F: 'ਢ',
  x: 'ਣ',
  q: 'ਤ',
  Q: 'ਥ',
  d: 'ਦ',
  D: 'ਧ',
  n: 'ਨ',
  p: 'ਪ',
  P: 'ਫ',
  b: 'ਬ',
  B: 'ਭ',
  m: 'ਮ',
  X: 'ਯ',
  r: 'ਰ',
  l: 'ਲ',
  v: 'ਵ',
  V: 'ੜ',
};

const matraFixes = [
  ['[ਉ, ਊ]', 'ੳ'],
  ['[ਆ, ਆਂ, ਐ, ਔ]', 'ਅ'],
  ['[ਈ, ਏ]', 'ੲ'],
];

let sortedValues;

const customSort = (firstEl, secondEl) => {
  const firstIndex = sortedValues.indexOf(firstEl[0]);
  const secondIndex = sortedValues.indexOf(secondEl[0]);
  if (firstIndex === secondIndex) {
    return customSort(firstEl.substr(1), secondEl.substr(1));
  }
  return firstIndex > secondIndex;
};

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

function alphabetize(sentenceArray, type = 'english') {
  if (type === 'unicode') {
    sortedValues = Object.values(sorted);
  } else if (type === 'english') {
    sortedValues = Object.keys(sorted);
  }
  const sentenceObj = {};
  sentenceArray.forEach((sentence) => {
    // Ignores matras from the shabad
    let newSentence;
    matraFixes.forEach((e) => {
      newSentence = sentence.replace(new RegExp(e[0], 'g'), e[1]);
    });
    const arr = newSentence.split('').filter(a => sortedValues.indexOf(a) > 0);
    sentenceObj[sentence] = arr.join('');
  });

  const sortedResult = Object.values(sentenceObj).sort(customSort);

  return sortedResult.map(value => getKeyByValue(sentenceObj, value));
}

module.exports = alphabetize;
