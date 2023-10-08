
//скрытое меню
const menuBtn = document.querySelector ('.nav__btn'); 
const menuMobile = document.querySelector ('.header__nav-list');
 menuBtn.addEventListener ('click', ()=> {menuMobile.classList.toggle ('nav--open')
 });
//выпадающее меню

//слайдер 
const swiperOne = new Swiper('.map__slider', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  //loopedSlides: 7,
  //watchSlidesVisibility: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 'auto',
      spaceBetween: -80,
    },
    1140: {
      spaceBetween: 0,
    },
    1000: {
      spaceBetween: 20,
    },
    800: {
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
   600: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    380: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }
});