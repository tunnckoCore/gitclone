/**
 * handle-errors <https://github.com/tunnckoCore/handle-errors>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var handleErrors = require('./index');

describe('handle-errors:', function() {
  describe('should throw', function() {
    it('Error when no arguments - handleErrors()', function(done) {
      function fixture() {
        handleErrors()
      }
      assert.throws(fixture, Error);
      assert.throws(fixture, /should have `label`/);
      done();
    });
    it('TypeError when `label` is not string - handleErrors([1, 2, 3])', function(done) {
      function fixture() {
        handleErrors([1, 2, 3])
      }
      assert.throws(fixture, TypeError);
      assert.throws(fixture, /expect `label` be string/);
      done();
    });
  });

  describe('should expect optional boolean second argument', function() {
    it('when it is `true` should err object have `shortStack` property', function(done) {
      function cb(err) {
        assert(err.shortStack)
        assert.strictEqual(typeof err.shortStack, 'string');
        assert.strictEqual(err instanceof Error, true);
        assert.strictEqual(err.message, '[test-handle-errors] should expect second argument');
        done();
      }

      handleErrors('test-handle-errors', true)
      .error('should expect second argument', cb);
    });
    it('otherwise err object dont have `shortStack` property', function(done) {
      function cb(err) {
        assert(!err.shortStack)
        assert.strictEqual(err instanceof Error, true);
        assert.strictEqual(err.message, '[test-handle-errors] err obj dont have shortStack prop');
        done();
      }

      handleErrors('test-handle-errors')
      .error('err obj dont have shortStack prop', cb);
    });
  });

  describe('should expose `.error` and `.type` methods', function() {
    it('`.error` method should *throw* Error if no callback given', function(done) {
      function fixture() {
        handleErrors('test-handle-errors')
        .error('directly _throw _with _this message');
      }
      assert.throws(fixture, Error);
      assert.throws(fixture, /directly _throw _with _this message/);
      done();
    });
    it('`.error` method should *pass* Error to given callback', function(done) {
      function cb(err) {
        assert(!err.shortStack)
        assert.strictEqual(err instanceof Error, true);
        assert.strictEqual(err.message, '[test-handle-errors] pass error to callback');
        done();
      }
      handleErrors('test-handle-errors')
      .error('pass error to callback', cb);
    });
    it('`.type` method should *throw* TypeError if no callback given', function(done) {
      function fixture() {
        handleErrors('test-handle-errors')
        .type('directly _throw typeError _with message');
      }
      assert.throws(fixture, TypeError);
      assert.throws(fixture, /directly _throw typeError _with message/);
      done();
    });
    it('`.type` method should *pass* TypeError to given callback', function(done) {
      function cb(err) {
        assert(!err.shortStack)
        assert.strictEqual(err instanceof Error, true);
        assert.strictEqual(err.message, '[test-handle-errors] pass typeError to the given callback');
        done();
      }

      handleErrors('test-handle-errors')
      .type('pass typeError to the given callback', cb);
    });
  });
});
