/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
function displayModal () {
  document.querySelector('.background-contact').style.display = 'block'
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  document.getElementById('main').setAttribute('aria-hidden', 'true')
  focusTrap('#contact_modal')
}

// eslint-disable-next-line no-unused-vars
function closeModal () {
  document.querySelector('.background-contact').style.display = 'none'
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  document.getElementById('main').setAttribute('aria-hidden', 'false')
  document.getElementsByClassName('contact_button')[0].focus()
}

function submitContact (e) {
  document.querySelector('.background-contact').style.display = 'none'
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  document.getElementById('main').setAttribute('aria-hidden', 'false')
  console.log('first name:', first.value)
  console.log('last name:', last.value)
  console.log('e-mail:', email.value)
  console.log('message:', comment.value)
  e.preventDefault()
}

// Trap the focus inside the modal
function focusTrap (idModal) {
  // add all the elements inside modal which you want to make focusable
  const focusableElements =
    'button, input, textarea'
  const modal = document.querySelector(idModal) // select the modal by it's id

  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal
  const focusableContent = modal.querySelectorAll(focusableElements)
  const lastFocusableElement = focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

  document.addEventListener('keydown', function (e) {
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9

    if (!isTabPressed) {
      return
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus() // add focus for the last focusable element
        e.preventDefault()
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus() // add focus for the first focusable element
        e.preventDefault()
      }
    }
  })

  firstFocusableElement.focus()
}
