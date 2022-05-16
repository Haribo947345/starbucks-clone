const promotionEl = document.querySelector(".promotion");
const promotionTogglebtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promotionTogglebtn.addEventListener("click", function() {
  isHidePromotion = !isHidePromotion // 반대값으로 전환시켜줌
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add("hide");
  } else {
    // 보임처리
    promotionEl.classList.remove("hide");
  }
});
