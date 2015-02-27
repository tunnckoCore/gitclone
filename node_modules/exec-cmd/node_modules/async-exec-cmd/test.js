/**
 * async-exec-cmd <https://github.com/tunnckoCore/async-exec-cmd>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var cmd = require('./index');

describe('async-exec-cmd:', function() {
  describe('should throw', function() {
    describe('"first argument cant be function" when', function() {
      it('only function is given (as first argument)', function(done) {
        function fixture() {
          cmd(function _cb(err) {
            /* istanbul ignore next */
            err = err || '';
          });
        }
        assert.throws(fixture, Error);
        done();
      });
    });
    describe('"should have `callback` (non empty callback)" when', function() {
      it('only object is given (as first argument)', function(done) {
        function fixture() {
          cmd({stdio: 'inherit'});
        }
        assert.throws(fixture, Error);
        done();
      });
    });
    describe('"should have `callback` (non empty callback)" when', function() {
      it('only array is given (as first argument)', function(done) {
        function fixture() {
          cmd(['--save', 'bluebird']);
        }
        assert.throws(fixture, Error);
        done();
      });
    });
    describe('"should have `callback` (non empty callback)" when', function() {
      it('array and object are given', function(done) {
        function fixture() {
          cmd(['--save', 'bluebird'], {stdio: 'inherit'});
        }
        assert.throws(fixture, Error);
        done();
      });
    });
    describe('"should have `callback` (non empty callback)" when', function() {
      it('asyncExecCmd(cmd, function cb(){}) - callback with empty body', function(done) {
        function fixture() {
          cmd('npm install --save is-glob', function _cb() {});
        }
        assert.throws(fixture, Error);
        done();
      });
    });
  });

  describe('should callback(err) recieve', function() {
    describe('from spawn `error` event because', function() {
      it('the process could not be spawned', function(done) {
        cmd('jkdshfkj4hkjh435', function _cb(err) {
          assert.ok(err instanceof Error);
          done();
        });
      });
    });
    describe('TypeError "expect `cmd` be string" when', function() {
      it('object and callback are given', function(done) {
        cmd({stdio: 'inherit'}, function _cb(err) {
          assert.ok(err instanceof TypeError);
          done();
        });
      });
    });
    describe('TypeError "expect `cmd` be string" when', function() {
      it('array and callback are given', function(done) {
        cmd(['--save', 'bluebird'], function _cb(err) {
          assert.ok(err instanceof TypeError);
          done();
        });
      });
    });
    describe('TypeError "expect `cmd` be string" when', function() {
      it('array, object and callback are given', function(done) {
        cmd(['--save', 'bluebird'], {stdio: 'inherit'}, function _cb(err) {
          assert.ok(err instanceof TypeError);
          done();
        });
      });
    });
    describe('TypeError "expect `cmd` be string" when', function() {
      it('object, array and callback are given', function(done) {
        cmd({stdio: 'inherit'}, ['--save', 'bluebird'], function _cb(err) {
          assert.ok(err instanceof TypeError);
          done();
        });
      });
    });
  });

  describe('should work properly', function() {
    describe('should return `stream` when asyncExecCmd() is executed', function(done) {
      it('and should have `.kill` method', function(done) {
        this.timeout(30000);
        var cp = cmd('npm help', function _cb(err) {
          /* istanbul ignore next */
          err = err || '';
        });
        assert.strictEqual(typeof cp.kill, 'function');
        done();
      });
    });
    describe('when opts.stdio is "inherit"', function(done) {
      it('and should recieve res === "", code === 0, err === null', function(done) {
        this.timeout(30000);
        cmd('npm install --save is-glob', {stdio: 'inherit'}, function _cb(err, res, code) {
          assert.strictEqual(err, null);
          assert.strictEqual(code, 0); // status code
          assert.strictEqual(typeof res, 'string'); // response
          assert.strictEqual(res.length, 0);
          done();
        });
      });
    });
    describe('when asyncExecCmd(\'npm\', [args[, opts]], cb)', function() {
      describe('and handle CommandError when', function() {
        it('asyncExecCmd(\'npm\', cb)', function(done) {
          this.timeout(30000);
          cmd('npm', function _cb(err, res, code, buffer) {
            assert.strictEqual(res, undefined);
            assert.strictEqual(buffer, undefined);
            assert.strictEqual(code, 1);
            assert.strictEqual(err.status, 1);
            assert.strictEqual(err.name, 'CommandError');
            done();
          });
        });
        it('asyncExecCmd(\'npm\', opts, cb)', function(done) {
          this.timeout(30000);
          cmd('npm', {stdio: [null, null, null]},
          function _cb(err, res, code, buffer) {
            assert.strictEqual(res, undefined);
            assert.strictEqual(buffer, undefined);
            assert.strictEqual(code, 1);
            assert.strictEqual(err.status, 1);
            assert.strictEqual(err.name, 'CommandError');
            done();
          });
        });
      });
      describe('and callback error should be `null` and should have response when', function() {
        it('asyncExecCmd(\'npm\', [\'i\', \'--save\', \'is-glob\'], cb)', function(done) {
          this.timeout(30000);
          cmd('npm', ['install', '--save', 'is-glob'],
          function _cb(err, res, code) {
            assert.strictEqual(err, null);
            assert.strictEqual(code, 0);
            assert.strictEqual(typeof res, 'string');
            assert(res.length > 0);
            done();
          });
        });
        it('asyncExecCmd(\'npm\', [\'uni\', \'--save\', \'is-glob\'], opts, cb)', function(done) {
          this.timeout(30000);
          cmd('npm', ['uninstall', '--save', 'is-glob'], {stdio: [null, null, null]},
          function _cb(err, res, code) {
            assert.strictEqual(err, null);
            assert.strictEqual(code, 0);
            assert.strictEqual(typeof res, 'string');
            assert(res.length > 0);
            done();
          });
        });
      });
    });
    describe('when asyncExecCmd(\'npm subcommdand\', [args[, opts]], cb)', function() {
      describe('and handle CommandError when', function() {
        it('asyncExecCmd(\'npm unknown\', cb)', function(done) {
          this.timeout(30000);
          cmd('npm unknown', function _cb(err, res, code, buffer) {
            assert.strictEqual(res, undefined);
            assert.strictEqual(buffer, undefined);
            assert.strictEqual(code, 1);
            assert.strictEqual(err.status, 1);
            assert.strictEqual(err.name, 'CommandError');
            done();
          });
        });
        it('asyncExecCmd(\'npm unknown\', opts, cb)', function(done) {
          this.timeout(30000);
          cmd('npm unknown', {stdio: [null, null, null]},
          function _cb(err, res, code, buffer) {
            assert.strictEqual(res, undefined);
            assert.strictEqual(buffer, undefined);
            assert.strictEqual(code, 1);
            assert.strictEqual(err.status, 1);
            assert.strictEqual(err.name, 'CommandError');
            done();
          });
        });
      });
      describe('and callback error should be `null` and should have response when', function() {
        it('asyncExecCmd(\'npm i\', [\'--save\', \'is-glob\'], cb)', function(done) {
          this.timeout(30000);
          cmd('npm install', ['--save', 'is-glob'],
          function _cb(err, res, code) {
            assert.strictEqual(err, null);
            assert.strictEqual(code, 0);
            assert.strictEqual(typeof res, 'string');
            assert(res.length > 0);
            done();
          });
        });
        it('asyncExecCmd(\'npm uni\', [\'--save\', \'is-glob\'], opts, cb)', function(done) {
          this.timeout(30000);
          cmd('npm uninstall', ['--save', 'is-glob'], {stdio: [null, null, null]},
          function _cb(err, res, code) {
            assert.strictEqual(err, null);
            assert.strictEqual(code, 0);
            assert.strictEqual(typeof res, 'string');
            assert(res.length > 0);
            done();
          });
        });
      });
    });
  });
});
