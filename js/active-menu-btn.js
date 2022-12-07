$('a').bind('click', function (e) {
  var anchor = $(this);
  var hh = 70; //header height

  $('html, body')
    .stop()
    .animate(
      { scrollTop: $(anchor.attr('href')).offset().top - hh + 'px' },
      750
    );
  e.preventDefault();

  // active item menu
  $('.active').removeClass('active');
  $(this).addClass('active');
});

$('.mob-menu__list li a').click(function () {
  $('body').removeClass('no-scroll');
});
