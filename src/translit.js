/* load modules */
const languages = {};
languages.english = require('./translit_modules/english');

/**
 * Returns a transliteration of Gurmukhi script
 *
 * @since 1.0.0
 * @param {string} gurmukhi The string from to generate transliteration
 * @returns {string} Returns a string of text
 * @example
 *
 * translit('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
 * // => 'aai mil gurasikh aai mil too mayray guroo kay piaaaray ||'
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
