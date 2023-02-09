#!/usr/bin/env node

// Clear console
// Thank you ahmadawais
process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');

const reldProfile = require('./reldProfile');

const reld = () => {
  console.log(reldProfile);
  return reldProfile;
}

module.exports = reld;

reld();