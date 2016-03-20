/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var gitclone = require('./index')

test('object', function (done) {
  gitclone({
    owner: 'verbose',
    name: 'verb',
    branch: 'dev'
  }, done)
  // gitclone('jonschlinkert', 'micromatch', true, {dest: 'micro'})
})

// all of examples below works
// gitclone({
//   user: 'foo',
//   repo: 'bar',
//   branch: 'zeta'
// }, true)
// gitclone({
//   user: 'foo',
//   repo: 'bar',
//   branch: 'dev2'
// })
// gitclone({
//   owner: 'foo',
//   name: 'bar',
// }, {dest: 'beta', ssh: true})
// gitclone({
//   owner: 'foo',
//   name: 'bar',
// }, {dest: 'beta'}, true)
// gitclone('foo/bar')
// gitclone('jonschlinkert', 'micromatch', true)
// gitclone('foo', 'bar', 'dev3')
// gitclone('foo', 'bar', 'dev3', {dest: 'dest3'})
// gitclone('foo/bar', {ssh: true})
// gitclone('foo/bar', {branch: 'opts'})
// gitclone('foo/bar', {branch: 'opts'}, {ssh: true})
// gitclone('foo/bar', {branch: 'opts'}, true)
// gitclone('foo', 'bar', 'baz', true)
// gitclone('foo/bar', {branch: 'qux'}, true)
// gitclone('foo/bar#dev', {ssh: true})
// gitclone('foo/bar#qux', true)
// gitclone('foo/bar#qux', true, {dest: 'ok'})
