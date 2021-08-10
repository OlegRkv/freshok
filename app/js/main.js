$(function() {
  /* Catalog menu */
  $('.catalog__button').on('click', function(){
    $('.catalog__button').toggleClass('catalog__button--active')
    $('.catalog__list').toggleClass('catalog__list--active')
  })

  /* Slick slider */
  $('.slider').slick({
    slidesToShow: 1
  })

  var mixer = mixitup('.products__list');
});