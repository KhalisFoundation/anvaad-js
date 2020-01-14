/**
 * Returns the position and types of pauses (vishraams) in a gurbani line
 *
 * @since 1.0.0
 * @param {string} words The string from which to get the pause positions
 * @param {string} large the symbol to use for a large pause (vishraam)
 * @param {string} medium the symbol to use for a medium pause (jamki)
 * @param {string} small the symbol to use for a small pause (thamki)
 * @returns {JSON} Returns the position and type for each pause
 * @example
 *
 * vishraams('ikv. sicAwrw hoeIAY; ikv. kUVY qutY pwil ]');
 * // => '[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "t"}]'
 */


function pauses(words = '', large = ';', medium = ',', small = '.') {
  if (words === '' || typeof words !== 'string') {
    return words;
  }

  const wordList = words.split(' ');
  const vishraamList = [];

  wordList.forEach((item, index) => {
    const vishraam = {};
    vishraam.p = index;
    const char = item.charAt(item.length - 1);
    if (char === large) {
      vishraam.t = 'v';
      vishraamList.push(vishraam);
    } else if (char === medium) {
      vishraam.t = 'j';
      vishraamList.push(vishraam);
    } else if (char === small) {
      vishraam.t = 't';
      vishraamList.push(vishraam);
    }
  });

  return vishraamList;
}

module.exports = pauses;
