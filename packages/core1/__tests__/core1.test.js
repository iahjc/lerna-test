'use strict';

const core1 = require('../lib');
const assert = require('assert').strict;

assert.strictEqual(core1(), 'Hello from core1');
console.info("core1 tests passed");
