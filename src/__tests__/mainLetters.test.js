const mainLetters = require('../mainLetters');

describe('mainLetters', () => {
  it('Should remove vowel symbols', () => {
    expect(mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('Ae ml grsK Ae ml q mr gr k pAr');
  });

  it('Should remove vowel symbols', () => {
    expect(mainLetters('ik®s˜w qy jwnaU hir hir nwcMqI nwcnw ]1]'))
      .toBe('ks q jna hr hr ncq ncn');
  });

  it('Should remove vowel symbols including from ੴ', () => {
    expect(mainLetters('<> siq nwmu krqw purKu inrBau inrvYru Akwl mUriq AjUnI sYBM gur pRswid ]', true, true))
      .toBe('a sq nm krq prK nrBa nrvr Akl mrq Ajn sB gr prsd');
  });

  it('Should remove vowel symbols and simplify half consonants to their full counterparts', () => {
    expect(mainLetters('ik®s˜w qy jwnaU hir hir nwcMqI nwcnw ]1]', true, true))
      .toBe('krsn q jna hr hr ncq ncn');
  });

  it('Should remove vowel symbols', () => {
    expect(mainLetters('isr msœk rK´w pwrbRhmM hsœ kwXw rK´w prmysÍrh ]'))
      .toBe('sr msk rK prbhm hs kX rK prmsrh');
  });

  it('Should remove vowel symbols and simplify half consonants to their full counterparts', () => {
    expect(mainLetters('isr msœk rK´w pwrbRhmM hsœ kwXw rK´w prmysÍrh ]', false, true))
      .toBe('sr msqk rKX prbrhm hsq kX rKX prmsvrh');
  });

  it('Should remove vowel symbols and simplify half consonants to their full counterparts', () => {
    expect(mainLetters('Ehw pRym iprI ]1] rhwau ', true, true))
      .toBe('ah prm pr rha');
  });

  it('Should remove vowel symbols', () => {
    expect(mainLetters('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥'))
      .toBe('ਅੲ ਮਲ ਗਰਸਖ ਅੲ ਮਲ ਤ ਮਰ ਗਰ ਕ ਪਅਰ');
  });

  it('Should remove vowel symbols and simplify half consonants to their full counterparts', () => {
    expect(mainLetters('ਸਿਰ ਮਸ੍ਤਕ ਰਖੵਾ ਪਾਰਬ੍ਰਹਮੰ ਹਸ੍ਤ ਕਾਯਾ ਰਖੵਾ ਪਰਮੇਸ੍ਵਰਹ ॥', false, true))
      .toBe('ਸਰ ਮਸਤਕ ਰਖਯ ਪਰਬਰਹਮ ਹਸਤ ਕਯ ਰਖਯ ਪਰਮਸਵਰਹ');
  });

  it('Should remove vowel symbols and simplify half consonants to their full counterparts', () => {
    expect(mainLetters('ਓਹਾ ਪ੍ਰੇਮ ਪਿਰੀ ॥੧॥ ਰਹਾਉ ', true, true))
      .toBe('ੳਹ ਪਰਮ ਪਰ ਰਹੳ');
  });

  it('Should remove vowel symbols including from ੴ', () => {
    expect(mainLetters('ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥', true, true))
      .toBe('ੳ ਸਤ ਨਮ ਕਰਤ ਪਰਖ ਨਰਭੳ ਨਰਵਰ ਅਕਲ ਮਰਤ ਅਜਨ ਸਭ ਗਰ ਪਰਸਦ');
  });

  it('Should return an empty string when no argument', () => {
    expect(mainLetters())
      .toBe('');
  });

  it('Should return null when passed as an argument', () => {
    expect(mainLetters(null))
      .toBeNull();
  });
});
