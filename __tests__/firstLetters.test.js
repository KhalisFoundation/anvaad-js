const firstLetters = require('../firstLetters');

describe('firstLetters', () => {
  it('Should return first letters of each word', () => {
    expect(firstLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('AmgAmqmgkp');
  });

  it('Should return first letters of each word and only 2 letters', () => {
    expect(firstLetters('srbM dyvM ]'))
      .toBe('sd');
  });

  it('Should return an empty string when no argument', () => {
    expect(firstLetters())
      .toBe('');
  });
});
