var t = require('tcomb');

module.exports = t.refinement(t.String, function(s){

  return /^[A-Za-z0-9\-\.]{1,64}$/.test(s);

}, 'id');
