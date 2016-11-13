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

    $('.promo-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


$('.card__tabs-link a').on('click', function(e){
  e.preventDefault();

  $(this)
    .closest('.card__tabs-list')
    .find('.card__tabs-link.active')
    .removeClass('active');
  $(this)
   .closest('.card__tabs-link')
   .addClass('active');

  $(this)
   .closest('.card__tabs')
   .find('.card__tab-item.active')
   .removeClass('active');
  link_href = $(this).attr('href');
  $(link_href).addClass('active');
});

  /* Модальное окно "Заказать звонок" */
  $('.header__btn').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault();
    $('body').css({"overflow":"hidden"});// выключaем стaндaртную рoль элементa
    $('.header__overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.form')
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '20%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.popup__bgr').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('body').css({"overflow":"auto"});
    $('.form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.header__overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });

  /* Модальное окно "Заказать звонок" */
  $('.card__btn').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault();
    $('body').css({"overflow":"hidden"});// выключaем стaндaртную рoль элементa
    $('.card__overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.form')
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '10%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.popup__bgr').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('body').css({"overflow":"auto"});
    $('.form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.card__overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });

});


