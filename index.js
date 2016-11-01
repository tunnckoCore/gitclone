/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function gitclone () {
  var argz = [].slice.call(arguments)
  var cb = argz[argz.length - 1]
  var opts = utils.gitcloneDefaults.apply(this, argz)
  var args = ['clone']
  var param = opts.ssh ? 'git@github.com:' : 'https://github.com/'

  args.push(param + opts.repository + '.git')

  if (opts.branch !== 'master') {
    args.push('-b')
    args.push(opts.branch)
  }
  if (opts.dest) {
    args.push(opts.dest)
  }

  gitclone.options = gitclone.options && typeof gitclone.options === 'object'
    ? gitclone.options
    : { stdio: [null, null, null] }

  var cp = utils.spawn('git', args, gitclone.options)
  if (typeof cb === 'function') {
    utils.capture(cp, cb)
    return
  }
  return cp
}
