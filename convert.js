const config = require('./config.js');
const translit = require('./translit.js');
const { mysql } = require('sync-sql');

const debug = 0;

const args = [];
process.argv.forEach(val => args.push(val));

function query(sql, params) {
  const result = mysql(config.mysql, sql, params);
  if (result.success) {
    return result.data.rows;
  }

  console.error(`SQL Failure: ${sql}`);
  process.exit(1);
}

// get last checked
const lastChecked = query('SELECT lastCheck from converter_last limit 1')[0].lastCheck;
debug && console.log(`Last Checked: ${lastChecked}`);

// banis
query(`SELECT ID, Gurmukhi FROM Banis WHERE Updated > "${lastChecked}" ORDER BY ID`)
  .forEach((row) => {
    query(
      'UPDATE Banis SET ' +
          'Transliteration=?' +
          ', GurmukhiUni=?' +
          ', Updated=?' +
          ' WHERE ID=?',
      [translit(row.Gurmukhi), convert(row.Gurmukhi), lastChecked, row.ID],
    );
  });

// bookmarks
query(`SELECT ID, Gurmukhi FROM Banis_Bookmarks WHERE Updated > "${lastChecked}" ORDER BY ID`)
  .forEach((row) => {
    query(
      'UPDATE Banis_Bookmarks SET ' +
        'Transliteration=?' +
        ', GurmukhiUni=?' +
        ', Updated=?' +
        '" WHERE ID=?',
      [translit(row.Gurmukhi), convert(row.Gurmukhi), lastChecked, row.ID],
    );
  });


// Banis Custom
query(`SELECT ID, Gurmukhi, Punjabi FROM Banis_Custom WHERE Updated > "${lastChecked}" ORDER BY ID`)
  .forEach((row) => {
    query(
      'UPDATE Banis_Custom SET ' +
        'Transliteration=?' +
        ', GurmukhiUni=?' +
        ', PunjabiUni=?' +
        ', Updated=?' +
        ' WHERE ID=?',
      [translit(row.Gurmukhi), convert(row.Gurmukhi), convert(row.Punjabi).replace(/"/g, '\\\"'), lastChecked, row.ID],
    );
  });

// Verse
query('UPDATE converter_last SET lastCheck=NOW()');

const count = query('SELECT count(*) cnt FROM Verse')[0].cnt;
for (let i = 0; i < count; i += 2000) {
  query(`${'SELECT ID, Gurmukhi, Punjabi, Transliteration, FirstLetterEng, ' +
        'GurmukhiUni, PunjabiUni, FirstLetterStr, MainLetters ' +
        'FROM Verse ORDER BY ID LIMIT '}${i},${i + 2000}`)
    .forEach((row) => {
      const eng = translit(row.Gurmukhi);
      const rowVals = [
        row.Transliteration,
        row.FirstLetterEng,
        row.GurmukhiUni,
        row.PunjabiUni,
        row.FirstLetterStr,
        row.MainLetters,
        lastChecked,
        row.ID,
      ];
      const vals = [
        eng,
        firstLetters(eng, 1),
        convert(row.Gurmukhi),
        convert(row.Punjabi).replace(/"/g, '\\\"'),
        ascii(firstLetters(row.Gurmukhi, 0)),
        mainLetters(row.Gurmukhi),
        lastChecked,
        row.ID,
      ];

      if (vals.join() !== rowVals.join()) {
        query(
          'UPDATE Verse SET ' +
                'Transliteration=?, FirstLetterEng=?, ' +
                'GurmukhiUni=?, PunjabiUni=?, FirstLetterStr=?, ' +
                'MainLetters=?, Updated=? WHERE ID=?',
          vals,
        );
      }
    });
}

// functions

function mainLetters(words) {
  return words.replace(/[^A-Za-z ]/g, '').replace(/[uUiIyYwWoOMNØRH@~®`]/g, '').trim();
}

function ascii(a) {
  return `,${a.split('').map(c => c.charCodeAt(0).padStart(3, '0')).join(',')},`;
}

function firstLetters(words, eng) {
  if (!words) { return ''; }

  const newWords = words.replace(/\]/g, '').replace(/rhwa/g, '').replace(/[0-9]/g, '');

  const firstLetter = function (x) {
    if (x) {
      if (x[0] === 'i' && !eng) return x[1];

      if (x[0] === '|') return '';
      return x[0];
    } return '';
  };

  return newWords.split(' ').map(firstLetter).join('');
}

function convert(panFontTxt) {
  if (!panFontTxt) return '';
  const lineNumToConvert = 1;
  const conversionType = 1;

  const panFontTxtNewLineSplitarray = panFontTxt.replace('Ø', '').replace('>', '').split('\n');
  let convertedText = '';

  let nextLineToConvert = 1;

  for (let i = 0; i < panFontTxtNewLineSplitarray.length; i += 1) {
    if (nextLineToConvert === (i + 1)) {
      const panFontTxtcharArray = removeUnwantedChars(panFontTxtNewLineSplitarray[i]).split('');

      for (let j = 0; j < panFontTxtcharArray.length; j += 1) {
        const currentChar = panFontTxtcharArray[j];
        const nextChar = panFontTxtcharArray[j + 1];
        const nextNextChar = panFontTxtcharArray[j + 2];

        if (conversionType === 2) {
          if (currentChar === ' ') {
            continue;
          }
        }

        if (currentChar === 'i') {
          if (nextChar != null) {
            if (nextChar === 'e') {
              convertedText += 'ਇ';
            } else if (nextNextChar === 'R' || nextNextChar === 'H' ||
                                nextNextChar === 'Í' || nextNextChar === 'ç' ||
                                nextNextChar === '†' || nextNextChar === 'œ' ||
                                nextNextChar === '~' || nextNextChar === '®') {
              convertedText += convertText(nextChar);
              convertedText += convertText(nextNextChar);
              convertedText += 'ਿ';
              j += 1;
            } else {
              convertedText += convertText(nextChar);
              convertedText += 'ਿ';
            }
            j += 1;
          } else {
            convertedText += convertText(currentChar);
          }
        } else if (currentChar === 'a') {
          switch (nextChar) {
            case 'u':
              convertedText += 'ਉ';
              j += 1;
              break;
            case 'U':
              convertedText += 'ਊ';
              j += 1;
              break;
            default:
              convertedText += convertText(currentChar);
          }
        } else if (currentChar === 'A') {
          switch (nextChar) {
            case 'w':
              convertedText += 'ਆ';
              j += 1;
              break;
            case 'W':
              convertedText += 'ਆਂ';
              j += 1;
              break;
            case 'Y':
              convertedText += 'ਐ';
              j += 1;
              break;
            case 'O':
              convertedText += 'ਔ';
              j += 1;
              break;
            default:
              convertedText += convertText(currentChar);
          }
        } else if (currentChar === 'e') {
          switch (nextChar) {
            case 'I':
              convertedText += 'ਈ';
              j += 1;
              break;
            case 'y':
              convertedText += 'ਏ';
              j += 1;
              break;
            default:
              convertedText += convertText(currentChar);
          }
        } else if (currentChar === 'u' && nextChar === 'o') {
          convertedText += 'ੋੁ';
          j += 1;
        } else if ((currentChar === '@' && nextChar === 'Y') || (currentChar === '@' && nextChar === 'y') || (currentChar === '@' && nextChar === 'o') || (currentChar === '@' && nextChar === 'O')) {
          convertedText += convertText(nextChar);
          convertedText += '੍';
          j += 1;
        } else if (currentChar === '@' && nextChar === 'w') {
          convertedText += '੍ਹ';
          convertedText += convertText(nextChar);
          j += 1;
        } else if ((currentChar === 'N' && nextChar === 'I') || (currentChar === 'M' && (nextChar === 'U' || nextChar === 'u' || nextChar === 'ü')) || (currentChar === 'ˆ' && nextChar === 'I') || (currentChar === 'N' && nextChar === 'y')) {
          convertedText += convertText(nextChar);
          convertedText += convertText(currentChar);
          j += 1;
        } else {
          convertedText += convertText(currentChar);
        }
      }

      if (i !== panFontTxtNewLineSplitarray.length - 1) {
        nextLineToConvert += lineNumToConvert;
      }
    } else {
      convertedText += panFontTxtNewLineSplitarray[i];
    }

    if (i !== panFontTxtNewLineSplitarray.length - 1) {
      convertedText += '\n';
    }
  }

  return convertedText;
}

function convertText(charToConvert) {
  switch (charToConvert) {
    case 'a':
      return 'ੳ';
    case 'A':
      return 'ਅ';
    case 's':
      return 'ਸ';
    case 'S':
      return 'ਸ਼';
    case 'd':
      return 'ਦ';
    case 'D':
      return 'ਧ';
    case 'f':
      return 'ਡ';
    case 'F':
      return 'ਢ';
    case 'g':
      return 'ਗ';
    case 'G':
      return 'ਘ';
    case 'h':
      return 'ਹ';
    case 'H':
      return '੍ਹ';
    case 'j':
      return 'ਜ';
    case 'J':
      return 'ਝ';
    case 'k':
      return 'ਕ';
    case 'K':
      return 'ਖ';
    case 'l':
      return 'ਲ';
    case 'L':
      return 'ਲ਼';
    case 'q':
      return 'ਤ';
    case 'Q':
      return 'ਥ';
    case 'w':
      return 'ਾ';
    case 'W':
      return 'ਾਂ';
    case 'e':
      return 'ੲ';
    case 'E':
      return 'ਓ';
    case 'r':
      return 'ਰ';
    case 'R':
    case '®':
      return '੍ਰ';
    case 't':
      return 'ਟ';
    case 'T':
      return 'ਠ';
    case 'y':
      return 'ੇ';
    case 'Y':
      return 'ੈ';
    case 'u':
    case 'ü':
      return 'ੁ';
    case 'U':
      return 'ੂ';
    case 'i':
      return 'ਿ';
    case 'I':
      return 'ੀ';
    case 'o':
      return 'ੋ';
    case 'O':
      return 'ੌ';
    case 'p':
      return 'ਪ';
    case 'P':
      return 'ਫ';
    case 'z':
      return 'ਜ਼';
    case 'Z':
      return 'ਗ਼';
    case 'x':
      return 'ਣ';
    case 'X':
      return 'ਯ';
    case 'c':
      return 'ਚ';
    case 'C':
      return 'ਛ';
    case 'v':
      return 'ਵ';
    case 'V':
      return 'ੜ';
    case 'b':
      return 'ਬ';
    case 'B':
      return 'ਭ';
    case 'n':
      return 'ਨ';
    case 'ƒ':
      return 'ਨੂੰ';
    case 'N':
    case 'ˆ':
      return 'ਂ';
    case 'm':
      return 'ਮ';
    case 'M':
    case 'µ':
      return 'ੰ';
    case '`':
    case '~':
      return 'ੱ';
    case 'Í':
      return '੍ਵ';
    case 'ç':
      return '੍ਚ';
    case '†':
      return '੍ਟ';
    case 'œ':
      return '੍ਤ';
    case '˜':
      return '੍ਨ';
    case '´':
      return '੍ਯ';
    case '1':
      return '੧';
    case '2':
      return '੨';
    case '3':
      return '੩';
    case '4':
      return '੪';
    case '5':
      return '੫';
    case '6':
      return '੬';
    case '^':
      return 'ਖ਼';
    case '7':
      return '੭';
    case '&':
      return 'ਫ਼';
    case '8':
      return '੮';
    case '9':
      return '੯';
    case '0':
      return '੦';
    case '\\':
      return 'ਞ';
    case '|':
      return 'ਙ';
    case '[':
      return '।';
    case ']':
      return '॥';
    case '<':
      return 'ੴ';
    case 'Ú':
      return 'ਃ';
    case '@':
      return '੍ਹ';
    case '‚':
      return '❁';
    default:
      return charToConvert;
  }
}

function removeUnwantedChars(str) {
  let newStr = str.replace(/>/gi, '');
  newStr = newStr.replace(/Ø/gi, '');
  return newStr;
}

