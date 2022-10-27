// eslint-disable-next-line no-unused-vars
function pagePersoFactory (media, name, index, medias) {
  // const { name, id, city, country, tagline, price, portrait } = data;
  const { title, image, video, likes, id } = media

  const pictureSrc = `assets/SamplePhotos/${name}/${image}`
  const videoSrc = `assets/SamplePhotos/${name}/${video}`

  function getPictureType (image, video) {
    if (image) {
      // console.log('image')
      return 'img'
    } else if (video) {
      // console.log('video')
      return 'video'
    } else {
      console.log('unknow media type')
    }
  }
  const mediaType = getPictureType(image, video)
  const modalbg = document.querySelector('.background-lighthouse')

  function launchModal (e) {
    modalbg.style.display = 'block'
    console.log('name', name)
    const lhSection = document.querySelector('.lighthouse_modal')
    // eslint-disable-next-line no-undef
    const lighthouseDOM = getLighthouseDOM(image, video, title, name, index, medias)
    console.log(lighthouseDOM)
    lhSection.appendChild(lighthouseDOM)
    document.getElementById('main').setAttribute('aria-hidden', 'true')
    document.getElementById('arrowR').focus()
    // eslint-disable-next-line no-undef
    focusTrap('#lh')
    e.preventDefault()
  }

  function addLike () {
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

  function getMediaCardDOM () {
    const article = document.createElement('article')
    article.classList.add('sample')
    // article.addEventListener('click', launchModal);

    const icon = document.createElement('button')
    icon.classList.add('material-symbols-outlined')
    icon.setAttribute('id', id)
    icon.setAttribute('filled', 'notFilled')
    icon.addEventListener('click', addLike)
    // icon.classList.add('btn-favorite');
    icon.textContent = 'favorite'

    const link = document.createElement('a')
    link.setAttribute('href', '')
    link.addEventListener('click', launchModal)
    link.setAttribute('alt', 'lien vers carrousel')
    const img = document.createElement(getPictureType(image, video))
    img.setAttribute('src', pictureSrc)
    if (mediaType === 'video') {
      img.setAttribute('src', videoSrc)
      img.setAttribute('poster', '')
      img.setAttribute('tabindex', '-1')
      img.setAttribute('alt', videoSrc.match(/\w*(?=.\w+$)/))
      link.setAttribute('alt', videoSrc.match(/\w*(?=.\w+$)/))
      icon.setAttribute('aria-label', 'Donnez un like à ' + videoSrc.match(/\w*(?=.\w+$)/))
    } else {
      img.setAttribute('src', pictureSrc)
      img.setAttribute('alt', pictureSrc.match(/\w*(?=.\w+$)/))
      link.setAttribute('alt', pictureSrc.match(/\w*(?=.\w+$)/))
      icon.setAttribute('aria-label', 'Donnez un like à ' + pictureSrc.match(/\w*(?=.\w+$)/))
    }

    const div = document.createElement('div')
    div.classList.add('sample-txt')
    const h2 = document.createElement('h2')
    h2.textContent = title
    const like = document.createElement('span')
    const div2 = document.createElement('div')
    div2.classList.add('sample-txt')
    like.classList.add('likes')
    like.textContent = likes
    like.classList.add('likes-nbr')

    link.appendChild(img)
    article.appendChild(link)
    div.appendChild(h2)
    div2.appendChild(like)
    div2.appendChild(icon)
    div.appendChild(div2)
    article.appendChild(div)
    return (article)
  }
  return { title, image, getMediaCardDOM }
}
