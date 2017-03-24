var t = require('tcomb');

var decimal = require('../primitives/decimal');
var code = require('../primitives/code');
var string = require('../primitives/string');

var Quantity = t.struct({
  value: t.maybe(decimal),
  comparator: t.maybe(t.enums.of('< <= >= >')),
  unit: t.maybe(string),
  system: t.maybe(string),
  code: t.maybe(code),
});

module.exports = Quantity;
