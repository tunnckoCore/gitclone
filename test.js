/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var gitclone = require('./index');


gitclone('tunnckoCore/async-exec-cmd', {ssh: true, dest: '../async-exec-cmd/'})
// gitclone('tunnckoCore/async-exec-cmd', function cb() {})
// gitclone('koajs/koa#0.14.0', 'releases/v0.14.0')
// gitclone('koajs/koa#0.15.0', 'releases/v0.15.0')
// gitclone('koajs/koa#0.16.0', 'releases/v0.16.0')
// gitclone('tunnckoCore/npmls', 'dest/to/path2', true/false)
// gitclone('tunnckoCore/npmls', 'dest/to/path3', {stdio: [null, null, null]})
// gitclone('tunnckoCore/npmls', {stdio: 'inherit'}, true)
// gitclone('tunnckoCore/npmls', {dest: 'dest/npmls', ssh: true}, false) // works, override ssh to false
// gitclone({
//   user: 'koajs',
//   repo: 'koa',
//   branch: '0.12.0',
//   dest: 'dest/koa',
//   ssh: true,
//   stdio: [null, null, null],
// })
// .catch(console.log)
// gitclone({
//   user: 'tunnckoCore',
//   repo: 'glob2fp',
//   branch: 'yeah',
//   options: {
//     dest: 'dest/to/path5',
//     ssh: true,
//     stdio: 'inherit4'
//   }
// })
// gitclone({
//   user: 'tunnckoCore',
//   repo: 'glob2fp',
//   branch: 'feature',
// }, 'dest/to/path6', {
//   ssh: false,
//   stdio: 'falsefalsefalse'
// })
