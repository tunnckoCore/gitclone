#!/usr/bin/env node
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

var spawn = require('child_process').spawn
var gitclone = require('../lib/gitclone');
var argv = require('minimist')(process.argv.slice(2));

var repo    = argv._[0] || argv.r || argv.repo;
var dest    = argv._[1] || argv.d || argv.dest;
var branch  = argv._[2] || argv.b || argv.branch;
var ssh     = argv._[3] || argv.s || argv.ssh;

var flags = gitclone(repo, dest, branch, ssh)[0];

var proc = spawn('git', flags, {
  stdio: 'inherit'
})
proc.on('error', function(err) {
  console.error(err)
})
proc.on('exit', function (code) {
  if (code != 0) {console.error(code)}
  process.exit(code)
})
