import { Resources, Types } from '../../'; // 'fhir-proof'

const { Observation, Patient } = Resources;
const { CodeableConcept, Coding, HumanName } = Types;

describe('Basic tests, examples, etc', () => {

  it('Readme example', () => {

    // given
    const data = {
      "status":"final",
      "code": {
        "text":"Height",
        "coding": [
          {
            "code":"8302-2",
            "system":"http://loinc.org",
            "display":"height"
          }
        ]
      }
    };

    // when
    const c = Coding({
      system: 'http://loinc.org',
      code: '8302-2',
      display: 'height'
    });

    const cc = CodeableConcept({
      text: 'Height',
      coding: [ c ]
    });

    const o = Observation({
      id: '1',
      status: 'final',
      code: cc
    });

    // then
    expect(o).toMatchObject(data);
  });


  it('Readme example error', () => {

    // when
    expect(() => {

      // given
      const o2 = Observation({ status: 'foo' });
    })

    // then
    .toThrow();

  });


});
