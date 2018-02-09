const firstLetters = require('./firstLetters');

describe('mainLetters', () => {
  it('Should remove vowel symbols', () => {
    expect(firstLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('AmgAmqmgkp');
  });
});
