# anvaad-js :: ਅਨੁਵਾਦ-ਜੇਅੈਸ

[![Build Status](https://travis-ci.org/KhalisFoundation/anvaad-js.svg?branch=master)](https://travis-ci.org/KhalisFoundation/anvaad-js) [![Coverage Status](https://coveralls.io/repos/github/KhalisFoundation/anvaad-js/badge.svg)](https://coveralls.io/github/KhalisFoundation/anvaad-js)

## Playground

Visit [playground](https://khalisfoundation.github.io/anvaad-js/) website to try the API methods.

## Installation

```bash
# npm
npm install anvaad-js
# yarn
yarn add anvaad-js
```

## Usage

```javascript
import * as anvaad from 'anvaad-js' // ES2015 module syntax
// import { unicode } from 'anvaad-js' // ES2015 module destructuring syntax
// const anvaad = require('anvaad-js') // common-js require syntax

anvaad.unicode('myry');
```

## Testing

We use [jest](https://facebook.github.io/jest/) for our tests. Run them using npm/yarn

```bash
# npm
npm run test
# yarn
yarn test
```

## API Documentation

### Table of Contents

-   [ascii](#ascii)
-   [firstLetters](#firstletters)
-   [mainLetters](#mainletters)
-   [pauses](#pauses)
-   [translit](#translit)
-   [unicode](#unicode)

## ascii

Returns a comma-separated string of ascii codes for a
string of Gurmukhi characters

**Parameters**

-   `string` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string of letters

**Examples**

```javascript
ascii('AmgAmqmgkp');
// => ',065,109,103,065,109,113,109,103,107,112,'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns a single string of comma-separated ascii codes

**Meta**

-   **since**: 1.0.0

## firstLetters

Retrieve the first letter of each word from a string

**Parameters**

-   `words` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string from which to get first letters
-   `eng` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether the string is English (optional, default `false`)
-   `simplify` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether to simplify embedded vowels and other characters (eg. E to a, ^ to K)

**Examples**

```javascript
firstLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
// => 'AmgAmqmgkp'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns a single string of characters

**Meta**

-   **since**: 1.0.0

## mainLetters

Removes vowel symbols from a Gurmukhi string

**Parameters**

-   `words` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string from which to get main letters
-   `simplify` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether to simplify embedded vowels/nasal sounds (eg. E to a, ^ to K)
-   `simplifyConsonants` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether to simplify half characters to full characters (eg. R to r)

**Examples**

```javascript
mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
// => 'Ae ml grsK Ae ml q mr gr k pAr'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns a single string of characters

**Meta**

-   **since**: 1.4.4

## pauses

Returns a list of all pauses for a string of Gurmukhi words

**Parameters**

-   `words` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string from which to get pauses
- `enableCharCount` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** An optional flag to output the pause position as a count of non-whitespace characters, useful for larivaar text (default is False); *Note: when used with Unicode text, the output character length may be different from ASCII text as Unicode Gurmukhi uses additional characters to render certain combinations.*
- `pauseChars` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The collection of large, medium and small pauses, described below:
    -   `largePauseChar` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The symbol being used for a large pause, also known as a ਵਿਸ਼ਰਾਮ (vishraam) (default is ';')
    -   `mediumPauseChar` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The symbol being used for a medium pause, also known as a ਜਮਕੀ (jamki) (default is ',')
    -   `smallPauseChar` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The symbol being used for a medium pause, also known as a ਠਮਕੀ (thamki) (default is '.')

**Examples**

```javascript
pauses('ieknw. hukmI bKsIs; ieik, hukmI sdw BvweIAih ]');
// => '[{"p": 0, "t": "t"}, {"p": 2, "t": "v"}, {"p": 3, "t": "j"}]'
```

Returns **[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)** Returns a JSON string containing position ('p') and the type of pause ('v' = 'vishraam', 'j' = 'jamki', 't' = 'thamki')

**Meta**

-   **since**: 1.4.2

## translit

Returns a transliteration of Gurmukhi script

**Parameters**

-   `gurmukhi` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The string from to generate transliteration

**Examples**

```javascript
translit('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
// => 'aai mil gurasikh aai mil too mayray guroo kay piaaaray ||'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns a string of text

**Meta**

-   **since**: 1.0.0

## unicode

Convert Gurmukhi script to Unicode and back again.

**Parameters**

-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Gurbani Akhar or Unicode script to be converted
-   `reverse` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether to convert ASCII to unicode (false by default)
-   `simplify` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Whether to simplify extended characters to single code points (eg. sæ to ਸ਼ (u0A36), ਸ਼ (u0A38u0A3C) to S) (false by default)


**Examples**

```javascript
unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
// => 'ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns unicode text

```javascript
 * unicode('ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥', true);
 * // => 'Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns gurbani akhar ascii text

**Meta**

-   **since**: 1.0.0

**Notes**

All letter conversions at a minimum must address the following letters that are utilized within gurbani ascii fonts:
```
´
`
^
¨
~
<
>
|
µ
[
]
®
@
¤
\
&
˜
†
æ
¡
Å
0
1
2
3
4
5
6
7
8
9
a
A
b
B
c
C
ç
d
D
e
E
f
F
g
G
h
H
i
I
Í
î
Î
Ï
j
J
k
K
l
L
m
M
n
N
o
O
Ø
œ
p
P
q
Q
r
R
s
S
t
T
ŧ
u
U
Ú
ü
v
V
w
W
x
X
y
Y
z
Z
```
