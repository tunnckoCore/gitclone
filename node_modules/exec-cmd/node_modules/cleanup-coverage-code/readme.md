## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Cleanup ugly code (like this `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;`) added by code coverage tools during the test process.

## Install
```
npm i --save cleanup-coverage-code
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [cleanupCoverageCode](./index.js#L33)
> Cleans up the given code from code added by coverage tools.

- `<str>` **{String}** code to cleanup
- `return` **{String}** cleaned code

**Example:**

```js
var cleanupCoverageCode = require('cleanup-coverage-code');

var fixture = "var a=[1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;var b=123;";
cleanupCoverageCode(fixture);
//=> 'var a=[1,2,3];var b=123;'

cleanupCoverageCode('var a=[1,2,3];var b=123;');
//=> 'var a=[1,2,3];var b=123;'
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


[npmjs-url]: http://npm.im/cleanup-coverage-code
[npmjs-img]: https://img.shields.io/npm/v/cleanup-coverage-code.svg?style=flat&label=cleanup-coverage-code

[coveralls-url]: https://coveralls.io/r/tunnckoCore/cleanup-coverage-code?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/cleanup-coverage-code.svg?style=flat

[license-url]: https://github.com/tunnckoCore/cleanup-coverage-code/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/cleanup-coverage-code
[travis-img]: https://img.shields.io/travis/tunnckoCore/cleanup-coverage-code.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/cleanup-coverage-code
[daviddm-img]: https://img.shields.io/david/tunnckoCore/cleanup-coverage-code.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/cleanup-coverage-code/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 4, 2015_