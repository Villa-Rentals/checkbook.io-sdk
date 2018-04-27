'use strict'

import Check from './controllers/check'

export default class Checkbook {
  constructor (realm, key, secret) {
    this.realm = realm
    this.key = key
    this.secret = secret
  }

  check () {
    return new Check(this.realm, this.key, this.secret)
  }
}
