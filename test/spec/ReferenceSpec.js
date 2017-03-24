import t from 'tcomb';

import Reference from '../../lib/Reference';


describe('Reference', () => {

  var Subject1, Subject2, Resource, Ref, WrongSubject;

  beforeEach(() => {

    Subject1 = t.struct({ id: t.Number }, 'Subject1');
    Subject2 = t.struct({ id: t.Number }, 'Subject2');
    WrongSubject = t.struct({ id: t.Number }, 'WrongSubject1');

    Ref = Reference([ Subject1, Subject2 ], 'SubjectRef');

    Resource = t.struct({ subj: Ref }, 'Resource');
  });

  it('...', () => {

    // given
    const John = Subject1({ id: 1 });
    const ref = Ref({ reference: John });
    const Observation1 = Resource({ subj: ref });

    console.log(Observation1);

  });


  it.skip('...2', () => {


    expect(() => {

      const John = WrongSubject({ id: 1 });
      const ref = Ref({ reference: John });
    })

    .toThrow()

  });

});
