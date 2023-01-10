export function loadPage() {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')

    loader.classList.add('loader__hidden')

    loader.addEventListener('transitioned', () => {
      document.body.removeChild(loader)
    })
  })
}
