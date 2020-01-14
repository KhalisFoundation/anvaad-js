const pauses = require('../pauses');


describe('vishraams', () => {
  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('ikv. sicAwrw hoeIAY; ikv. kUVY qutY pwil ]'))
      .toEqual(JSON.parse('[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "t"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('hukmI, auqmu nIcu; hukim iliK, duK suK pweIAih ]'))
      .toEqual(JSON.parse('[{"p": 0, "t": "j"}, {"p": 2, "t": "v"}, {"p": 4, "t": "j"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('ieknw. hukmI bKsIs; ieik, hukmI sdw BvweIAih ]'))
      .toEqual(JSON.parse('[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "j"}]'));
  });
});
