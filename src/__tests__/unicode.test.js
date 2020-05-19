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

    // convert s + æ as two distinct unicode characters
    expect(unicode('rjæw bKæsæo rwijæk irhwko rhIm ]1]', false, false))
      .toBe('ਰਜ਼ਾ ਬਖ਼ਸ਼ੋ ਰਾਜ਼ਿਕ ਰਿਹਾਕੋ ਰਹੀਮ ॥੧॥');

    expect(unicode('rwm jpau jIA AYsy AYsy ] DR¨ pRihlwd jipE hir jYsy ]1]'))
      .toBe('ਰਾਮ ਜਪਉ ਜੀਅ ਐਸੇ ਐਸੇ ॥ ਧ੍ਰੂ ਪ੍ਰਹਿਲਾਦ ਜਪਿਓ ਹਰਿ ਜੈਸੇ ॥੧॥');

    // General pair-bindi
    expect(unicode('ijgw CqR jVwv kælZI cOr mukqw lwlrI'))
      .toBe('ਜਿਗਾ ਛਤ੍ਰ ਜੜਾਵ ਕ਼ਲਗ਼ੀ ਚੌਰ ਮੁਕਤਾ ਲਾਲਰੀ');

    expect(unicode('ikRpws kæwkæm AqlsI bhu mol cIrn cusq nO ]'))
      .toBe('ਕ੍ਰਿਪਾਸ ਕ਼ਾਕ਼ਮ ਅਤਲਸੀ ਬਹੁ ਮੋਲ ਚੀਰਨ ਚੁਸਤ ਨੌ ॥');

    // Adhik
    expect(unicode('su`D ispwh durMq dubwh su swj snwh durjwn dlYNgy ]'))
      .toBe('ਸੁੱਧ ਸਿਪਾਹ ਦੁਰੰਤ ਦੁਬਾਹ ਸੁ ਸਾਜ ਸਨਾਹ ਦੁਰਜਾਨ ਦਲੈਂਗੇ ॥');

    // ਪੈਰ ਅੰਕ ਸਿਰਲੇਖ ਵਿਚ ੧
    expect(unicode('rwgu gauVI pUrbI₁ mhlw 5'))
      .toBe('ਰਾਗੁ ਗਉੜੀ ਪੂਰਬੀ₁ ਮਹਲਾ ੫');

    // ਪੈਰ ਅੰਕ ਸਿਰਲੇਖ ਵਿਚ ੧੫
    expect(unicode('gauVI kbIr jI iqpdy₁₅ ]'))
      .toBe('ਗਉੜੀ ਕਬੀਰ ਜੀ ਤਿਪਦੇ₁₅ ॥');

    // ik oangkaar using various char combinations
    expect(unicode('<> siqgur pRswid ]'))
      .toBe('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥');

    expect(unicode('1Eå siqgur pRswid ]'))
      .toBe('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥');

    expect(unicode('¡ siqgur pRswid ]'))
      .toBe('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥');

    expect(unicode('ÅÆ siqgur pRswid ]'))
      .toBe('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥');

    // MU
    expect(unicode('hUM'))
      .toBe('ਹੂੰ');

    // @w
    expect(unicode('El@w'))
      .toBe('ਓਲੑਾ');

    // @y
    expect(unicode('aulwm@y'))
      .toBe('ਉਲਾਮੑੇ');

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
      .toBe('ਹਰਿ ਆਪੇ ਕਾਨੑੁ ਉਪਾਇਦਾ ਮੇਰੇ ਗੋਵਿਦਾ ਹਰਿ ਆਪੇ ਗੋਪੀ ਖੋਜੀ ਜੀਉ ॥');

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


describe('unicodereverse', () => {
  it('Should return ascii from unicode', () => {
    // Including grammatical characters
    expect(unicode('੦੧੨੩੪੫੬੭੮੯!?()\'‘’:/', true))
      .toBe('0123456789!?()\'‘’:/');

    // pairin ank
    expect(unicode('           ', true))
      .toBe('₁ ₂ ₃ ₄ ₅ ₆ ₈ ₁ ₂ ₃ ₄ ₆');

    expect(unicode('', true))
      .toBe('₁₅');

    expect(unicode('ਰਾਗੁ ਗਉੜੀ ਪੂਰਬੀ ਮਹਲਾ ੫', true))
      .toBe('rwgu gauVI₁ pUrbI mhlw 5');

    expect(unicode('ਰਾਗੁ ਗਉੜੀ ਛੰਤ ਮਹਲਾ ੫', true))
      .toBe('rwgu g₁auVI CMq mhlw 5');

    // bindi/tippi before sihari
    expect(unicode('ਗਲਂੀ ਅਸੀ ਚੰਗੀਆ ਆਚਾਰੀ ਬੁਰੀਆਹ ॥', true))
      .toBe('glˆØI AsI cMgIAw AwcwrI burIAwh ]');

    expect(unicode('ਗਲਂੀ ਗਲੀ ੲਂੀ ੲੀ', true))
      .toBe('glˆØI glˆØI eˆØI eˆØI');

    expect(unicode('ੲੰੀਧਨ ਤੇ ਬੈਸੰਤਰੁ ਭਾਗੈ ॥', true))
      .toBe('eµØIDn qy bYsMqru BwgY ]');

    expect(unicode('ੲੰੀ ਈ ਤੰੀ ਤੀ', true))
      .toBe('eµØI eµØI qµØI qµØI');

    expect(unicode('ਊਪਰ ਕਉ ਮਾਂਗਉ ਖੀਂਧਾ ॥', true))
      .toBe('aUpr kau mWgau KINDw ]');

    expect(unicode('ਹੇ ਮੇਰੇ ਗੁਰੂ ਦੇ ਪਿਆਰੇ ਸਿੱਖ! ਮੈਨੂੰ ਆ ਕੇ ਮਿਲ, ਮੈਨੂੰ ਆ ਕੇ ਮਿਲ ।ਰਹਾਉ।', true))
      .toBe('hy myry gurU dy ipAwry is`K! mYƒ Aw ky iml, mYƒ Aw ky iml [rhwau[');

    // Full list of characters
    expect(unicode('ਰਜ਼ਾ ਬਖ਼ਸ਼ੋ ਰਾਜ਼ਿਕ ਰਿਹਾਕੋ ਰਹੀਮ ॥੧॥', true))
      .toBe('rzw b^So rwizk irhwko rhIm ]1]');

    expect(unicode('ਰਾਮ ਜਪਉ ਜੀਅ ਐਸੇ ਐਸੇ ॥ ਧ੍ਰੂ ਪ੍ਰਹਿਲਾਦ ਜਪਿਓ ਹਰਿ ਜੈਸੇ ॥੧॥', true))
      .toBe('rwm jpau jIA AYsy AYsy ] DR¨ pRihlwd jipE hir jYsy ]1]');

    // General pair-bindi
    expect(unicode('ਜਿਗਾ ਛਤ੍ਰ ਜੜਾਵ ਕ਼ਲਗ਼ੀ ਚੌਰ ਮੁਕਤਾ ਲਾਲਰੀ', true))
      .toBe('ijgw CqR jVwv kælZI cOr mukqw lwlrI');

    expect(unicode('ਕ੍ਰਿਪਾਸ ਕ਼ਾਕ਼ਮ ਅਤਲਸੀ ਬਹੁ ਮੋਲ ਚੀਰਨ ਚੁਸਤ ਨੌ ॥', true))
      .toBe('ikRpws kæwkæm AqlsI bhu mol cIrn cusq nO ]');

    expect(unicode('ਰਮਲ ਜੋਤਿਸ਼ ਪ੍ਰਿਥਮ ਸੋਧ੍ਯੋ ਸੁਰ ਹਾਰਹੈਂ ਜੀਤੈਂ ਅਸੁਰ ॥', true))
      .toBe('rml joiqsæ ipRQm soDÎo sur hwrhYN jIqYN Asur ]');

    // convert ਸ਼ + ਼ separately since they are two code points
    expect(unicode('ਰਮਲ ਜੋਤਿਸ਼ ਪ੍ਰਿਥਮ ਸੋਧ੍ਯੋ ਸੁਰ ਹਾਰਹੈਂ ਜੀਤੈਂ ਅਸੁਰ ॥', true, false))
      .toBe('rml joiqsæ ipRQm soDÎo sur hwrhYN jIqYN Asur ]');

    // Adhik
    expect(unicode('ਸੁੱਧ ਸਿਪਾਹ ਦੁਰੰਤ ਦੁਬਾਹ ਸੁ ਸਾਜ ਸਨਾਹ ਦੁਰਜਾਨ ਦਲੈਂਗੇ ॥', true))
      .toBe('su`D ispwh durMq dubwh su swj snwh durjwn dlYNgy ]');

    // ਪੈਰ ਅੰਕ ਸਿਰਲੇਖ ਵਿਚ ੧
    expect(unicode('ਰਾਗੁ ਗਉੜੀ ਪੂਰਬੀ ਮਹਲਾ ੫', true))
      .toBe('rwgu gauVI pUrbI₁ mhlw 5');

    // ਪੈਰ ਅੰਕ ਸਿਰਲੇਖ ਵਿਚ ੧੫
    expect(unicode('ਗਉੜੀ ਕਬੀਰ ਜੀ ਤਿਪਦੇ ॥', true))
      .toBe('gauVI kbIr jI iqpdy₁₅ ]');

    // ik oangkaar using various char combinations
    expect(unicode('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥', true))
      .toBe('<> siqgur pRswid ]');

    // MU
    expect(unicode('ਹੂੰ', true))
      .toBe('hUM');

    // @w
    expect(unicode('ਓਲੑਾ', true))
      .toBe('El@w');

    // @y
    expect(unicode('ਉਲਾਮੑੇ', true))
      .toBe('aulwm@y');

    // uo
    expect(unicode('ਸੋੁਹਾਗਣਿ', true))
      .toBe('suohwgix');

    // ey
    expect(unicode('ਚਲਾਏ', true))
      .toBe('clwey');

    // AO
    expect(unicode('ਔਰ', true))
      .toBe('AOr');

    // eI
    expect(unicode('ਹੋਵਈ', true))
      .toBe('hoveI');

    // e[^Iy]
    expect(unicode('ਨੇ ਆੲਨਿ ਗੁਲਿ ਗੁਲਸ਼ਨਿ ਫ਼ੱਰੋ ਜ਼ੇਬ', true))
      .toBe('ny Awein guil gulSin &¤ro zyb');

    // AW
    expect(unicode('ਲਾਈਆਂ', true))
      .toBe('lweIAW');

    expect(unicode('ਵਡਾ ਸਾਹਿਬੁ ਊਚਾ ਥਾਉ ॥', true))
      .toBe('vfw swihbu aUcw Qwau ]');

    expect(unicode('ਪ੍ਰਭ ਕਉ ਸਦ ਬਲਿ ਜਾਈ ਜੀੳ ॥੨॥', true))
      .toBe('pRB kau sd bil jweI jIa ]2]');

    expect(unicode('ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਸਚੁ ਨਾਉ ਵਡਿਆਈ ਵੀਚਾਰੁ ॥', true))
      .toBe('AMimRq vylw scu nwau vifAweI vIcwru ]');

    expect(unicode('ਸੰਧਿਆ ਪ੍ਰਾਤ ਇਸ੍ਨਾਨੁ ਕਰਾਹੀ ॥', true))
      .toBe('sMiDAw pRwq ies˜wnu krwhI ]');

    expect(unicode('ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥', true))
      .toBe('<> siqgur pRswid ]');

    expect(unicode('ਭਾਠੀ ਗਗਨੁ ਸਿੰਙਿਆ ਅਰੁ ਚੁੰਙਿਆ ਕਨਕ ਕਲਸ ਇਕੁ ਪਾਇਆ ॥', true))
      .toBe('BwTI ggnu isMi|Aw Aru cuMi|Aw knk kls ieku pwieAw ]');

    expect(unicode('ਤਿਨ ਕੇ ਨਾਮ ਅਨੇਕ ਅਨੰਤ ॥', true))
      .toBe('iqn ky nwm Anyk AnMq ]');

    expect(unicode('੬ : ਸੰਗਤ ਦਾ ਅਸਰ-ਨਾਨੱਤ੍ਵ', true))
      .toBe('6 : sMgq dw Asr-nwn`qÍ');

    expect(unicode('ਫਿਰਿ ਪੁਛਣਿ ਸਿਧ ਨਾਨਕਾ! ਮਾਤ ਲੋਕ ਵਿਚਿ ਕਿਆ ਵਰਤਾਰਾ?', true))
      .toBe('iPir puCix isD nwnkw! mwq lok ivic ikAw vrqwrw?');

    expect(unicode('੫ : ਜਪੁਜੀ ਅੰਤਲੇ ਸਲੋਕ ‘ਪਵਣ ਗੁਰੂ’ ਦਾ ਅਰਥ', true))
      .toBe('5 : jpujI AMqly slok ‘pvx gurU’ dw ArQ');

    expect(unicode('ਹਰ ਦੋ ਆਲਮ ਕੀਮਤਿ ਯੱਕ ਤਾਰਿ ਮੂਇ ਯਾਰਿ ਮਾ ॥ ੨ ॥ ੧ ॥', true))
      .toBe('hr do Awlm kImiq X`k qwir mUie Xwir mw ] 2 ] 1 ]');

    expect(unicode('ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹ ॥', true))
      .toBe('vwihgurU jI kI &qh ]');

    expect(unicode('ਕ੍ਰਿਸ੍ਨਾ ਤੇ ਜਾਨਊ ਹਰਿ ਹਰਿ ਨਾਚੰਤੀ ਨਾਚਨਾ ॥੧॥', true))
      .toBe('ikRs˜w qy jwnaU hir hir nwcMqI nwcnw ]1]');

    expect(unicode('ਬਿਖੁ ਕਾ ਕੀੜਾ ਬਿਖੁ ਸਿਉ ਲਾਗਾ ਬਿਸ੍ਟਾ ਮਾਹਿ ਸਮਾਈ ॥', true))
      .toBe('ibKu kw kIVw ibKu isau lwgw ibs†w mwih smweI ]');

    expect(unicode('ਅਸ੍ਚਰਜ ਰੂਪੰ ਰਹੰਤ ਜਨਮੰ ॥', true))
      .toBe('Asçrj rUpM rhMq jnmM ]');

    expect(unicode('ਦੁਖੁ ਪਰਹਰਿ ਸੁਖੁ ਘਰਿ ਲੈ ਜਾਇ ॥', true))
      .toBe('duKu prhir suKu Gir lY jwie ]');

    expect(unicode('ਕਾਰ੍ਹਾ ਤੁਝੈ ਨ ਬਿਆਪਈ ਨਾਨਕ ਮਿਟੈ ਉਪਾਧਿ ॥੧॥', true))
      .toBe('kwrHw quJY n ibAwpeI nwnk imtY aupwiD ]1]');

    expect(unicode('ਸਭ ਲਾਲਚ ਤਿਆਗ ਦਏ ਗ੍ਰਿਹ ਕੇ ਇਕ ਸ੍ਯਾਮ ਕੇ ਪ੍ਯਾਰ ਕੀ ਹੈ ਸੁ ਭੁਖੀ ॥੬੩੬॥', true))
      .toBe('sB lwlc iqAwg dey igRh ky iek sÎwm ky pÎwr kI hY su BuKI ]636]');

    expect(unicode('ਅਨਡੰਡ ਬਾਢ੍ਯ ॥੭॥੯੩॥', true))
      .toBe('AnfMf bwFÎ ]7]93]');

    expect(unicode('ਹੰ ਭੀ ਵੰਞਾ ਡੁਮਣੀ ਰੋਵਾ ਝੀਣੀ ਬਾਣਿ ॥੨॥', true))
      .toBe('hM BI vM\\w fumxI rovw JIxI bwix ]2]');

    expect(unicode('ਮਹਾਂ ਦੁੱਖ ਪਾਵੈ ਤਿਸ ਕੋ ਕਾਲ਼(੩੫)', true))
      .toBe('mhW du`K pwvY iqs ko kwL(35)');

    expect(unicode('ਕਿਧੌ ਸੰਖਨੀ ਚਿਤ੍ਰਨੀ ਪਦਮਨੀ ਹੈ ॥੨੩॥੧੯੧॥', true))
      .toBe('ikDO sMKnI icqRnI pdmnI hY ]23]191]');

    expect(unicode('ਕਵਨੁ ਜੋਗੁ ਕਉਨੁ ਗੵਾਨੁ ਧੵਾਨੁ ਕਵਨ ਬਿਧਿ ਉਸ੍ਤਤਿ ਕਰੀਐ ॥', true))
      .toBe('kvnu jogu kaunu g´wnu D´wnu kvn ibiD ausœiq krIAY ]');

    /* expect(unicode('ਲੈ ਅਕ੍ਰੂਰ ਕਉ ਆਪਨੇ ਸੰਗ ਕਹਿਯੋ ਅਰੇ ਕਾਨ੍ਰਹ ਕਹੰŧ ਕਉ ਪਧਾਰਿਯੋ ॥', true))
      .toBe('lY AkR¨r kau Awpny sMg kihXo Ary kwnRh khMŧ kau pDwirXo ]'); */

    expect(unicode('ਸਲੋਕ ਮਃ ੩ ॥', true))
      .toBe('slok mÚ 3 ]');

    expect(unicode('ਹਰਿ ਆਪੇ ਕਾਨੑੁ ਉਪਾਇਦਾ ਮੇਰੇ ਗੋਵਿਦਾ ਹਰਿ ਆਪੇ ਗੋਪੀ ਖੋਜੀ ਜੀਉ ॥', true))
      .toBe('hir Awpy kwn@ü aupwiedw myry goivdw hir Awpy gopI KojI jIau ]');

    expect(unicode('ਯਕੇ ਦਾਨਹ ਮੁੰਗੋ ਦਿਗ਼ਰ ਨੁਖ਼ਦ ਨੀਮ ॥੪੫॥', true))
      .toBe('Xky dwnh muMgo idZr nu^d nIm ]45]');

    // pairin ank
    expect(unicode('           ', true))
      .toBe('₁ ₂ ₃ ₄ ₅ ₆ ₈ ₁ ₂ ₃ ₄ ₆');

    expect(unicode('', true))
      .toBe('₁₅');

    expect(unicode('ਰਾਗੁ ਗਉੜੀ ਪੂਰਬੀ ਮਹਲਾ ੫', true))
      .toBe('rwgu gauVI₁ pUrbI mhlw 5');

    expect(unicode('ਰਾਗੁ ਗਉੜੀ ਛੰਤ ਮਹਲਾ ੫', true))
      .toBe('rwgu g₁auVI CMq mhlw 5');
  });

  it('Should return an empty string when no argument', () => {
    expect(unicode('', true))
      .toBe('');
  });

  it('Should return null when passed as an argument', () => {
    expect(unicode(null, true))
      .toBeNull();
  });
});
