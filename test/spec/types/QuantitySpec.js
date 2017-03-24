import Quantity from '../../../lib/types/Quantity';

describe('Quantity', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      const p = Quantity({ comparator: '<' });
    })

    // then
    .not.toThrow();
  });


  it('should error on wrong comparator', () => {

    // when
    expect(() => {

      // given
      const p = Quantity({ comparator: 'foo' });
    })

    // then
    .toThrow(/Invalid value/);
  });

});
