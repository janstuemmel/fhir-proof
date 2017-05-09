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



  it('should remove id', () => {

    // given
    var o = Resource({ id: '11', resourceType: 'Observation' });


    // when
    expect(() => {

      var o2 = Resource.update(o, { $remove: [ 'id' ] });

    })

    //then
    .not.toThrow();
  });


  it('should remove meta.lastUpdated', () => {

    // given
    var o = Resource({
      resourceType: 'Observation',
      meta: { lastUpdated: new Date().toISOString() }
    });


    // when
    var o2 = Resource.update(o, {
      meta: {
        $remove: [ 'lastUpdated' ]
      }
    });

    // then
    expect(o2.meta.lastUpdated).toBeUndefined();

  });

});
