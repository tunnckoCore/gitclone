/*!
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var spawn = require('spawn-commands')
var parse = require('parse-github-short-url')
var stringify = require('stringify-github-short-url')

module.exports = function gitclone (owner, name, branch, ssh) {
  var git = 'git clone '
  var res = null

  if (typeof owner === 'string' && !arguments.length) {
    res = parse(owner)
  } else {
    res = parse(stringify.apply(this, arguments))
  }

  res.ssh = owner.ssh || name && name.ssh || false
  res.ssh = res.ssh || typeof name === 'boolean' && name || false
  res.ssh = res.ssh || typeof branch === 'boolean' && branch || false
  res.ssh = res.ssh || typeof ssh === 'boolean' && ssh || false
  res.ssh = res.ssh || branch && branch.ssh || false
  res.branch = name && name.branch || branch && branch.branch || res.branch || false
  res.branch = typeof res.branch === 'string' && res.branch || 'master'
  res.dest = owner && owner.dest || name && name.dest || false
  res.dest = res.dest || branch && branch.dest || false
  res.dest = res.dest || ssh && ssh.dest || false
  res.dest = typeof res.dest === 'string' && res.dest || false

  git += res.ssh ? 'git@github.com:' : 'https://github.com/'
  git = git + res.repo + '.git -b ' + res.branch + (res.dest ? ' ' + res.dest : '')

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
