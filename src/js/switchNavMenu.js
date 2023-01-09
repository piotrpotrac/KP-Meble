export function switchNavMenu() {
  const checkbox = document.querySelector('#nav__checkbox')
  const anch = document.querySelector('.nav__menu')

  anch.addEventListener('click', () => (checkbox.checked = false))
}
