const Swiper = window.Swiper;
const slider = document.querySelector('.benefits__slider');
const breakpointDesktop = window.innerWidth;
let swiper;

export const benefitsSlider = () => {
  if (breakpointDesktop >= 1200) {
    swiper = slider && new Swiper('.benefits__slider', {
      navigation: {
        nextEl: '.benefits__button--next',
        prevEl: '.benefits__button--prev',
      },
      simulateTouch: false,
      breakpoints: {
        1200: {
          initialSlide: 1,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      loop: true,
    });
  } else {
    if (swiper) {
      swiper.destroy(true, true);
    }
  }
};
