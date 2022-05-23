const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // html id player 속성
  new YT.Player('player', {
    videoId: 'fi8F6rk2ERI', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유뮤
      playlist: 'fi8F6rk2ERI'
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}
