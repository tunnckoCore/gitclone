/**
 * cleanup-coverage-code <https://github.com/tunnckoCore/cleanup-coverage-code>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var cleanupCoverageCode = require('./index');

describe('cleanup-coverage-code:', function() {
  it('should throw TypeError when not string given', function(done) {
    function fixture() {
      cleanupCoverageCode([1, 2, 3]);
    }

    assert.throws(fixture, TypeError);
    done();
  });

  it('should return cleaned code when found coverage code', function(done) {
    var fixture = 'var a=[1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f[\'2\']++;var b=123;';
    var actual = cleanupCoverageCode(fixture);
    var expected = 'var a=[1,2,3];var b=123;';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should return cleaned code, very big coverage code', function(done) {
    var fixture = '__cov_jy8BOE3bkPEtewMs2GlPmg.f[\'58\']++;__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'129\']++;assert.strictEqual(err,null);__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'130\']++;assert.strictEqual(res[0],0);__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'131\']++;assert.strictEqual(typeof res[1],\'string\');__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'132\']++;assert(res[1].length>0);__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'133\']++;done();';
    var actual = cleanupCoverageCode(fixture);
    var expected = 'assert.strictEqual(err,null);assert.strictEqual(res[0],0);assert.strictEqual(typeof res[1],\'string\');assert(res[1].length>0);done();';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should return cleaned code, when big and complex coverage code given', function(done) {
    var fixture = '__cov_jy8BOE3bkPEtewMs2GlPmg.f[\'58\'][0]++;__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'129\'][0][1]++;assert.strictEqual(err,null);__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'130\'][1][3][0]++;assert.strictEqual(res[0],0);__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'131\'][0][2][1][3]++;assert.strictEqual(typeof res[1],\'string\');__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'132\'][1]++;assert(res[1].length>0);__cov_jy8BOE3bkPEtewMs2GlPmg.s[\'133\'][2]++;done();';
    var actual = cleanupCoverageCode(fixture);
    var expected = 'assert.strictEqual(err,null);assert.strictEqual(res[0],0);assert.strictEqual(typeof res[1],\'string\');assert(res[1].length>0);done();';

    assert.strictEqual(actual, expected);
    done();
  });

  it('should return the given original code without change', function(done) {
    var fixture = 'var a=[1,2,3];var b=123;';
    var actual = cleanupCoverageCode(fixture);
    var expected = 'var a=[1,2,3];var b=123;';

    assert.strictEqual(actual, expected);
    done();
  });
});
