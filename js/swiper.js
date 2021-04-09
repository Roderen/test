$('.swiper-wrapper').slick({
  infinite: true,
  slidesToShow: 1,
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
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        variableWidth: false,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 4,
        variableWidth: false,
      }
    },
    {
      breakpoint: 645,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: 485,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: false,
        centerMode: true,
        centerPadding: '110px'
      }
    },
    {
      breakpoint: 365,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: false,
        centerMode: true,
        centerPadding: '90px'
      }
    },
    {
      breakpoint: 325,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: false,
        centerMode: true,
        centerPadding: '75px'
      }
    },
  ]
});