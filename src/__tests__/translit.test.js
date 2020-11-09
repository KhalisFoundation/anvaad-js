const translit = require('../translit');
const wordMap = require('../readCsvWordMap');

// TO-DO update test below to be nitprat (need work on sihari and pehar rara handling)
describe('translit', () => {
  it('Should return transliteration of Gurmukhi', () => {
    expect(JSON.stringify(translit('CMqu ] ijau jwnhu iqau rwKu hir pRB qyirAw ] kyqy gnau AsMK Avgx myirAw ] AsMK Avgx Kqy Pyry inqpRiq sd BUlIAY ] moh mgn ibkrwl mwieAw qau pRswdI GUlIAY ] lUk krq ibkwr ibKVy pRB nyr hU qy nyirAw ] ibnvMiq nwnk dieAw Dwrhu kwiF Bvjl PyirAw ]1]', 'all')))
      .toBe(JSON.stringify({
        english: 'chha(n)t || jiau jaanahu tiau raakh har prabh teriaa || kete ganau asa(n)kh avagan meriaa || asa(n)kh avagan khate fere nitaprat sadh bhooleeaai || moh magan bikaraal maiaa tau prasaadhee ghooleeaai || look karat bikaar bikhaRe prabh ner hoo te neriaa || binava(n)t naanak dhiaa dhaarahu kaadd bhavajal feriaa ||1||',
        devnagri: 'छंतु ॥ जिउ जानहु तिउ राखु हरि प्रभ तेरिआ ॥ केते गनउ असंख अवगण मेरिआ ॥ असंख अवगण खते फेरे नितप्रति सद भूलीऐ ॥ मोह मगन बिकराल माइआ तउ प्रसादी घूलीऐ ॥ लूक करत बिकार बिखड़े प्रभ नेर हू ते नेरिआ ॥ बिनवंति नानक दइआ धारहु काढि भवजल फेरिआ ॥१॥',
        ipa: 'ɕəŋt̪. d͡ʒɪo d͡ʒɑnəh t̪ɪo rɑkʰ hər pɹəɓ t̪erɪəɑ. ket̪e Gəno əsəŋkʰ əʋəGəɳ merɪəɑ. əsəŋkʰ əʋəGəɳ kʰət̪e fere nɪt̪əpɹət̪ səd̪ ɓuliæ. mɔh məGən bɪkərɑl mɑɪɑ t̪o pɹəsɑd̪i Gʰuliæ. luk kərət̪ bɪkɑr bɪkʰəɽe pɹəɓ ner hu t̪e nerɪəɑ. bɪnəʋəŋt̪ nɑnək d̪ɪɑ t̪ɑrəh kɑʈə̀ ɓəʋəd͡ʒəl ferɪəɑ.1.',
        shahmukhi: 'چھںت ۔۔ جا جانهُ تا راکھ هر پربھ تےرآ ۔۔ کےتے گناُ اسںکھ اوگݨ مےرآ ۔۔ اسںکھ اوگݨ کھتے پھےرے نتپرت سد بھُولیِاَے ۔۔ موه مگن بکرال ماایا تاُ پرسادیِ گھُولیِاَے ۔۔ لُوک کرت بکار بکھڑے پربھ نےر هُو تے نےرآ ۔۔ بنوںت نانک دایا دھارهُ کاڈھ بھوجل پھےرآ ۔۔۱۔۔',
      }));
  });
  it('Test for english transliteration of Gurmukhi (including several edge cases)', () => {
    expect(JSON.stringify(translit('lwl rMgu iqs kau lgw ijs ky vfBwgw ] mYlw kdy n hoveI nh lwgY dwgw ]1]')))
      .toBe('"laal ra(n)g tis kau lagaa jis ke vaddabhaagaa || mailaa kadhe na hoviee neh laagai dhaagaa ||1||"');

    expect(JSON.stringify(translit('AMqir iprI ipAwru ikau ipr ibnu jIvIAY rwm ]')))
      .toBe('"a(n)tar piree piaar kiau pir bin jeeveeaai raam ||"');

    expect(JSON.stringify(translit('jb lgu drsu n hoie ikau AMimRqu pIvIAY rwm ]')))
      .toBe('"jab lag dharas na hoi kiau a(n)mrit peeveeaai raam ||"');

    expect(JSON.stringify(translit('hir hir nwmu iDAweIAY ijs nau ikrpw kry rjwie ]3]')))
      .toBe('"har har naam dhiaaieeaai jis nau kirapaa kare rajai ||3||"');

    expect(JSON.stringify(translit('AKI sUqku vyKxw pr iqRA pr Dn rUpu ]')))
      .toBe('"akhee sootak vekhanaa par tria par dhan roop ||"');

    expect(JSON.stringify(translit('sUdR')))
      .toBe('"soodhr"');

    expect(JSON.stringify(translit('cauboly')))
      .toBe('"chaubole"');

    expect(JSON.stringify(translit('Sbd hzwry')))
      .toBe('"shabadh hazaare"');

    expect(JSON.stringify(translit('DnwsrI mhlw 5 Gru 12')))
      .toBe('"dhanaasaree mahalaa panjavaa ghar baarvaa"');

    // transliterate using both english module and english_map_example map
    expect(JSON.stringify(translit('lwl rMgu iqs kau lgw ijs ky vfBwgw ]', 'english', wordMap('__tests__/english_map_example.csv'))))
      .toBe('"LAAL RANG TIS KO LAGAA jis ke vaddabhaagaa ||"');
  });
  it('Should return only the ipa transliteration of Gurmukhi', () => {
    expect(JSON.stringify(translit('lwl rMgu iqs kau lgw ijs ky vfBwgw ] mYlw kdy n hoveI nh lwgY dwgw ]1]', 'ipa')))
      .toBe('"lɑl rəŋG t̪ɪs ko ləGɑ d͡ʒɪs ke ʋəɖəɓɑGɑ. mælɑ kəd̪e nə hɔʋei nəh lɑGæ d̪ɑGɑ.1."');
  });
  it('Should return only the devnagri transliteration of Gurmukhi', () => {
    expect(JSON.stringify(translit('lwl rMgu iqs kau lgw ijs ky vfBwgw ] mYlw kdy n hoveI nh lwgY dwgw ]1]', 'devnagri')))
      .toBe('"लाल रंगु तिस कउ लगा जिस के वडभागा ॥ मैला कदे न होवई नह लागै दागा ॥१॥"');
  });
});
