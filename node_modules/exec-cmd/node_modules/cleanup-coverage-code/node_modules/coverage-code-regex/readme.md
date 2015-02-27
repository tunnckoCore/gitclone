## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url]

> Regular expression (regex) for matching ugly code that coverage tools add during the test process.
> Like this one `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;`

## Install
```bash
npm i --save coverage-code-regex
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var coverageCodeRegex = require('coverage-code-regex');

var fixture = 'var a = [1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;var b = 123;';
coverageCodeRegex().test(fixture);
//=> true

coverageCodeRegex().test('var a = [1,2,3]; var b = 123;');
//=> false
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/coverage-code-regex
[npmjs-img]: https://img.shields.io/npm/v/coverage-code-regex.svg?style=flat&label=coverage-code-regex

[coveralls-url]: https://coveralls.io/r/regexps/coverage-code-regex?branch=master
[coveralls-img]: https://img.shields.io/coveralls/regexps/coverage-code-regex.svg?style=flat

[license-url]: https://github.com/regexps/coverage-code-regex/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/regexps/coverage-code-regex
[travis-img]: https://img.shields.io/travis/regexps/coverage-code-regex.svg?style=flat

[daviddm-url]: https://david-dm.org/regexps/coverage-code-regex
[daviddm-img]: https://img.shields.io/david/regexps/coverage-code-regex.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/regexps/coverage-code-regex/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 28, 2015_