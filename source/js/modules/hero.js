const pagination = document.querySelector('.hero__pagination-wrapper');
let player;
const Swiper = window.Swiper;
const slider = document.querySelector('.hero__slider');

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
        pagination.addEventListener('click', () => {
          if (player.data === YT.PlayerState.PLAYING) {
            player.target.pauseVideo();
          }
        });
      },
    },
  });


export function onPlayerStateChange(event) {
  player = event;
}
