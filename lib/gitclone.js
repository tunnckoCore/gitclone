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

var slice = require('sliced');

/**
 * Clone Github repository for the given `username/repo`
 * 
 * @param {String} `repository`
 * @param {String} `destination`
 * @param {String} `branch`
 * @param {Boolean} `ssh`
 * @return {String} command to execute
 */
module.exports = function gitClone() {
  var args = slice(arguments)
  var url = args[3] ? 'git@github.com:' : 'https://github.com/'
  url = url + args[0] + '.git';

  var command = ['clone', url];

  if (args[1]) {command.push(args[1])}
  if (args[2]) {
    command.push('-b')
    command.push(args[2])
  }

  return [command, args[0], args[1], args[2]];
}
