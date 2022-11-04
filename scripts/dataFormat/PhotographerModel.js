/* eslint-disable no-unused-vars */

// Format data from json file
class PhotographerModel {
  constructor (data) {
    this._name = data.name
    this._id = data.id
    this._city = data.city
    this._country = data.country
    this._tagline = data.tagline
    this._price = data.price
    this._portrait = data.portrait
  }

  get name () {
    return this._name
  }

  get id () {
    return this._id
  }

  get location () {
    const location = this._city + ', ' + this._country
    return location
  }

  get tagline () {
    return this._tagline
  }

  get price () {
    const priceJ = this._price + '€/jour'
    return priceJ
  }

  get portrait () {
    const portaitPath = './assets/photographers/' + this._portrait
    return portaitPath
  }
}
