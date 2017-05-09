var t = require('tcomb');

var id = require('./primitives/id');
var uri = require('./primitives/uri');
var code = require('./primitives/code');
var instant = require('./primitives/instant');

// var Coding = require('./types/Coding');

var Meta = t.struct({
  versionId: t.maybe(id),
  lastUpdated: t.maybe(instant),
  profile: t.maybe(uri),
  // security: t.maybe(Coding),
  // tag: t.maybe(Coding),
});

var Resource = t.struct({
  resourceType: t.String,
  id: t.maybe(id),
  meta: t.maybe(Meta),
  implicitRules: t.maybe(uri),
  language: t.maybe(code)
});

module.exports = Resource;

module.exports.Meta = Meta;
