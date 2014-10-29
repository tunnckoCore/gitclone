# gitclone [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url] [![Coveralls][coveralls-shields]][coveralls-url]
> Clone a Github repository with only `username/repo` and support options

## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install gitclone -g
```


## Flags
> Flags can be used in any order.

- `-d`|`--dest` **{String}** local destionation path
- `-r`|`--repo` **{String}** the repository to clone
- `-b`|`--branch` **{String}** the branch to clone
- `-s`|`--ssh` **{Boolean}** clone via SSH or HTTPS


## Use cases

```
$ gitclone gulpjs/gulp
$ gitclone tunnckoCore/koa-better-body --branch v1.0.0
$ gitclone substack/minimist --dest cmds
$ gitclone userName/myAwesomeRepo --ssh --dest awesomeRepo
$ gitclone --branch v6.0.0 --repo assemble/assemble --ssh --dest mysite
```


## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]

**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/gitclone/graphs/contributors).  
Released under the [`MIT`][license-url] license.



[npmjs-url]: http://npm.im/gitclone
[npmjs-shields]: http://img.shields.io/npm/v/gitclone.svg
[npmjs-install]: https://nodei.co/npm/gitclone.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gitclone?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/gitclone.svg

[license-url]: https://github.com/tunnckoCore/gitclone/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/gitclone
[travis-img]: https://travis-ci.org/tunnckoCore/gitclone.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/gitclone
[depstat-img]: https://david-dm.org/tunnckoCore/gitclone.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
