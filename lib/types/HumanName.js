// ref: https://www.hl7.org/fhir/datatypes.html#HumanName

var t = require('tcomb');
var indexOf = require('lodash/indexOf');

var code = require('../primitives/code');

var HumanNameUseCode = t.enums.of([
  'usual',
  'official',
  'temp',
  'nickname',
  'anonymous',
  'old',
  'maiden'
], 'humanNameUseCodes');

var HumanName = t.struct({
  use: t.maybe(HumanNameUseCode),
  text: t.maybe(t.String),
  family: t.maybe(t.String),
  given: t.maybe(t.list(t.String)),
  prefix: t.maybe(t.list(t.String)),
  suffix: t.maybe(t.list(t.String)),
  // period: Period
}, 'HumanName');

module.exports = HumanName;
