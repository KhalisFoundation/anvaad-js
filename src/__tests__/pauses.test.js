const pauses = require('../pauses');


describe('vishraams', () => {
  it('Should return the position and type of each vishraam symbol (; and ./)', () => {
    expect(pauses('ikv. sicAwrw hoeIAY; ikv. kUVY qutY pwil ]'))
      .toEqual(JSON.parse('[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "t"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('ieknw. hukmI bKsIs; ieik, hukmI sdw BvweIAih ]'))
      .toEqual(JSON.parse('[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "j"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('prmwid purKmnoipmM; siq Awid Bwv rqM ]', true))
      .toEqual(JSON.parse('[{"p": 17, "t": "v"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('prmwid purK mnoipmM; siq Awid Bwv rqM ]', true))
      .toEqual(JSON.parse('[{"p": 17, "t": "v"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('ਸਿਰ ਮਸ੍ਤਕ ਰਖੵਾ ਪਾਰਬ੍ਰਹਮੰ; ਹਸ੍ਤ ਕਾਯਾ ਰਖੵਾ ਪਰਮੇਸ੍ਵਰਹ ॥', true))
      .toEqual(JSON.parse('[{"p": 19, "t": "v"}]'));
  });

  it('Should return the position and type of each vishraam symbol', () => {
    expect(pauses('isr msœk rK´w pwrbRhmM; hsœ kwXw rK´w prmysÍrh ]', true))
      .toEqual(JSON.parse('[{"p": 19, "t": "v"}]'));
  });
});
