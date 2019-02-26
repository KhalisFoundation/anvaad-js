/* globals describe, it, expect */

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
    'सहस सिअाणपा लख होहि त इक न चलै नालि ॥',
  ],

  [
    'ikv sicAwrw hoeIAY ikv kUVY qutY pwil ]',
    'किव सचिअारा होईऐ किव कूडै तुटै पालि ॥',
  ],
  [
    'hukim rjweI clxw nwnk iliKAw nwil ]1]',
    'हुकमि रजाई चलणा नानक लिखिअा नालि ॥१॥',
  ],
  [
    'hukmI hovin Awkwr hukmu n kihAw jweI ]',
    'हुकमी होवनि अाकार हुकमु न कहिअा जाई ॥',
  ],
  [
    'hukmI hovin jIA hukim imlY vifAweI ]',
    'हुकमी होवनि जीअ हुकमि मिलै वडिअाई ॥',
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
  ['gwvY ko gux vifAweIAw cwr ]', 'गावै को गुण वडिअाईअा चार ॥'],
  // ['jugw jugMqir KwhI Kwih ]', 'जुगा जुग ंतरि खाही खाहि ॥'],
  ['hukmI hukmu clwey rwhu ]', 'हुकमी हुकमु चलाए राहु ॥'],
  [
    'swcw swihbu swcu nwie BwiKAw Bwau Apwru ]',
    'साचा साहिबु साचु नाइ भाखिअा भाउ अपारु ॥',
  ],

  // ['BWfw Bwau AMimRqu iqqu Fwil ]', 'भांडा भाउु अ ंम्रितु तितु ढालि ॥'],
  ['GVIAY sbdu scI tkswl ]', 'घडीऐ सबदु सची टकसाल ॥'],
  /*
  [
    'cMigAweIAw buirAweIAw vwcY Drmu hdUir ]',
    'च ंगिअाइीअा बुरिअाइीअा वाचै धरमु हदूरि ॥',
  ],
  */
];

describe('devnagri()', () => {
  tests.forEach(([input, output]) => {
    it(`handles "${input}"`, () => {
      expect(lib(input)).toBe(output);
    });
  });
});
