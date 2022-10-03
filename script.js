'use strict';
// Function change navigation opacity while scrolling
const sectionNav = document.querySelector('.nav');

window.addEventListener(`scroll`, function (e) {
  const navOpac = this.scrollY / 1000;
  if (navOpac === 0) {
    sectionNav.style.opacity = 0.8;
  }
  if (navOpac > 0) {
    sectionNav.style.opacity = `${0.8 + navOpac / 4}`;
  }
});
