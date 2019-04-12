const alphabetize = require('../alphabetize');

describe('Sorting a list of shabads', () => {
  it('Should return sorted shabad list (unicode)', () => {
    const shabads = [
      'ਕਥਨਾ ਕਥੀ ਨ ਆਵੈ ਤੋਟਿ ॥',
      'ਤੁਧੁ ਵਿਣੁ ਸਿਧੀ ਕਿਨੈ ਨ ਪਾਈਆ ॥',
      'ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਕਰਿ ਵੇਖਹੁ ਮਨਿ ਵੀਚਾਰਿ ॥',
      'ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥',
      'ਹਉ ਹਉ ਕਰਤੀ ਸਭ ਮੁਈ ਸੰਪਉ ਕਿਸੈ ਨ ਨਾਲਿ ॥',
      'ਕਥਿ ਕਥਿ ਕਥੀ ਕੋਟੀ ਕੋਟਿ ਕੋਟਿ ॥',
      'ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥',
    ];
    expect(alphabetize(shabads, 'unicode')).toEqual([
      'ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥',
      'ਹਉ ਹਉ ਕਰਤੀ ਸਭ ਮੁਈ ਸੰਪਉ ਕਿਸੈ ਨ ਨਾਲਿ ॥',
      'ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥',
      'ਕਥਿ ਕਥਿ ਕਥੀ ਕੋਟੀ ਕੋਟਿ ਕੋਟਿ ॥',
      'ਕਥਨਾ ਕਥੀ ਨ ਆਵੈ ਤੋਟਿ ॥',
      'ਤੁਧੁ ਵਿਣੁ ਸਿਧੀ ਕਿਨੈ ਨ ਪਾਈਆ ॥',
      'ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਕਰਿ ਵੇਖਹੁ ਮਨਿ ਵੀਚਾਰਿ ॥',
    ]);
  });

  it('Should return sorted shabad list (english)', () => {
    const shabads = [
      'kQnw kQI n AwvY qoit ]',
      'quDu ivxu isDI iknY n pweIAw ]',
      'ibnu siqgur iknY n pwieE kir vyKhu min vIcwir ]',
      'AMqu n isPqI khix n AMqu ]',
      'hau hau krqI sB mueI sMpau iksY n nwil ]',
      'kiQ kiQ kQI kotI koit koit ]',
      'kyqIAw surqI syvk kyqy nwnk AMqu n AMqu ]35]',
    ];
    expect(alphabetize(shabads)).toEqual([
      'AMqu n isPqI khix n AMqu ]',
      'hau hau krqI sB mueI sMpau iksY n nwil ]',
      'kyqIAw surqI syvk kyqy nwnk AMqu n AMqu ]35]',
      'kiQ kiQ kQI kotI koit koit ]',
      'kQnw kQI n AwvY qoit ]',
      'quDu ivxu isDI iknY n pweIAw ]',
      'ibnu siqgur iknY n pwieE kir vyKhu min vIcwir ]',
    ]);
  });
});
