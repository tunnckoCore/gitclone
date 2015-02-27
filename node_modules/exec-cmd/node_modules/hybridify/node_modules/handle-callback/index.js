/**
 * handle-callback <https://github.com/tunnckoCore/handle-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var isPromise = require('is-promise');

/**
 * Initial step for creating hybrid APIs.
 *
 * @param  {Promise}   `promise`
 * @param  {Function}  `callback`
 * @return {Promise}
 * @api public
 */
module.exports = function handleCallback(promise, callback) {
  if (!isPromise(promise)) {
    throw new TypeError('handle-callback: expect `promise` to be Promise');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('handle-callback: expect `callback` to be function');
  }

  promise.then(function handleCallback_responseFulfilled(res) {
    callback(null, res);
    return res;
  })

  promise.catch(function handleCallback_responseRejected(err) {
    callback(err);
    return err;
  });

  return promise;
};
