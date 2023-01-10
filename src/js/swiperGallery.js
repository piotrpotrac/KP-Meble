export function SwiperGalerry() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 3000,
    },
    pauseOnMouseEnter: true,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}
