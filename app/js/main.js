$(function () {
  /* Catalog menu */
  $('.catalog__button').on('click', function () {
    $('.catalog__button').toggleClass('catalog__button--active')
    $('.catalog__list').toggleClass('catalog__list--active')
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