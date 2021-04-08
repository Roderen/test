$('.swiper-wrapper').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  variableWidth: true,

  nextArrow: document.querySelector('.swiper-mybutton-next'),
  prevArrow: document.querySelector('.swiper-mybutton-prev'),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});