import t from 'tcomb';

import Observation, { ObservationStatus } from '../../../lib/resources/Observation';
import CodeableConcept from '../../../lib/types/CodeableConcept';

describe('ObservationStatus', () => {

  var STATUS_CODES = [
    'registered',
    'preliminary',
    'final',
    'amended',
    'corrected',
    'cancelled',
    'entered-in-error',
    'unknown',
  ];

  it('should validate on correct code', () => {

    // when
    STATUS_CODES.forEach((status, i) => {

      // then
      expect(t.is(status, ObservationStatus)).toBe(true);
    });

  });


  it('should error on wrong code', () => {

    // then
    expect(t.is('foo', ObservationStatus)).toBe(false);

  });

});


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
