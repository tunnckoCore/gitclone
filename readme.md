## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Clone a Github repository programmatically. Hybrid, Async and Promise API

## Install
```bash
npm i --save gitclone
npm test
```


## API
> For more use-cases see the [tests](./test.js)

```js
var gitclone = require('gitclone');
```


## Examples

```js
gitclone('tunnckoCore/async-exec-cmd', {ssh: true, dest: '../destination/'})
gitclone('tunnckoCore/async-exec-cmd', function cb() {})
gitclone('koajs/koa#v0.11.0', 'releases/v0.11.0')
gitclone('koajs/koa#v0.12.0', 'releases/v0.12.0')
gitclone('koajs/koa#v0.13.0', 'releases/v0.13.0')
gitclone('tunnckoCore/npmls', 'dest/to/path2', true)
gitclone('tunnckoCore/npmls', 'dest/to/path3', {stdio: 'inherit1'})
gitclone('tunnckoCore/npmls', {stdio: 'inherit2'}, true)
gitclone('tunnckoCore/npmls', {stdio: 'inherit3', ssh: true}, false)
gitclone({
  user: 'tunnckoCore',
  repo: 'glob2fp',
  branch: 'yeah',
  dest: 'dest/to/path4',
  ssh: true,
  stdio: 'inherit4',
})
gitclone({
  user: 'tunnckoCore',
  repo: 'glob2fp',
  branch: 'yeah',
  options: {
    dest: 'dest/to/path5',
    ssh: true,
    stdio: 'inherit4'
  }
})
gitclone({
  user: 'tunnckoCore',
  repo: 'glob2fp',
  branch: 'feature',
}, 'dest/to/path6', {
  ssh: false,
  stdio: 'falsefalsefalse'
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
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/gitclone
[npmjs-img]: https://img.shields.io/npm/v/gitclone.svg?style=flat&label=gitclone

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gitclone?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gitclone.svg?style=flat

[license-url]: https://github.com/tunnckoCore/gitclone/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/gitclone
[travis-img]: https://img.shields.io/travis/tunnckoCore/gitclone.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/gitclone
[daviddm-img]: https://img.shields.io/david/tunnckoCore/gitclone.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/gitclone/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 28, 2015_