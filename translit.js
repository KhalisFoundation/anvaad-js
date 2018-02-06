// extract instructions with grep "//" translit.js | sed 's/^.*\/\///'
// npm install locutus
var html_entity_decode = require('locutus/php/strings/html_entity_decode');
var str_replace = require('locutus/php/strings/str_replace');
var str_split = require('locutus/php/strings/str_split');
var isset = require('locutus/php/var/isset');
var stripos = require('locutus/php/strings/stripos');
var strpos = require('locutus/php/strings/strpos');
var ctype_alpha = require('locutus/php/ctype/ctype_alpha');
var is_numeric = require('locutus/php/var/is_numeric');

var debug=0;

if(debug===1) {
	var g = "CMqu ] ijau jwnhu iqau rwKu hir pRB qyirAw ] kyqy gnau AsMK Avgx myirAw ] AsMK Avgx Kqy Pyry inqpRiq sd BUlIAY ] moh mgn ibkrwl mwieAw qau pRswdI GUlIAY ] lUk krq ibkwr ibKVy pRB nyr hU qy nyirAw ] ibnvMiq nwnk dieAw Dwrhu kwiF Bvjl PyirAw ]1] rwgu sUhI mhlw 5 Gru 5 pVqwl <> siqgur pRswid ] pRIiq pRIiq gurIAw mohn lwlnw ] jip mn goibMd eykY Avru nhI ko lyKY sMq lwgu mnih Cwfu duibDw kI kurIAw ]1] rhwau ] inrgun hrIAw srgun DrIAw Aink koTrIAw iBMn iBMn iBMn iBn krIAw ] ivic mn kotvrIAw ] inj mMdir iprIAw ] qhw Awnd krIAw ] nh mrIAw nh jrIAw ]1] ikrqin jurIAw bhu ibiD iPrIAw pr kau ihrIAw ] ibKnw iGrIAw ] Ab swDU sMig prIAw ] hir duAwrY KrIAw ] drsnu krIAw ] nwnk gur imrIAw ] bhuir n iPrIAw ]2]1]44] ";
	g = g+"ibhwgVw mhlw 4 ] jig suik®qu kIriq nwmu hY myrI ijMduVIey hir kIriq hir min Dwry rwm ] hir hir nwmu pivqu hY myrI ijMduVIey jip hir hir nwmu auDwry rwm ] sB iklivK pwp duK kitAw myrI ijMduVIey mlu gurmuiK nwim auqwry rwm ] vf puMnI hir iDAwieAw jn nwnk hm mUrK mugD insqwry rwm ]1] jo hir nwmu iDAwiedy myrI ijMduVIey iqnw pMcy vsgiq Awey rwm ] AMqir nv iniD nwmu hY myrI ijMduVIey guru siqguru AlKu lKwey rwm ] guir Awsw mnsw pUrIAw myrI ijMduVIey hir imilAw BuK sB jwey rwm ] Duir msqik hir pRiB iliKAw myrI ijMduVIey jn nwnk hir gux gwey rwm ]2] hm pwpI blvMcIAw myrI ijMduVIey prdRohI Tg mwieAw rwm ] vfBwgI guru pwieAw myrI ijMduVIey guir pUrY giq imiq pwieAw rwm ] guir AMimRqu hir muiK coieAw myrI ijMduVIey iPir mrdw bhuiV jIvwieAw rwm ] jn nwnk siqgur jo imly myrI ijMduVIey iqn ky sB duK gvwieAw rwm ]3] Aiq aUqmu hir nwmu hY myrI ijMduVIey ijqu jipAY pwp gvwqy rwm ] piqq pivqR guir hir kIey myrI ijMduVIey chu kuMfI chu juig jwqy rwm ] haumY mYlu sB auqrI myrI ijMduVIey hir AMimRiq hir sir nwqy rwm ] AprwDI pwpI auDry myrI ijMduVIey jn nwnk iKnu hir rwqy rwm ]4]3] ";

	console.log(translit(g));
}

function translit(gurb) {

	//generated from transArray.php
	var step1Keys = ["\u00da","\u02c6","\u00cd","vYY","\u0152","\u2020","ey"];
	var step1Values = [":","N","vY","vY","\u0153","t","e"];
	var step2Keys = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","\/",0,1,2,3,4,5,6,7,8,9,":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","\u00a1","\u00a2","\u00a3","\u00a4","\u00a5","\u00a7","\u00a8","\u00aa","\u00ae","\u00b0","\u00b1","\u00b4","\u00b5","\u00b6","\u00b7","\u00bf","\u00c5","\u00c6","\u00c7","\u00cd","\u00ce","\u00cf","\u00d2","\u00d3","\u00d4","\u00d8","\u00da","\u00e5","\u00e6","\u00e7","\u00fc","\u0152","\u0153","\u0192","\u02c6","\u02dc","\u2013","\u2014","\u2018","\u2019","\u201a","\u201c","\u201d","\u2020","\u2022","\u2026","\u2030"];
	var step2Values = ["!","\"","#","$","%","ph","'","(",")","i","+",",","-",".","-","0","1","2","3","4","5","6","7","8","9",":",";","ik","=","Oankaar","?","(h)","a","bh","chh","dh","o","dd","gh","h","ee","jh","kh","l","(n)","(n)","au","f","thh","r","sh","tt","oo","R","aa(n)","y","ai","g(h)","|","n(j)","||","kh","_","","u","b","ch","dh","e","dd","g","h","i","j","k","l","m","n","o","p","t","r","s","tt","u","v","aa","nn","ay","z","{","n(g)","}","\u2019,\u00a0","ikOankaar\u00a0","\u00a2","\u00a3","","\u00a5","hoo","oo","","r","","\u00b1","ye","n","\u00b6","\u00b7","x","ik","Oankaar","","vY","y","y","||","","","",":","Oankaar","","ch","u","","t","noo(n)","(n)","n","\u2013","\u2014","'","'","","\"","\"","T","\u2022","\u2026",""];
	var step4Keys = ["(N)","ah ","eee","uu","Aih"];
	var step4Values = ["n","eh ","e'ee","au","ahai"];
	var step5Keys = ["aaa","ii","eay","jIA","a'eh","u "];
	var step5Values = ["aa","i","ey","jee","eh"," "];


	//**********************
	//		STEP 1
	//**********************

	//replace step 1 values
	gurb = str_replace(step1Keys, step1Values, gurb);

	// replaces all html to normal text
	gurb = html_entity_decode(gurb, 'ENT_QUOTES', 'UTF-8');
	
	debug && console.log('step 1');
	debug && console.log(gurb);

	//**********************
	//		STEP 3
	//**********************

	// 1. If current letter is "i", move behind next letter
	var regex = /i./gm;
	gurb = gurb.replace(regex,function(full){return full.split("").reverse().join("");});

	debug && console.log('step 3 beginning');
	debug && console.log(gurb);

	//break into single characters
	gurb = str_split(gurb,1);
	
	//begin character by character replacement by looping through each
	var gurbCount = gurb.length;
	for(x=0;x<gurbCount;x++) {

		var thisLetter = gurb[x];
		var nextLetter = isset(gurb[x+1])? gurb[x+1] : '';

		//**********************
		//		STEP 2
		//**********************

		//if its not a space, do the step2 replacement, if it doesnt exist, check if its a number, otherwise delete it
		if(thisLetter != ' ') {
			thisLetter = (step2Keys.indexOf(thisLetter) !== -1)? step2Values[step2Keys.indexOf(thisLetter)] : (is_numeric(thisLetter))? thisLetter : '';
		}

		//**********************
		//	  RESUME STEP 3
		//**********************

		// 2. Add an "a" after this letter if the following is true for the
		debug == 2 && console.log('step 3 before if');
		debug == 2 && console.log({current:thisLetter,next:nextLetter});
		if(
			// 2.1. current letter:
			thisLetter != '' && 											// 2.1.1. Is not empty
			stripos("aeou ooaiee", thisLetter) === false &&				// 2.1.2. does not exist in this string (capital or lowercase): "aeou ooaiee"
			ctype_alpha(thisLetter) && 										// 2.1.3. It is alphanumeric 
				// 2.1.4. It is not "(n)", "(N)", "hoo", "ye", "noo(n)", "ik", "Oankaar", "ay"
				thisLetter != step2Values[step2Keys.indexOf('N')] &&	
				thisLetter != step2Values[step2Keys.indexOf('M')] &&	
				thisLetter != 'hoo' &&
				thisLetter != 'ye' &&
				thisLetter != 'noo(n)' &&
				thisLetter != step2Values[step2Keys.indexOf('<')] &&
				thisLetter != step2Values[step2Keys.indexOf('>')] &&
				thisLetter != 'ay' &&
			// 2.2. next letter:
			isset(nextLetter) && nextLetter != '' &&						// 2.2.1. It is not empty; end of line
			stripos("iaeouyw", nextLetter) === false &&						// 2.2.2. It does not exist in this string (capital or lowercase): "iaeouyw"
			strpos("@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()", nextLetter) === false &&	// 2.2.3. It does not exist in this string (case sensitive): "@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()"
			// 2.3. THIS IS NOT TRUE: 
			!(
				stripos(nextLetter, 'i') !== false && 						// 2.3.0 nextLetter is i
				//2.3.1 letter after the next letter:
				isset(gurb[x+2]) && 										// 2.3.1.1 It exists
				gurb[$x+2] == ' '											// 2.3.1.2 It is " "
			)										
		) {	
			thisLetter = thisLetter + 'a';
		}
		debug == 2 && console.log('step 3 2.1');
		debug == 2 && console.log({current:thisLetter,next:nextLetter});

		// 3. Transliterate “e” as “i” if 
		if (
			thisLetter == 'e' &&											// 3.1. current letter is “e”
			(isset(gurb[x-1]) || gurb[x-1] == ' ' || gurb[x-1] == ']') && 	// at the beginning of the word and is: 
			stripos("i", nextLetter) !== false								// 3.1.1: followed by the string “i” or “I”  
		) {
			thisLetter = 'i';
		}

		debug == 2 && console.log('step 3 3');
		debug == 2 && console.log({current:thisLetter,next:nextLetter});

		// save
		gurb[x] = thisLetter;
	} // end loop
	
	// join it back together
	gurb = gurb.join('');

	// 4. remove i when
	// 4.1 it is at the end of a word
	// 4.2 it is preceeded by any letter in the string "aeiouy"
	var regex = /[^aeiouy]i(\s|$|\|)/gm;
	gurb = gurb.replace(regex,function(full){return full.replace('i','');});

	debug && console.log('step 3');
	debug && console.log(gurb);

	// 5. If a number is preceeded by ‘m:’, ‘mhlw’, ‘mhlu’, ‘Gr’, Transliterate numerals as: 
	// regex values account for current state of translit
	var regex = /((m:|mahalaa|mahalu|ghar|gharu)\s*([0-9]0?))/gm;

	function translitNumbers(full, full2, header, num) {

		var formalNumbers = [' ',
			'pehilaa',
			'doojaa',
			'teejaa',
			'chauthhaa',
			'panjavaa',
			'chhayvaa',
			'satvaa',
			'atthvaa',
			'nauvaa',
			'dasvaa',
			'gayaarvaa',
			'baarvaa',
			'tayrvaa',
			'chaudavaa',
			'pandaravaa',
			'solavaa',
			'sataaravaa'
		];

		return header.replace('m:','mahalaa') + ' ' + formalNumbers[num];
	}

	gurb = gurb.replace(regex, translitNumbers);

	// 4. Transliterate 'ie' to 'i' if both are true: 
	// 4.1 preceeded by a vowel in the string ' aeiou' or one of 'oo,ai,ee' 
	// 4.2 proceeded by (case sensitive) by the string "Aw" 
	var regex = /([aeiou]|oo|ai|ee)(ie)aaa/gm;
	gurb = gurb.replace(regex,function(full,prev,ie){return full.replace('ie','i');});

	// 6. Transliterate 'ih' to "'eh" if 
	// 6.1 next letter is ' ' ; end of the line 
	var regex = /ih\s+|$/gm;
	gurb = gurb.replace(regex,function(full){return full.replace('ih','eh');});

	// 8. Transliterate 'ie' to 'ey' if both are true: 
	// 8.1 preceeding letter is the vowel 'a' 
	// 8.2 the proceeding letters are empty; end of word 
	var regex = /aie\s+|$/gm;
	gurb = gurb.replace(regex,function(full){return full.replace('ie','ey');});

	debug && console.log('step 3 end');
	debug && console.log(gurb);

	//**********************
	//		STEP 4
	//**********************	

	// replace step 4 values
	gurb = str_replace(step4Keys, step4Values, gurb);

	debug && console.log('step 4');
	debug && console.log(gurb);

	//**********************
	//		STEP 5
	//**********************	

	// replace step 5 values

	gurb = str_replace(step5Keys, step5Values, gurb);

	// return transliterated string
	return gurb;

}

module.exports = translit;
