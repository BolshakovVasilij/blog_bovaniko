
//выпадающее меню header
const menuBtn = document.querySelector ('.nav__btn'); 
const menuMobile = document.querySelector ('.header__nav-list');
 menuBtn.addEventListener ('click', ()=> {menuMobile.classList.toggle ('nav--open')
 });
//выпадающее меню footer
const menuBtnFooter = document.querySelector ('.nav__btn-footer'); 
const menuMobileFooter = document.querySelector ('.nav-footer');
menuBtnFooter.addEventListener ('click', ()=> {menuMobileFooter.classList.toggle ('nav-footer--open')
});
//слайдер nav-footer
const swiperOne = new Swiper('.map__slider', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 'auto',
      spaceBetween: 'auto',
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