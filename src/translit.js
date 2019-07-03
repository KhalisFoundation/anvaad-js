/* load modules */
const languages = {};
languages.english = require('./translit_modules/english');
languages.english_v2 = require('./translit_modules/english_v2');
languages.devnagri = require('./translit_modules/devnagri');
languages.ipa = require('./translit_modules/ipa');

/**
 * Returns a transliteration of Gurmukhi script
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
  return languages[language](gurmukhi);
}

module.exports = translit;
