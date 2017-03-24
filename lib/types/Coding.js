var t = require('tcomb');
var code = require('../primitives/code');

var Code = t.struct({
  // required
  code: code,
  system: t.String,
  display: t.String,
  // optinal
  version: t.maybe(t.String), // version of system
  userSelected: t.maybe(t.Boolean)
});

module.exports = Code;
