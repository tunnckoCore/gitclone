/**
 * is-empty-function <https://github.com/tunnckoCore/is-empty-function>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var isEmptyFunction = require('./index');

describe('is-empty-function:', function() {
  describe('should return `true`', function() {
    it('when empty anonymous function given', function(done) {
      var fixture = function() {};
      var actual = isEmptyFunction(fixture);
      var expected = true;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when empty named function given', function(done) {
      var fixture = function named() {};
      var actual = isEmptyFunction(fixture);
      var expected = true;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when empty anonymous function in string given', function(done) {
      var fixture = 'function() {}';
      var actual = isEmptyFunction(fixture);
      var expected = true;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when empty named function in string given', function(done) {
      var fixture = 'function named() {}';
      var actual = isEmptyFunction(fixture);
      var expected = true;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when named function contains coverage code', function(done) {
      var fixture = 'function named() {}';
      var actual = isEmptyFunction(fixture);
      var expected = true;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
  });
  describe('should return `false`', function() {
    it('when no arguments given', function(done) {
      var actual = isEmptyFunction();
      var expected = false;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when anonymous function with no empty body is given', function(done) {
      var fixture = function() { return true; };
      var actual = isEmptyFunction(fixture);
      var expected = false;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when anonymous function in string with no empty body is given', function(done) {
      var fixture = 'function() { return true; }';
      var actual = isEmptyFunction(fixture);
      var expected = false;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when named function with no empty body is given', function(done) {
      var fixture = function named() { return true; };
      var actual = isEmptyFunction(fixture);
      var expected = false;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
    it('when named function in string with no empty body is given', function(done) {
      var fixture = 'function named() { return true; }';
      var actual = isEmptyFunction(fixture);
      var expected = false;

      assert.strictEqual(typeof actual, 'boolean');
      assert.strictEqual(actual, expected);
      done();
    });
  });
});
