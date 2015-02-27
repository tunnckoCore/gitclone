/**
 * cleanup-coverage-code <https://github.com/tunnckoCore/cleanup-coverage-code>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var coverageCodeRegex = require('coverage-code-regex');

/**
 * > Cleans up the given code from code added by coverage tools.
 *
 * **Example:**
 *
 * ```js
 * var cleanupCoverageCode = require('cleanup-coverage-code');
 *
 * var fixture = "var a=[1,2,3];__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;var b=123;";
 * cleanupCoverageCode(fixture);
 * //=> 'var a=[1,2,3];var b=123;'
 *
 * cleanupCoverageCode('var a=[1,2,3];var b=123;');
 * //=> 'var a=[1,2,3];var b=123;'
 * ```
 *
 * @name cleanupCoverageCode
 * @param  {String} `<str>` code to cleanup
 * @return {String} cleaned code
 * @api public
 */
module.exports = function cleanupCoverageCode(str) {
  if (typeof str !== 'string') {
    throw new TypeError('cleanup-coverage-code: expect `str` be string');
  }

  if (!coverageCodeRegex().test(str)) {
    return str;
  }

  return str.split(coverageCodeRegex()).filter(Boolean).filter(function(val) {
    return coverageCodeRegex().test(val) ? false : true;
  }).join('');
};
