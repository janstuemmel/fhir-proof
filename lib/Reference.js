var t = require('tcomb');
var assign = require('lodash/assign');

var Reference = t.struct({
  reference: t.String,
  identifier: t.maybe(t.Object),
  display: t.maybe(t.String),
});

module.exports = Reference;

// TODO: should be removed -> out of scope
module.exports.create = function(type, obj) {

  var reference = [ type.resourceType, type.id ].join('/');

  var props = assign({}, { reference: reference }, obj);

  return Reference(props);
};
