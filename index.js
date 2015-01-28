/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path')
var fmt = require('util').format;
var execCmd = require('exec-cmd');
var stringify = require('stringify-github-short-url');
var handleArguments = require('handle-arguments');

var errs = require('handle-errors')('gitclone');
var error = errs.error;
var type = errs.type;

// docs
module.exports = function gitclone() {
  var argz = handleArguments(arguments);
  var args = checkArguments(argz.args);
  args = buildArguments(args);

  return execCmd(args.cmd, args.opts, argz.callback);
};

/**
 * > Build and structure normalized arguments.
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
function buildArguments(args) {
  var dest = args.dest || args.opts.dest;
  var data = args.res;
  var git = 'git clone';
  var url = args.opts.ssh ? 'git@github.com:' : 'https://github.com/';
  var cmd = fmt('%s %s%s/%s.git', git, url, data.user, data.repo);
  cmd = dest ? fmt('%s %s', cmd, dest) : cmd;

  args.cmd = data.branch ? fmt('%s -b %s', cmd, data.branch) : cmd;
  args.opts.stdio = args.opts.stdio ? args.opts.stdio : 'inherit';
  return args;
}

/**
 * > Create flexible arguments - check types and normalize incoming arguments.
 *
 * @param  {Array} `<args>`
 * @return {Object}
 * @api private
 */
function checkArguments(args) {
  if (!args[0]) {
    return error('should have at least 1 argument and he cant be function');
  }

  if (typeOf(args[0]) === 'object') {
    args = whenRepoObject(args);
  }

  if (typeOf(args[1]) === 'object') {
    args = whenDestObject(args);
  }

  args[2] = typeOf(args[2]) !== 'object' ? {} : args[2];
  args[0] = stringify.parse(args[0], args[2]);

  if (!stringify.test(args[0])) {
    return type('expect `repo` to be `user/repo(#branch)` string');
  }

  return {
    res: args[0],
    dest: args[1] || '',
    opts: args[2]
  };
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
  var cache = args[0];

  if (typeOf(args[0].user) === 'string' && typeOf(args[0].repo) === 'string') {
    args[0] = stringify(args[0]);
  }

  args[2] = !args[2] ? (cache.options || cache) : args[2];
  args[1] = args[2].dest || undefined;

  return args;
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
  var cache = args[1];

  if (typeOf(args[2]) === 'boolean') {
    cache.ssh = args[2];
    args[2] = cache;
  }

  args[2] = !args[2] ? cache : args[2];
  args[1] = undefined;

  return args;
}

/**
 * > Get correct type of value
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
