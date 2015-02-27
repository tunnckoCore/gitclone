/**
 * async-exec-cmd <https://github.com/tunnckoCore/async-exec-cmd>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var isEmptyFunction = require('is-empty-function');
var handleArguments = require('handle-arguments');
var handleErrors = require('handle-errors')('async-exec-cmd');
var union = require('arr-union');
var spawn = require('cross-spawn');
var typeOf = require('kind-of');

var error = handleErrors.error;
var type = handleErrors.type;

/**
 * > Async execute command via spawn. All arguments are rebuilt, merged, structured, normalized
 * and after all passed to [cross-spawn][cross-spawn], which actually is Node's `spawn`.
 *
 * **Example:**
 *
 * ```js
 * var asyncExecCmd = require('async-exec-cmd');
 * var promise = asyncExecCmd('echo', [
 *   'hello world'
 * ], function __cb(err, res) {
 *   // as usual
 * })
 * ```
 *
 * @name asyncExecCmd
 * @param  {String} `<cmd>`
 * @param  {Array}  `[args]`
 * @param  {Object} `[opts]`
 * @param  {Function} `<callback>`
 * @return {Stream} actually what `child_process.spawn` returns
 * @api public
 */
module.exports = function asyncExecCmd() {
  var argz = handleArguments(arguments);
  argz = checkArguments(argz);

  if (argz) {
    argz = buildArguments(argz);
    return buildSpawn(argz.cmd, argz.args, argz.opts, argz.callback);
  }

  return;
};

/**
 * > Create flexible arguments - check types.
 *
 * @param  {Object} `argz`
 * @return {Object}
 * @api private
 */
function checkArguments(argz) {
  if (!argz.args.length) {
    return error('first argument cant be function');
  }

  if (isEmptyFunction(argz.cb.toString())) {
    return error('should have `callback` (non empty callback)');
  }

  if (typeOf(argz.args[0]) !== 'string') {
    return type('expect `cmd` be string', argz.cb);
  }

  if (typeOf(argz.args[1]) === 'object') {
    argz.args[2] = argz.args[1];
    argz.args[1] = [];
  }

  if (typeOf(argz.args[2]) !== 'object') {
    argz.args[2] = {};
  }

  return {
    cmd: argz.args[0],
    args: argz.args[1],
    opts: argz.args[2],
    callback: argz.cb
  };
}

/**
 * > Build/structure already checked arguments.
 *
 * @param  {Object} `argz`
 * @return {Object}
 * @api private
 */
function buildArguments(argz) {
  var args = argz.cmd.split(' ');
  argz.cmd = args.shift();
  argz.args = union([], argz.args || [], args || [])
  return argz;
}

/**
 * > Handle cross-spawn.
 *
 * @param  {String} `cmd`
 * @param  {Array} `args`
 * @param  {Object} `opts`
 * @param  {Function} `callback`
 * @return {Stream} actually what `child_process.spawn` returns
 * @api private
 */
function buildSpawn(cmd, args, opts, callback) {
  var proc = spawn(cmd, args, opts);
  var buffer = new Buffer('');
  var cmdError = {};

  cmd = cmd + ' ' + args.join(' ');

  if (proc.stdout) {
    proc.stdout.on('data', function indexOnData(data) {
      buffer = Buffer.concat([buffer, data])
    });
  }

  proc
  .on('error', function spawnOnError(err) {
    cmdError = new CommandError({
      command: cmd,
      message: err.message ? err.message : undefined,
      stack: err.stack ? err.stack : undefined,
      buffer: buffer ? buffer : undefined,
      status: err.status ? err.status : 1
    });
  })
  .on('close', function spawnOnClose(code) {
    if (code === 0) {
      callback(null, buffer.toString().trim(), code, buffer);
      return;
    }

    cmdError = new CommandError({
      command: cmd,
      message: cmdError.message ? cmdError.message : undefined,
      stack: cmdError.stack ? cmdError.stack : undefined,
      buffer: cmdError.buffer ? cmdError.buffer : buffer,
      status: cmdError.status ? cmdError.status : code
    });
    callback(cmdError, undefined, code, undefined);
  })

  return proc;
}

/**
 * > Construct `CommandError`.
 *
 * @param {Object} `err`
 * @api private
 */
function CommandError(err) {
  this.name = 'CommandError';
  this.command = err.command;
  this.message = err.message;
  this.stack = err.stack;
  this.buffer = err.buffer;
  this.status = err.status;
  Error.captureStackTrace(this, CommandError);
}

CommandError.prototype = Object.create(Error.prototype);
CommandError.prototype.constructor = CommandError;
