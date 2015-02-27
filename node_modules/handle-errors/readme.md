## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Handling/creating hybrid errors. Hybrid middleware between callbacks and throws.  
> Helpful util for modules that have [hybrid APIs][hybridify] and want when they use [promises][gitclone], directly to throw the errors; when use callbacks to pass errors to first argument of this callback.

## Install
```
npm i --save handle-errors
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [handleErrors](./index.js#L44)
> Useful when you have [hybrid api][hybridify] like [gitclone][gitclone]. If you work with promises then you will want to throw the errors, when callback is in use will handle it in 1st argument.

- `label` **{String}** some marker (package name?)
- `stack` **{Boolean}** when `true` adds `.shortStack` property to the error object 
- `return` **{Error|TypeError}** throws it or return `callback` function

**Example:**

```js
var handleErrors = require('handle-errors')('my-pkg'/*, true*/);

handleErrors.error('some err message here');
//=> throws 'Error: [my-pkg] some error message here'

function _cb(err) {
  // err instanceof Error
  console.log(err.toString());
  //=> 'Error: [my-pkg] some error message here'

  console.log(err.shortStack);
  //=> undefined
}

handleErrors.error('some err message here', _cb);
```


## Related
- [hybridables][hybridables]
- [hybridify][hybridify]
- [hybridify-all][hybridify-all]
- [then-got][then-got]
- [gitclone][gitclone]
- [gitclone-cli][gitclone-cli]
- [handle-callback][handle-callback]
- [handle-arguments][handle-arguments]
- [callback-and-promise][callback-and-promise]
- [thenify-all][thenify-all]
- [thenify][thenify]
- [thenables][thenables]


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


[npmjs-url]: http://npm.im/handle-errors
[npmjs-img]: https://img.shields.io/npm/v/handle-errors.svg?style=flat&label=handle-errors

[coveralls-url]: https://coveralls.io/r/hybridables/handle-errors?branch=master
[coveralls-img]: https://img.shields.io/coveralls/hybridables/handle-errors.svg?style=flat

[license-url]: https://github.com/hybridables/handle-errors/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/hybridables/handle-errors
[travis-img]: https://img.shields.io/travis/hybridables/handle-errors.svg?style=flat

[daviddm-url]: https://david-dm.org/hybridables/handle-errors
[daviddm-img]: https://img.shields.io/david/dev/hybridables/handle-errors.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/hybridables/handle-errors/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 30, 2015_

[callback-and-promise]: https://github.com/thenables/callback-and-promise
[thenify-all]: https://github.com/thenables/thenify-all
[thenify]: https://github.com/thenables/thenify
[thenables]: https://github.com/thenables
[hybridables]: https://github.com/hybridables
[hybridify]: https://github.com/hybridables/hybridify
[hybridify-all]: https://github.com/hybridables/hybridify-all
[handle-callback]: https://github.com/hybridables/handle-callback
[handle-arguments]: https://github.com/hybridables/handle-arguments
[handle-errors]: https://github.com/hybridables/handle-errors
[gitclone]: https://github.com/tunnckoCore/gitclone
[gitclone-cli]: https://github.com/tunnckoCore/gitclone-cli
[then-got]: https://github.com/hybridables/then-got