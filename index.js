/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var spawn = require('run-commands')
var defaults = require('gitclone-defaults')

module.exports = function gitclone () {
  var git = 'git clone '
  var opts = defaults.apply(this, arguments)

  git += opts.ssh ? 'git@github.com:' : 'https://github.com/'
  git = git + opts.repo + '.git -b ' + opts.branch + (opts.dest ? ' ' + opts.dest : '')

  return spawn(git, opts, arguments[arguments.length - 1])
}
