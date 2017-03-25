var t = require('tcomb');

module.exports = t.refinement(t.String, function(s){
  return t.is(s, t.String);
}, 'uri');
