'use strict'

import { assert } from 'chai'
import Checkbook from '../lib/checkbook.io-sdk'
import '../env'

describe('Given an instance of Library', () => {
  let lib

  before(() => {
    lib = new Checkbook(process.env.REALM, process.env.KEY, process.env.SECRET)
  })

  it('constructor works', () => {
    assert.equal(lib.realm, process.env.REALM)
    assert.equal(lib.key, process.env.KEY)
    assert.equal(lib.secret, process.env.SECRET)
  })

  it('returns the Check object', () => {
    let check = lib.check()

    assert.equal(check.realm, process.env.REALM)
    assert.equal(check.key, process.env.KEY)
    assert.equal(check.secret, process.env.SECRET)
  })
})
