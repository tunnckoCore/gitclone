/**
 * stringify-github-short-url <https://github.com/tunnckoCore/stringify-github-short-url>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fmt = require('util').format;
var parse = require('parse-github-short-url');
var errs = require('handle-errors')('stringify-github-short-url');

/**
 * Expose `stringifyGithubShortUrl`
 */
module.exports = stringifyGithubShortUrl;

/**
 * Expose `parse-github-short-url` and his methods
 */
Object.keys(parse).forEach(function(method) {
  stringifyGithubShortUrl[method] = parse[method];
});
stringifyGithubShortUrl.parse = parse;

/**
 * Stringify github short url object
 *
 * **Example:**
 *
 * ```js
 * var stringifyGithubShortUrl = require('stringify-github-short-url');
 * stringifyGithubShortUrl({
 *   user: 'tunnckoCore',
 *   username: 'tunnckoCore',
 *   org: 'tunnckoCore',
 *   organization: 'tunnckoCore',
 *   repo: 'glob2fp',
 *   repository: 'glob2fp',
 *   branch: 'master'
 * });
 * //=> 'tunnckoCore/glob2fp#master'
 *
 * stringifyGithubShortUrl({
 *   user: 'jonschlinkert',
 *   username: 'jonschlinkert',
 *   org: 'jonschlinkert',
 *   organization: 'jonschlinkert',
 *   repo: 'template',
 *   repository: 'template',
 *   branch: 'feature'
 * });
 * //=> 'jonschlinkert/template#feature'
 *
 * stringifyGithubShortUrl({
 *   user: 'visionmedia',
 *   username: 'visionmedia',
 *   org: 'visionmedia',
 *   organization: 'visionmedia',
 *   repo: 'mocha',
 *   repository: 'mocha',
 *   branch: ''
 * });
 * //=> 'visionmedia/mocha'
 * ```
 *
 * @name stringifyGithubShortUrl
 * @param  {Object} `<obj>` object to stringify
 * @param  {Function} `[cb]` callback for handle response
 * @return {String}
 * @api public
 */
function stringifyGithubShortUrl(obj, cb) {
  if (!obj) {
    return errs.error('should have at least 1 argument');
  }

  if (typeOf(obj) !== 'object') {
    return errs.type('expect `obj` (1st argument) be object', cb);
  }

  if (!parse.validate(obj)) {
    return cb ? cb(null, '') : '';
  }

  var str = fmt('%s/%s', obj.user, obj.repo);

  if (obj.branch) {
    str = fmt('%s#%s', str, obj.branch);
  }

  var parsed = parse(str);

  if (obj.user === parsed.user  && obj.repo === parsed.repo) {
    return cb ? cb(null, str) : str;
  }
}

/**
 * Get correct type of value
 *
 * @param  {*} `val`
 * @return {String}
 * @api private
 */
function typeOf(val) {
  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString(val).slice(8, -1).toLowerCase();
}
