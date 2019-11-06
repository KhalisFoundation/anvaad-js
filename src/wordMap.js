/* load modules */
const fs = require('fs');
const path = require('path');

/**
 * Returns a map of words to be used in a word-by-word transliteration
 *
 * @since 1.0.0
 * @param {string} filename The name of the language mapping file
 * @returns {Map} Returns a Map object representation of the word mapping csv
 */

function wordMap(filePath) {
  const map = new Map();
  const file = fs.readFileSync(path.resolve(__dirname, filePath), { encoding: 'utf8' });
  const allWords = file.split('\r\n');
  for (let i = 0; i < allWords.length; i += 1) {
    const mappedWord = allWords[i].split(',');
    map.set(mappedWord[0], mappedWord[1]);
  }
  return map;
}

module.exports = wordMap;