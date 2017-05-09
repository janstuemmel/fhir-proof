var t = require('tcomb');

var code = require('../primitives/code');
var CodeableConcept = require('../types/CodeableConcept');

var Issue = t.struct({
  severity: t.enums.of('fatal error warning information'),
  code: code,
  details: t.maybe(CodeableConcept)
});

var OperationOutcome = t.struct({
  issue: t.list(Issue)
});

module.exports = OperationOutcome;
