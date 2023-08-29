const Swiper = window.Swiper;
const slider = document.querySelector('.reviews__slider');

export const reviewsSlider = () =>
  slider &&
  new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
