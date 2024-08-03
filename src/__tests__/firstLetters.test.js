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

  it('Should return first letters of each word and return ੳ from ੴ', () => {
    expect(firstLetters('<> siq nwmu krqw purKu inrBau inrvYru Akwl mUriq AjUnI sYBM gur pRswid ]', false, true))
      .toBe('asnkpnnAmAsgp');
  });

  it('Should return first letters of each word and simplify ਖ਼ to ਖ', () => {
    expect(firstLetters('^wlsw myro rUp hY ^ws ]', false, true))
      .toBe('KmrhK');
  });

  it('Should return first letters of each word and omit rahaao doojaa', () => {
    expect(firstLetters('hukmu pCwix qw KsmY imlxw ]1] rhwau dUjw ]'))
      .toBe('hpqKm');
  });

  it('Should return first letters of each word and omit rahaao', () => {
    expect(firstLetters('Ehw pRym iprI ]1] rhwau ]'))
      .toBe('Epp');
  });

  it('Should return first letters of each word, simplify ਓ to ੳ and omit rahaao', () => {
    expect(firstLetters('Ehw pRym iprI ]1] rhwau ]', false, true))
      .toBe('app');
  });

  it('Should return first letters of each word in gurmukhi unicode', () => {
    expect(firstLetters('ਸਿਰ ਮਸ੍ਤਕ ਰਖੵਾ ਪਾਰਬ੍ਰਹਮੰ ਹਸ੍ਤ ਕਾਯਾ ਰਖੵਾ ਪਰਮੇਸ੍ਵਰਹ'))
      .toBe('ਸਮਰਪਹਕਰਪ');
  });

  it('Should return first letters of each word in gurmukhi unicode, without vowel accents', () => {
    expect(firstLetters('ਅ ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ ਅੰ ਆਂ'))
      .toBe('ਅਅੲੲੳੳੲਅਓਅਅਅ');
  });

  it('Should return first letters of each word in gurmukhi unicode, without vowel accents', () => {
    expect(firstLetters('ਮੈ ਏਹਾ ਆਸ ਏਹੋ ਆਧਾਰੁ ॥੧॥ ਰਹਾਉ ॥ '))
      .toBe('ਮੲਅੲਅ');
  });

  it('Should return first letters of each word in gurmukhi unicode, without vowel accents and simplify ਓ to ੳ', () => {
    expect(firstLetters('ਓਨਾ ਇਕੋ ਨਾਮੁ ਅਧਾਰੁ ਇਕਾ ਉਨ ਭਤਿਆ ॥', false, true))
      .toBe('ੳੲਨਅੲੳਭ');
  });

  it('Should return first letters of each word and return ੳ from ੴ', () => {
    expect(firstLetters('ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥', false, true))
      .toBe('ੳਸਨਕਪਨਨਅਮਅਸਗਪ');
  });

  it('Should return first letters of each word in gurmukhi unicode as is', () => {
    expect(firstLetters('ਬ ਗ਼ੁਫ਼ਤੰਦ ਖ਼ੁਸ਼ ਦੀਨ ਦਾਨਾਇ ਨਗ਼ਜ਼ ॥'))
      .toBe('ਬਗ਼ਖ਼ਦਦਨ');
  });

  it('Should return first letters of each word in gurmukhi unicode and remove bindis', () => {
    expect(firstLetters('ਬ ਗ਼ੁਫ਼ਤੰਦ ਖ਼ੁਸ਼ ਦੀਨ ਦਾਨਾਇ ਨਗ਼ਜ਼ ॥', false, true))
      .toBe('ਬਗਖਦਦਨ');
  });

  it('Should return first letters of each word and omit dandiyaa(n)', () => {
    expect(firstLetters('dMfIAW dMfhu [ muKwCr mMfhu ]'))
      .toBe('ddmm');
  });

  it('Should return first letters of each word, including ਙ (|)', () => {
    expect(firstLetters('|M|w i|Awnu nhI muK bwqau ]'))
      .toBe('||nmb');
  });

  it('Should return first letters of each word, excluding the pipe char (|) when input is English', () => {
    expect(firstLetters('|| jap ||', true))
      .toBe('j');
  });

  it('Should return first letters of each word, excluding vishraam chars (;,.)', () => {
    expect(firstLetters('rwgu bsµqu, mhlw 1; Gru 1, caupdy; duquky', true))
      .toBe('rbmGcd');
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
