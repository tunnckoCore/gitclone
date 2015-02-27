/**
 * coverage-code-regex <https://github.com/regexps/coverage-code-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function coverageCodeRegex() {
  // e.g. __cov_abc.s['12'][0][2][1]
  return /(?:__cov_(?:[\w\W\S.,$]{1,22})\.(?:.{1})\[\'(?:\d{1,})\'\](?:\[(?:\d{1,})\])*?\+\+\;)/;
};
