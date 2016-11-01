/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Clones github repository, optionally
 * pass destination folder. By defaults uses HTTPS
 * to clone the repository. If you want SSH clone
 * you should pass second, third or fourth argument
 * boolean `true`, or object `{ssh: true}`.
 * Pattern can be `user/repo#branch` as first
 * argument. Or first argument `user`, second
 * argument `repo`, third `branch`, fourth `ssh`.
 *
 * **Hint:** All arguments are super flexible and they are handled
 * absolutely directly with [gitclone-defaults][],
 * so read its [API docs](https://github.com/tunnckoCore/gitclone-defaults#api).
 * In addition, you also can pass `callback` as last argument, otherwise
 * it will return Spawn stream.
 *
 * **Example**
 *
 * ```js
 * const gitclone = require('gitclone')
 *
 * // clones with SSH
 * gitclone('node-minibase/minibase', true)
 *
 * // clone with HTTPS
 * gitclone('node-minibase/minibase', (err) => {
 *   if (err) return console.error(err)
 * })
 *
 * // clone `dev` branch from `verbose/verb` repo
 * gitclone('verbose/verb#dev', console.log)
 *
 * // clone `jonschlinkert/nanomatch` with SSH
 * gitclone('jonchlinkert', 'nanomatch', true)
 *
 * // clone to different destination folder
 * gitclone('hybridables/always-done', { dest: 'foobar' })
 *
 * // clone SSH + dest + branch
 * gitclone('verbose/verb', { dest: 'verb0.9.0', branch: 'dev', ssh: true })
 * ```
 *
 * @param  {Function} `[callback]` optional, if not given, returns a stream
 * @return {Stream} if not `callback` given as last argument - a Spawn stream
 * @api public
 */

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
