// ref: https://www.hl7.org/fhir/observation.html

var t = require('tcomb');
var keys = require('lodash/keys');

var Resource = require('../Resource');
var CodeableConcept = require('../types/CodeableConcept');
var Quantity = require('../types/Quantity');
var Reference = require('../Reference');
var DateTime = require('../primitives/dateTime');

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

var Observation = Resource.extend({

  // required
  status: observationStatusCodes,
  code: CodeableConcept,

  // optional
  subject: t.maybe(Reference),
  valueQuantity: t.maybe(Quantity),
  effectiveDateTime: t.maybe(DateTime),

}, {
  defaultProps: {
    resourceType: 'Observation'
  }
}, 'Observation');

module.exports = Observation;
