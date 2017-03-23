const CodeableConcept = require('../../../lib/types/CodeableConcept.js');
const Coding = require('../../../lib/types/Coding.js');

describe('CodeableConcept', () => {

  it('should validate', () => {

    // given
    let cc = CodeableConcept({ text: 'Height' });

    // then
    expect(cc).toMatchObject({ text: 'Height' })
  });


  it('should error on wrong type', () => {

    // when
    expect(() => {

      // given
      let cc = CodeableConcept({ text: 111 });
    })

    // then
    .toThrow(/Invalid value 111 supplied to CodeableConcept/);
  });


  it('should error without text field', () => {

    // when
    expect(() => {

      // given
      let cc = CodeableConcept();
    })

    // then
    .toThrow(/Invalid value undefined supplied to CodeableConcept/);
  });


  it('should error with wrong coding type', () => {

    // when
    expect(() => {

      // given
      let cc = CodeableConcept({ text: 'Height', coding: [ 1, 2 ] });
    })

    // then
    .toThrow();
  });


  it('should validate with empty coding', () => {

    // when
    expect(() => {

      // given
      let cc = CodeableConcept({ text: 'Height', coding: [ ] });
    })

    // then
    .not.toThrow();
  });


  it('should validate with Coding', () => {

    // given
    let c = Coding({
      system: 'http://loinc.org',
      code: '8302-2',
      display: 'height'
    });

    let cc = CodeableConcept({ text: 'Height', coding: [ c ] });

    // then
    expect(cc).toMatchObject({
      text: 'Height',
      coding: expect.arrayContaining([c])
    });

  });
});
