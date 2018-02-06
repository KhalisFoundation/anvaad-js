var translit   = require('./translit.js');
var str_pad = require('locutus/php/strings/str_pad');

var debug=0;

var mysql      = require('mysql');
var pool = mysql.createPool({//mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : '',
  dateStrings: true,
  multipleStatements: true
//  ,debug: true
});

var args = [];
process.argv.forEach(function (val, index, array) {
  args.push(val);
});
 
var verseVals = [];
var banisVals = [];
var baniCustomVals = [];
var baniBookmarksVals = [];
var lastChecked;

pool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query('SELECT lastCheck from converter_last limit 1', function(err, rows, fields) {
        if (err) throw err;
        connection.release();

        lastChecked = rows[0].lastCheck;
	debug && console.log('Last Checked: ' + lastChecked);
        Banis();
});});

function updateLastCheck() {
    pool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.query('UPDATE converter_last SET lastCheck=NOW()', function(err, rows, fields) {
                if (err) throw err;
                connection.release();
        });
    });
}

function Verse() {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
	updateLastCheck();
    connection.query('SELECT ID, Gurmukhi, Punjabi FROM Verse WHERE Updated > "' + lastChecked + '" ORDER BY ID;', function(err, rows, fields) {
        if (err) throw err;
        connection.release();
        [].forEach.call(rows, function(row) {
            var eng = translit(row.Gurmukhi);
            verseVals.push([
                eng,
                firstLetters(eng,1),
                convert(row.Gurmukhi),
                convert(row.Punjabi).replace(/"/g, '\\\"'),
                ascii(firstLetters(row.Gurmukhi,0)),
                mainLetters(row.Gurmukhi),
                row.ID
                ]);
        })
        writeVerseChanges();
    });});
}

function writeVerseChanges() {
    var i,valSlice;//,chunk = 20;
    var valSize=verseVals.length;
    pool.getConnection(function(err, connection) {
                if(err) throw err;

        for (i=0; i<valSize; i++) {
            var query = 'UPDATE Verse SET ' + 
            'Transliteration=?, FirstLetterEng=?, GurmukhiUni=?, PunjabiUni=?, FirstLetterStr=?, ' +
            'MainLetters=?, Updated="' + lastChecked + '" WHERE ID=?'

	    debug && console.log(query);
            debug && console.log(verseVals[i]);        
            connection.query(query,verseVals[i],function(err, res, f) {
                    if (err) {
                debug && console.log(query);
                throw err;
                }
            });
        }
        connection.release();
    });

}

function Banis() {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query('SELECT ID, Gurmukhi FROM Banis WHERE Updated > "' + lastChecked + '" ORDER BY ID', function(err, rows, fields) {
            if (err) throw err;
            connection.release();
            [].forEach.call(rows, function(row) {
                var eng = translit(row.Gurmukhi);
                banisVals.push([
                    eng,
                    convert(row.Gurmukhi),
                    row.ID
                    ]);
            })
            writeBanisChanges();
        });
    });
}

function writeBanisChanges() {
    var i,valSlice;//,chunk = 20;
    var valSize=banisVals.length;
    pool.getConnection(function(err, connection) {
        if(err) throw err;

        for (i=0; i<valSize; i++) {
            var query = 'UPDATE Banis SET ' + 
            'Transliteration=?, GurmukhiUni=?, Updated="' + lastChecked + '" WHERE ID=?'

            //console.log(banisVals[i]);        
            connection.query(query,banisVals[i],function(err, res, f) {
                    if (err) {
                //console.log(query);
                throw err;
                }
            });
        }
        connection.release();
        Bookmarks();
    });

}

function Bookmarks() {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query('SELECT ID, Gurmukhi FROM Banis_Bookmarks WHERE Updated > "' + lastChecked + '" ORDER BY ID', function(err, rows, fields) {
            if (err) throw err;
            connection.release();
            [].forEach.call(rows, function(row) {
                var eng = translit(row.Gurmukhi);
                baniBookmarksVals.push([
                    eng,
                    convert(row.Gurmukhi),
                    row.ID
                    ]);
            })
            writeBookmarksChanges();
        });
    });
}

function writeBookmarksChanges() {
    var i,valSlice;//,chunk = 20;
    var valSize=baniBookmarksVals.length;
    pool.getConnection(function(err, connection) {
                if(err) throw err;

        for (i=0; i<valSize; i++) {
            var query = 'UPDATE Banis_Bookmarks SET ' + 
            'Transliteration=?, GurmukhiUni=?, Updated="' + lastChecked + '" WHERE ID=?'

            // console.log(vals[i]);        
            connection.query(query,baniBookmarksVals[i],function(err, res, f) {
                    if (err) {
                //console.log(query);
                throw err;
                }
            });
        }
        connection.release();
        BanisCustom();
    });

}

function BanisCustom() {
    pool.getConnection(function(err, connection) {
        if(err) throw err;
    connection.query('SELECT ID, Gurmukhi, Punjabi FROM Banis_Custom WHERE Updated > "' + lastChecked + '" ORDER BY ID', function(err, rows, fields) {
        if (err) throw err;
        connection.release();
        [].forEach.call(rows, function(row) {
            var eng = translit(row.Gurmukhi);
            baniCustomVals.push([
                eng,
                convert(row.Gurmukhi),
                convert(row.Punjabi).replace(/"/g, '\\\"'),
                row.ID
                ]);
        })
            writeBanisCustomChanges();
    });});
}

function writeBanisCustomChanges() {
    var i,valSlice;//,chunk = 20;
    var valSize=baniCustomVals.length;
    pool.getConnection(function(err, connection) {
                if(err) throw err;

        for (i=0; i<valSize; i++) {
            var query = 'UPDATE Banis_Custom SET ' + 
            'Transliteration=?, GurmukhiUni=?, PunjabiUni=?, Updated="' + lastChecked + '" WHERE ID=?'

            // console.log(vals[i]);        
            connection.query(query,baniCustomVals[i],function(err, res, f) {
                    if (err) {
                //console.log(query);
                throw err;
                }
            });
        }
        connection.release();
        Verse();
    });

}

function mainLetters(words)
{
    return words.replace(/[^A-Za-z ]/g,'').replace(/[uUiIyYwWoOMNØRH@~®`]/g,'').trim();
}

function ascii (a) {
    return ','+a.split('').map(function (c) {return str_pad(c.charCodeAt(0),3,0,'STR_PAD_LEFT')}).join(',')+','; 
}

function firstLetters(words, eng)
{
    if (!words) { return ''; }

    words = words.replace(/\]/g,'').replace(/rhwa/g,'').replace(/[0-9]/g, '');

    var first_letter = function(x){ 
    if (x) { 
        if (x[0] == 'i' && !eng) return x[1];
        else {
            if (x[0] == '|') return '';
            else return x[0];
        }
    } else { return ''; }
    };

    return words.split(' ').map(first_letter).join('');
}

function convert(panFontTxt)
{
    if (!panFontTxt) return "";
    var lineNumToConvert = 1;
    var conversionType = 1;
    
    var panFontTxt_NewLineSplitarray = panFontTxt.replace("Ø","").replace(">","").split("\n");
    var convertedText = "";
    
    var nextLineToConvert = 1;
    
    for (var i = 0;i<panFontTxt_NewLineSplitarray.length;i++)
    {
        if(nextLineToConvert == (i + 1))
        {
            var panFontTxt_charArray = removeUnwantedChars(panFontTxt_NewLineSplitarray[i]).split("");
            
            for(var j = 0; j < panFontTxt_charArray.length; j++)
            {
                var currentChar = panFontTxt_charArray[j];
                var nextChar = panFontTxt_charArray[j+1];
                var nextNextChar = panFontTxt_charArray[j+2];

                if(conversionType == 2)
                {
                    if(currentChar == ' ')
                    {
                        continue;
                    }
                }
                
                if(currentChar == 'i')
                {
                    if(nextChar != null)
                    {
                        if(nextChar == 'e')
                        {
                            convertedText += 'ਇ';
                        }
                        else if(nextNextChar == 'R' || nextNextChar == 'H' ||
                                nextNextChar == 'Í' || nextNextChar == 'ç' ||
                                nextNextChar == '†' || nextNextChar == 'œ' ||
                                nextNextChar == '~' || nextNextChar == '®')
                        {
                                convertedText += convertText(nextChar);
                                convertedText += convertText(nextNextChar);
                                convertedText += 'ਿ';
                                j = j + 1;
                        }
                        else
                        {
                            convertedText += convertText(nextChar);
                            convertedText += 'ਿ';
                        }
                        j = j + 1;
                    }
                    else
                    {
                        convertedText += convertText(currentChar);
                    }
                }
                else if(currentChar == 'a')
                {
                    switch (nextChar)
                    {
                        case 'u':
                          convertedText += 'ਉ';
                          j = j + 1;
                          break;
                        case 'U':
                          convertedText += 'ਊ';
                          j = j + 1;
                          break;
                        default:
                          convertedText += convertText(currentChar);
                    }
                }
                else if(currentChar == 'A')
                {
                    switch (nextChar)
                    {
                        case 'w':
                          convertedText += 'ਆ';
                          j = j + 1;
                          break;
                        case 'W':
                          convertedText += 'ਆਂ';
                          j = j + 1;
                          break;
                        case 'Y':
                          convertedText += 'ਐ';
                          j = j + 1;
                          break;
                        case 'O':
                          convertedText += 'ਔ';
                          j = j + 1;
                          break;
                        default:
                          convertedText += convertText(currentChar);
                    }
                }
                else if(currentChar == 'e')
                {
                    switch (nextChar)
                    {
                        case 'I':
                          convertedText += 'ਈ';
                          j = j + 1;
                          break;
                        case 'y':
                          convertedText += 'ਏ';
                          j = j + 1;
                          break;
                        default:
                          convertedText += convertText(currentChar);
                    }
                }
                else if(currentChar == 'u' && nextChar == 'o')
                {
                    convertedText += 'ੋੁ';
                    j = j + 1;
                }
                else if((currentChar == '@' && nextChar == 'Y') || (currentChar == '@' && nextChar == 'y') || (currentChar == '@' && nextChar == 'o') || (currentChar == '@' && nextChar == 'O'))
                {
                    convertedText += convertText(nextChar);
                    convertedText += '੍';
                    j = j + 1;
                }
                else if(currentChar == '@' && nextChar == 'w')
                {
                    convertedText += '੍ਹ';
                    convertedText += convertText(nextChar);
                    j = j + 1;
                }
                else if((currentChar == 'N' && nextChar == 'I') || (currentChar == 'M' && (nextChar == 'U' || nextChar == 'u' || nextChar=='ü')) || (currentChar == 'ˆ' && nextChar == 'I') || (currentChar == 'N' && nextChar == 'y') )
                {
                    convertedText += convertText(nextChar);
                    convertedText += convertText(currentChar);
                    j = j + 1;
                }
                else
                {
                    convertedText += convertText(currentChar);
                }
            }   
            
            if(i != panFontTxt_NewLineSplitarray.length - 1)
            {
                nextLineToConvert = nextLineToConvert + lineNumToConvert;
            }
        }
        else
        {
            convertedText += panFontTxt_NewLineSplitarray[i];
        }
        
        if(i != panFontTxt_NewLineSplitarray.length - 1)
        {
            convertedText += "\n";
        }
    }
    
    return convertedText;
}

function convertText(charToConvert){ 
     switch (charToConvert)
    {
        case 'a':
                return 'ੳ';
                break;
        case 'A':
              return 'ਅ';
              break;
        case 's':
              return 'ਸ';
              break;
        case 'S':
              return 'ਸ਼';
              break;
        case 'd':
              return 'ਦ';
              break;
        case 'D':
              return 'ਧ';
              break;
        case 'f':
              return 'ਡ';
              break;
        case 'F':
              return 'ਢ';
              break;
        case 'g':
              return 'ਗ';
              break;
        case 'G':
              return 'ਘ';
              break;
        case 'h':
              return 'ਹ';
              break;
        case 'H':
              return '੍ਹ';
              break;
        case 'j':
              return 'ਜ';
              break;
        case 'J':
              return 'ਝ';
              break;
        case 'k':
              return 'ਕ';
              break;
        case 'K':
              return 'ਖ';
              break;
        case 'l':
              return 'ਲ';
              break;
        case 'L':
              return 'ਲ਼';
              break;
        case 'q':
              return 'ਤ';
              break;
        case 'Q':
              return 'ਥ';
              break;
        case 'w':
              return 'ਾ';
              break;
        case 'W':
              return 'ਾਂ';
              break;
        case 'e':
              return 'ੲ';
              break;
        case 'E':
              return 'ਓ';
              break;
        case 'r':
              return 'ਰ';
              break;
        case 'R':
        case '®':
              return '੍ਰ';
              break;
        case 't':
              return 'ਟ';
              break;
        case 'T':
              return 'ਠ';
              break;
        case 'y':
              return 'ੇ';
              break;
        case 'Y':
              return 'ੈ';
              break;
        case 'u':
        case 'ü':
              return 'ੁ';
              break;
        case 'U':
              return 'ੂ';
              break;
        case 'i':
              return 'ਿ';
              break;
        case 'I':
              return 'ੀ';
              break;
        case 'o':
              return 'ੋ';
              break;
        case 'O':
              return 'ੌ';
              break;
        case 'p':
              return 'ਪ';
              break;
        case 'P':
              return 'ਫ';
              break;
        case 'z':
              return 'ਜ਼';
              break;
        case 'z':
              return 'ਗ਼';
              break;
        case 'Z':
              return 'ਗ਼';
              break;
        case 'x':
              return 'ਣ';
              break;
        case 'X':
              return 'ਯ';
              break;
        case 'c':
              return 'ਚ';
              break;
        case 'C':
              return 'ਛ';
              break;
        case 'v':
              return 'ਵ';
              break;
        case 'V':
              return 'ੜ';
              break;
        case 'b':
              return 'ਬ';
              break;
        case 'B':
              return 'ਭ';
              break;
        case 'n':
              return 'ਨ';
              break;
        case 'ƒ':
              return 'ਨੂੰ';
              break;
        case 'N':
        case 'ˆ':
              return 'ਂ';
              break;
        case 'm':
              return 'ਮ';
              break;
        case 'M':
        case 'µ':
              return 'ੰ';
              break;
        case '`':
        case '~':
              return 'ੱ';
              break;
        case 'Í':
              return '੍ਵ'
              break;
        case 'ç':
              return '੍ਚ'
              break;
        case '†':
              return '੍ਟ'
              break;
        case 'œ':
              return '੍ਤ'
              break;
        case '˜':
              return '੍ਨ'
              break;
        case '´':
              return '੍ਯ'
              break;
        case '1':
              return '੧';
              break;
        case '2':
              return '੨';
              break;
        case '3':
              return '੩';
              break;
        case '4':
              return '੪';
              break;
        case '5':
              return '੫';
              break;
        case '6':
              return '੬';
              break;
        case '^':
              return 'ਖ਼';
              break;
        case '7':
              return '੭';
              break;
        case '&':
              return 'ਫ਼';
              break;
        case '8':
              return '੮';
              break;
        case '9':
              return '੯';
              break;
        case '0':
              return '੦';
              break;
        case '\\':
              return 'ਞ';
              break;
        case '|':
              return 'ਙ';
              break;
        case '[':
                    return '।';
                    break;
        case ']':
              return '॥';
              break;
        case '<':
              return 'ੴ';
              break;
        case 'Ú':
              return 'ਃ';
              break;
        case '@':
              return '੍ਹ';
              break;
        case '‚':
              return '❁';
              break;
        default:
          return charToConvert;
    }
} 

function removeUnwantedChars(str){ 
    str = str.replace(/>/gi, "");
    str = str.replace(/Ø/gi, "");
    return str;
}

