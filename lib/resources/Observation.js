// ref: https://www.hl7.org/fhir/observation.html

var t = require('tcomb');
var indexOf = require('lodash/indexOf');

var Base = require('./Base');
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

var Observation = Base.extend({
  // required
  status: ObservationStatus,
  code: CodeableConcept,
  // optional
  subject: t.maybe(t.String)
}, {
  defaultProps: {
    resourceType: 'Observation'
  }
});

module.exports = Observation;

module.exports.ObservationStatus = ObservationStatus;