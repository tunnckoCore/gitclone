## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Stringify github shorthand url object returned from `parse-github-short-url`

## Install
```
npm i --save stringify-github-short-url
npm test
```


## API
> For more use-cases see the [tests](./test.js)  
> Also `.test` and `.validate` methods are exposed from [parse-github-short-url][parse-github-short-url]

### [stringifyGithubShortUrl](./index.js#L70)
> Stringify github short url object

- `<obj>` **{Object}** object to stringify  
- `returns` **{String}**

**Example:**

```js
var stringifyGithubShortUrl = require('stringify-github-short-url');
stringifyGithubShortUrl({
  user: 'tunnckoCore',
  username: 'tunnckoCore',
  org: 'tunnckoCore',
  organization: 'tunnckoCore',
  repo: 'glob2fp',
  repository: 'glob2fp',
  branch: 'master'
});
//=> 'tunnckoCore/glob2fp#master'

stringifyGithubShortUrl({
  user: 'jonschlinkert',
  username: 'jonschlinkert',
  org: 'jonschlinkert',
  organization: 'jonschlinkert',
  repo: 'template',
  repository: 'template',
  branch: 'feature'
});
//=> 'jonschlinkert/template#feature'

stringifyGithubShortUrl({
  user: 'visionmedia',
  username: 'visionmedia',
  org: 'visionmedia',
  organization: 'visionmedia',
  repo: 'mocha',
  repository: 'mocha',
  branch: ''
});
//=> 'visionmedia/mocha'
```


## Related
- [parse-github-short-urls][parse-github-short-urls]
- [github-short-url-regex][github-short-url-regex]
- [parse-github-short-url][parse-github-short-url]
- [hybridify-all][hybridify-all]
- [hybridify][hybridify]


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


[npmjs-url]: http://npm.im/stringify-github-short-url
[npmjs-img]: https://img.shields.io/npm/v/stringify-github-short-url.svg?style=flat&label=stringify-github-short-url

[coveralls-url]: https://coveralls.io/r/tunnckoCore/stringify-github-short-url?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/stringify-github-short-url.svg?style=flat

[license-url]: https://github.com/tunnckoCore/stringify-github-short-url/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/stringify-github-short-url
[travis-img]: https://img.shields.io/travis/tunnckoCore/stringify-github-short-url.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/stringify-github-short-url
[daviddm-img]: https://img.shields.io/david/tunnckoCore/stringify-github-short-url.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/stringify-github-short-url/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 30, 2015_

[github-short-url-regex]: https://github.com/regexps/github-short-url-regex
[parse-github-short-url]: https://github.com/tunnckoCore/parse-github-short-url
[parse-github-short-urls]: https://github.com/tunnckoCore/parse-github-short-urls
[hybridify]: https://github.com/tunnckoCore/hybridify
[hybridify-all]: https://github.com/tunnckoCore/hybridify-all