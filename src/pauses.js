/**
 * Returns the position and types of pauses (vishraams) in a gurbani line
 *
 * @since 1.4.4
 * @param {string} words The string from which to get the pause positions
 * @param {string} largePauseChar the symbol to use for a large pause (vishraam)
 * @param {string} mediumPauseChar the symbol to use for a medium pause (jamki)
 * @param {string} smallPauseChar the symbol to use for a small pause (thamki)
 * @param {boolean} enableCharCount output the pause position
 * in terms of a non-whitespace character count (useful for larivaar text)
 * @returns {JSON} Returns the position and type for each pause
 * @example
 *
 * vishraams('ikv. sicAwrw hoeIAY; ikv. kUVY qutY pwil ]');
 * // => '[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "t"}]'
 */

function pauses(words = '', enableCharCount = false, {
  largePauseChar = ';',
  mediumPauseChar = ',',
  smallPauseChar = '.',
} = {}) {
  const vishraamList = [];
  if (words === '' || typeof words !== 'string') {
    return vishraamList;
  }

  let charCount = 0;
  let wordCount = 0;
  Array.from(words).forEach((char) => {
    if (char === ' ' || char === '\u200B') {
      wordCount += 1;
    } else {
      let count = wordCount;
      if (enableCharCount) {
        count = charCount;
      }
      if (char === largePauseChar) {
        vishraamList.push({ p: count, t: 'v' });
      } else if (char === mediumPauseChar) {
        vishraamList.push({ p: count, t: 'j' });
      } else if (char === smallPauseChar) {
        vishraamList.push({ p: count, t: 't' });
      } else if (char !== '੍') {
        // ignore the modifier char for backwards compatability with ascii
        charCount += 1;
      }
    }
  });

  return vishraamList;
}

module.exports = pauses;
