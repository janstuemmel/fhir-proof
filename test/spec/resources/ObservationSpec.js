import t from 'tcomb';

import Observation from '../../../lib/resources/Observation';
import CodeableConcept from '../../../lib/types/CodeableConcept';


describe('Observation', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      var o = Observation({ status: 'final', code: CodeableConcept({ text: 'foo' }) });
    })

    //then
    .not.toThrow();
  });


  it('should error on wrong status code', () => {

    // when
    expect(() => {

      // given
      var o = Observation({ status: 'foo', code: CodeableConcept({ text: 'foo' }) });
    })

    //then
    .toThrow();
  });

});
