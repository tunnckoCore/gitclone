## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Checks the given function (or fn.toString()) is with empty body - dont have body.

## Install
```
npm i --save is-empty-function
npm test
```


## Related
- [hybridify][hybridify]
- [parse-function][parse-function]
- [function-regex][function-regex]
- [coverage-code-regex][coverage-code-regex]
- [cleanup-coverage-code][cleanup-coverage-code]


## API
> For more use-cases see the [tests](./test.js)

### [isEmptyFunction](./index.js#L42)
> Check given function have empty body or not, and returns true or false.

- `[fn]` **{Function|String}**  passed to [parse-function][parse-function]  
- `return` **{Boolean}**

**Example:**

```js
var isEmptyFunction = require('is-empty-function');

var fixture = 'function() {};';
isEmptyFunction(fixture);
//=> true

var fixture = function named() {};
isEmptyFunction(fixture);
//=> true

var fixture = function() { return true; };
isEmptyFunction(fixture);
//=> false

var fixture = function named() { return true; };
isEmptyFunction(fixture);
//=> false

var fixture = "function codeCov() {__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;};";
isEmptyFunction(fixture);
//=> true
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


[npmjs-url]: http://npm.im/is-empty-function
[npmjs-img]: https://img.shields.io/npm/v/is-empty-function.svg?style=flat&label=is-empty-function

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-empty-function?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-empty-function.svg?style=flat

[license-url]: https://github.com/tunnckoCore/is-empty-function/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/is-empty-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-empty-function.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/is-empty-function
[daviddm-img]: https://img.shields.io/david/tunnckoCore/is-empty-function.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/is-empty-function/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 4, 2015_

[hybridify]: https://github.com/tunnckoCore/hybridify
[parse-function]: https://github.com/tunnckoCore/parse-function
[function-regex]: https://github.com/regexps/function-regex
[coverage-code-regex]: https://github.com/regexps/coverage-code-regex
[cleanup-coverage-code]: https://github.com/tunnckoCore/cleanup-coverage-code