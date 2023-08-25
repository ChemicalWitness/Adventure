function findVideo() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = document.querySelector(".hero__slide-video");
  let link = document.querySelector(".hero__slide-video-btn");
  if (!player || !link) {
    return;
  } else {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();
      player.classList.add("is-show");
      new YT.Player(player, {
        // height: '228',
        // width: '364',
        videoId: "9TZXsZItgdw",
        events: {
          onReady: (e) => e.target.playVideo()
        }
      });
      evt.stopPropagation();
    });
  }
}
export {findVideo}
