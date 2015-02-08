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
var stringify = require('stringify-github-short-url');
var handleArguments = require('handle-arguments');
var buildArguments = require('./lib/arguments').build;
var checkArguments = require('./lib/arguments').check;
var mapArguments = require('./lib/arguments').map;

// docs
module.exports = function gitclone() {
  var argz = handleArguments(arguments);
  argz = mapArguments(argz.args);
  argz = checkArguments(argz);
  argz = buildArguments(argz);

  return run(argz.cmd, argz.opts, argz.callback).then(function(res) {
    // use `online-branch-exist`
    process.chdir(argz.dest);
    var cmd = fmt('git checkout %s', argz.branch);
    return run(cmd, {stdio: [null, null, null]});
  })
  .catch(catchErrors);
};

function catchErrors(err) {
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
}
