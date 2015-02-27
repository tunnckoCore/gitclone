/**
 * coverage-code-regex <https://github.com/regexps/coverage-code-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var coverageCodeRegex = require('./index');

describe('coverage-code-regex:', function() {
  it('should return `true` when match', function(done) {
    var fixture = 'var a = [1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f[\'2\']++;var b = 123;';
    var actual = coverageCodeRegex().test(fixture);
    var expected = true;

    assert.strictEqual(actual, expected);
    done();
  });

  it('should return `true` when complex coverage code', function(done) {
    var fixture = 'var a = [1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f[\'2\'][0][3][2]++;var b = 123;';
    var actual = coverageCodeRegex().test(fixture);
    var expected = true;

    assert.strictEqual(actual, expected);
    done();
  });

  it('should return `false` when not match', function(done) {
    var fixture = 'var a = [1,2,3]; var b = 123;';
    var actual = coverageCodeRegex().test(fixture);
    var expected = false;

    assert.strictEqual(actual, expected);
    done();
  });
});
