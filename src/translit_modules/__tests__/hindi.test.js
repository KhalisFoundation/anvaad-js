/* globals describe, it, expect */

/* Use https://www.lexilogos.com/keyboard/devanagari.htm to add Hindi Unicode */
const lib = require('../hindi');

const tests = [
  ['soriT mhlw 5 ]', 'सोरठि महला ५ ॥'],
  ['gur Apuny bilhwrI ]', 'गुर अपुने बलिहारी ॥'],
  ['ijin pUrn pYj svwrI ]', 'जिनि पूरन पैज सवारी ॥'],
  [
    '<> siq nwmu krqw purKu inrBau inrvYru Akwl mUriq AjUnI sYBM gur pRswid ]',
    'ੴ सति नामु करता पुरखु निरभउु निरवैरु अकाल मूरति अजूनी सैभं गुर प्रसादि ॥',
  ],
  ['socY soic n hoveI jy socI lK vwr ]', 'सोचै सोचि न होवइी जे सोची लख वार ॥'],
  [
    'cupY cup n hoveI jy lwie rhw ilv qwr ]',
    'चुपै चुप न होवइी जे लाइि रहा लिव तार ॥',
  ],
  [
    'BuiKAw BuK n auqrI jy bMnw purIAw Bwr ]',
    'भुखिअा भुख न उुतरी जे ब ंना पुरीअा भार ॥',
  ],
  [
    'shs isAwxpw lK hoih q iek n clY nwil ]',
    'सहस सिअाणपा लख होहि त इिक न चलै नालि ॥',
  ],

  [
    'ikv sicAwrw hoeIAY ikv kUVY qutY pwil ]',
    'किव सचिअारा होइीअै किव कूडै तुटै पालि ॥',
  ],
  [
    'hukim rjweI clxw nwnk iliKAw nwil ]1]',
    'हुकमि रजाइी चलणा नानक लिखिअा नालि ॥१॥',
  ],
  [
    'hukmI hovin Awkwr hukmu n kihAw jweI ]',
    'हुकमी होवनि अाकार हुकमु न कहिअा जाइी ॥',
  ],
  [
    'hukmI hovin jIA hukim imlY vifAweI ]',
    'हुकमी होवनि जीअ हुकमि मिलै वडिअाइी ॥',
  ],
  [
    'hukmI auqmu nIcu hukim iliK duK suK pweIAih ]',
    'हुकमी उुतमु नीचु हुकमि लिखि दुख सुख पाइीअहि ॥',
  ],
  [
    'ieknw hukmI bKsIs ieik hukmI sdw BvweIAih ]',
    'इिकना हुकमी बखसीस इिकि हुकमी सदा भवाइीअहि ॥',
  ],
  [
    'hukmY AMdir sBu ko bwhir hukm n koie ]',
    'हुकमै अ ंदरि सभु को बाहरि हुकम न कोइि ॥',
  ],
  [
    'nwnk hukmY jy buJY q haumY khY n koie ]2]',
    'नानक हुकमै जे बुझै त हउुमै कहै न कोइि ॥२॥',
  ],
  ['gwvY ko gux vifAweIAw cwr ]', 'गावै को गुण वडिअाइीअा चार ॥'],
  ['jugw jugMqir KwhI Kwih ]', 'जुगा जुग ंतरि खाही खाहि ॥'],
  ['hukmI hukmu clwey rwhu ]', 'हुकमी हुकमु चलाइे राहु ॥'],
  [
    'swcw swihbu swcu nwie BwiKAw Bwau Apwru ]',
    'साचा साहिबु साचु नाइि भाखिअा भाउु अपारु ॥',
  ],

  ['BWfw Bwau AMimRqu iqqu Fwil ]', 'भांडा भाउु अ ंम्रितु तितु ढालि ॥'],
  ['GVIAY sbdu scI tkswl ]', 'घडीअै सबदु सची टकसाल ॥'],
  [
    'cMigAweIAw buirAweIAw vwcY Drmu hdUir ]',
    'च ंगिअाइीअा बुरिअाइीअा वाचै धरमु हदूरि ॥',
  ],
];

describe('hindi()', () => {
  tests.forEach(([input, output]) => {
    it(`handles "${input}"`, () => {
      expect(lib(input)).toBe(output);
    });
  });
});
