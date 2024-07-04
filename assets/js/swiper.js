const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  mousewheel: {
    invert: true,
  },
  zoom: {
    maxRatio: 5,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    1024: {
      spaceBetween: 25,
    },
    1728: {
      spaceBetween: 50,
    },

  }
});
