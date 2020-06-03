declare function alphabetize(sentenceArray: string[], type: 'english' | 'unicode'): string;
declare function  ascii(letters: string):string ;
declare function firstLetters(words: string, eng?:boolean, simplify?: boolean):string;
declare function mainLetters(words: string, simplify?: boolean, simplifyConsonants?: boolean): string;
declare function translit(gurmukhi: string): string;
declare function unicode(text: string, reverse?: boolean, simplify?: boolean): string;
