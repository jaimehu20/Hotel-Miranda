let anchoPagina = window.innerWidth;

if (anchoPagina < 1000) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
} else {
  const swiper = new Swiper('.swiper--desktop', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}