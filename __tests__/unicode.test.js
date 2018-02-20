const unicode = require('../unicode');

describe('unicode', () => {
  it('Should return unicode of ascii', () => {
    expect(unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥');

    // Including grammatical characters
    expect(unicode('hy myry gurU dy ipAwry is`K! mYƒ Aw ky iml, mYƒ Aw ky iml [rhwau['))
      .toBe('ਹੇ ਮੇਰੇ ਗੁਰੂ ਦੇ ਪਿਆਰੇ ਸਿੱਖ! ਮੈਨੂੰ ਆ ਕੇ ਮਿਲ, ਮੈਨੂੰ ਆ ਕੇ ਮਿਲ ।ਰਹਾਉ।');
  });
});
