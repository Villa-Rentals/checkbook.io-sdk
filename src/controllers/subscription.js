import Base from './abstract/base'

export default class Subscription extends Base {
  /**
   * Get all subscriptions for the user
   * @return {promise} Response from the network
   */
  getAll () {
    return this.request('GET', '/subscription')
  }

  /**
   * Remove a subscription
   * @param  {string} id Previously aquired identifier of subscription
   * @return {promise}   Response from the network
   */
  remove (id) {
    return this.request('DELETE', `/subscription/${id}`)
  }

  /**
   * Get information about specific subscription
   * @param  {string} id Previously aquired identifier of subscription
   * @return {promise}   Response from the network
   */
  get (id) {
    return this.request('GET', `/subscription/${id}`)
  }

  /**
   * Update an existing subscription
   * @param  {string} id      Previously aquired identifier of subscription
   * @param  {object} options Values to be updated
   * @return {promise}        Response from the network
   */
  update (id, options) {
    return this.request('PUT', `/subscription/${id}`, options)
  }

  /**
   * Create a new check subscription
   * @param  {string} recipient email/id of recipient
   * @param  {string} name      Name of recipient
   * @param  {float} amount     Amount for the charge
   * @param  {string} inverval  How often the subscription will recur: WEEKLY, MONTHLY
   * @param  {object} options   Optional options for the request (start_date, description, duration, account)
   * @return {promise}          Response from the network
   */
  createCheck (recipient, name, amount, interval, options = {}) {
    let body = {
      name,
      recipient,
      amount: Number(amount),
      interval
    }
    Object.keys(options).forEach((key) => {
      body[key] = options[key]
    })

    return this.request('POST', '/subscription/check', body)
  }

  /**
   * Create a new invoice subscription
   * @param  {string} recipient email/id of recipient
   * @param  {string} name      Name of recipient
   * @param  {float} amount     Amount for the charge
   * @param  {string} description Description of the charge
   * @param  {string} inverval  How often the subscription will recur: WEEKLY, MONTHLY
   * @param  {object} options   Optional options for the request (start_date, description, duration, account)
   * @return {promise}          Response from the network
   */
  createInvoice (recipient, name, amount, description, interval, options = {}) {
    let body = {
      name,
      recipient,
      amount: Number(amount),
      description,
      interval
    }
    Object.keys(options).forEach((key) => {
      body[key] = options[key]
    })

    return this.request('POST', '/subscription/invoice', body)
  }
}
