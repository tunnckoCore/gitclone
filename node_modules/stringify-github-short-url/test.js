/**
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var stringify = require('./index');

describe('stringify-github-short-url:', function() {
  describe('should throw', function() {
    it('Error when no arguments', function(done) {
      assert.throws(stringify, Error);
      done()
    });
    it('TypeError when first argument not Object given', function(done) {
      function fixture() {
        stringify('some string')
      }
      assert.throws(fixture, TypeError);
      done();
    });
    it('TypeError when Array given', function(done) {
      function fixture() {
        stringify(['some string'])
      }
      assert.throws(fixture, TypeError);
      done();
    });
  });

  describe('should return empty string', function(done) {
    it('when object not contain `user` property', function(done) {
      var actual = stringify({
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      });
      var expected = '';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
    it('when empty object given', function(done) {
      var actual = stringify({});
      var expected = '';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
    it('and handle it with callback', function(done) {
      stringify({
        beta: false,
        nick: 'test'
      }, function(err, res) {
        var actual = res;
        var expected = '';

        assert.strictEqual(typeof actual, typeof expected);
        assert.strictEqual(actual, expected);
        done();
      });
    });
  });

  describe('should return', function() {
    it('string for given `user`, `repo` and `branch`', function(done) {
      var actual = stringify({
        user: 'tunnckoCore',
        username: 'tunnckoCore',
        org: 'tunnckoCore',
        organization: 'tunnckoCore',
        repo: 'glob2fp',
        repository: 'glob2fp',
        branch: 'feature'
      });
      var expected = 'tunnckoCore/glob2fp#feature';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
    it('string for given `user` and `repo` properties only', function(done) {
      var actual = stringify({
        user: 'jonschlinkert',
        username: 'jonschlinkert',
        org: 'jonschlinkert',
        organization: 'jonschlinkert',
        repo: 'kind-of',
        repository: 'kind-of',
        branch: ''
      });
      var expected = 'jonschlinkert/kind-of';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
    it('and handle them with callback', function(done) {
      stringify({
        user: 'jonschlinkert',
        username: 'jonschlinkert',
        org: 'jonschlinkert',
        organization: 'jonschlinkert',
        repo: 'kind-of',
        repository: 'kind-of',
        branch: ''
      }, function(err, res) {
        var actual = res;
        var expected = 'jonschlinkert/kind-of';

        assert.strictEqual(typeof actual, typeof expected);
        assert.strictEqual(actual, expected);

        stringify({
          user: 'tunnckoCore',
          username: 'tunnckoCore',
          org: 'tunnckoCore',
          organization: 'tunnckoCore',
          repo: 'glob2fp',
          repository: 'glob2fp',
          branch: 'feature'
        }, function(err, res) {
          actual = res;
          expected = 'tunnckoCore/glob2fp#feature';

          assert.strictEqual(typeof actual, typeof expected);
          assert.strictEqual(actual, expected);
          done();
        });
      });
    });
  });

  describe('should have `parse-github-short-url` and his methods', function() {
    describe('should have his static methods', function() {
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
        var actual = stringify.parse('jadejs/doctypes#refactor');

        assert.deepEqual(actual, expected);
        assert.strictEqual(typeof actual, 'object');
        assert.strictEqual(typeof stringify.parse.test, 'function');
        assert.strictEqual(stringify.parse.test(actual), true);
        assert.strictEqual(typeof stringify.test, 'function');
        assert.strictEqual(stringify.test(actual), true);
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
        var actual = stringify.parse('shouldjs/format#refactor');

        assert.deepEqual(actual, expected);
        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(expected), true);
        assert.strictEqual(stringify.parse.validate(actual), true);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(expected), true);
        assert.strictEqual(stringify.validate(actual), true);
        done();
      });
      it('should have static method .regex', function(done) {
        var expected = true;
        var fixture = 'shouldjs/format#refactor';

        assert.strictEqual(typeof stringify.parse.regex, 'function');
        assert.deepEqual(stringify.parse.regex().test(fixture), expected);
        assert.deepEqual(stringify.parse.regex().test('some string'), false);
        assert.strictEqual(typeof stringify.regex, 'function');
        assert.deepEqual(stringify.regex().test(fixture), expected);
        assert.deepEqual(stringify.regex().test('some string'), false);
        done();
      });
    });

    describe('should have static method .parse', function() {
      describe('should throw', function() {
        it('Error when no arguments', function(done) {
          assert.throws(stringify.parse, Error);
          assert.throws(stringify.parse, Error);
          done()
        });

        it('Error when empty string given', function(done) {
          function fixture() {
            stringify.parse('')
          }
          assert.throws(fixture, Error);
          done();
        });

        it('TypeError when first argument not String given', function(done) {
          function fixture() {
            stringify.parse({})
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
          var actual = stringify.parse('some string');

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
          var actual = stringify.parse('some tunnckoCore!glob2fp#feature string');

          assert.deepEqual(actual, expected);
          done();
        });
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
        var actual = stringify.parse('visionmedia/expressjs#wantfix');

        assert.deepEqual(actual, expected);
        assert.strictEqual(typeof stringify.parse.test, 'function');
        assert.strictEqual(stringify.parse.test(actual), true);
        done();
      });
      it('`false` if given is not valid object', function(done) {
        var fixture = {
          username: 'tunnckoCore',
          repo: 'glob2fp'
        };
        var expected = false;

        assert.strictEqual(typeof stringify.parse.test, 'function');
        assert.strictEqual(stringify.parse.test(fixture), expected);
        done();
      });
      it('`false` no arguments given', function(done) {
        var expected = false;

        assert.strictEqual(typeof stringify.parse.test, 'function');
        assert.strictEqual(stringify.parse.test(), expected);
        assert.strictEqual(stringify.parse.test(undefined), expected);
        done();
      });
      it('`false` no object given', function(done) {
        var expected = false;

        assert.strictEqual(typeof stringify.parse.test, 'function');
        assert.strictEqual(stringify.parse.test('string'), expected);
        assert.strictEqual(stringify.parse.test(['undefined', 'arr']), expected);
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

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(fixture), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(fixture), expected);
        done();
      });
      it('`false` if `.user` property is not string', function(done) {
        var fixture = {
          user: false,
          repo: 'repo'
        };
        var expected = false;

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(fixture), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(fixture), expected);
        done();
      });
      it('`false` if `.repo` property is not string', function(done) {
        var fixture = {
          user: 'tunnckoCore',
          repo: false
        };
        var expected = false;

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(fixture), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(fixture), expected);
        done();
      });
      it('`false` if `.user` and `.repo` properties are not string', function(done) {
        var fixture = {
          user: function() {},
          repo: function() {}
        };
        var expected = false;

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(fixture), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(fixture), expected);
        done();
      });
      it('`false` no arguments given', function(done) {
        var expected = false;

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(), expected);
        assert.strictEqual(stringify.parse.validate(undefined), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(), expected);
        assert.strictEqual(stringify.validate(undefined), expected);
        done();
      });
      it('`false` no object given', function(done) {
        var expected = false;

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate('string'), expected);
        assert.strictEqual(stringify.parse.validate(['undefined', 'arr']), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate('string'), expected);
        assert.strictEqual(stringify.validate(['undefined', 'arr']), expected);
        done();
      });
      it('`false` if object without wanted properties given', function(done) {
        var fixture = {
          beta: 'tunnckoCore',
          test: 'glob2fp'
        };
        var expected = false;

        assert.strictEqual(typeof stringify.parse.validate, 'function');
        assert.strictEqual(stringify.parse.validate(fixture), expected);
        assert.strictEqual(typeof stringify.validate, 'function');
        assert.strictEqual(stringify.validate(fixture), expected);
        done();
      });
    });
  });
});
