/* load modules */
const languages = {};
languages.english = require('./translit_modules/english');
languages.devnagri = require('./translit_modules/devnagri');
languages.ipa = require('./translit_modules/ipa');

/**
 * Returns a transliteration of Gurmukhi script
 *
 * @since 1.0.0
 * @param {string} gurmukhi The string from to generate transliteration
 * @param (optional) {string} language The name of language translit module to use
 * @param (optional) {Map} map The name of language word map to use (for per-word translit)
 * @returns {string} Returns a string of text
 * @example
 *
 * translit('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'aai mil gursikh aai mil too mere guroo ke piaare ||'
 */

function translit(gurmukhi, language = 'english', map = null) {
  if (language === 'all') {
    return Object.keys(languages).reduce((out, x) => {
      /* eslint no-param-reassign: 0 */
      out[x] = languages[x](gurmukhi);
      return out;
    }, {});
  }
  function getMappedWord(word) {
    if (map != null) {
      // remove embedded vishraams before mapping
      const vishraamRegex = /[.,;]$/;
      const vishraam = word.match(vishraamRegex);
      word = word.replace(vishraamRegex, '');
      const result = map.get(word);
      if (result) {
        if (vishraam != null) {
          return result + vishraam;
        }
        return result;
      }
    }
    // use the specified translit module if word not in map
    return languages[language](word);
  }
  if (map != null) {
    return gurmukhi.split(' ').map(getMappedWord).join(' ');
  }
  return languages[language](gurmukhi);
}

module.exports = translit;
