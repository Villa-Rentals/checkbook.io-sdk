'use strict'

import { assert } from 'chai'
import uniqid from 'uniqid'
import Checkbook from '../../lib/checkbook.io-sdk'
import '../../env'

describe('Given an instance of User', () => {
  let lib

  before(() => {
    lib = new Checkbook(process.env.REALM, process.env.KEY, process.env.SECRET).user()
  })

  it('create a new user', () => {
    let id = uniqid()
    return lib.create(id, 'Test User')
      .then(({data}) => {
        assert.equal(data.user_id, id)
      })
  })
})
