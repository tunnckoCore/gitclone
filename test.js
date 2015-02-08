/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var gitclone = require('./index');

// gitclone('koajs/koa#0.14.0', 'releases/v0.14.0')
// gitclone('koajs/koa#0.15.0', 'releases/v0.15.0')
// gitclone('koajs/koa#0.16.0', 'releases/v0.16.0')
gitclone('tunnckoCore/koa-better-body#yfghj24', 'koa', true);
