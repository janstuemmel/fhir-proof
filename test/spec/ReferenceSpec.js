import t from 'tcomb';

import Resource from '../../lib/Resource';
import Reference from '../../lib/Reference';


describe('Reference', () => {

  var subj, TestResource;

  beforeEach(() => {

    // test structure
    TestResource = Resource.extend({ subj: Reference });

    // test object
    subj = Resource({ id: '1', resourceType: 'TestSubject' });
  });


  it('should create reference on a resource', () => {

    // given
    var ref = Reference.create(subj);

    // when
    var res = TestResource({ subj: ref, resourceType: 'TestResource' });

    // then
    expect(res).toMatchObject({ subj: {
      reference: 'TestSubject/1'
    }});

  });

});
