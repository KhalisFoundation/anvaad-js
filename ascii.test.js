const ascii = require('./ascii');

describe('ascii', () => {
  it('Should return ascii codes', () => {
    expect(ascii('AmgAmqmgkp'))
      .toBe(',065,109,103,065,109,113,109,103,107,112,');
  });
});
