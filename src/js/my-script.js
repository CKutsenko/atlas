window.$ = window.jQuery =  require('jquery');
window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
var toggler = document.getElementById('hamburger');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('hamburger--close');
  document.getElementById('nav__list').classList.toggle('nav__list--visible');
}


  $('.aside__btn').click(function(e){
    e.preventDefault();
    if($(this).next('.aside__accordion').is(":visible")) {
      $(this).next('.aside__accordion').hide().addClass('active');
    } else {
      $(this).closest('.aside').find('.aside__accordion').hide();
      $(this).next('.aside__accordion').show().removeClass('active').addClass('none');
    }
  });



// $('.aside__btn').on('click', function(){
//   if( $(this).closest('.aside__link').is('.active') ){
//     $(this)
//     .closest('.aside__accordion')
//     .find('.aside__item')
//     .removeClass('aside--active');
//   }
//   else {
//     $(this)
//     .closest('.aside__btn')
//     .find('.aside__item')
//     .removeClass('aside--active');
//     $(this).closest('.aside__accordion').addClass('active')
//   }
// });


  /* галерея Gratitude */
  $('.promo-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
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


