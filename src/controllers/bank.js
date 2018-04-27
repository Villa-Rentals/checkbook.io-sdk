import Base from './abstract/base'

export default class Bank extends Base {
  /**
   * Create a new bank account
   * @param  {string} routing routing number
   * @param  {string} account account number
   * @param  {string} type    type of bank account (checking or business)
   * @return {promise}        Response from network
   */
  create (routing, account, type) {
    return this.request('POST', '/bank', {
      routing,
      account,
      type
    })
  }

  /**
   * Get all bank accounts
   * @return {promise} Response from the network
   */
  getAll () {
    return this.request('GET', '/bank')
  }

  /**
   * Remove a bank account by identifier
   * @param  {string} id Previously aquired bank id
   * @return {promise}   Response from the network
   */
  remove (id) {
    return this.request('DELETE', `/bank/${id}`)
  }

  /**
   * Create a new bank account
   * @param  {string} id      id returned from the institutions endpoint
   * @param  {string} account account number
   * @param  {string} type    type of bank account (checking or business)
   * @return {promise}        Response from network
   */
  createIAV (id, account, type) {
    return this.request('POST', '/bank/iav', {
      institution_id: id,
      account,
      type
    })
  }

  /**
   * Get all institutions
   * @return {promise} Response from the network
   */
  getInstitutions () {
    return this.request('GET', '/bank/institutions')
  }

  /**
   * Verify a bank account
   * @param  {number} amount_1 First micro deposit amount
   * @param  {number} amount_2 Second micro deposit amount
   * @return {promise}         Response from the network
   */
  verify (amount1, amount2) {
    return this.request('POST', '/bank/verify', {
      amount_1: amount1,
      amount_2: amount2
    })
  }
}
