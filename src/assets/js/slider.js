//slider1
$('.slider__content').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   // autoplay: true,
   autoplaySpeed: 1000,
   prevArrow: $('.slider__1'),
   nextArrow: $('.slider__2'),
   responsive: [
      {
         breakpoint: 1100,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      },
   ]
});


//slider2-2
$('.info__slider-block-2').slick({
   infinite: true,
   slidesToScroll: 1,
   autoplay: false,
   prevArrow: $('.info__slider-3'),
   nextArrow: $('.info__slider-4'),
});

//slider2-1
$('.info__slider-block').slick({
   infinite: true,
   slidesToScroll: 1,
   autoplay: false,
   prevArrow: $('.info__slider-1'),
   nextArrow: $('.info__slider-2'),
});