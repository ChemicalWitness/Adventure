const Swiper = window.Swiper;
const slider = document.querySelector('.benefits__slider');

export const benefitsSlider = () =>
  window.matchMedia('(min-width: 1200px').matches && slider &&
  new Swiper('.benefits__slider', {
    navigation: {
      nextEl: '.benefits__button--next',
      prevEl: '.benefits__button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      768: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
  });


// export const benefitsSlider = () => {
//   window.addEventListener('resize', () => {
//     if (window.innerWidth >= 1200) {
//       initSlider();
//     } else {
//       destroySlider();
//     }
//   });
// };


// const initSlider = () => {
//   slider &&
//   new Swiper('.benefits__slider', {
//     navigation: {
//       nextEl: '.benefits__button--next',
//       prevEl: '.benefits__button--prev',
//     },
//     simulateTouch: false,
//     breakpoints: {
//       1200: {
//         initialSlide: 1,
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//     },
//     loop: true,
//   });
// }

// const destroySlider = () => {
//   Swiper.disable();
// };
