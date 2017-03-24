import t from 'tcomb';

import Base from '../../../lib/resources/Base';


describe('Base', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      var o = Base({ resourceType: 'Observation' });
    })

    //then
    .not.toThrow();
  });


  it('should have id and resourceType', () => {

    // when
    var o = Base({ resourceType: 'Observation' });

    // then
    expect(o).toHaveProperty('resourceType');
    expect(o).toHaveProperty('id');
  });


  it('should error on wrong no resourceType', () => {

    // when
    expect(() => {

      // given
      var o = Base({});
    })

    //then
    .toThrow();
  });


  it('should error on wrong id', () => {

    // when
    expect(() => {

      // given
      var o = Base({ id: 1111 });
    })

    //then
    .toThrow();
  });

});
