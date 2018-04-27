'use strict'

import Check from './controllers/check'
import Invoice from './controllers/invoice'

export default class Checkbook {
  constructor (realm, key, secret) {
    this.realm = realm
    this.key = key
    this.secret = secret
  }

  check () {
    return new Check(this.realm, this.key, this.secret)
  }

  invoice () {
    return new Invoice(this.realm, this.key, this.secret)
  }
}
