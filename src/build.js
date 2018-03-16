const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

/**
 * Wraps the Fabric dependency in a builder function, means it will be built during the browser runtime
 * which is what it needs. It also removed the global reference.
 */
const contents = readFileSync(resolve(__dirname, '../lib/fabric.js/dist/all.min.js'));

// Replace nodejs require statements - they will never be run anyway
const webpackSafe = contents.toString().replace(/require\('[a-z]+'\)/g, '{}').replace(/require\("[a-z]+"\)/g, '{}');

const wrapped = 'var builder = function() {' + webpackSafe + 'delete this.fabric; return fabric; };' +
  'var built = null; module.exports = function() { return built || (built = builder()); };';

writeFileSync(resolve(__dirname, '../dist/browser.min.js'), wrapped);
