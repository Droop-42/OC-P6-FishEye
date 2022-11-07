/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
// Get photographers data
const connectData = new JSONConnect('./data/photographers.json')

// Get id of photographer from url parameter
const getId = (url, id) => {
  url = new URL(document.location).searchParams
  id = url.get('id')
  return id
}

// Type of media : image or video
function getPictureType (image, video) {
  if (image) {
    return 'img'
  } else if (video) {
    return 'video'
  } else {
    console.log('unknow media type')
  }
}

// Get total likes from all medias
function getTotalLikes (medias) {
  let totalLikes = 0
  medias.forEach(media => {
    totalLikes = totalLikes + media.likes
  })
  return totalLikes
}

function addLike (id) {
  const iconLike = document.getElementById(id)
  let totalLikes = document.querySelector('.likes-counter').textContent
  // eslint-disable-next-line no-new-wrappers
  totalLikes = new Number(totalLikes)
  if (iconLike.getAttribute('filled') === 'filled') {
    iconLike.style.fontVariationSettings = '"FILL" 0'
    iconLike.setAttribute('filled', 'notFilled')
    document.querySelector('.likes-counter').textContent = totalLikes - 1
  } else if (iconLike.getAttribute('filled') === 'notFilled') {
    iconLike.style.fontVariationSettings = '"FILL" 1'
    iconLike.setAttribute('filled', 'filled')
    document.querySelector('.likes-counter').textContent = totalLikes + 1
  }
}

function launchCarrousel (media, photographer, index, medias) {
  document.querySelector('.background-lighthouse').style.display = 'block'
  const lhSection = document.querySelector('.lighthouse_modal')
  const lighthouseDOM = getLighthouseDOM(media.image, media.video, media.title, photographer.name, index, medias)

  lhSection.appendChild(lighthouseDOM)
  document.getElementById('main').setAttribute('aria-hidden', 'true')
  document.getElementById('arrowR').focus()

  focusTrap('#lh')
}

async function displayDataPhotographer (photographer) {
  // -----------------Create header-------------------------
  const photographersSection = document.querySelector('.photograph-header')
  const $wrapper = document.createElement('article')
  $wrapper.classList.add('perso-card')

  const photographerCard = `
                <div class="perso-txt"> 
                  <h2>${photographer.name}</h2>
                  <span class="localisation">${photographer.location}</span>
                  <span class="tag">${photographer.tagline}</span>
                </div>
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                <img src="${photographer.portrait}" alt="Portrait de ${photographer.name}" >
        `
  $wrapper.innerHTML = photographerCard
  photographersSection.appendChild($wrapper)

  document.querySelector('.price').textContent = photographer.price
}

async function displayData (photographer, medias) {
  // -----------------Create Cards-------------------------
  const mediasSection = document.querySelector('.medias')

  // Create and display card for each media
  await medias.forEach((media) => {
    const index = medias.indexOf(media)
    // Instanciate factory
    const mediaCard = new MediaCard(photographer, media, index)
    // Create card
    const mediaCardDOM = mediaCard.createMediaCardDOM()
    // Display card in the DOM
    mediasSection.appendChild(mediaCardDOM)

    document.getElementById('link' + index).addEventListener('click', (e) => {
      launchCarrousel(media, photographer, index, medias)
      e.preventDefault()
    })
    document.getElementById(media.id).addEventListener('click', (event) => { addLike(media.id) })
  })

  document.querySelector('.likes-counter').textContent = getTotalLikes(medias)
};

async function init () {
  // Get photographer data
  const { photographers, media } = await connectData.get()
  // Apply format model to data
  const photographerMod = photographers.map(p => new PhotographerModel(p))
  const mediasMod = media.map(m => new MediaModel(m))
  // Get data from photographer with Id sent
  const photographer = photographerMod.filter(d => d.id == getId())
  const medias = mediasMod.filter(d => d.photographerId == getId())

  displayDataPhotographer(photographer[0])
  displayData(photographer[0], sortMedias(medias))

  function newSort () {
    document.querySelector('.medias').innerHTML = ''
    displayData(photographer[0], sortMedias(medias))
    console.log('nopop', document.getElementById('select').textContent)
  }

  document.getElementById('contactForm').addEventListener('submit', submitContact)
  document.getElementById('close').addEventListener('click', closeModal)

  // Add event listener to items in sort menu to trigger a new sort on click
  const items = document.querySelectorAll('.item')
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', newSort)
  }
};

init()
