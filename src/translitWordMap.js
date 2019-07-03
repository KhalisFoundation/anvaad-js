/* load modules */
let map = null;
const languages = {};
languages.english = require('./translit_modules/english');
languages.english_v2 = require('./translit_modules/english_v2');
languages.devnagri = require('./translit_modules/devnagri');
languages.ipa = require('./translit_modules/ipa');
const fs = require('fs');
const path = require('path');

/**
 * Returns a transliteration of Gurmukhi script using a per-word mapping as a primary source
 * and a per-letter mapping as a secondary source
 *
 * @since 1.0.0
 * @param {string} gurmukhi The string from to generate transliteration
 * @returns {string} Returns a string of text
 * @example
 *
 * translit('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'aai mil gursikh aai mil too mere guroo ke piaare ||'
 */

function translit(gurmukhi, language = 'english') {
  if (language === 'all') {
    return Object.keys(languages).reduce((out, x) => {
      /* eslint no-param-reassign: 0 */
      out[x] = languages[x](gurmukhi);
      return out;
    }, {});
  }

  function getWordFromMap(word) {
    // remove embedded vishraams
    const vishraamRegex = /[.,;]$/;
    const vishraam = word.match(vishraamRegex);
    const newWord = word.replace(vishraamRegex, '');
    if (map == null) {
      map = new Map();
      const fileName = path.resolve(__dirname, `translit_modules/${language}.csv`);
      // const fileName = 'translit_modules/' + language + '.csv';
      const mappingFile = fs.readFileSync(fileName, { encoding: 'utf8' });
      const allWords = mappingFile.split('\r\n');
      for (let i = 0; i < allWords.length; i += 1) {
        const mappedWord = allWords[i].split(',');
        map.set(mappedWord[0], mappedWord[1]);
      }
    }
    if (map != null) {
      if (map.get(newWord)) {
        const result = map.get(newWord);
        if (vishraam != null) {
          return result + vishraam;
        }
        return result;
      }
    }
    return languages[language](word);
  }

  return gurmukhi.split(' ').map(getWordFromMap).join(' ');
}


module.exports = translit;
