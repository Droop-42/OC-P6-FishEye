/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Photographer card factory
class PhotographerCard {
  constructor (photographer) {
    this._photographer = photographer
  }

  // Create Photographer Card DOM for home page
  createPhotographerCardDOM () {
    const $wrapper = document.createElement('article')
    $wrapper.classList.add('photographer')

    const photographerCard = `
      <a tabindex=0 href="./photographer.html?id=${this._photographer.id}">
          <img src="${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}" >
          <h2>${this._photographer.name}</h2>
      </a>
      <p class="localisation">${this._photographer.location}</p>
      <p class="tag">${this._photographer.tagline}</p>
      <p class="pricing">${this._photographer.price}</p>
      `
    $wrapper.innerHTML = photographerCard
    return $wrapper
  }
}
