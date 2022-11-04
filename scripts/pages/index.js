/* eslint-disable no-undef */

// Fetch data from JSON
const connectData = new JSONConnect('./data/photographers.json')

async function displayData (photographers) {
  // Section where the cards will be displayed
  const photographersSection = document.querySelector('.photographer_section')
  // Create and display card for each photographer
  await photographers.forEach((photographer) => {
    // Instanciate factory
    const photographerCard = new PhotographerCard(photographer)
    // Create card
    const photographerCardDOM = photographerCard.createPhotographerCardDOM()
    // Display card in the DOM
    photographersSection.appendChild(photographerCardDOM)
  })
};

async function init () {
  // Get photographers data
  const { photographers } = await connectData.get()
  // Format data with ad hoc model
  const photographerMod = photographers.map(p => new PhotographerModel(p))
  // Create and display cards
  displayData(photographerMod)
};

init()
