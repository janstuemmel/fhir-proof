var t = require('tcomb');

module.exports = t.refinement(t.Number, function(n) {

  return n % 1 === 0;

}, 'code');
