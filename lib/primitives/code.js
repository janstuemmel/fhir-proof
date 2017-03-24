var t = require('tcomb');

module.exports = t.refinement(t.String, function(s) {

  return /^[^\s]+([\s]?[^\s]+)*$/.test(s);

}, 'code');
