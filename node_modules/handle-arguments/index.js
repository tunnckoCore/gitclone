/**
 * handle-arguments <https://github.com/tunnckoCore/handle-arguments>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var slice = require('array-slice');
var isArguments = require('is-arguments');

/**
 * Commonly used handling of Arguments object
 *
 * **Example:**
 *
 * ```js
 * var handleArguments = require('handle-arguments');
 *
 * function fixture() {
 *   var argz = handleArguments(arguments);
 *   return argz;
 * }
 *
 * console.log(fixture(1, 2, 3));
 * //=> {callback: [Function: defaultHandleArgumentsCallback],
 * // arguments: [1, 2, 3], args: [1, 2, 3]}
 * //=> [Function: defaultHandleArgumentsCallback] is empty function (noop)
 *
 * console.log(fixture(1, 2, function cb() {}));
 * //=> {callback: [Function: cb], arguments: [1, 2], args: [1, 2]}
 * ```
 *
 * @name handleArguments
 * @param  {Arguments} `<argsObject>` Arguments object
 * @return {Object} with properties `callback`, `cb` and `arguments` with `args` alias
 * @api public
 */
module.exports = function handleArguments(argsObject) {
  if (!isArguments(argsObject)) {
    throw new TypeError('handle-arguments: expect only Arguments object');
  }
  var callback = function defaultHandleArgumentsCallback() {};
  var args = slice(argsObject);
  var len = args.length;
  var last = args[len - 1];

  if (typeof last === 'function') {
    callback = last;
    args = slice(args, 0, -1);
  }

  return {
    callback: callback,
    cb: callback,
    arguments: args,
    args: args
  };
};
