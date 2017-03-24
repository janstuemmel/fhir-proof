import HumanName from '../../../lib/types/HumanName';

describe('Patient', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      const p = HumanName({ use: 'nickname' });
    })

    // then
    .not.toThrow();
  });


  it('should error on wrong useCode', () => {

    // when
    expect(() => {

      // given
      const p = HumanName({ use: 'foo' });
    })

    // then
    .toThrow(/Invalid value/);
  });

});
