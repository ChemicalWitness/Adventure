const Swiper = window.Swiper;
const slider = document.querySelector('.hero__slider');

export const heroSlider = () =>
  slider &&
  new Swiper('.hero__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.hero__pagination-wrapper',
      clickable: true,
    },
    simulateTouch: false,
  });
