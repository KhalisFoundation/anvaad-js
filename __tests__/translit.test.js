const translit = require('../translit');

describe('translit', () => {
  it('Should return transliteration of Gurmukhi', () => {
    expect(translit('CMqu ] ijau jwnhu iqau rwKu hir pRB qyirAw ] kyqy gnau AsMK Avgx myirAw ] AsMK Avgx Kqy Pyry inqpRiq sd BUlIAY ] moh mgn ibkrwl mwieAw qau pRswdI GUlIAY ] lUk krq ibkwr ibKVy pRB nyr hU qy nyirAw ] ibnvMiq nwnk dieAw Dwrhu kwiF Bvjl PyirAw ]1]'))
      .toBe('chha(n)t || jia jaanah tia raakh har prabh tayriaa || kaytay gana asa(n)kh avagann mayriaa || asa(n)kh avagann khatay fayray nitaprat sadh bhooleeaai || moh magan bikaraal maaiaa ta prasaadhee ghooleeaai || look karat bikaar bikhaRay prabh nayr hoo tay nayriaa || binava(n)t naanak dhiaa dhaarah kaadd bhavajal fayriaa ||1||');
  });
});
