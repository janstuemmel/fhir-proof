module.exports = {
  // resources
  Base: require('./resources/Base'),
  Observation: require('./resources/Observation'),
  Patient: require('./resources/Patient'),
  // types
  CodeableConcept: require('./types/CodeableConcept'),
  Coding: require('./types/Coding'),
  // primitives
  Code: require('./primitives').Code,
  Integer: require('./primitives').Integer,
};
