import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const nextSlideBtn = document.querySelector('.testimonials-btn');

  const swiper = new Swiper('.testimonials-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    initialSlide: 4,
    centeredSlides: true,
    mousewheel: true,

    breakpoints: {
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
  });

  nextSlideBtn.addEventListener('click', () => {
    swiper.slideNext();
  });
})