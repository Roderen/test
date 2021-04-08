const swiper = new Swiper('.swiper-container', {
  slidesPerView: 7,
  slidesPerColumn: 1,
  slidesPerView: 'auto',
  spaceBetween: 50,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-mybutton-next',
    prevEl: '.swiper-mybutton-prev',
  }
});