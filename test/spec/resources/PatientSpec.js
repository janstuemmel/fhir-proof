import Patient from '../../../lib/resources/Patient';
import HumanName from '../../../lib/types/HumanName';

describe('Patient', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      const p = Patient({
        gender: 'male',
        name: [ HumanName({ family: 'Doe' }) ],
      });
    })

    // then
    .not.toThrow();
  });


  it('should error on wrong gender', () => {

    // when
    expect(() => {

      // given
      const p = Patient({ gender: 'foo' });
    })

    // then
    .toThrow(/Invalid value/);
  });

});
