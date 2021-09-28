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
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  })

  $('.brands').slick({
    slidesToShow: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        },
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
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