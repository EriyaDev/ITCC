var manySwiper = new Swiper(".many-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});