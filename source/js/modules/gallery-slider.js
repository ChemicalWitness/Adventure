const Swiper = window.Swiper;
const slider = document.querySelector('.gallery__slider');

export const gallerySlider = () =>
  slider &&
  new Swiper('.gallery__slider', {
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 6,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 6,
      },
    },
    loop: false,
  });
