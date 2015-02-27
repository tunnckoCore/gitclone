## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Simple, fast, flexible and cross-platform async executing commands (with [node-cross-spawn][cross-spawn])

## Install
```
npm i --save async-exec-cmd
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [asyncExecCmd](./index.js#L43)
> Async execute command via spawn. All arguments are rebuilt, merged, structured, normalized
and after all passed to [cross-spawn][cross-spawn], which actually is Node's `spawn`.

- `<cmd>` **{String}** Command/program to execute. You can pass subcommands, flags and arguments separated with space  
- `[args]` **{Array}** arguments that will be [arr-union][arr-union] with the given in `cmd`. You can give `opts` object here instead of `args`  
- `[opts]` **{Object}** pass options to [spawn][child-spawn] and [github-short-url-regex][github-short-url-regex]. You can give `cb` function here instead of `opts`  
- `<cb>` **{Function}** node-style callback function that will handle
  + `err` **{Error}** error if exists (`instanceof Error`), or `null`. It have some extra props:
    - `command` **{String}** the `cmd` plus `args` which was tried to execute
    - `message` **{String}** some useful message
    - `buffer` **{Buffer}** representation of the error
    - `status` **{Number|String}**
    - `stack` usual ... stack trace
  + `res` **{String}** representation of response for the executed command/program
    - _notice_ when `opts.stdio: 'inherit'`, res is empty string `''` 
    - _notice_ when `err`, it is `undefined`
  + `code` **{Number|String}** e.g. `0`, `1`, `-2`, `128`, `'ENOENT'`, etc.. Process exit status code of the execution
  + `buffer` **{Buffer}** buffer equivalent of response, e.g. `<Buffer 74 75 6e 6e...>`
    - _notice_ when `err`, it is `undefined`
    - but _notice_ you can find it again in `err.buffer`
- `returns` **{Stream}** actually what `child_process.spawn` returns

**Example:**

```js
var asyncExecCmd = require('async-exec-cmd');
var cp = asyncExecCmd('npm install', [
  '--save-dev', 'bluebird'
], function __cb(err, res, code, buffer) {
  if (err) {
    console.error(err, code);
    return;
  }

  console.log(res, code, buffer);
});
```

### Possible signatures (will work)
> these examples should work without problems

```js
var cmd = require('async-exec-cmd');

function __cb(err, res, code, buffer) {
  if (err) {
    console.error(err, code);
    return;
  }

  console.log(res, code, buffer);
}

/**
 * Try all these commands separatly or run the tests
 * they cover all situations
 */

cmd('npm', __cb);
//=> res and buffer are undefined

cmd('npm', {stdio: [null, null, null]}, __cb);
//=> err Error object, res and buffer are undefined, 

cmd('npm', ['install', '--save', 'bluebird'], __cb);
//=> err undefined, code 0, res === 'unbuild bluebird@2.9.3'

cmd('npm', ['uninstall', '--save', 'bluebird'], {stdio: [null, null, null]}, __cb);
//=> err undefined, code 0, res === 'unbuild bluebird@2.9.3'

cmd('npm -v', __cb);
//=> err undefined, code 0, res === '2.1.16'

cmd('npm install', ['--save', 'bluebird'], __cb);
//=> err undefined, code 0, res === 'bluebird@2.9.3 node_modules/bluebird'

cmd('npm uninstall', ['--save', 'bluebird'], {stdio: [null, null, null]}, __cb);
//=> err  undefined, code 0, res === 'unbuild bluebird@2.9.3'

cmd('npm -v', {stdio: 'inherit'}, __cb);
//=> will directly outputs: 2.1.16
//=> err undefined, code 0, res === ''
```

### Impossible signatures (will throws/errors)
> these examples should not work

```js
cmd(__cb);
//=> first argument cant be function

cmd({ok:true});
//=> should have `callback` (non empty callback)

cmd(['--save-dev', 'bluebird']);
//=> should have `callback` (non empty callback)

cmd(['--save-dev', 'bluebird'], {ok:true});
//=> should have `callback` (non empty callback)

cmd({ok:true}, __cb);
//=> expect `cmd` be string

cmd(['--save-dev', 'bluebird'], __cb);
//=> expect `cmd` be string

cmd(['--save-dev', 'bluebird'], {ok:true}, __cb);
//=> expect `cmd` be string
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


[npmjs-url]: http://npm.im/async-exec-cmd
[npmjs-img]: https://img.shields.io/npm/v/async-exec-cmd.svg?style=flat&label=async-exec-cmd

[coveralls-url]: https://coveralls.io/r/tunnckoCore/async-exec-cmd?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/async-exec-cmd.svg?style=flat

[license-url]: https://github.com/tunnckoCore/async-exec-cmd/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/async-exec-cmd
[travis-img]: https://img.shields.io/travis/tunnckoCore/async-exec-cmd.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/async-exec-cmd
[daviddm-img]: https://img.shields.io/david/tunnckoCore/async-exec-cmd.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/async-exec-cmd/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 30, 2015_

[cross-spawn]: https://github.com/IndigoUnited/node-cross-spawn
[child-spawn]: http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
[github-short-url-regex]: https://github.com/regexps/github-short-url-regex
[arr-union]: https://github.com/jonschlinkert/arr-union