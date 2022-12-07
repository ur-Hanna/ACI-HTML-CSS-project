const productsListRef = document.querySelector('.products__list');
const menuProductBtnRef = document.querySelectorAll('.products__list button');

function onBtnClick(e) {
  for (const btn of menuProductBtnRef) {
    if (
      e.target === btn ||
      btn.firstElementChild === e.target ||
      btn.firstElementChild === e.path[1]
    ) {
      btn.classList.toggle('is-open');
    }
  }
}

productsListRef.addEventListener('click', onBtnClick);

$('.products__btn1').click(function () {
  $('.products__article1').fadeToggle(500);
});

$('.products__btn2').click(function () {
  $('.products__article2').fadeToggle(500);
});

$('.products__btn3').click(function () {
  $('.products__article3').fadeToggle(500);
});
