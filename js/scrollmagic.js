const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
    triggerHook: 0.8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})
