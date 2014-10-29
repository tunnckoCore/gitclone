/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function clone(repository, destination, branch, ssh) {
  var url = ssh ? 'git@github.com:' : 'https://github.com/'
  url = url + repository + '.git';

  var command = ['clone', url];

  if (destination) {command.push(destination)}
  if (branch) {command.concat(['-b', branch])}

  return [command, repository, destination, branch, ssh];
}
