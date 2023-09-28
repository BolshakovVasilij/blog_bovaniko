/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
//window.addEventListener('DOMContentLoaded', () => {
//    let scrollPos = 0;
//    const mainNav = document.getElementById('mainNav');
//    const headerHeight = mainNav.clientHeight;
//    window.addEventListener('scroll', function() {
//        const currentTop = document.body.getBoundingClientRect().top * -1;
//        if ( currentTop < scrollPos) {
//            // Scrolling Up
//            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
//                mainNav.classList.add('is-visible');
//            } else {
//                console.log(123);
//                mainNav.classList.remove('is-visible', 'is-fixed');
//            }
//        } else {
//            // Scrolling Down
//            mainNav.classList.remove(['is-visible']);
//            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
//                mainNav.classList.add('is-fixed');
//            }
//        }
//        scrollPos = currentTop;
//    });
//})
const menuBtn = document.querySelector ('.nav__btn'); 
const menuMobile = document.querySelector ('.header__nav-list');
const menuEnter = document.querySelector ('.button-enter__hidden');
 menuBtn.addEventListener ('click', ()=> {menuMobile.classList.toggle ('nav--open')&menuEnter.classList.toggle ('nav--open')
 });

//слайдер 
const swiperOne = new Swiper('.map__slider', {

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});