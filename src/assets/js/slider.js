//slider1
$('.slider__content').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1000,
   prevArrow: $('.slider__1'),
   nextArrow: $('.slider__2'),
});

//slider2
$('.info__slider-block').slick({
   infinite: true,
   slidesToScroll: 1,
   autoplay: false,
   prevArrow: $('.info__slider-1'),
   nextArrow: $('.info__slider-2'),
});