/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var gitclone = require('./index')

test('should throw if first argument object and no `owner` prop', function (done) {
  function fixture () {
    gitclone({ bar: 'foo' }, function noop () {})
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expects `owner` to be a string/)
  done()
})

/**
 * Uncomment and run the tests from CLI
 * or from Sublime's Build System
 *
 * Everything works, but can't test it easily,
 * because there appear prompts for github username
 * and github password
 *
 * PRs welcome for fix this thing.
 */

// var fs = require('fs')
// var rimraf = require('rimraf')

// test('should clone different than master branch', function (done) {
//   rimraf.sync('./verb')
//   gitclone('verbose/verb#dev', function (err) {
//     test.strictEqual(err, null)

//     fs.readFile('./verb/package.json', 'utf8', function (err, res) {
//       if (err) return done(err)
//       var json = JSON.parse(res)
//       test.strictEqual(json.version, '0.9.0')
//       test.strictEqual(typeof json.repository, 'string')
//       rimraf.sync('./verb')
//       done()
//     })
//   })
// })

// test('should get master branch by default', function (done) {
//   rimraf.sync('./mukla')
//   gitclone('tunnckoCore/mukla', function (err, res) {
//     test.strictEqual(err, null)
//     rimraf.sync('./mukla')
//     done()
//   })
// })

// test('should handle error if `git clone` fails', function (done) {
//   gitclone('some-not-foo/barqux-set-not-exist', function (err) {
//     test.ok(err)
//     test.strictEqual(err.name, 'SpawnError')
//     test.strictEqual(err.code, 128)
//     done()
//   })
// })

// test('should return a spawn stream if no callback', function (done) {
//   var cp = gitclone('fsdfsdfsdsffdssdfdfdfdsdsfdb', 'sdfsdf')
//   test.strictEqual(typeof cp, 'object')
//   test.strictEqual(typeof cp.stdout, 'object')
//   test.strictEqual(typeof cp.stderr, 'object')
//   done()
// })

// test('should return undefined if callback passed', function (done) {
//   rimraf.sync('./sdfs')
//   var res = gitclone('fsdfsdffoo/sdfs#baz', function noop () {})
//   test.strictEqual(res, undefined)
//   done()
// })
