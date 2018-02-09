const unicode = require('./unicode');

describe('unicode', () => {
  it('Should return unicode of ascii', () => {
    expect(unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥');
  });
});
