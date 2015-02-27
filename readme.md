## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Clone a Github repository programmatically. Hybrid, Async and Promise API

## Install
```
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
// ssh clone, token is required only if you provide branch/tag/release
gitclone('tunnckoCore/koa-better-body', {
  ssh: true,
  dest: 'koa-body'
});


// gitclone('tunnckoCore/async-exec-cmd', function cb() {}); // ???????????

// https clone specific koa release (tag) to specific folder
gitclone('koajs/koa#0.14.0', 'koa/v0.14.0');
gitclone('koajs/koa#0.15.0', 'koa/v0.15.0');
gitclone('koajs/koa#0.16.0', 'koa/v0.16.0');

// https clone fs-readdir's master branch to `dest/to/fsreaddir`
gitclone('tunnckoCore/fs-readdir#master', 'dest/to/fsreaddir', {
  token: 'my-github-personal-access-token'
});

// https clone npmls to `dest/to/path` without output
gitclone('tunnckoCore/npmls', 'dest/to/path', {stdio: [null, null, null]});

// ssh clone anonymize-ip to `dest/path/to/anonyme`,
// because last argument is true
gitclone('tunnckoCore/anonymize-ip', {stdio: 'inherit', options: {
  dest: 'dest/path/to/anonyme',
  ssh: false
}}, true);

// https clone without output, because if last argument is boolean,
// it overrides `ssh` given in options
gitclone('tunnckoCore/parse-function', {
  stdio: [null, null, null],
  ssh: true
}, false);

// https clone branch `yeah` of tunnckoCore/glob2fp repo
gitclone({
  user: 'tunnckoCore',
  repo: 'glob2fp',
  branch: 'yeah',
  dest: 'dest/to/path4',
  ssh: true,
  stdio: 'inherit',
  options: {
    token: 'my-secret-token'
  }
})

// ssh clone `gh-pages` branch of tunnckoCore/blankr repo
// with output and token, given outside of options object
gitclone({
  user: 'tunnckoCore',
  repo: 'blankr',
  branch: 'gh-pages',
  token: 'my-secret-token-outside-of-options',
  options: {
    dest: 'dest/blankr',
    ssh: true,
    stdio: 'inherit'
  }
})

// https clone to `dest/to/ava` without output and with github token
// from `tunnckoCore/tunnckoCore.github.io` repo
gitclone({
  user: 'tunnckoCore',
  repo: 'tunnckoCore.github.io',
  branch: 'ava',
}, 'dest/to/ava', {
  ssh: false,
  stdio: [null, null, null]
  token: 'my-secret'
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