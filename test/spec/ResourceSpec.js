import t from 'tcomb';

import Resource from '../../lib/Resource';


describe('Resource', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      var o = Resource({ resourceType: 'Observation' });
    })

    //then
    .not.toThrow();
  });


  it('should have id and resourceType', () => {

    // when
    var o = Resource({ resourceType: 'Observation' });

    // then
    expect(o).toHaveProperty('resourceType');
    expect(o).toHaveProperty('id');
  });


  it('should error on wrong no resourceType', () => {

    // when
    expect(() => {

      // given
      var o = Resource({});
    })

    //then
    .toThrow();
  });


  it('should error on wrong id', () => {

    // when
    expect(() => {

      // given
      var o = Resource({ id: 1111 });
    })

    //then
    .toThrow();
  });

});
