var t = require('tcomb');
var Code = require('../primitives').Code;

var Code = t.struct({
  // required
  code: Code,
  system: t.String,
  display: t.String,
  // optinal
  version: t.maybe(t.String), // version of system
  userSelected: t.maybe(t.Boolean)
});

module.exports = Code;
