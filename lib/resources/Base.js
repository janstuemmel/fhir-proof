var t = require('tcomb');
var uuid = require('uuid/v1');

var Base = t.struct({
  resourceType: t.String,
  id: t.String,
}, {
  defaultProps: {
    id: uuid()
  }
});

module.exports = Base;
