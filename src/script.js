'use strict';

//Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader__hidden');

  loader.addEventListener('transitioned', () => {
    document.body.removeChild(loader);
  });
});

//Hide nav bg
const sectionNav = document.querySelector('.nav');
const hideLogo = document.querySelector('#logo__hide');

window.addEventListener(`scroll`, function (e) {
  const navOpac = this.scrollY / 100;

  if (navOpac === 0) {
    sectionNav.classList.remove('nav__background-gradient');
    hideLogo.classList.remove('logo__hide');
  }

  if (navOpac > 0) {
    // sectionNav.style.opacity = `${navOpac / 4}`;
    sectionNav.classList.add('nav__background-gradient');

    hideLogo.classList.add('logo__hide');
  }
});
// Handling hiden navmenu after click

const checkbox = document.querySelector('#nav__checkbox');
const anch = document.querySelector('.nav__menu');

anch.addEventListener('click', () => (checkbox.checked = false));

// Swiper gallery

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 3000,
  },
  pauseOnMouseEnter: true,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: {
    loadPrevNext: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Reveal page

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Email Form

const sendEmail = function () {
  Email.send({
    SecureToken: 'd1069e52-dcd4-427f-9ea1-f114cc9bc144',
    To: 'meblekp@gmail.com',
    From: 'admin@meblekp.pl',
    Subject: `Nowe zapytanie MebleKP.pl`,
    Body: `Dane: ${document.querySelector('.form__surname').value} ${
      document.querySelector('.form__name').value
    } <br/>
      email: ${document.querySelector('.form__email').value} <br/>
      Telefon: +48${document.querySelector('.form__tel').value} <br/>
      Wiadomość: ${document.querySelector('.modal__form__textarea').value}`,
  }).then(message => alert('Wiadomość została wysłana.'));
};
