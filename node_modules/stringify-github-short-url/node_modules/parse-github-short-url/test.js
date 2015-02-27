/**
 * parse-github-short-url <https://github.com/tunnckoCore/parse-github-short-url>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var parseUrl = require('./index');

describe('parse-github-short-url:', function() {
  describe('should throw', function() {
    it('Error when no arguments', function(done) {
      assert.throws(parseUrl, Error);
      done()
    });

    it('Error when empty string given', function(done) {
      function fixture() {
        parseUrl('')
      }
      assert.throws(fixture, Error);
      done();
    });

    it('TypeError when first argument not String given', function(done) {
      function fixture() {
        parseUrl({})
      }
      assert.throws(fixture, TypeError);
      done();
    });
  });

  describe('should return object with empty fields for missing properties', function(done) {
    it('when string not contain possible pattern', function(done) {
      var expected = {
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      };
      var actual = parseUrl('some string');

      assert.deepEqual(actual, expected);
      done();
    });

    it('when string not a valid `user/repo` pattern', function(done) {
      var expected = {
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      };
      var actual = parseUrl('some tunnckoCore!glob2fp#feature string');

      assert.deepEqual(actual, expected);
      done();
    });
  });

  describe('should work and', function() {
    it('should return object with `user`, `repo` and `branch`', function(done) {
      var expected = {
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: 'feature'
      };
      var actual = parseUrl('tunnckoCore/glob2fp#feature');

      assert.deepEqual(actual, expected);
      done()
    });

    it('should return object with `user` and `repo` properties only', function(done) {
      var expected = {
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: ''
      };
      var actual = parseUrl('tunnckoCore/glob2fp');

      assert.deepEqual(actual, expected);
      done();
    });

    it('should returned be object and have .constructor.name', function(done) {
      var expected = {
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: 'feature'
      };
      var actual = parseUrl('tunnckoCore/glob2fp#feature');

      assert.deepEqual(actual, expected);
      assert.strictEqual(typeof actual, 'object');
      assert(actual.constructor);
      assert(actual.constructor.name);
      done()
    });

    it('should .constructor.name be `ParseGithubShorthand`', function(done) {
      var expected = {
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'homepage',
        repository: 'homepage',
        branch: 'bigfix'
      };
      var actual = parseUrl('tunnckoCore/homepage#bigfix');

      assert.deepEqual(actual, expected);
      assert.strictEqual(typeof actual, 'object');
      assert.strictEqual(actual.constructor.name, 'ParseGithubShorthand');
      done();
    });

    it('should have static method .test', function(done) {
      var expected = {
        user: 'jadejs',
        username: 'jadejs',
        org: 'jadejs',
        organization: 'jadejs',
        repo: 'doctypes',
        repository: 'doctypes',
        branch: 'refactor'
      };
      var actual = parseUrl('jadejs/doctypes#refactor');

      assert.deepEqual(actual, expected);
      assert.strictEqual(typeof actual, 'object');
      assert.strictEqual(typeof parseUrl.test, 'function');
      assert.strictEqual(parseUrl.test(actual), true);
      done();
    });

    it('should have static method .validate', function(done) {
      var expected = {
        user: 'shouldjs',
        username: 'shouldjs',
        org: 'shouldjs',
        organization: 'shouldjs',
        repo: 'format',
        repository: 'format',
        branch: 'refactor'
      };
      var actual = parseUrl('shouldjs/format#refactor');

      assert.deepEqual(actual, expected);
      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(expected), true);
      assert.strictEqual(parseUrl.validate(actual), true);
      done();
    });

    it('should have static method .regex', function(done) {
      var expected = true;
      var fixture = 'shouldjs/format#refactor';

      assert.strictEqual(typeof parseUrl.regex, 'function');
      assert.deepEqual(parseUrl.regex().test(fixture), expected);
      assert.deepEqual(parseUrl.regex().test('some string'), false);
      done();
    });
  });

  describe('should `.test` method return', function() {
    it('`true` if given is valid `ParseGithubShorthand` object', function(done) {
      var expected = {
        user: 'visionmedia',
        username: 'visionmedia',
        org: 'visionmedia',
        organization: 'visionmedia',
        repo: 'expressjs',
        repository: 'expressjs',
        branch: 'wantfix'
      };
      var actual = parseUrl('visionmedia/expressjs#wantfix');

      assert.deepEqual(actual, expected);
      assert.strictEqual(typeof parseUrl.test, 'function');
      assert.strictEqual(parseUrl.test(actual), true);
      done();
    });
    it('`false` if given is not valid object', function(done) {
      var fixture = {
        username: 'tunnckoCore',
        repo: 'glob2fp'
      };
      var expected = false;

      assert.strictEqual(typeof parseUrl.test, 'function');
      assert.strictEqual(parseUrl.test(fixture), expected);
      done();
    });
    it('`false` no arguments given', function(done) {
      var expected = false;

      assert.strictEqual(typeof parseUrl.test, 'function');
      assert.strictEqual(parseUrl.test(), expected);
      assert.strictEqual(parseUrl.test(undefined), expected);
      done();
    });
    it('`false` no object given', function(done) {
      var expected = false;

      assert.strictEqual(typeof parseUrl.test, 'function');
      assert.strictEqual(parseUrl.test('string'), expected);
      assert.strictEqual(parseUrl.test(['undefined', 'arr']), expected);
      done();
    });
  });

  describe('should `.validate` method return', function() {
    it('`true` if given object have at least `.user` and `.repo` properties', function(done) {
      var fixture = {
        user: 'visionmedia',
        username: 'visionmedia',
        org: 'visionmedia',
        organization: 'visionmedia',
        repo: 'expressjs',
        repository: 'expressjs',
        branch: 'wantfix'
      };
      var expected = true;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(fixture), expected);
      done();
    });
    it('`false` if `.user` property is not string', function(done) {
      var fixture = {
        user: false,
        repo: 'repo'
      };
      var expected = false;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(fixture), expected);
      done();
    });
    it('`false` if `.repo` property is not string', function(done) {
      var fixture = {
        user: 'tunnckoCore',
        repo: false
      };
      var expected = false;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(fixture), expected);
      done();
    });
    it('`false` if `.user` and `.repo` properties are not string', function(done) {
      var fixture = {
        user: function() {},
        repo: function() {}
      };
      var expected = false;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(fixture), expected);
      done();
    });
    it('`false` no arguments given', function(done) {
      var expected = false;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(), expected);
      assert.strictEqual(parseUrl.validate(undefined), expected);
      done();
    });
    it('`false` no object given', function(done) {
      var expected = false;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate('string'), expected);
      assert.strictEqual(parseUrl.validate(['undefined', 'arr']), expected);
      done();
    });
    it('`false` if object without wanted properties given', function(done) {
      var fixture = {
        beta: 'tunnckoCore',
        test: 'glob2fp'
      };
      var expected = false;

      assert.strictEqual(typeof parseUrl.validate, 'function');
      assert.strictEqual(parseUrl.validate(fixture), expected);
      done();
    });
  });
});










