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
// gitclone('tunnckoCore/async-exec-cmd#v0.0.1', 'release/v0.0.1')
// gitclone('tunnckoCore/async-exec-cmd#v0.0.2', 'release/v0.0.2')
// gitclone('tunnckoCore/async-exec-cmd#v1.0.0', 'release/v1.0.0')
// gitclone('tunnckoCore/npmls', 'dest/to/path2', 'ssh[true/false]')
// gitclone('tunnckoCore/npmls', 'dest/to/path3', {stdio: 'inherit1'})
// gitclone('tunnckoCore/npmls', {stdio: 'inherit2'}, true)
// gitclone('tunnckoCore/npmls', {stdio: 'inherit3', ssh: true}, false)
// gitclone({
//   user: 'tunnckoCore',
//   repo: 'glob2fp',
//   branch: 'yeah',
//   dest: 'dest/to/path4',
//   ssh: true,
//   stdio: 'inherit4',
// })
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
