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
var Promize = require('native-or-another');
var gitclone = require('./lib/gitclone');
var slice = require('sliced');

/**
 * Clone Github repository for the given `username/repo`
 * 
 * @param {String} `repository`
 * @param {String} `destination`
 * @param {String} `branch`
 * @param {Boolean} `ssh`
 * @return {Promise}
 */
module.exports = function gitClone() {
  var args = slice(arguments);
  var flags = gitclone(args[0], args[1], args[2], args[3])[0];

  return new Promize(function(resolve, reject) {
    var proc = spawn('git', flags, {
      stdio: 'inherit'
    })
    proc.on('error', function(err) {
      reject(err)
    })
    proc.on('exit', function (code) {
      if (code !== 0) {reject(code)}
      else {resolve(flags)}
      process.exit(code)
    })
  })
}
