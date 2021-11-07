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

  /* Filters */
  $('.filters__btn').on('click', function() {
    $(this).toggleClass('filters__btn--active')
  })

  $('.catalog-page__filter-mobile').on('click', function(){
    $('.filters').addClass('filters--active')
  });

  $('.filters__close').on('click', function(){
    $('.filters--active').removeClass('filters--active')
  });

  /* Range slider */

  var $range = $(".filters__range"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs (data) {
    from = data.from;
      to = data.to;
      
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);	
  }

  $inputFrom.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
      
      instance.update({
          from: val
      });
  });

  $inputTo.on("input", function () {
      var val = $(this).prop("value");
      
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
      
      instance.update({
          to: val
      });
  });

  /* Form styler */
  $('.catalog-page__content-select').styler();

  /* Catalog grid*/
  $('.catalog-page__content-btn').on('click', function() {
    $('.catalog-page__content-btn').removeClass('catalog-page__content-btn--active')
    $(this).addClass('catalog-page__content-btn--active')
  });

  $('.catalog-page__content-btn--list').on('click', function(){
    $('.catalog-page__list').addClass('catalog-page__list--list')
  });

  $('.catalog-page__content-btn--grid').on('click', function(){
    $('.catalog-page__list').removeClass('catalog-page__list--list')
  });

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