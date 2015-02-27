## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Parse a string (github shorthand url) into an object with `user`/`username`, `repo`/`repository`, `branch` using the [github-short-url-regex][github-short-url-regex]

## Install
```bash
npm i --save parse-github-short-url
npm test
```

## Related
- [github-short-url-regex][github-short-url-regex]
- [parse-github-short-urls][parse-github-short-urls]
- [stringify-github-short-url][stringify-github-short-url]
- [stringify-github-short-urls][stringify-github-short-urls]


## API
> For more use-cases see the [tests](./test.js)

### [parseGithubShortUrl](./index.js#L45)
> Parse github short url to object

- `<str>` **{String}** string to parse for `user/repo#branch`  
- `[opts]` **{Object}** options are passed to [github-short-url-regex][github-short-url-regex]  
- `returns` **{Object}**  

**Example:**

```js
var parseGithubShortUrl = require('parse-github-short-url');
parseGithubShortUrl('tunnckoCore/glob2fp#master');
//=> {
//  user: 'tunnckoCore',
//  username: 'tunnckoCore',
//  org: 'tunnckoCore',
//  organization: 'tunnckoCore',
//  repo: 'glob2fp',
//  repository: 'glob2fp',
//  branch: 'master'
//};
```

### [.test](./index.js#L115)
> Checks given object is valid `ParseGithubShorthand` object, e.g. have `.user`, `.repo` and etc properties

- `[obj]` **{Object}** object to check  
- `returns` **{Boolean}** boolean `true` or `false`  

**Example:**

```js
var shorthandGithub = require('parse-github-short-url');
var res = shorthandGithub('tunnckoCore/glob2fp#master');
//=> res === {
//  user: 'tunnckoCore',
//  username: 'tunnckoCore',
//  org: 'tunnckoCore',
//  organization: 'tunnckoCore',
//  repo: 'glob2fp',
//  repository: 'glob2fp',
//  branch: 'master'
//};

shorthandGithub.test(res);
//=> true

var obj = {
  user: 'visionmedia',
  repo: 'mocha',
  exact: true
}

shorthandGithub.test(obj);
//=> false

var notValid = {
  user: 'tunnckoCore',
  username: 'tunnckoCore',
  org: 'tunnckoCore',
  organization: 'tunnckoCore',
  repo: 'glob2fp',
  repository: 'glob2fp',
  branch: 'master'
};

shorthandGithub.test(notValid);
//=> false
```

### [.validate](./index.js#L156)
> Validates if given object is like what we want - object with
at least `.user` and `.repo` properties

- `[obj]` **{Object}** object to validate  
- `returns` **{Boolean}** boolean `true` or `false`  

**Example:**

```js
var shorthandGithub = require('parse-github-short-url');
var res = shorthandGithub('tunnckoCore/glob2fp#master');
var obj = {
  user: 'tunnckoCore',
  username: 'tunnckoCore',
  org: 'tunnckoCore',
  organization: 'tunnckoCore',
  repo: 'glob2fp',
  repository: 'glob2fp',
  branch: 'master'
};

shorthandGithub.validate(obj);
//=> true

shorthandGithub.validate(res);
//=> true

assert.deepEqual(obj, res)
//=> its okey
```

### [.regex](./index.js#L173)
> Return `github-short-url-regex` regex with given options

- `[opts]` **{Object}**  options pass to [github-short-url-regex][github-short-url-regex]  
- `returns` **{RegExp}**

**Example:**

```js
var shorthandGithub = require('parse-github-short-url');

shorthandGithub.regex(opts).test('here tunnckoCore/npmls#feature pattern')
//=> true

shorthandGithub.regex(opts).test('here string')
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


[npmjs-url]: http://npm.im/parse-github-short-url
[npmjs-img]: https://img.shields.io/npm/v/parse-github-short-url.svg?style=flat&label=parse-github-short-url

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-github-short-url?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-github-short-url.svg?style=flat

[license-url]: https://github.com/tunnckoCore/parse-github-short-url/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/parse-github-short-url
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-github-short-url.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/parse-github-short-url
[daviddm-img]: https://img.shields.io/david/tunnckoCore/parse-github-short-url.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/parse-github-short-url/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 28, 2015_

[github-short-url-regex]: https://github.com/regexps/github-short-url-regex
[parse-github-short-url]: https://github.com/tunnckoCore/parse-github-short-url
[parse-github-short-urls]: https://github.com/tunnckoCore/parse-github-short-urls
[stringify-github-short-url]: https://github.com/tunnckoCore/stringify-github-short-url
[stringify-github-short-urls]: https://github.com/tunnckoCore/stringify-github-short-urls