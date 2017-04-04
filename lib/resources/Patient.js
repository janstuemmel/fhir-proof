// ref: https://www.hl7.org/fhir/observation.html

var t = require('tcomb');

var Resource = require('../Resource');
var HumanName = require('../types/HumanName');
var gender = require('../util/enums').gender;

var Patient = Resource.extend({
  // optional
  name: t.maybe(t.list(HumanName)),
  gender: t.maybe(gender),
}, {
  defaultProps: {
    resourceType: 'Patient'
  }
}, 'Patient');


module.exports = Patient;
