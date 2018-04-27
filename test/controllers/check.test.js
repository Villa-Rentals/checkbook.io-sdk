'use strict'

import { assert } from 'chai'
import Checkbook from '../../lib/checkbook.io-sdk'
import '../../env'

describe('Given an instance of Check', () => {
  let lib
  let checkDigitalID
  let checkPhysicalID

  before(() => {
    lib = new Checkbook(process.env.REALM, process.env.KEY, process.env.SECRET).check()
  })

  it('create a digital check', () => {
    return lib.createDigital('Unit Test Check', process.env.RECIPIENT, '5.00')
      .then(({data}) => {
        checkDigitalID = data.id
        assert.equal(data.name, 'Unit Test Check')
      })
  })

  it('create a physical check', () => {
    return lib.createPhysical('Unit Test Check', {
      'line_1': '1234 N. 1st Street',
      'line_2': '#56',
      'city': 'San Francisco',
      'state': 'CA',
      'zip': '12345'}, '5.00')
      .then(({data}) => {
        checkPhysicalID = data.id
        assert.equal(data.name, 'Unit Test Check')
      })
  })

  it('get all checks', () => {
    return lib.getAll()
      .then(({data}) => {
        assert.isArray(data.checks)
      })
  })

  it('get a check\'s information', () => {
    return lib.get(checkDigitalID)
      .then(({data}) => {
        assert.equal(data.id, checkDigitalID)
      })
  })

  it('delete a check', () => {
    return lib.remove(checkDigitalID)
      .then(() => {
        assert.isTrue(true)
      })
  })

  after(() => {
    return lib.remove(checkPhysicalID)
  })
})
