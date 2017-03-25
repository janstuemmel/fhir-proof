var t = require('tcomb');

module.exports = {
  gender: t.enums.of([
    'male',
    'female',
    'other',
    'unknown'
  ], 'gender')
};
