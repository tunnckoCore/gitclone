/**
 * gitclone <https://github.com/tunnckoCore/gitclone>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var gitclone = require('./index');

// describe('gitclone:', function() {
//   it('description', function(done) {

//   });
// });
// gitclone('koajs/koa#0.14.0', 'dest/koa/v0.14.0', {token: '7b5890f3df465a499633bbb15bacec113f6e5b2e'});
gitclone({
  user: 'tunnckoCore',
  repo: 'tunnckoCore.github.io',
  branch: 'ava',
}, 'dest/to/ava', {
  ssh: true,
  stdio: [null, null, null],
  token: '7b5890f3df465a499633bbb15bacec113f6e5b2e'
})
.catch(function function_name (err) {
  console.log(err)
})
