export const alphabetize: (sentenceArray: string[], type?: 'english' | 'unicode') =>  string;
export const  ascii: (letters: string) => string ;
export const firstLetters: (words: string, eng?:boolean, simplify?: boolean) => string;
export const mainLetters: (words: string, simplify?: boolean, simplifyConsonants?: boolean) =>  string;
export const translit: (gurmukhi: string, language?: 'english' | 'devnagri' | 'ipa' | 'shahmukhi',  map?: null | Map<string, string>) =>  string;
export const unicode: (text: string, reverse?: boolean, simplify?: boolean) => string;
