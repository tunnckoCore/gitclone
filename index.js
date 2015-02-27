/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var root = process.cwd();
var run = require('exec-cmd');
var error = require('./lib/errors').error;
var handleArguments = require('handle-arguments');
var buildArguments = require('./lib/arguments').build;
var checkArguments = require('./lib/arguments').check;
var mapArguments = require('./lib/arguments').map;
var getFirstDir = require('get-first-from-filepath');
var onlineExist = run.hybridify(require('online-branch-exist'));

// docs
module.exports = function gitclone() {
  var argz = handleArguments(arguments);
  argz = mapArguments(argz.args);
  argz = checkArguments(argz);
  argz = buildArguments(argz);

  console.log(argz)

  return argz.branch.length ? cloneBranch(argz).then(function(res) {
    return res ? clone(argz) : false;
  }) : clone(argz);
};

function clone(argz) {
  return run(argz.cmd, argz.opts, argz.callback).then(function() {
    process.chdir(argz.dest)
    console.log(process.cwd())
    var stdio = [null, null, null];
    return run('git checkout ' + argz.branch, {stdio: stdio}, argz.callback);
  });
}

function cloneBranch(argz) {
  return onlineExist(argz.pattern, argz.opts.token)
  .then(function _then(res) {
    if (res === true) {
      console.log('avaaaaaaaaaaaaaaa')
      return true;
    }
    error('remote branch or tag not exist');
  });
}
