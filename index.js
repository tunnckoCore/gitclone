/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var spawn = require('spawn-commands')
var defaults = require('gitclone-defaults')

module.exports = function gitclone () {
  var git = 'git clone '
  var opts = defaults.apply(this, arguments)

  git += opts.ssh ? 'git@github.com:' : 'https://github.com/'
  git = git + opts.repo + '.git -b ' + opts.branch + (opts.dest ? ' ' + opts.dest : '')

  return spawnCommand(git)
}

function spawnCommand (cmd) {
  var parts = cmd.split(' ')
  spawn({cmd: parts[0], args: parts.slice(1)}, function (err) {
    if (err) {
      console.error(err)
      return process.exit(1)
    }
    process.exit(0)
  })
}
