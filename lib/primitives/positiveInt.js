var t = require('tcomb');
var integer = require('./integer');

module.exports = t.refinement(integer, function(n) {

  return n >= 1;

}, 'code');
