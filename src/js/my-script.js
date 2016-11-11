window.$ = window.jQuery =  require('jquery');
window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list-wrapper').toggle();
  });

  /* City list */
  $('.city__name').click(function(){
    $('.city__dropdown').toggle();
  });


  /* галерея Gratitude */
  $('.promo-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  });
  /* Gratitude in the modal window */
  $('.gratitude__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.gratitude__slide').find('.gratitude__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.gratitude__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
  });

  /* Gratitude in the modal window */
  $('.reviews__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.reviews__slide').find('.reviews__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.reviews__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
  });


});


