const Swiper = window.Swiper;
const slider = document.querySelector('.upcoming-tours__slider');

export const upcomingToursSlider = () =>
  slider &&
  new Swiper('.upcoming-tours__slider', {
    navigation: {
      nextEl: '.upcoming-tours__button--next',
      prevEl: '.upcoming-tours__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      530: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
