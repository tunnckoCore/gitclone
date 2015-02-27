## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Initial step for creating hybrid APIs, used by `hybridify`. Handle callback in promise - give promise and callback return promise.

## Install
```bash
npm install handle-callback
npm test
```


## Usage
> For more use-cases see the [tests](./test.js).  
> Useful for this waiting ES6 times. Natural bridge between callback style APIs and Promise APIs.

Say you have old school callback (async) function
```js
function asyncFn(a, b, c, callback) {
  callback(null, a, b, c);
}
```

then you can modernize it say with `thenify`
```js
var thenify = require('thenify');

function asyncMyNumbers(a, b, c, callback) {
  callback(null, a, b, c);
}
var myNumbersPromise = thenify(asyncMyNumbers)

myNumbersPromise(1, 2, 3)
.then(function(arr) {
  //=> arr === [1,2,3]
})
.catch(console.error)
```

But you want both APIs in same time, so you need wrapper like this

**awesome-numbers.js**
```js
var handleArguments = require('handle-arguments');
var handleCallback = require('handle-callback');
var thenify = require('thenify');

function asyncMyNumbers(a, b, c, callback) {
  callback(null, a, b, c);
}

module.exports = function awesomeNumbers() {
  var argz = handleArguments(arguments);
  var myNumbersPromise = thenify(asyncMyNumbers);

  var promise = thenify(asyncMyNumbers).apply(null, argz.arguments);
  if (argz.callback) {
    promise = handleCallback(promise, argz.callback);
  }

  return promise;
}
```

and now you have **HYBRID**, yeah. That you can use both API in same time
```js
var awesomeNumbersHybrid = require('./awesome-numbers');

awesomeNumbersHybrid(1, 2, 3, function __cb(err, one, two, three) {
  if (err) {
    console.error('from Callback API:', err);
    return;
  }
  console.log('from Callback API:', one, two, three);
})
.then(function __fulfilled(dataArray) {
  console.log('from Promise API:', dataArray);
  //=> dataArray === [1,2,3]
})
.catch(function __rejected(err) {
  console.error('from Promise API:', err)
})
```



## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/handle-callback
[npmjs-img]: https://img.shields.io/npm/v/handle-callback.svg?style=flat&label=handle-callback

[coveralls-url]: https://coveralls.io/r/hybridables/handle-callback?branch=master
[coveralls-img]: https://img.shields.io/coveralls/hybridables/handle-callback.svg?style=flat

[license-url]: https://github.com/hybridables/handle-callback/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/hybridables/handle-callback
[travis-img]: https://img.shields.io/travis/hybridables/handle-callback.svg?style=flat

[daviddm-url]: https://david-dm.org/hybridables/handle-callback
[daviddm-img]: https://img.shields.io/david/hybridables/handle-callback.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/hybridables/handle-callback/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 26, 2015_