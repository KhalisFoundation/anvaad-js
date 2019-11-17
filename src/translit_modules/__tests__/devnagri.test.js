/* Use https://www.lexilogos.com/keyboard/devanagari.htm to add devnagri Unicode */
const lib = require('../devnagri');

const tests = [
  ['soriT mhlw 5 ]', 'सोरठि महला ५ ॥'],
  ['gur Apuny bilhwrI ]', 'गुर अपुने बलिहारी ॥'],
  ['ijin pUrn pYj svwrI ]', 'जिनि पूरन पैज सवारी ॥'],
  [
    '<> siq nwmu krqw purKu inrBau inrvYru Akwl mUriq AjUnI sYBM gur pRswid ]',
    'ੴ सति नामु करता पुरखु निरभउ निरवैरु अकाल मूरति अजूनी सैभं गुर प्रसादि ॥',
  ],
  ['socY soic n hoveI jy socI lK vwr ]', 'सोचै सोचि न होवई जे सोची लख वार ॥'],
  [
    'cupY cup n hoveI jy lwie rhw ilv qwr ]',
    'चुपै चुप न होवई जे लाइ रहा लिव तार ॥',
  ],
  /*
  [
    'BuiKAw BuK n auqrI jy bMnw purIAw Bwr ]',
    'भुखिअा भुख न उुतरी जे ब ंना पुरीअा भार ॥',
  ],
  */
  [
    'shs isAwxpw lK hoih q iek n clY nwil ]',
    'सहस सिआणपा लख होहि त इक न चलै नालि ॥',
  ],

  [
    'ikv sicAwrw hoeIAY ikv kUVY qutY pwil ]',
    'किव सचिआरा होईऐ किव कूड़ै तुटै पालि ॥',
  ],
  [
    'hukim rjweI clxw nwnk iliKAw nwil ]1]',
    'हुकमि रजाई चलणा नानक लिखिआ नालि ॥१॥',
  ],
  [
    'hukmI hovin Awkwr hukmu n kihAw jweI ]',
    'हुकमी होवनि आकार हुकमु न कहिआ जाई ॥',
  ],
  [
    'hukmI hovin jIA hukim imlY vifAweI ]',
    'हुकमी होवनि जीअ हुकमि मिलै वडिआई ॥',
  ],
  [
    'hukmI auqmu nIcu hukim iliK duK suK pweIAih ]',
    'हुकमी उतमु नीचु हुकमि लिखि दुख सुख पाईअहि ॥',
  ],
  [
    'ieknw hukmI bKsIs ieik hukmI sdw BvweIAih ]',
    'इकना हुकमी बखसीस इकि हुकमी सदा भवाईअहि ॥',
  ],
  /*
  [
    'hukmY AMdir sBu ko bwhir hukm n koie ]',
    'हुकमै अ ंदरि सभु को बाहरि हुकम न कोइि ॥',
  ],
  */
  [
    'nwnk hukmY jy buJY q haumY khY n koie ]2]',
    'नानक हुकमै जे बुझै त हउमै कहै न कोइ ॥२॥',
  ],
  ['gwvY ko gux vifAweIAw cwr ]', 'गावै को गुण वडिआईआ चार ॥'],
  // ['jugw jugMqir KwhI Kwih ]', 'जुगा जुग ंतरि खाही खाहि ॥'],
  ['hukmI hukmu clwey rwhu ]', 'हुकमी हुकमु चलाए राहु ॥'],
  [
    'swcw swihbu swcu nwie BwiKAw Bwau Apwru ]',
    'साचा साहिबु साचु नाइ भाखिआ भाउ अपारु ॥',
  ],

  // ['BWfw Bwau AMimRqu iqqu Fwil ]', 'भांडा भाउु अ ंम्रितु तितु ढालि ॥'],
  ['GVIAY sbdu scI tkswl ]', 'घड़ीऐ सबदु सची टकसाल ॥'],
  /*
  [
    'cMigAweIAw buirAweIAw vwcY Drmu hdUir ]',
    'च ंगिअाइीअा बुरिअाइीअा वाचै धरमु हदूरि ॥',
  ],
  */
  // adhik: ਅੱਲਖ (A`lK), (a-lakh), 'ल' is emphasized using 'ल्ल'
  ['A`lK', 'अल्लख'],

  // udaat: ਨੑਾਵਾ (n@wvw), (nhava), 'न' is emphasized using 'न्न'
  ['n@wvw', 'न्नावा'],

  // tests for various pair-akhars
  ['isR ihR ikR igR iGR iqR iQR idR iDR inR ipR ibR iBR imR ivR iSR', 'सृ हृ कृ गृ घृ तृ थृ दृ धृ नृ पृ बृ भृ मृ वृ शृ'],
  ['l´ K´ g´ q´ d´ D´ p´ j´ r´ b´ s´ m´ f´ n´', 'ल्य ख्य ग्य त्य द्य ध्य प्य ज्य र्य ब्य स्य म्य ड्य न्य'],
  ['kÎ KÎ dÎ nÎ', 'क्य ख्य द्य न्य'],
  ['dÍ hÍ jÍ qÍ sÍ CÍ KÍ pÍ', 'द्व ह्व ज्व त्व स्व छ्व ख्व प्व'],
  ['s˜ sœ gœ s† sç', 'स्न स्त ग्त स्ट स्च'],

  // tests for chand-bindi edge-cases
  ['KKwiKKIKuKUKoKOKMKWiKMKINKuMKUMKyNKYNKoNKON', 'खखाखिखीखुखूखोखौखंखाँखिंखींखुँखूँखेंखैंखोंखौं'],

  ['isr msœk rK´w pwrbRhmM hsœ kwXw rK´w prmysÍrh ]', 'सिर मस्तक रख्या पारब्रहमं हस्त काया रख्या परमेस्वरह ॥'],
];

describe('devnagri()', () => {
  tests.forEach(([input, output]) => {
    it(`handles "${input}"`, () => {
      expect(lib(input)).toBe(output);
    });
  });
});
