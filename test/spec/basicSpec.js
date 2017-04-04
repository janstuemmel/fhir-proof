import { Observation, CodeableConcept, Coding, Patient, HumanName } from '../../'; // 'fhir-proof'

const t = require('tcomb');

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


  it('refine Patient', () => {

    // given

    // Patient name is not undefined and has at least one HumanName
    var PatientExtra = t.refinement(Patient, function(p) {
      return p.name !== undefined && p.name.length > 0;
    })

    // when
    var patient2 = PatientExtra({ name: [] })
    console.log(patient2);


  })

});
