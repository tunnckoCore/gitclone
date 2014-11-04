/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var spawn = require('child_process').spawn;
var Promise = require('native-or-another');
var gitclone = require('./lib/gitclone');

module.exports = function gitClone(repository, destination, branch, ssh) {
  var args = [].slice(arguments,0)
  var flags = gitclone(repository, destination, branch, ssh)[0];

  return new Promise(function(resolve, reject) {
    var proc = spawn('git', flags, {
      stdio: 'inherit'
    })
    proc.on('error', function(err) {
      reject(err)
    })
    proc.on('exit', function (code) {
      if (code != 0) {reject(code)}
      else {resolve(flags)}
      process.exit(code)
    })
  })
}
