/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var fmt = require('util').format;
var run = require('exec-cmd');
var rimraf = require('rimraf');
var kindOf = require('kind-of');
var arrayEqual = require('array-equal');
var handleArguments = require('handle-arguments');
var stringify = require('stringify-github-short-url');
var handleErrors = require('handle-errors')('gitclone');
var error = handleErrors.error;
var type = handleErrors.type;

// docs
module.exports = function gitclone() {
  var argz = handleArguments(arguments);
  argz = mapArguments(argz.args);
  argz = checkArguments(argz);
  argz = buildArguments(argz);

  return run(argz.cmd, argz.opts, argz.callback).catch(function(err) {
    var dir = argz.dest.split('/')[0];
    if (arrayEqual(argz.opts.stdio, [null, null, null])) {
      // jscs:disable maximumLineLength
      console.log('fatal: Remote branch %s not found in upstream origin', argz.branch);
      // jscs:enable maximumLineLength
      rimraf.sync(dir);
      throw err;
    }
    rimraf.sync(dir);
    throw err;
  });
};

/**
 * > Create flexible arguments - check types and normalize incoming arguments.
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
function checkArguments(args) {
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
}

/**
 * > Map arguments array to object with strict key names
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
function mapArguments(args) {
  return {
    pattern: args[0],
    dest: args[1] || '',
    opts: args[2] || {}
  };
}

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

/**
 * > Build and structure normalized arguments.
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
function buildArguments(args) {
  var git = 'git clone';
  var url = args.opts.ssh ? 'git@github.com:' : 'https://github.com/';
  var cmd = fmt('%s %s%s/%s.git', git, url, args.user, args.repo);

  args.cmd = args.dest ? fmt('%s %s', cmd, args.dest) : cmd;
  args.cmd = args.branch ? fmt('%s -b %s', args.cmd, args.branch) : args.cmd;
  args.opts.stdio = args.opts.stdio ? args.opts.stdio : 'inherit';

  return args;
}
