var $carousel = $('#content-carousel'),
    $menuEls = $('#menu li');

$carousel.carousel({
  interval: false
});

$menuEls.on('click', function(e,d) {
  var $el, slide;
  $menuEls.removeClass('active');
  $el = $(e.target).parent();
  $el.addClass('active');
  slide = $el.data().slideTo;
  $carousel.carousel(slide);
});

$('#brand').click(function(){
  $('#menu li').first().find('a').trigger('click');
});
