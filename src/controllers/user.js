import Base from './abstract/base'

export default class User extends Base {
  /**
   * Create a new user
   * @param  {string} id   Unique identifier for the user
   * @param  {string} name Name of the user
   * @return {promise}      Response from the network
   */
  create (id, name) {
    return this.request('POST', '/user', {
      user_id: id,
      name
    })
  }
}
