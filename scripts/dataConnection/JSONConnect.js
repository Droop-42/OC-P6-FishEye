// eslint-disable-next-line no-unused-vars
class JSONConnect {
  /**
     *
     * @param {string} url
     */
  constructor (url) {
    this._url = url
  }

  async get () {
    const data = fetch('data/photographers.json')
      .then(response => {
        return response.json()
      }
      )
      .then(data => {
        return data
      }
      )
    return data
  }
}

// export { JSONConnect }
