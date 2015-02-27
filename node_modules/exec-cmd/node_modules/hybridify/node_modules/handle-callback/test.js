/**
 * handle-callback <https://github.com/tunnckoCore/handle-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var handleCallback = require('./index');
var thenGot = require('then-got');
var assert = require('assert');

function fixture(url, callback) {
  var promise = thenGot.get(url);
  if (callback) {
    promise = handleCallback(promise, callback);
  }
  return promise;
}

describe('handle-callback:', function() {
  describe('should work', function() {
    it('with callback api', function(done) {
      this.timeout(10000);

      var hybrid = fixture('https://github.com', function(err, res) {
        var body = res[0];
        var stream = res[1];

        // callback api

        assert.strictEqual(err, null);
        assert(res);
        assert(stream);
        assert.strictEqual(body[0], '<'); // it is html
        done()
      })
    });

    it('with promise api', function(done) {
      this.timeout(10000);

      var hybrid = fixture('https://github.com');
      hybrid.then(function(res) {
        var body = res[0];
        var stream = res[1];

        // promise api

        assert(res);
        assert(stream);
        assert.strictEqual(body[0], '<'); // it is html
        done()
      });
    });

    it('with both callback and promise api', function(done) {
      this.timeout(10000);

      var hybrid = fixture('https://github.com', function(err, res) {
        var body = res[0];
        var stream = res[1];

        // callback api

        assert.strictEqual(err, null);
        assert(res);
        assert(stream);
        assert.strictEqual(body[0], '<'); // it is html
      })
      .then(function(res) {
        var body = res[0];
        var stream = res[1];

        // promise api

        assert(res);
        assert(stream);
        assert.strictEqual(body[0], '<'); // it is html
        done()
      });
    });
  });


  describe('should be able to catch error', function() {
    it('with callback api', function(done) {
      this.timeout(10000);

      var hybrid = fixture('https://gitfsdfsdfm', function(err, res) {

        assert.throws(err, Error);

        // callback api

        assert.strictEqual(res, null || undefined);
        done();
      })
    });

    it('with promise api - with .catch(err)', function(done) {
      this.timeout(10000);

      var hybrid = fixture('https://gitfsdfsdfm')
      hybrid.catch(function(err) {
        // promise api
        assert.throws(err, Error);
        done();
      })
    });

    it('with both callback and promise api', function(done) {
      this.timeout(10000);

      var hybrid = fixture('https://gitfsdfsdfm', function(err) {
        // callback api
        assert.throws(err, Error);
      })
      .catch(function(err) {
        // promise api
        assert.throws(err, Error);
        done();
      })
    });
  });

  describe('should throw error', function() {
    it('when first argument not a Promise', function(done) {
      function iifn() {
        handleCallback('str', function() {});
      }
      assert.throws(iifn, TypeError);
      done()
    });

    it('when second argument not a Function', function(done) {
      function iifn() {
        var promise = thenGot.get('https://github.com');
        handleCallback(promise, 'not a function');
      }
      assert.throws(iifn, TypeError);
      done()
    });
  });
});
