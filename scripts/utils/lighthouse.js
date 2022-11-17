
// eslint-disable-next-line no-unused-vars
function getLighthouseDOM (image, video, title, name, index, medias) {
  // ------------------------------------Variables-------------------------------------------
  const modalbgLh = document.querySelector('.background-lighthouse')
  const pictureSrc = `assets/SamplePhotos/${name}/${image}`
  const videoSrc = `assets/SamplePhotos/${name}/${video}`
  const mediasLength = medias.length
  let imgIndex = index

  // -------------------------------------Functions-------------------------------------------
  // Get type of media (Image or video)--------------------
  function getType (image, video) {
    if (image) {
      return 'img'
    } else if (video) {
      return 'video'
    } else {
      console.log('unknow media type')
    }
  }
  // Close the carrousel--------------------
  function closeLModal () {
    const lh = document.getElementById('lh')
    lh.removeChild(article)
    modalbgLh.style.display = 'none'
    window.removeEventListener('keydown', handleKeys, true)
    document.getElementById('main').setAttribute('aria-hidden', 'false')
    document.getElementsByClassName('contact_button')[0].focus()
  }
  // Scroll the carroussel and set the next/preview media
  function scroll () {
    const nextImage = medias[imgIndex].image
    const nextVideo = medias[imgIndex].video
    const nextTitle = medias[imgIndex].title
    const nextImgSrc = `assets/SamplePhotos/${name}/${nextImage}`
    const nextVideoSrc = `assets/SamplePhotos/${name}/${nextVideo}`

    // ----------------------------------

    document.getElementById('samp').remove()

    // img.remove();
    const pictureType = getType(nextImage, nextVideo)
    console.log(pictureType)

    const mediaCont = document.createElement('div')
    mediaCont.classList.add('mediaCont')
    mediaCont.setAttribute('id', 'samp')

    const img = document.createElement(pictureType)
    img.setAttribute('id', 'samp')
    img.setAttribute('src', nextImgSrc)
    if (pictureType === 'video') {
      img.setAttribute('src', nextVideoSrc)
      img.setAttribute('poster', '')
      img.setAttribute('controls', '')
      img.classList.add('media')
      img.classList.add('video_carr')
    } else {
      img.setAttribute('src', nextImgSrc)
      img.classList.add('media')
    }
    // -----------------------------------

    // img.setAttribute("src", nextSrc);

    document.getElementById('titl').remove()
    const h2 = document.createElement('h2')
    h2.textContent = nextTitle
    h2.setAttribute('id', 'titl')

    div.appendChild(mediaCont)
    mediaCont.appendChild(img)
    div.appendChild(h2)
  }
  // Get next Image from index--------------------
  function nextImg () {
    if (imgIndex < mediasLength - 1) {
      imgIndex += 1
    } else {
      imgIndex = 0
    }
    scroll()
  }
  // Get preview Image from index--------------------
  function previewImg () {
    if (imgIndex < 1) {
      imgIndex = mediasLength - 1
    } else {
      imgIndex -= 1
    }
    scroll()
  }
  // Handle keyboard events
  const handleKeys = (event) => {
    if (event.defaultPrevented) {
      return // Do nothing if the event was already processed
    }

    switch (event.key) {
      case 'ArrowLeft':
        previewImg()
        break
      case 'ArrowRight':
        nextImg()
        break
      case 'Escape':
        closeLModal()
        break
        // case "Enter":
        // break;
      default:
        return // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault()
  }

  window.addEventListener('keydown', handleKeys, true)

  // ---------------------Create DOM -------------------------------------------------------------------------------------------
  // Lighthouse container
  const article = document.createElement('div')
  article.classList.add('media-sample')

  // Left arrow
  const arrowL = document.createElement('button')
  arrowL.classList.add('material-symbols-outlined')
  arrowL.textContent = 'arrow_back_ios'
  arrowL.classList.add('arrowL')
  arrowL.addEventListener('click', previewImg)
  arrowL.setAttribute('aria-label', 'précédent')

  // Media container (image + titre)
  const div = document.createElement('div')

  const mediaCont = document.createElement('div')
  mediaCont.classList.add('mediaCont')
  mediaCont.setAttribute('id', 'samp')

  const img = document.createElement(getType(image, video))
  // img.setAttribute('id', 'samp')
  img.classList.add('media')
  if (getType(image, video) === 'video') {
    img.setAttribute('src', videoSrc)
    img.setAttribute('poster', '')
    img.setAttribute('controls', '')
    img.classList.add('video_carr')
  } else {
    img.setAttribute('src', pictureSrc)
  }
  const h2 = document.createElement('h2')
  h2.textContent = title
  h2.setAttribute('id', 'titl')

  // Close button
  const close = document.createElement('button')
  close.classList.add('material-symbols-outlined')
  close.textContent = 'close'
  close.classList.add('close')
  close.addEventListener('click', closeLModal)
  close.setAttribute('aria-label', 'fermer le carrousel')

  // Right arrow
  const arrowR = document.createElement('button')
  arrowR.classList.add('material-symbols-outlined')
  arrowR.textContent = 'arrow_forward_ios'
  arrowR.classList.add('arrowR')
  arrowR.addEventListener('click', nextImg)
  arrowR.setAttribute('id', 'arrowR')
  arrowR.setAttribute('aria-label', 'suivant')

  article.appendChild(arrowL)
  div.appendChild(mediaCont)
  mediaCont.appendChild(img)
  div.appendChild(h2)
  article.appendChild(div)
  article.appendChild(close)
  article.appendChild(arrowR)

  return (article)
}
