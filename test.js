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
var gitclone = require('./index');
var assert = require('assert');

var clone = gitclone('tunnckoCore/week-seconds')

clone
  .then(function(res) {
    assert(res[1] === 'tunnckoCore/week-seconds')
  })
  .catch(console.error)
