module.exports = {

  Resource: require('./Resource'),
  Reference: require('./Reference'),
  Bundle: require('./Bundle'),
  BundleEntry: require('./Bundle').Entry,

  Resources: require('./resources'),
  Types: require('./types'),
  Primitives: require('./primitives'),

  // util
  fromJSON: require('tcomb/lib/fromJSON')
};
