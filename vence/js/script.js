"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest(".header__burger")) {
        document.documentElement.classList.toggle("menu-open");
    }

    if (targetItem.closest(".search-menu__button") || targetItem.closest(".search-menu__close")) {
        document.documentElement.classList.toggle("search-open");
    }

}

const swiperOne = new Swiper('.head', {

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    autoplay: {
        // Пауза между прокруткой
        delay: 3000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: true,
    },
    loop: true,
    speed: 800,
});

const swiperTwoo = new Swiper('.side-right__slider', {

    pagination: {
        el: '.side-right__swiper-pagination',
        type: 'fraction',
    },
    autoplay: {
        // Пауза между прокруткой
        delay: 3000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: true,
    },
    loop: true,
    speed: 800,
});