var t = require('tcomb');
var uuid = require('uuid/v1');

var Base = t.struct({
  id: t.String
}, {
  defaultProps: {
    id: uuid()
  }
});

module.exports = Base;
