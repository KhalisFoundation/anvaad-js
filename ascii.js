/**
 * Returns a comma-separated string of ascii codes for a
 * string of Gurmukhi characters
 *
 * @since 1.0.0
 * @param {string} string The string of letters
 * @returns {string} Returns a single string of comma-separated ascii codes
 * @example
 *
 * ascii('AmgAmqmgkp');
 * // => ',065,109,103,065,109,113,109,103,107,112,'
 */

function ascii(string) {
  return `,${
    string
      .split('')
      .map(char => String(char.charCodeAt(0)).padStart(3, '0'))
      .join(',')
  },`;
}

module.exports = ascii;
