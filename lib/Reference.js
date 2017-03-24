var t = require('tcomb');

var referenceResourceType = function(types) {
  return t.refinement(t.Any, function(ty) {

    for (var i=0; i<types.length; i++) {
      if (t.is(ty, types[i])) {
        return true;
      }
    }

    return false;

  }, 'referenceResourceType');
}

function Reference(types, referenceType) {

  return t.struct({
    reference: referenceResourceType(types),
    identifier: t.maybe(t.Object),
    display: t.maybe(t.String),
  }, referenceType);
}

module.exports = Reference;
