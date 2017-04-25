var t = require('tcomb');

var Resource = require('./Resource');

var Entry = t.struct({
  resource: t.maybe(Resource)
});

var Bundle = Resource.extend({
  type: t.enums.of('document message transaction transaction-response batch batch-response history searchset collection'),
  entry: t.list(Entry)
}, {
  defaultProps: {
    resourceType: 'Bundle'
  }
}, 'Bundle');


module.exports = Bundle;

module.exports.Entry = Entry;
