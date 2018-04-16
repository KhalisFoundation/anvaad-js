/* globals describe, it, expect */

/* Use https://www.lexilogos.com/keyboard/devanagari.htm to add Hindi Unicode */
const lib = require('../hindi');

const tests = [
  ['soriT mhlw 5 ]', 'सोरठि महला ५ ||'],
  ['gur Apuny bilhwrI ]', 'गुर अपुने बलिहारी ||'],
  ['ijin pUrn pYj svwrI ]', 'जिनि पूरन पैज सवारी ||'],
];

describe('hindi()', () => {
  tests.forEach(([input, output]) =>
    it(`handles "${input}"`, () => expect(lib(input)).toBe(output))
  );
});
