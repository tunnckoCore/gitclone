/**
 * handle-errors <https://github.com/tunnckoCore/handle-errors>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var fmt = require('util').format;

/**
 * > Useful when you have [hybrid api][hybridify] like [gitclone][gitclone].
 * If you work with promises then you will want to throw the errors,
 * when callback is in use will handle it in 1st argument.
 *
 * **Example:**
 *
 * ```js
 * var handleErrors = require('handle-errors')('my-pkg');
 *
 * handleErrors.error('some err message here');
 * //=> throws 'Error: [my-pkg] some error message here'
 *
 * function _cb(err) {
 *   // err instanceof Error
 *   console.log(err.toString());
 *   //=> 'Error: [my-pkg] some error message here'
 *
 *   console.log(err.shortStack);
 *   //=> undefined
 * }
 *
 * handleErrors.error('some err message here', _cb);
 * ```
 *
 * @name handleErrors
 * @param  {String} `label` some marker (package name?)
 * @param  {Boolean} `stack` when `true` adds `.shortStack` property to the error object
 * @return {Error|TypeError} throws it or return `callback` function
 * @api public
 */
module.exports = function handleErrors(label, stack) {
  checkType(label, 'label');

  return {
    error: newError,
    type: newTypeError
  };

  function newError(err, cb) {
    checkType(err, 'msg');
    err = new Error(fmt('[%s] %s', label, err));
    err = stack ? buildShortStack(err) : err;

    if (!cb) {
      throw err;
    }
    return cb(err);
  }

  function newTypeError(err, cb) {
    checkType(err, 'msg');
    err = new TypeError(fmt('[%s] %s', label, err));
    err = stack ? buildShortStack(err) : err;

    if (!cb) {
      throw err;
    }
    return cb(err);
  }
};

function buildShortStack(err) {
  var shortStack = err.stack.split('\n').filter(Boolean).filter(function(line) {
    return /\//.test(line)
  });

  shortStack[0] = err.toString();
  err.shortStack = shortStack.join('\n');
  return err;
}

function checkType(arg, name) {
  if (!arg) {
    throw new Error('[handle-errors] should have `' + name + '`')
  }
  if (typeof arg !== 'string') {
    throw new TypeError('[handle-errors] expect `' + name + '` be string')
  }
}
