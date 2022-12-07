(() => {
  const menuBtnRef = document.querySelector('.dropbtn');
  const mobileMenuRef = document.querySelector('.dropdown__content');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === true || 'false';

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

$('.dropbtn').click(function () {
  $('.dropdown__content').fadeToggle(500);
});
