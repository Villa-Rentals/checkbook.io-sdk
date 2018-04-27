'use strict'

import { assert } from 'chai'
import Checkbook from '../../lib/checkbook.io-sdk'
import '../../env'

describe('Given an instance of Invoice', () => {
  let lib
  let invoiceID

  before(() => {
    lib = new Checkbook(process.env.REALM, process.env.KEY, process.env.SECRET).invoice()
  })

  it('create an invoice', () => {
    return lib.create(process.env.RECIPIENT, 'Unit test Invoice', 5.00, 'Invoice created from unit tests')
      .then(({data}) => {
        invoiceID = data.id
        assert.equal(data.name, 'Unit test Invoice')
      })
  })

  it('get all invoices', () => {
    return lib.getAll()
      .then(({data}) => {
        assert.isArray(data.invoices)
      })
  })

  it('get an invoice\'s information', () => {
    return lib.get(invoiceID)
      .then(({data}) => {
        assert.equal(data.id, invoiceID)
      })
  })

  it('delete an invoice', () => {
    return lib.remove(invoiceID)
      .then(() => {
        assert.isTrue(true)
      })
  })
})
