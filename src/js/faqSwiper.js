import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const nextSlideBtn = document.querySelector('.faq-btn');

  const swiper = new Swiper('.faq-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    centeredSlides: true,
    mousewheel: true,

  });

  nextSlideBtn.addEventListener('click', () => {
    swiper.slideNext();
  });
});

// breakpoints: {
//   1200: {
//     slidesPerView: 3,
//     centeredSlides: true,
//   },
// },