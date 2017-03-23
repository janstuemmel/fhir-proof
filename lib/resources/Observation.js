// ref: https://www.hl7.org/fhir/observation.html

var t = require('tcomb');
var indexOf = require('lodash/indexOf');

var CodeableConcept = require('../types/CodeableConcept');
var Code = require('../primitives').Code;

var STATUS_CODES = {
  'registered': {},
  'preliminary': {},
  'final': {},
  'amended': {},
  'corrected': {},
  'cancelled': {},
  'entered-in-error': {},
  'unknown': {},
};

var ObservationStatus = t.refinement(Code, function(c) {
  return Object.keys(STATUS_CODES).indexOf(c) !== -1;
}, 'ObservationStatus');

var Observation = t.struct({
  // required
  status: ObservationStatus,
  code: CodeableConcept,
  // optional
});

module.exports = Observation;

module.exports.ObservationStatus = ObservationStatus;
