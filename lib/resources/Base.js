var t = require('tcomb');
var uuid = require('uuid/v1');

var id = require('../primitives/id');

var Base = t.struct({
  resourceType: t.String,
  id: id,
}, {
  defaultProps: {
    id: uuid()
  }
});

module.exports = Base;
