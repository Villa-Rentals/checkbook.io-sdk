'use strict'

import axios from 'axios'

export default class Base {
  constructor (realm, key, secret) {
    this.realm = realm
    this.key = key
    this.secret = secret
  }

  formatUrl (path) {
    return `https://${this.realm}.checkbook.io/v3${path}`
  }

  request (method, path, params = {}) {
    let headers = {
      'Authorization': `${this.key}:${this.secret}`,
      'Content-Type': 'application/json'
    }
    return axios({
      method: method,
      url: this.formatUrl(path),
      data: params,
      headers: headers
    })
  }
}
