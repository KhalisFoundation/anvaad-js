/**
 * Returns the position and types of pauses (vishraams) in a gurbani line
 *
 * @since 1.4.2
 * @param {string} words The string from which to get the pause positions
 * @param {string} large the symbol to use for a large pause (vishraam)
 * @param {string} medium the symbol to use for a medium pause (jamki)
 * @param {string} small the symbol to use for a small pause (thamki)
 * @param {boolean} enableCharCount optionally include pause position
 * in terms of non-whitespace character count
 * @returns {JSON} Returns the position and type for each pause
 * @example
 *
 * vishraams('ikv. sicAwrw hoeIAY; ikv. kUVY qutY pwil ]');
 * // => '[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "t"}]'
 */


function pauses(words = '', enableCharCount = false, large = ';', medium = ',', small = '.') {
  const vishraamList = [];
  if (words === '' || typeof words !== 'string') {
    return vishraamList;
  }

  // words.split(' ').forEach((word, index) => {
  //   const char = word.charAt(word.length - 1);
  //   if (char === large) {
  //     vishraamList.push({ p: index, t: 'v' });
  //   } else if (char === medium) {
  //     vishraamList.push({ p: index, t: 'j' });
  //   } else if (char === small) {
  //     vishraamList.push({ p: index, t: 't' });
  //   }
  // });

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
      if (char === large) {
        vishraamList.push({ p: count, t: 'v' });
      } else if (char === medium) {
        vishraamList.push({ p: count, t: 'j' });
      } else if (char === small) {
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
