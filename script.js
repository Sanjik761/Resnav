const bars = document.querySelector('#icon')
const ul = document.querySelector('ul')

bars.addEventListener('click', ()=> {
  ul.classList.toggle('show')
})