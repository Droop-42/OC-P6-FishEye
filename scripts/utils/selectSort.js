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
