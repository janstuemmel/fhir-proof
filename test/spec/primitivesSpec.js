const t = require('tcomb');

import {
  uri,
  code,
  boolean,
  string,
  id,
  oid,
  integer,
  positiveInt,
  unsignedInt,
  date,
  dateTime,
  time
} from '../../lib/primitives';

describe('Primitives', () => {

  it('uri', () => {

    // when
    expect(t.is(1, uri)).toBe(false);

    // when
    expect(t.is('123', uri)).toBe(true);
  });


  it('code', () => {

    // when
    expect(t.is('', code)).toBe(false);
    expect(t.is(' 11111', code)).toBe(false);
    expect(t.is('11111 ', code)).toBe(false);
    expect(t.is('11111   11', code)).toBe(false);

    // when
    expect(t.is('123', code)).toBe(true);
    expect(t.is('123 1 1', code)).toBe(true);
    expect(t.is('123-1--1+', code)).toBe(true);
  });


  it('boolean', () => {

    // when
    expect(t.is('helloworld', boolean)).toBe(false);
    expect(t.is(1, boolean)).toBe(false);
    expect(t.is(1.2, boolean)).toBe(false);
    expect(t.is(null, boolean)).toBe(false);
    expect(t.is(undefined, boolean)).toBe(false);

    // when
    expect(t.is(true, boolean)).toBe(true);
    expect(t.is(false, boolean)).toBe(true);
  });


  it('string', () => {

    // when
    expect(t.is(1, string)).toBe(false);
    expect(t.is(true, string)).toBe(false);
    expect(t.is(1.2, string)).toBe(false);

    // when
    expect(t.is('123', string)).toBe(true);
    expect(t.is('123 113 helloworld', string)).toBe(true);
  });


  it('id', () => {

    // when
    expect(t.is('', id)).toBe(false);
    expect(t.is('1 1', id)).toBe(false);
    expect(t.is('11111111111111111111111111111111111111111111111111111111111111111', id)).toBe(false);
    expect(t.is(true, id)).toBe(false);
    expect(t.is(1.2, id)).toBe(false);

    // when
    expect(t.is('111', id)).toBe(true);
    expect(t.is('1-1-1-1', id)).toBe(true);
    expect(t.is('1.1.1.1', id)).toBe(true);
    // expect(t.is('123-113-helloworld', is)).toBe(true);
  });


  it('integer', () => {

    // when
    expect(t.is(1.1, integer)).toBe(false);
    expect(t.is('123', integer)).toBe(false);
    expect(t.is(true, integer)).toBe(false);
    expect(t.is(null, integer)).toBe(false);
    expect(t.is(undefined, integer)).toBe(false);

    // when
    expect(t.is(1, integer)).toBe(true);
    expect(t.is(2, integer)).toBe(true);
    expect(t.is(0, integer)).toBe(true);
    expect(t.is(-1, integer)).toBe(true);
  });


  it('oid', () => {

    // when
    expect(t.is('', oid)).toBe(false);
    expect(t.is('1.1', oid)).toBe(false);
    expect(t.is('urn:oid:11.1', oid)).toBe(false);
    expect(t.is('urn:oid:3.1', oid)).toBe(false);
    expect(t.is('urn:oid:4.1', oid)).toBe(false);

    // when
    expect(t.is('urn:oid:1.2', oid)).toBe(true);
    expect(t.is('urn:oid:2.2', oid)).toBe(true);
    expect(t.is('urn:oid:2.22.3', oid)).toBe(true);
  });


  it('positive integer', () => {

    // when
    expect(t.is(0, positiveInt)).toBe(false);
    expect(t.is(-1, positiveInt)).toBe(false);
    expect(t.is(1.1, positiveInt)).toBe(false);

    // when
    expect(t.is(1, positiveInt)).toBe(true);
    expect(t.is(2, positiveInt)).toBe(true);
  });


  it('unsigned integer', () => {

    // when
    expect(t.is(-1, unsignedInt)).toBe(false);
    expect(t.is(1.1, unsignedInt)).toBe(false);

    // when
    expect(t.is(0, unsignedInt)).toBe(true);
    expect(t.is(1, unsignedInt)).toBe(true);
    expect(t.is(2, unsignedInt)).toBe(true);
  });


  it('date', () => {

    // when
    expect(t.is('', date)).toBe(false);
    expect(t.is('2000-02-01T23:00:00.000Z', date)).toBe(false);
    expect(t.is('2000-1-01', date)).toBe(false);
    expect(t.is('2000-13-12', date)).toBe(false);
    expect(t.is('2000-12-32', date)).toBe(false);

    // when
    expect(t.is('2000', date)).toBe(true);
    expect(t.is('2000-01', date)).toBe(true);
    expect(t.is('2000-01-01', date)).toBe(true);
  });


  it('dateTime', () => {

    // when
    expect(t.is('', dateTime)).toBe(false);
    expect(t.is('2000-1-01', dateTime)).toBe(false);
    expect(t.is('2000-13-12', dateTime)).toBe(false);
    expect(t.is('2000-12-32', dateTime)).toBe(false);
    expect(t.is('2000-02-01T23:00', dateTime)).toBe(false);
    expect(t.is('2000-02-01T23:00:00', dateTime)).toBe(false);
    expect(t.is('2000-02-01T23:00:00.000', dateTime)).toBe(false);

    // when
    expect(t.is('2000', dateTime)).toBe(true);
    expect(t.is('2000-01', dateTime)).toBe(true);
    expect(t.is('2000-01-01', dateTime)).toBe(true);
    expect(t.is('2000-02-01T23:00:00.000Z', dateTime)).toBe(true);
  });


  it('time', () => {

    // when
    expect(t.is('', time)).toBe(false);
    expect(t.is('2000-1-01', time)).toBe(false);
    expect(t.is('2000-02-01T23:00:00.000', time)).toBe(false);
    expect(t.is('T23:00:00.000', time)).toBe(false);
    expect(t.is('23:00:00.000Z', time)).toBe(false);

    // when
    expect(t.is('23:00:00.000', time)).toBe(true);
    expect(t.is('23:00:00', time)).toBe(true);
  });

});
