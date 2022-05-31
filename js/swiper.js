new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBewteen: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: { // 페이지 번호 사용 여부
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-next" // 다음 버튼 선택자
  }
})

new Swiper('.awards .swiper-container', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBewteen: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});
