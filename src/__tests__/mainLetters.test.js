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

  it('Should return an empty string when no argument', () => {
    expect(mainLetters())
      .toBe('');
  });

  it('Should return null when passed as an argument', () => {
    expect(mainLetters(null))
      .toBeNull();
  });
});
