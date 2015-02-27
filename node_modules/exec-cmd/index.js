/**
 * exec-cmd <https://github.com/tunnckoCore/exec-cmd>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var asyncExecCmd = require('async-exec-cmd');
var hybridify = require('hybridify');

/**
 * > Hybrid execute command via spawn. Actually this is [hybridify wrapper][hybridify]
 * for [async-exec-cmd][async-exec-cmd], so for more detailed information
 * see [async-exec-cmd readme][async-readme]
 *
 * @name execCmd
 * @param  {String}          `<cmd>`
 * @param  {Array|Function}  `<args>`
 * @param  {Object|Function} `[opts]`
 * @param  {Function}        `[callback]`
 * @return {Promise}
 * @api public
 */
module.exports = hybridify(asyncExecCmd);
