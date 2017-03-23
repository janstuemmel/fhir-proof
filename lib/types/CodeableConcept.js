// reference:
// https://www.hl7.org/fhir/datatypes.html#CodeableConcept

var t = require('tcomb');

var Coding = require('./Coding');

var CodeableConcept = t.struct({
  text: t.String,
  coding: t.maybe(t.list(Coding))
}, 'CodeableConcept');


module.exports = CodeableConcept;
