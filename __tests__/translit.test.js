const unicode = require('../translit');

describe('translit', () => {
  it('Should return transliteration of Gurmukhi', () => {
    expect(unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'))
      .toBe('aai mil gurasikh aai mil too mayray guroo kay piaaaray ||');
  });
});
