// document.addEventListener("DOMContentLoaded", (evt) => {
const swiper = new Swiper('.slogan', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 1000,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




const guideline = new Swiper('.guideline-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: '.guideline-asb-pagination',
  },
  navigation: {
    nextEl: '.guideline-asb-next',
    prevEl: '.guideline-asb-prev',
  },
});
// })