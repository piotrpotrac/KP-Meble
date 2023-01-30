export const switchNavMenu = () => {
  const checkbox = document.querySelector('#nav__checkbox')
  const navMenu = document.querySelector('.nav__menu')

  navMenu.addEventListener('click', () => (checkbox.checked = false))
}
