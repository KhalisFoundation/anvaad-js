/* load modules */
const languages = {};
languages.english = require('./translit_modules/english');
languages.devnagri = require('./translit_modules/devnagri');
languages.ipa = require('./translit_modules/ipa');
languages.shahmukhi = require('./translit_modules/shahmukhi');

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
      const output = out;
      output[x] = languages[x](gurmukhi);
      return output;
    }, {});
  }

  if (map != null) {
    return gurmukhi.split(' ').map((word) => {
      // remove embedded vishraams before checking map
      let currentWord = word;
      const vishraamRegex = /[.,;]$/;
      const vishraam = currentWord.match(vishraamRegex);
      currentWord = currentWord.replace(vishraamRegex, '');
      const result = map.get(currentWord);
      if (result) {
        if (vishraam != null) {
          return result + vishraam;
        }
        return result;
      }
      // fallback to transliteration module
      return languages[language](currentWord);
    }).join(' ');
  }
  return languages[language](gurmukhi);
}
module.exports = translit;
