// Get id of photographer from url parameter
const getId = (url, id) => {
  url = new URL(document.location).searchParams
  id = url.get('id')
  return id
}

// Get photographer data
async function getPhotographers () {
  const photographers =
        fetch('data/photographers.json')
          .then(response => {
            return response.json()
          }
          )
          .then(data => {
            return data
          }
          )
  return photographers
}

async function displayDataPhotographer (photographer) {
  const photographersSection = document.querySelector('.photograph-header')
  // Create photographer's header card
  // eslint-disable-next-line no-undef
  const photographerModel = persoHeaderFactory(photographer)
  const photographerCardDOM = photographerModel.getPersoCardDOM()
  photographersSection.appendChild(photographerCardDOM)

  document.querySelector('.price').textContent = photographer.price
};

async function displayData (photographer, medias) {
  const mediasSection = document.querySelector('.medias')

  // Create medias cards
  medias.forEach((media) => {
    const index = medias.indexOf(media)
    // eslint-disable-next-line no-undef
    const pagePersoModel = pagePersoFactory(media, photographer.name, index, medias)
    const mediaCardDOM = pagePersoModel.getMediaCardDOM()
    mediasSection.appendChild(mediaCardDOM)
  })

  document.querySelector('.likes-counter').textContent = getTotalLikes(medias)
};

function getTotalLikes (medias) {
  let totalLikes = 0
  medias.forEach(media => {
    totalLikes = totalLikes + media.likes
  })
  return totalLikes
}

async function init () {
  // Get photographer data
  const { photographers, media } = await getPhotographers()
  // eslint-disable-next-line eqeqeq
  const photographer = photographers.filter(d => d.id == getId())
  // eslint-disable-next-line eqeqeq
  const medias = media.filter(d => d.photographerId == getId())

  function sortMedias (medias) {
    if (document.getElementById('select').textContent === 'Popularité') {
      const sortedMedias = medias.sort((a, b) => {
        return b.likes - a.likes
      })
      return sortedMedias
    } else if (document.getElementById('select').textContent === 'Date') {
      const sortedMedias = medias.sort((a, b) => {
        const da = new Date(a.date)
        const db = new Date(b.date)
        return da - db
      })
      console.log('nopop', document.getElementById('select').textContent)
      return sortedMedias
    } else if (document.getElementById('select').textContent === 'Titre') {
      const sortedMedias = medias.sort((a, b) => {
        const fa = a.title.toLowerCase()
        const fb = b.title.toLowerCase()
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
      console.log('nopop', document.getElementById('select').textContent)
      return sortedMedias
    }
  }

  displayDataPhotographer(photographer[0])
  displayData(photographer[0], sortMedias(medias))

  function newSort () {
    document.querySelector('.medias').innerHTML = ''
    displayData(photographer[0], sortMedias(medias))
    console.log('nopop', document.getElementById('select').textContent)
  }

  const items = document.querySelectorAll('.item')
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', newSort)
  }
};

init()
