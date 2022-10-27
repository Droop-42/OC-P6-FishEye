// eslint-disable-next-line no-unused-vars
function photographerFactory (data) {
  const { name, id, city, country, tagline, price, portrait } = data

  const picture = `./assets/photographers/${portrait}`

  function redirect () {
    location.href = './photographer.html?id=' + id
  }

  function getUserCardDOM () {
    const article = document.createElement('article')
    article.classList.add('photographer')

    const link = document.createElement('a')
    link.addEventListener('click', redirect)
    link.setAttribute('tabindex', '0')
    link.setAttribute('href', './photographer.html?id=' + id)
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Portrait de ' + name)
    const h2 = document.createElement('h2')
    h2.textContent = name

    const localisation = document.createElement('p')
    localisation.classList.add('localisation')
    localisation.textContent = city + ', ' + country
    const tag = document.createElement('p')
    tag.classList.add('tag')
    tag.textContent = tagline
    const pricing = document.createElement('p')
    pricing.classList.add('pricing')
    pricing.textContent = price + '€/jour'
    link.appendChild(img)
    link.appendChild(h2)
    article.appendChild(link)
    article.appendChild(localisation)
    article.appendChild(tag)
    article.appendChild(pricing)
    return (article)
  }
  return { name, picture, getUserCardDOM }
}
