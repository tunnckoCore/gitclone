# [gitclone][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Powerful and flexible programmatic interface for the `git clone` command, using [gitclone-defaults][] and [cross-spawn][]

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i gitclone --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const gitclone = require('gitclone')
```

## API

### [gitclone](index.js#L59)
> Clones github repository, optionally pass destination folder. By defaults uses HTTPS to clone the repository. If you want SSH clone you should pass second, third or fourth argument boolean `true`, or object `{ssh: true}`. Pattern can be `user/repo#branch` as first argument. Or first argument `user`, second argument `repo`, third `branch`, fourth `ssh`.

**Hint:** All arguments are super flexible and they are handled
absolutely directly with [gitclone-defaults][],
so read its [API docs](https://github.com/tunnckoCore/gitclone-defaults#api).
In addition, you also can pass `callback` as last argument, otherwise
it will return Spawn stream.

**Params**

* `[callback]` **{Function}**: optional, if not given, returns a stream    
* `returns` **{Stream}**: if not `callback` given as last argument - a Spawn stream  

**Example**

```js
const gitclone = require('gitclone')

// clones with SSH
gitclone('node-minibase/minibase', true)

// clone with HTTPS
gitclone('node-minibase/minibase', (err) => {
  if (err) return console.error(err)
})

// clone `dev` branch from `verbose/verb` repo
gitclone('verbose/verb#dev', console.log)

// clone `jonschlinkert/nanomatch` with SSH
gitclone('jonchlinkert', 'nanomatch', true)

// clone to different destination folder
gitclone('hybridables/always-done', { dest: 'foobar' })

// clone SSH + dest + branch
gitclone('verbose/verb', { dest: 'verb0.9.0', branch: 'dev', ssh: true })
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [gitclone-defaults](https://www.npmjs.com/package/gitclone-defaults): Powerful and flexible signature for `gitclone` - defaults, checks, validating, etc. | [homepage](https://github.com/tunnckocore/gitclone-defaults#readme "Powerful and flexible signature for `gitclone` - defaults, checks, validating, etc.")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [try-catch-callback](https://www.npmjs.com/package/try-catch-callback): try/catch block with a callback, used in [try-catch-core][]. Use it when you… [more](https://github.com/hybridables/try-catch-callback#readme) | [homepage](https://github.com/hybridables/try-catch-callback#readme "try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't want guarantees. If you care use [try-catch-core][].")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/gitclone/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[cross-spawn]: https://github.com/IndigoUnited/node-cross-spawn
[gitclone-defaults]: https://github.com/tunnckocore/gitclone-defaults

[npmjs-url]: https://www.npmjs.com/package/gitclone
[npmjs-img]: https://img.shields.io/npm/v/gitclone.svg?label=gitclone

[license-url]: https://github.com/tunnckoCore/gitclone/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/gitclone.svg

[downloads-url]: https://www.npmjs.com/package/gitclone
[downloads-img]: https://img.shields.io/npm/dm/gitclone.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/gitclone
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/gitclone.svg

[travis-url]: https://travis-ci.org/tunnckoCore/gitclone
[travis-img]: https://img.shields.io/travis/tunnckoCore/gitclone/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gitclone
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gitclone.svg

[david-url]: https://david-dm.org/tunnckoCore/gitclone
[david-img]: https://img.shields.io/david/tunnckoCore/gitclone.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[dezalgo]: https://github.com/npm/dezalgo
[once]: https://github.com/isaacs/once
[try-catch-core]: https://github.com/hybridables/try-catch-core