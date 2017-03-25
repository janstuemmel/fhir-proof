[![Build Status](https://travis-ci.org/janstuemmel/fhir-proof.svg?branch=master)](https://travis-ci.org/janstuemmel/fhir-proof)
[![Test Coverage](https://codeclimate.com/github/janstuemmel/fhir-proof/badges/coverage.svg)](https://codeclimate.com/github/janstuemmel/fhir-proof/coverage)
[![npm version](https://badge.fury.io/js/fhir-proof.svg)](https://badge.fury.io/js/fhir-proof)

# FhirProof

This library provides a (very small atm) subset of javascript classes for the [HL7 FHIR][fhir] standard.

## Install

```sh
npm install fhir-proof --save
```

run tests with `npm test`

## Usage

```js

import { Observation, CodeableConcept, Coding } from 'fhir-proof';

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

// will throw an error because foo is no observation status code
const o2 = Observation({ status: 'foo' });

```

Please look in the tests directory for more usage examples.


[fhir]: https://www.hl7.org/fhir/
