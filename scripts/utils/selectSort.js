/* eslint-disable no-unused-vars */
// ------------Sort menu----------------------
// Variables
const select = document.querySelector('.select')
const optionBox = document.querySelector('.options')
const options = [...document.querySelectorAll('.options .item')]
let activeOption = 0 // First option in the list

//  Handle click event on the menu filter (select)
window.onclick = (e) => {
  if (!e.target.className.includes('select')) {
    select.classList.remove('active')
    optionBox.classList.remove('active')
  } else {
    select.classList.toggle('active')
    optionBox.classList.toggle('active')
  }
}
// Set value of chosen filter option
const setValue = () => {
  select.innerHTML = select.value = options[activeOption].innerHTML
}
// For each option, set value if cliked
options.forEach((item, i) => {
  item.onclick = () => {
    options[activeOption].classList.remove('active')
    options[i].classList.add('active')
    activeOption = i
    setValue()
  }
})
// Set initial option
setValue()

// ------------Sort Algo----------------------
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
