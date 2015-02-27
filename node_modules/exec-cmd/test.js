/**
 * exec-cmd <https://github.com/tunnckoCore/exec-cmd>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var run = require('./index');
var assert = require('assert');

var strictEqual = assert.strictEqual;
var notStrictEqual = assert.notStrictEqual;

describe('exec-cmd:', function() {
  describe('api', function() {
    it('should handle optional `args` and `options`', function(done) {
      var promise = run('echo');

      strictEqual(typeof promise.then, 'function');
      done();
    });

    it('should handle optional `options`', function(done) {
      var promise = run('echo', [
        'hello world'
      ])
      .then(function(res) {
        var stdout = res[0];
        var code = res[1];

        strictEqual(code, 0);
        strictEqual(stdout.trim(), 'hello world');
        done();
      })
    });

    it('should be hybrid', function(done) {
      var promise = run('echo', [
        'hello world'
      ], function(err, res) {
        var stdout = res[0];
        var code = res[1];
          strictEqual(code, 0);
        assert(!err)
        strictEqual(stdout.trim(), 'hello world');
      })
      .then(function(res) {
        var stdout = res[0];
        var code = res[1];

        strictEqual(code, 0);
        strictEqual(stdout.trim(), 'hello world');
        done();
      })
    });

    it('should pass args to `node fixtures/hello-world.js`', function(done) {
      var promise = run('node', [
        './fixtures/hello-world.js', 'hello world'
      ])
      .then(function(res) {
        var stdout = res[0];
        var code = res[1];

        strictEqual(code, 0);
        strictEqual(stdout.trim(), 'hello world');
        done();
      })
    });

    it('should expand using PATH_EXT properly', function(done) {
      if (!(process.platform === 'win32')) {
        return done();
      }

      /* istanbul ignore next */
      var promise = run(path.join(__dirname, 'fixtures/foo.bat')) // Should expand to foo.bat
        .then(function(res) {
          var stdout = res[0];
          var code = res[1];

          strictEqual(code, 0);
          strictEqual(stdout.trim(), 'foo');
          done();
        })
        .catch(function(err) {
          notStrictEqual(err, 'foo');
          notStrictEqual(err, '');
          done(err);
        });
    });

    it('should handle multibyte properly', function(done) {
      var promise = run('node', [
        path.join(__dirname, 'fixtures/multibyte')
      ])
      .then(function(res) {
        var stdout = res[0];
        var code = res[1];

        strictEqual(code, 0);
        strictEqual(stdout, 'こんにちは');
        done();
      })
      .catch(function(err) {
        /* istanbul ignore next */
        notStrictEqual(err, 'こんにちは');
        /* istanbul ignore next */
        notStrictEqual(err, '');
        /* istanbul ignore next */
        done(err);
      });
    });

    it('should fail on error code != 0', function(done) {
      var promise = run('node', [
        path.join(__dirname, 'fixtures/fail')
      ])
      .then(function(res) {
        /* istanbul ignore next */
        var stdout = res[0];
        /* istanbul ignore next */
        var code = res[1];
        /* istanbul ignore next */
        strictEqual(code, 0);
        /* istanbul ignore next */
        strictEqual(res[0], '');
        /* istanbul ignore next */
        assert(!code);
        /* istanbul ignore next */
        done();
      })
      .catch(function(err) {
        strictEqual(err instanceof Error, true);
        strictEqual(err.name, 'CommandError');
        notStrictEqual(err, '');
        done();
      });
    });
  });
});
