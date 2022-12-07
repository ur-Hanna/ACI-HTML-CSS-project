(() => {
  const menuBtnRef = document.querySelector('.hero-description__btn');
  const mobileMenuRef = document.querySelector('.hero__article');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

$('.hero-description__btn').click(function () {
  $('.hero__article').fadeToggle(500);
});
