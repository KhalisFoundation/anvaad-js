const unicode = require('./unicode');

describe('mainLetters', () => {
  it('Should remove vowel symbols', () => {
    expect(unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥');
  });
});
