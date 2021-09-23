const open_btn = document.querySelector('.open-btn')
const colse_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.add('visible'))
})

colse_btn.addEventListener('click', () => {
  nav.forEach((nav_el) => nav_el.classList.remove('visible'))
})
