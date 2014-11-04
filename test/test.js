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
var gitclone = require('../index');
var assert = require('assert');

var clonePromise = gitclone('tunnckoCore/week-seconds')

clonePromise
  .then(function(res) {
    //=> res == see lib/clone.js#L19
    // [command, repository, destination, branch, ssh];
    assert(res[1] === 'tunnckoCore/week-seconds') //repository
  })
  .catch(console.error)
