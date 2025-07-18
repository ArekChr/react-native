/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

require('../babel-register').registerForScript();

const buildApiSnapshot = require('./BuildApiSnapshot');
const buildGeneratedTypes = require('./buildGeneratedTypes');
const debug = require('debug');
const {parseArgs, styleText} = require('util');

const config = {
  options: {
    debug: {type: 'boolean'},
    help: {type: 'boolean'},
    withSnapshot: {type: 'boolean'},
    validate: {type: 'boolean'},
  },
};

async function main() {
  const {
    values: {debug: debugEnabled, help, withSnapshot, validate},
    /* $FlowFixMe[incompatible-call] Natural Inference rollout. See
     * https://fburl.com/workplace/6291gfvu */
  } = parseArgs(config);

  if (help) {
    console.log(`
  Usage: node ./scripts/build-types

  Build generated TypeScript types for react-native.

  Options:
    --debug           Enable debug logging.
    --withSnapshot    [Experimental] Include API snapshot generation.
    --validate        Validate if the current API snapshot on disk is up to
                      date. Exits with an error if differences are detected.
    `);
    process.exitCode = 0;
    return;
  }

  if (validate && !withSnapshot) {
    console.error(
      "build-types: '--validate' can only be used with '--withSnapshot'.",
    );
    process.exitCode = 2;
    return;
  }

  if (debugEnabled) {
    debug.enable('build-types:*');
  }

  console.log(
    '\n' +
      styleText(
        ['bold', 'inverse'],
        ' Building generated react-native package types ',
      ) +
      '\n',
  );
  await buildGeneratedTypes();

  if (withSnapshot) {
    console.log(
      styleText(['bold', 'inverse'], ' [Experimental] Building API snapshot ') +
        '\n',
    );
    await buildApiSnapshot(validate);
  }
}

if (require.main === module) {
  void main();
}
