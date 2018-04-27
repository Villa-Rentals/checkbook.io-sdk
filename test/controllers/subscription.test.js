'use strict'

import { assert } from 'chai'
import Checkbook from '../../lib/checkbook.io-sdk'
import '../../env'

describe('Given an instance of Subscription', () => {
  let lib
  let checkSubscriptionID
  let invoiceSubscriptionID

  before(() => {
    lib = new Checkbook(process.env.REALM, process.env.KEY, process.env.SECRET).subscription()
  })

  it('create a new check subscription', () => {
    return lib.createCheck(process.env.RECIPIENT, 'Unit test Check Subscription', 5.00, 'WEEKLY')
      .then(({data}) => {
        checkSubscriptionID = data.id
        assert.equal(data.name, 'Unit test Check Subscription')
      })
  })

  it('create a new invoice subscription', () => {
    return lib.createInvoice(process.env.RECIPIENT, 'Unit test Invoice Subscription', 5.00, 'Unit test subscription test for invoices', 'WEEKLY')
      .then(({data}) => {
        invoiceSubscriptionID = data.id
        assert.equal(data.name, 'Unit test Invoice Subscription')
      })
  })

  it('get all subscription', () => {
    return lib.getAll()
      .then(({data}) => {
        assert.isArray(data.subscriptions)
      })
  })

  it('get specific subscription', () => {
    return lib.get(checkSubscriptionID)
      .then(({data}) => {
        assert.equal(data.id, checkSubscriptionID)
      })
  })

  it('update specific subscription', () => {
    return lib.update(checkSubscriptionID, {
      amount: 10.0
    })
      .then(() => {
        assert.isTrue(true)
      })
  })

  it('remove subscription', () => {
    return lib.remove(checkSubscriptionID)
      .then(() => {
        assert.isTrue(true)
      })
  })

  after(() => {
    return lib.remove(invoiceSubscriptionID)
  })
})
