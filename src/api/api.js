import Server from './server'

class API extends Server {
  async getBalance (params = {}) {
    try {
      let result = await this.axios('get', '/login', params)
      if (result && (result.data instanceof Object) && result.http_code === 200) {
        return result.data.data || {}
      } else {

      }
    } catch (err) {
      throw err
    }
  }
}

export default new API()
