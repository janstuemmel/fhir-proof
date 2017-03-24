var t = require('tcomb');

module.exports = t.refinement(t.String, function(s){

  return /^-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?$/.test(s);

}, 'date');
