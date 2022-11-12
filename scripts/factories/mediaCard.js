/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class MediaCard {
  constructor (photographer, media, index) {
    this._photographer = photographer
    this._media = media
    this._index = index
  }

  // Create Photographer Card DOM for home page
  createMediaCardDOM () {
    const mediaType = getPictureType(this._media.image, this._media.video)
    let mediaDOM = ''
    if (mediaType === 'img') {
      mediaDOM = `<img src="./assets/SamplePhotos/${this._photographer.name}/${this._media.image}" aria-label="${this._media.title}" alt="${this._media.title}" ></img>`
    } else if (mediaType === 'video') {
      mediaDOM = `<video src="./assets/SamplePhotos/${this._photographer.name}/${this._media.video}" type="image" tabindex=-1 poster='' aria-label="${this._media.title}" alt="${this._media.title}" ></video>`
    }

    const $wrapper = document.createElement('article')
    $wrapper.classList.add('sample')

    const mediaCard = `
      <a tabindex=0 href="" id="link${this._index}" aria-label="lien vers le carrousel">
      ${mediaDOM}
      </a>
      <div class='sample-txt'>
        <h2>${this._media.title}</h2>
        <div class='sample-txt'>
          <span class="likes likes-nbr">${this._media.likes}</span>
          <button class="material-symbols-outlined" id="${this._media.id}" filled="notFilled" aria-label="add likes">favorite</button>
        </div>
      </div>
      `
    $wrapper.innerHTML = mediaCard
    return $wrapper
  }
}
