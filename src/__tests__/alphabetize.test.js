const alphabetize = require('../alphabetize');

describe('Sorting a list of shabads', () => {
  it('Should return sorted shabad list (unicode)', () => {
    const shabads = [
      'ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥',
      'ਤੁਧੁ ਵਿਣੁ ਸਿਧੀ ਕਿਨੈ ਨ ਪਾਈਆ ॥',
      'ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਕਰਿ ਵੇਖਹੁ ਮਨਿ ਵੀਚਾਰਿ ॥',
      'ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥',
      'ਹਉ ਹਉ ਕਰਤੀ ਸਭ ਮੁਈ ਸੰਪਉ ਕਿਸੈ ਨ ਨਾਲਿ ॥',
    ];
    expect(alphabetize(shabads, 'unicode'))
      .toEqual([
        'ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥',
        'ਹਉ ਹਉ ਕਰਤੀ ਸਭ ਮੁਈ ਸੰਪਉ ਕਿਸੈ ਨ ਨਾਲਿ ॥',
        'ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥',
        'ਤੁਧੁ ਵਿਣੁ ਸਿਧੀ ਕਿਨੈ ਨ ਪਾਈਆ ॥',
        'ਬਿਨੁ ਸਤਿਗੁਰ ਕਿਨੈ ਨ ਪਾਇਓ ਕਰਿ ਵੇਖਹੁ ਮਨਿ ਵੀਚਾਰਿ ॥',
      ]);
  });

  it('Should return sorted shabad list (english)', () => {
    const shabads = [
      'kyqIAw surqI syvk kyqy nwnk AMqu n AMqu ]35]',
      'quDu ivxu isDI iknY n pweIAw ]',
      'ibnu siqgur iknY n pwieE kir vyKhu min vIcwir ]',
      'AMqu n isPqI khix n AMqu ]',
      'hau hau krqI sB mueI sMpau iksY n nwil ]',
    ];
    expect(alphabetize(shabads))
      .toEqual([
        'AMqu n isPqI khix n AMqu ]',
        'hau hau krqI sB mueI sMpau iksY n nwil ]',
        'kyqIAw surqI syvk kyqy nwnk AMqu n AMqu ]35]',
        'quDu ivxu isDI iknY n pweIAw ]',
        'ibnu siqgur iknY n pwieE kir vyKhu min vIcwir ]',
      ]);
  });
});
