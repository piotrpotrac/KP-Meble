export const hideBackground = () => {
  const sectionNav = document.querySelector('.nav')
  const hidenLogo = document.querySelector('#logo__hide')

  window.addEventListener(`scroll`, (e) => {
    const navOpac = this.scrollY / 100

    if (navOpac === 0) {
      sectionNav.classList.remove('nav__background-gradient')
      hidenLogo.classList.remove('logo__hide')
    }

    if (navOpac > 0) {
      sectionNav.classList.add('nav__background-gradient')
      hidenLogo.classList.add('logo__hide')
    }
  })
}
