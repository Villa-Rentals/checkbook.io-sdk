import Base from './abstract/base'

export default class Invoice extends Base {
  /**
   * Get all invoices
   * @return {promise} Response from the network
   */
  getAll () {
    return this.request('GET', '/invoice')
  }

  /**
   * Create a new invoices
   * @param  {string} recipient   Email or id of recipient
   * @param  {string} name        Name of recipient
   * @param  {float} amount       Amount for invoicing
   * @param  {string} description Description of the invoice
   * @param  {object} options     Aditional options for the request that are considered optional (account, attachment)
   * @return {promise}            Response from the network
   */
  create (recipient, name, amount, description, options = {}) {
    let body = {
      recipient,
      name,
      amount,
      description
    }
    Object.keys(options).forEach((key) => {
      body[key] = options[key]
    })
    return this.request('POST', '/invoice', body)
  }

  /**
   * Remove an invoice
   * @param  {string} id Previously retrieved identifier
   * @return {promise}   Response from the network
   */
  remove (id) {
    return this.request('DELETE', `/invoice/${id}`)
  }

  /**
   * Get information about a specific invoice
   * @param  {string} id Previously aquired identifier of an invoice
   * @return {promise}   Response from the network
   */
  get (id) {
    return this.request('GET', `/invoice/${id}`)
  }
}
