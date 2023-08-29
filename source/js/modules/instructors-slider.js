const Swiper = window.Swiper;
const slider = document.querySelector('.learning__instructors-slider');

export const instructorsSlider = () =>
  slider &&
  new Swiper('.learning__instructors-slider', {
    navigation: {
      nextEl: '.learning__button--next',
      prevEl: '.learning__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
