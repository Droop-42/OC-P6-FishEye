// eslint-disable-next-line no-unused-vars
class MediaModel {
  constructor (data) {
    this._id = data.id
    this._photographerId = data.photographerId
    this._title = data.title
    this._image = data.image
    this._video = data.video
    this._likes = data.likes
    this._date = data.date
    this._price = data.price
  }

  get id () {
    return this._id
  }

  get photographerId () {
    return this._photographerId
  }

  get title () {
    return this._title
  }

  get image () {
    return this._image
  }

  get video () {
    return this._video
  }

  get likes () {
    return this._likes
  }

  get price () {
    return this._price
  }

  get date () {
    return this._date
  }
}
