import t from 'tcomb';

import Bundle from '../../lib/Bundle';


describe('Resource', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      var o = Bundle({ type: 'document', entry: [] });
    })

    //then
    .not.toThrow();
  });


  it('should error on wrong type', () => {

    // when
    expect(() => {

      // given
      var o = Bundle({ type: 'foo', entry: [] });
    })

    //then
    .toThrow();
  });


  it('should have right resourceType', () => {

    // when
    var o = Bundle({ type: 'document', entry: [] });

    // then
    expect(o.resourceType).toBe('Bundle');
  });


});
