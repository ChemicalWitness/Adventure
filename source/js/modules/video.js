import {onPlayerStateChange} from './hero';

let playerIframe = document.querySelector('.hero__slide-video');

export function findVideo() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let link = document.querySelector('.hero__slide-video-btn');
  if (!playerIframe || !link) {
    return;
  } else {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      playerIframe.classList.add('is-show');
      new YT.Player(playerIframe, {
        videoId: '9TZXsZItgdw',
        events: {
          onReady: (e) => e.target.playVideo(),
          'onStateChange': onPlayerStateChange,
        },
      });
      evt.stopPropagation();
    });
  }
}
