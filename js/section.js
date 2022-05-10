const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
      // gsap.to(요소, 지속시간, 옵션-객체데이터);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1
  });
});
