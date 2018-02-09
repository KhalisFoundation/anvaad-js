# anvaad-js :: ਅਨੁਵਾਦ-ਜੇਅੈਸ

### Testing

Run ```npm test```


### Table of Contents

-   [ascii](#ascii)
-   [firstLetters](#firstletters)
-   [mainLetters](#mainletters)
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

**Examples**

```javascript
mainLetters('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
// => 'Ae ml grsK Ae ml q mr gr k pAr'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns a single string of characters

**Meta**

-   **since**: 1.0.0

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

Convert Gurmukhi script to Unicode

**Parameters**

-   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Gurbani Akhar script to be converted

**Examples**

```javascript
unicode('Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]');
// => 'ਆਇ ਮਿਲੁ ਗੁਰਸਿਖ ਆਇ ਮਿਲੁ ਤੂ ਮੇਰੇ ਗੁਰੂ ਕੇ ਪਿਆਰੇ ॥'
```

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns unicode text

**Meta**

-   **since**: 1.0.0
