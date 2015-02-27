## [![npm versi][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Flexible and cross-platform executing commands. **[Hybrid][hybridify], Async and Promise API.**


## Install
```
npm i --save exec-cmd
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [execCmd](./index.js#L43)
> Hybrid execute command via spawn. Actually this is [hybridify wrapper][hybridify] for [async-exec-cmd][async-exec-cmd], so for more detailed information see [async-exec-cmd readme][async-readme]

- `<cmd>` **{String}**
- `[args]` **{Array}**
- `[opts]` **{Object}**
- `[cb]` **{Function}**
- `returns` **{Promise}**

**Example:**
> The command will directly output `"Hello world!"`, because `stdio: inherit`, so `res[0]` which
is the actual response of execution, will be empty string `''`.

```js
var run = require('exec-cmd');
var promise = run('echo "Hello world!"', {stdio: 'inherit'})

promise
.then(function(res) {
  var stdout = res[0];
  var code = res[1];
  var buffer = res[2];

  console.log(stdout, code, buffer);
  //=> '' 0 <Buffer >
})
.catch(console.error)
```

**More advanced example**
> Say we want to install [bluebird][bluebird] as dev dependency and after that uninstall it.

```js
var run = require('exec-cmd');

run('npm install', ['--save-dev', 'bluebird'])
.then(function(arr) {
  var res = arr[0];
  var code = arr[1];
  var buffer = arr[2];

  console.log(res);
  //=> 'bluebird@2.9.3 node_modules/bluebird'

  // So we now want to uninstall it,
  // but we want to show response directly on console (stdout)
  return run('npm', ['uninstall', '--save-dev', 'bluebird'], {stdio: 'inherit'})
})
.then(function(arr) {
  // not need to console.log something,
  // it will directly output this
  //=> unbuild bluebird@2.9.3
})
.catch(console.error)
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


[npmjs-url]: http://npm.im/exec-cmd
[npmjs-img]: https://img.shields.io/npm/v/exec-cmd.svg?style=flat&label=exec-cmd

[coveralls-url]: https://coveralls.io/r/hybridables/exec-cmd?branch=master
[coveralls-img]: https://img.shields.io/coveralls/hybridables/exec-cmd.svg?style=flat

[license-url]: https://github.com/hybridables/exec-cmd/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/hybridables/exec-cmd
[travis-img]: https://img.shields.io/travis/hybridables/exec-cmd.svg?style=flat

[daviddm-url]: https://david-dm.org/hybridables/exec-cmd
[daviddm-img]: https://img.shields.io/david/hybridables/exec-cmd.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/hybridables/exec-cmd/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 30, 2015_

[hybridify]: https://github.com/hybridables/hybridify
[async-readme]: https://github.com/tunnckoCore/async-exec-cmd#asyncexeccmd
[async-exec-cmd]: https://github.com/tunnckoCore/async-exec-cmd
[bluebird]: https://github.com/petkaantonov/bluebird