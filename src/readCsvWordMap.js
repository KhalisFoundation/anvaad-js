/* load modules */
const fs = require('fs');
const path = require('path');

/**
 * Returns a map of words to be used in a word-by-word transliteration
 *
 * @since 1.0.0
 * @param {string} filePath The path to the csv file representing the word map
 * @returns {Map} Returns a Map object representation of the input csv file
 */

function readCsvWordMap(filePath) {
  const map = new Map();
  let file;
  try {
    file = fs.readFileSync(path.resolve(__dirname, filePath), { encoding: 'utf8' });
  } catch (error) {
    return null;
  }
  const allWords = file.split('\r\n');
  for (let i = 0; i < allWords.length; i += 1) {
    const mappedWord = allWords[i].split(',');
    map.set(mappedWord[0], mappedWord[1]);
  }
  return map;
}

module.exports = readCsvWordMap;
