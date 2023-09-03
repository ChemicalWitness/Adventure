const slides = document.querySelectorAll('.hero__slide');
const pagination = document.querySelector('.hero__pagination-wrapper');
const audio = document.querySelector('.hero__slide-audio');

export const initAudio = () =>
  pagination.addEventListener('click', () => {
    slides.forEach((slide) => {

      if (slide.querySelector('.hero__slide-audio') &&
        slide.classList.contains('swiper-slide-active')) {
        audio.src = 'https://music.yandex.ru/iframe/#track/112912322/25474374';
      } else {
        audio.removeAttribute('src');
      }
    });
  });
