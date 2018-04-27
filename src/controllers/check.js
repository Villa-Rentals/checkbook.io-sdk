import Base from './abstract/base'

export default class Check extends Base {

  /**
   * Remove a check by identifier
   * @param  {string} id Previously aquired identifier of a check
   * @return {promise}   Response from the network
   */
  remove(id) {
    return this.request('DELETE', `/check/${id}`)
  }

  /**
   * Get all checks for the user
   * @return {promise} Reponse from the network
   */
  getAll() {
    return this.request('GET', '/check')
  }

  /**
   * Get information about a check by identifier
   * @param  {string} id Previously aquired identifier of check
   * @return {promise}   Response from the network
   */
  get(id) {
    return this.request('GET', `/check/${id}`)
  }

  /**
   * Create a new digital check
   * @param  {String} name      Name of the recipient
   * @param  {String} email     Email of the recipient
   * @param  {number} amount    Amount to send the recipient
   * @return {promise}          Response from the network
   */
  createDigital(name, email, amount) {
    return this.request('POST', '/check/digital', {
      name,
      recipient: email,
      amount: Number(amount)
    })
  }

  /**
   * Create a new physical check
   * @param  {String} name    Name of the recipient
   * @param  {object} address address of the recipient ({"line_1": "1234 N. 1st Street","line_2": "#56","city": "San Francisco","state": "CA","zip": "12345"})
   * @param  {number} amount  Amount to send the recipient
   * @return {promise}         Response from the network
   */
  createPhysical(name, address, amount) {
    return this.request('POST', '/check/physical', {
      name,
      recipient: address,
      amount: Number(amount)
    })
  }
}
