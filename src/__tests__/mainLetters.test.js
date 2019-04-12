const mainLetters = require('../mainLetters');

describe('mainLetters', () => {
  it('Should remove vowel symbols', () => {
    expect(mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]')).toBe(
      'Ae ml grsK Ae ml q mr gr k pAr',
    );
  });

  it('Should return an empty string when no argument', () => {
    expect(mainLetters()).toBe('');
  });

  it('Should return null when passed as an argument', () => {
    expect(mainLetters(null)).toBeNull();
  });
});
