'use strict'

var utils = require('lazy-cache')(require)
var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Lazily required module dependencies
 */

require('capture-spawn', 'capture')
require('cross-spawn', 'spawn')
require('gitclone-defaults')
require = fn // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Expose `utils` modules
 */

module.exports = utils
