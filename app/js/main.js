$(function(){
    $('.slider-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,               
        dots: false,
        infinite: false,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
      });
});