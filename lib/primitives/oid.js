var t = require('tcomb');

module.exports = t.refinement(t.String, function(s) {

  return /^urn:oid:[0-2](\.[1-9]\d*)+$/.test(s);

}, 'code');
