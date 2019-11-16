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

  it('Should return first letters of each word and simplify ਖ਼ to ਖ', () => {
    expect(firstLetters('^wlsw myro rUp hY ^ws ]'))
      .toBe('KmrhK');
  });

  it('Should return first letters of each word and omit rahaao doojaa', () => {
    expect(firstLetters('hukmu pCwix qw KsmY imlxw ]1] rhwau dUjw ]'))
      .toBe('hpqKm');
  });

  it('Should return first letters of each word, simplify ਓ to ੳ and omit rahaao', () => {
    expect(firstLetters('Ehw pRym iprI ]1] rhwau ]'))
      .toBe('app');
  });

  it('Should return first letters of each word in gurmukhi unicode', () => {
    expect(firstLetters('ਸਿਰ ਮਸ੍ਤਕ ਰਖੵਾ ਪਾਰਬ੍ਰਹਮੰ ਹਸ੍ਤ ਕਾਯਾ ਰਖੵਾ ਪਰਮੇਸ੍ਵਰਹ'))
      .toBe('ਸਮਰਪਹਕਰਪ');
  });

  it('Should return first letters of each word in gurmukhi unicode and remove bindis', () => {
    expect(firstLetters('ਬ ਗ਼ੁਫ਼ਤੰਦ ਖ਼ੁਸ਼ ਦੀਨ ਦਾਨਾਇ ਨਗ਼ਜ਼ ॥'))
      .toBe('ਬਗਖਦਦਨ');
  });

  it('Should return an empty string when no argument', () => {
    expect(firstLetters())
      .toBe('');
  });

  it('Should return null when passed as an argument', () => {
    expect(firstLetters(null))
      .toBeNull();
  });
});
