const unicode = require('../unicode');

describe('unicode', () => {
  it('Should return unicode of ascii', () => {
    // Including grammatical characters
    expect(unicode('0123456789!?()\'‘’:/'))
      .toBe('੦੧੨੩੪੫੬੭੮੯!?()\'‘’:/');

    expect(unicode('hy myry gurU dy ipAwry is`K! mYƒ Aw ky iml, mYƒ Aw ky iml [rhwau['))
      .toBe('ਹੇ ਮੇਰੇ ਗੁਰੂ ਦੇ ਪਿਆਰੇ ਸਿੱਖ! ਮੈਨੂੰ ਆ ਕੇ ਮਿਲ, ਮੈਨੂੰ ਆ ਕੇ ਮਿਲ ।ਰਹਾਉ।');

    // Full list of characters
    expect(unicode('rzw b^So rwizk irhwko rhIm ]1]'))
      .toBe('ਰਜ਼ਾ ਬਖ਼ਸ਼ੋ ਰਾਜ਼ਿਕ ਰਿਹਾਕੋ ਰਹੀਮ ॥੧॥');

    expect(unicode('rwm jpau jIA AYsy AYsy ] DR¨ pRihlwd jipE hir jYsy ]1]'))
      .toBe('ਰਾਮ ਜਪਉ ਜੀਅ ਐਸੇ ਐਸੇ ॥ ਧ੍ਰੂ ਪ੍ਰਹਿਲਾਦ ਜਪਿਓ ਹਰਿ ਜੈਸੇ ॥੧॥');

    // MU
    expect(unicode('hMU'))
      .toBe('ਹੂੰ');

    // @w
    expect(unicode('El@w'))
      .toBe('ਓਲ੍ਹਾ');

    // @y
    expect(unicode('aulwm@y'))
      .toBe('ਉਲਾਮੇ੍');

    // uo
    expect(unicode('suohwgix'))
      .toBe('ਸੋੁਹਾਗਣਿ');

    // ey
    expect(unicode('clwey'))
      .toBe('ਚਲਾਏ');

    // AO
    expect(unicode('AOr'))
      .toBe('ਔਰ');

    // eI
    expect(unicode('hoveI'))
      .toBe('ਹੋਵਈ');

    // e[^Iy]
    expect(unicode('ny Awein guil gulSin &¤ro zyb'))
      .toBe('ਨੇ ਆੲਨਿ ਗੁਲਿ ਗੁਲਸ਼ਨਿ ਫ਼ੱਰੋ ਜ਼ੇਬ');

    // AW
    expect(unicode('lweIAW'))
      .toBe('ਲਾਈਆਂ');

    expect(unicode('vfw swihbu aUcw Qwau ]'))
      .toBe('ਵਡਾ ਸਾਹਿਬੁ ਊਚਾ ਥਾਉ ॥');

    expect(unicode('pRB kau sd bil jweI jIa ]2]'))
      .toBe('ਪ੍ਰਭ ਕਉ ਸਦ ਬਲਿ ਜਾਈ ਜੀੳ ॥੨॥');

    expect(unicode('AMimRq vylw scu nwau vifAweI vIcwru ]'))
      .toBe('ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਸਚੁ ਨਾਉ ਵਡਿਆਈ ਵੀਚਾਰੁ ॥');

    expect(unicode('sMiDAw pRwq ies˜wnu krwhI ]'))
      .toBe('ਸੰਧਿਆ ਪ੍ਰਾਤ ਇਸ੍ਨਾਨੁ ਕਰਾਹੀ ॥');

    expect(unicode('<> siqgur pRswid ]'))
      .toBe('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥');

    expect(unicode('BwTI ggnu isMi|Aw Aru cuMi|Aw knk kls ieku pwieAw ]'))
      .toBe('ਭਾਠੀ ਗਗਨੁ ਸਿੰਙਿਆ ਅਰੁ ਚੁੰਙਿਆ ਕਨਕ ਕਲਸ ਇਕੁ ਪਾਇਆ ॥');

    expect(unicode('iqn ky nwm Anyk Anµq ]'))
      .toBe('ਤਿਨ ਕੇ ਨਾਮ ਅਨੇਕ ਅਨੰਤ ॥');

    expect(unicode('6 : sMgq dw Asr-nwn`qÍ'))
      .toBe('੬ : ਸੰਗਤ ਦਾ ਅਸਰ-ਨਾਨੱਤ੍ਵ');

    expect(unicode('iPir puCix isD nwnkw! mwq lok ivic ikAw vrqwrw?'))
      .toBe('ਫਿਰਿ ਪੁਛਣਿ ਸਿਧ ਨਾਨਕਾ! ਮਾਤ ਲੋਕ ਵਿਚਿ ਕਿਆ ਵਰਤਾਰਾ?');

    expect(unicode('5 : jpujI AMqly slok ‘pvx gurU’ dw ArQ'))
      .toBe('੫ : ਜਪੁਜੀ ਅੰਤਲੇ ਸਲੋਕ ‘ਪਵਣ ਗੁਰੂ’ ਦਾ ਅਰਥ');

    expect(unicode('hr do Awlm kImiq X¤k qwir mUie Xwir mw ] 2 ] 1 ]'))
      .toBe('ਹਰ ਦੋ ਆਲਮ ਕੀਮਤਿ ਯੱਕ ਤਾਰਿ ਮੂਇ ਯਾਰਿ ਮਾ ॥ ੨ ॥ ੧ ॥');

    expect(unicode('vwihgurU jI kI &qh ]'))
      .toBe('ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹ ॥');

    expect(unicode('ik®s˜w qy jwnaU hir hir nwcMqI nwcnw ]1]'))
      .toBe('ਕ੍ਰਿਸ੍ਨਾ ਤੇ ਜਾਨਊ ਹਰਿ ਹਰਿ ਨਾਚੰਤੀ ਨਾਚਨਾ ॥੧॥');

    expect(unicode('ibKu kw kIVw ibKu isau lwgw ibs†w mwih smweI ]'))
      .toBe('ਬਿਖੁ ਕਾ ਕੀੜਾ ਬਿਖੁ ਸਿਉ ਲਾਗਾ ਬਿਸ੍ਟਾ ਮਾਹਿ ਸਮਾਈ ॥');

    expect(unicode('Asçrj rUpM rhMq jnmM ]'))
      .toBe('ਅਸ੍ਚਰਜ ਰੂਪੰ ਰਹੰਤ ਜਨਮੰ ॥');

    expect(unicode('duKu prhir suKu Gir lY jwie ]'))
      .toBe('ਦੁਖੁ ਪਰਹਰਿ ਸੁਖੁ ਘਰਿ ਲੈ ਜਾਇ ॥');

    expect(unicode('kwrHw quJY n ibAwpeI nwnk imtY aupwiD ]1]'))
      .toBe('ਕਾਰ੍ਹਾ ਤੁਝੈ ਨ ਬਿਆਪਈ ਨਾਨਕ ਮਿਟੈ ਉਪਾਧਿ ॥੧॥');

    expect(unicode('sB lwlc iqAwg dey igRh ky iek sÎwm ky pÎwr kI hY su BuKI ]636]'))
      .toBe('ਸਭ ਲਾਲਚ ਤਿਆਗ ਦਏ ਗ੍ਰਿਹ ਕੇ ਇਕ ਸ੍ਯਾਮ ਕੇ ਪ੍ਯਾਰ ਕੀ ਹੈ ਸੁ ਭੁਖੀ ॥੬੩੬॥');

    expect(unicode('AnfMf bwFÎ ]7]93]'))
      .toBe('ਅਨਡੰਡ ਬਾਢ੍ਯ ॥੭॥੯੩॥');

    expect(unicode('hM BI vM\\w fumxI rovw JIxI bwix ]2]'))
      .toBe('ਹੰ ਭੀ ਵੰਞਾ ਡੁਮਣੀ ਰੋਵਾ ਝੀਣੀ ਬਾਣਿ ॥੨॥');

    expect(unicode('mhW du`K pwvY iqs ko kwL(35)'))
      .toBe('ਮਹਾਂ ਦੁੱਖ ਪਾਵੈ ਤਿਸ ਕੋ ਕਾਲ਼(੩੫)');

    expect(unicode('ikDO sMKnI icqRnI pdmnI hY ]23]191]'))
      .toBe('ਕਿਧੌ ਸੰਖਨੀ ਚਿਤ੍ਰਨੀ ਪਦਮਨੀ ਹੈ ॥੨੩॥੧੯੧॥');

    expect(unicode('kvnu jogu kaunu g´wnu D´wnu kvn ibiD ausœiq krIAY ]'))
      .toBe('ਕਵਨੁ ਜੋਗੁ ਕਉਨੁ ਗੵਾਨੁ ਧੵਾਨੁ ਕਵਨ ਬਿਧਿ ਉਸ੍ਤਤਿ ਕਰੀਐ ॥');

    /* expect(unicode('lY AkR¨r kau Awpny sMg kihXo Ary kwnRh khMŧ kau pDwirXo ]'))
      .toBe('ਲੈ ਅਕ੍ਰੂਰ ਕਉ ਆਪਨੇ ਸੰਗ ਕਹਿਯੋ ਅਰੇ ਕਾਨ੍ਰਹ ਕਹੰŧ ਕਉ ਪਧਾਰਿਯੋ ॥'); */

    expect(unicode('slok mÚ 3 ]'))
      .toBe('ਸਲੋਕ ਮਃ ੩ ॥');

    expect(unicode('hir Awpy kwn@ü aupwiedw myry goivdw hir Awpy gopI KojI jIau ]'))
      .toBe('ਹਰਿ ਆਪੇ ਕਾਨ੍ਹੁ ਉਪਾਇਦਾ ਮੇਰੇ ਗੋਵਿਦਾ ਹਰਿ ਆਪੇ ਗੋਪੀ ਖੋਜੀ ਜੀਉ ॥');

    expect(unicode('Xky dwnh muMgo idZr nu^d nIm ]45]'))
      .toBe('ਯਕੇ ਦਾਨਹ ਮੁੰਗੋ ਦਿਗ਼ਰ ਨੁਖ਼ਦ ਨੀਮ ॥੪੫॥');
  });

  it('Should return an empty string when no argument', () => {
    expect(unicode())
      .toBe('');
  });

  it('Should return null when passed as an argument', () => {
    expect(unicode(null))
      .toBeNull();
  });
});
