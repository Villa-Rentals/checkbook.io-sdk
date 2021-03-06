'use strict'

import Check from './controllers/check'
import Invoice from './controllers/invoice'
import Subscription from './controllers/subscription'
import User from './controllers/user'
import Bank from './controllers/bank'

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

  subscription () {
    return new Subscription(this.realm, this.key, this.secret)
  }

  user () {
    return new User(this.realm, this.key, this.secret)
  }

  bank () {
    return new Bank(this.realm, this.key, this.secret)
  }
}
