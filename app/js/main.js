$(function () {

  /* Burger menu */
  $('.header__burger').on('click', function () {
    $('.header__mobile').toggleClass('header__mobile--active')
  })

  $('.header__mobile-close').on('click', function () {
    $('.header__mobile').toggleClass('header__mobile--active')
  })

/* Search */

  $('.header__search-icon').on('click', function () {
    $('.header__search').toggleClass('header__search--active')
    $(".search__field").attr("placeholder", "Я ищу...");
  })


  /* Cart */

  $('.cart__button').on('click', function () {
    $('.cart').toggleClass('cart--active')
  })

  $('.cart__close').on('click', function () {
    $('.cart--active').removeClass('cart--active')
  })

  /* Slick slider */
  $('.hero__slider').slick({
    slidesToShow: 1
  })

  $('.brands').slick({
    slidesToShow: 6,
    arrows: false,

  })

  /* MixItUp */
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);
});