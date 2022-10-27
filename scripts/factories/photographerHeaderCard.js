// eslint-disable-next-line no-unused-vars
function persoHeaderFactory (data) {
  const { name, city, country, tagline, portrait } = data

  const picture = `assets/photographers/${portrait}`

  const modalbgContact = document.querySelector('.background-contact')
  const closeBtn = document.getElementById('close')

  function launchContactModal () {
    modalbgContact.style.display = 'block'
    // eslint-disable-next-line no-undef
    displayModal()
  }

  function closeContactModal () {
    modalbgContact.style.display = 'none'
    // eslint-disable-next-line no-undef
    closeModal()
  }

  // contactBtn.addEventListener('click', launchContactModal);
  closeBtn.addEventListener('click', closeContactModal)

  function getPersoCardDOM () {
    const article = document.createElement('article')
    // article.addEventListener('click', launchContactModal);
    article.classList.add('perso-card')

    const div = document.createElement('div')
    div.classList.add('perso-txt')
    const h2 = document.createElement('h2')
    h2.textContent = name
    const localisation = document.createElement('span')
    localisation.classList.add('localisation')
    localisation.textContent = city + ', ' + country
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.textContent = tagline

    const contactBtn = document.createElement('button')
    contactBtn.textContent = 'Contactez-moi'
    contactBtn.classList.add('contact_button')
    contactBtn.addEventListener('click', launchContactModal)

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Portrait de ' + name)

    div.appendChild(h2)
    div.appendChild(localisation)
    div.appendChild(tag)

    article.appendChild(div)
    article.appendChild(contactBtn)
    article.appendChild(img)

    return (article)
  }
  return { name, picture, getPersoCardDOM }
}
