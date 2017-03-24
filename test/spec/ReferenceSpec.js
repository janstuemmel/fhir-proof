import t from 'tcomb';

import Reference from '../../lib/Reference';
import BaseResource from '../../lib/resources/Base';


describe('Reference', () => {

  var subj, Resource;

  beforeEach(() => {

    // test structure
    Resource = BaseResource.extend({ subj: Reference });

    // test object
    subj = BaseResource({ id: '1', resourceType: 'TestSubject' });
  });


  it('should create refernce on a resource', () => {

    // given
    var ref = Reference.create(subj);

    // when
    var res = Resource({ subj: ref, resourceType: 'TestResource' });

    // then
    expect(res).toMatchObject({ subj: {
      reference: 'TestSubject/1'
    }});

  });

});
