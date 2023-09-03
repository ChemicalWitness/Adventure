const pagination = document.querySelector('.hero__pagination-wrapper');
let player;
const Swiper = window.Swiper;
const slider = document.querySelector('.hero__slider');
const slides = document.querySelectorAll('.hero__slide');

export const heroSlider = () =>
  slider &&
  new Swiper('.hero__slider', {
    loop: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.hero__pagination-wrapper',
      clickable: true,
    },
    simulateTouch: false,
    on: {
      slideChange() {
        slides.forEach((slide) => {
          if (slide.classList.contains('.swiper-slide-active') && slide.querySelector('.hero__slide-video')) {
            pagination.addEventListener('click', () => {
              if (player.data === YT.PlayerState.PLAYING) {
                player.target.pauseVideo();
              }
            });
          } else {
            return;
          }
        });
      },
    },
  });


export function onPlayerStateChange(event) {
  player = event;
}
