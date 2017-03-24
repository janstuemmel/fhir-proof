// ref: https://www.hl7.org/fhir/observation.html

var t = require('tcomb');
var keys = require('lodash/keys');

var Base = require('./Base');
var CodeableConcept = require('../types/CodeableConcept');
var Quantity = require('../types/Quantity');
var Reference = require('../Reference');
var code = require('../primitives/code');

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

var observationStatusCodes = t.enums.of(keys(STATUS_CODES), 'observationStatusCodes');

var Observation = Base.extend({

  // required
  status: observationStatusCodes,
  code: CodeableConcept,

  // optional
  subject: t.maybe(Reference),
  valueQuantity: t.maybe(Quantity),

}, {
  defaultProps: {
    resourceType: 'Observation'
  }
}, 'Observation');

module.exports = Observation;
