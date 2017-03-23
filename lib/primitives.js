// ref: https://www.hl7.org/fhir/datatypes.html

const t = require('tcomb');

module.exports.Integer = t.refinement(t.Number, function(n) {
  return n % 1 === 0;
}, 'Integer');


module.exports.Code = t.refinement(t.String, function(s) {
  var res = s.match(/[^\s]+([\s]?[^\s]+)*/)
  return res[0] === res.input;
}, 'Code');
