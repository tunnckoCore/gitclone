/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fmt = require('util').format;
var kindOf = require('kind-of');
var type = require('./errors').type;
var error = require('./errors').error;
var stringify = require('stringify-github-short-url');

/**
 * > Map arguments array to object with strict key names
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
exports.map = function mapArguments(args) {
  return {
    pattern: args[0],
    dest: args[1] || '',
    opts: args[2] || {}
  };
};

/**
 * > Create flexible arguments - check types and normalize incoming arguments.
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
exports.check = function checkArguments(args) {
  if (!args.pattern) {
    return error('should have at least 1 argument and he cant be function');
  }
  if (kindOf(args.opts) === 'boolean') {
    var o = kindOf(args.dest) === 'object' && args.dest || {};
    o.ssh = args.opts;
    args.opts = o;
  }

  if (kindOf(args.dest) === 'object') {
    args = whenDestObject(args);
  }

  if (kindOf(args.pattern) === 'object') {
    args = whenRepoObject(args);
  }

  args.opts = kindOf(args.opts) !== 'object' ? {} : args.opts;
  var parse = stringify.parse(args.pattern, args.opts);

  if (!stringify.test(parse)) {
    return type('expect `repo` to be `user/repo(#branch)` string');
  }

  return {
    user: parse.user,
    repo: parse.repo,
    branch: parse.branch,
    dest: args.dest,
    opts: args.opts
  };
};

/**
 * > Build and structure normalized arguments.
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
exports.build = function buildArguments(args) {
  var git = 'git clone --depth=50';
  var url = args.opts.ssh ? 'git@github.com:' : 'https://github.com/';
  var cmd = fmt('%s %s%s/%s.git', git, url, args.user, args.repo);

  args.cmd = args.dest ? fmt('%s %s', cmd, args.dest) : cmd;
  // args.cmd = args.branch ? fmt('%s -b %s', args.cmd, args.branch) : args.cmd;
  args.opts.stdio = args.opts.stdio ? args.opts.stdio : 'inherit';

  return args;
};

/**
 * > Structure, order/reorder arguments when
 * second argument (dest) is object.
 *
 * @param  {Array} `<args>`
 * @return {Array}
 * @api private
 */
function whenDestObject(args) {
  var cache = args.dest;
  var opts = args.opts;

  args.opts = cache;
  args.opts.ssh = opts.ssh || args.opts.ssh;
  args.dest = cache.dest || '';
  return args;
}

/**
 * > Structure, order/reorder arguments when
 * first argument (repo) is object.
 *
 * @param  {Array} `<args>`
 * @return {Array}
 * @api private
 */
function whenRepoObject(args) {
  var cache = args.pattern;

  if (kindOf(cache.user) === 'string' && kindOf(cache.repo) === 'string') {
    args.pattern = stringify(cache);
  }

  var dest = cache.options && cache.options.dest;
  args.dest = args.dest || cache.dest || dest || '';
  return args;
}
