import t from 'tcomb';

import OperationOutcome from '../../../lib/http/OperationOutcome';
import CodeableConcept from '../../../lib/types/CodeableConcept';


describe('Observation', () => {

  it('should validate', () => {

    // when
    expect(() => {

      // given
      var o = OperationOutcome({
        issue: [
          {
            severity: 'error',
            code: 'ERR_CODE',
            details: CodeableConcept({ text: 'failure' })
          }
        ]
      });
    })

    //then
    .not.toThrow();
  });


  it('should error on wrong severity', () => {

    // when
    expect(() => {

      // given
      var o = OperationOutcome({
        issue: [
          {
            severity: 'foo', // FAIL
            code: 'ERR_CODE',
            details: CodeableConcept({ text: 'failure' })
          }
        ]
      });
    })

    //then
    .toThrow();
  });

});
