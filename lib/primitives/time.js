var t = require('tcomb');

module.exports = t.refinement(t.String, function(s){

  return /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?$/.test(s);

}, 'time');
