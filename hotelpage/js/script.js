"use strict";
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
    //textType();
}

document.addEventListener("click", documentClickInfoClose);
// window.addEventListener("scroll", windowScroll);

function documentClickInfoClose(e) {
    const targetItem = e.target;

    if (targetItem.closest(".header__burger")) {
        document.documentElement.classList.toggle("menu-open");
        document.body.classList.toggle("lock");
    }
    if (targetItem.closest(".menu__item")) {
        document.documentElement.classList.remove("menu-open");
        document.body.classList.remove("lock");
    }

}


let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3,
};
let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target;
        if (entry.isIntersecting) {
            targetElement.classList.add("show");
        }
    });
}
let observer = new IntersectionObserver(callback, options);

let someElements = document.querySelectorAll(".service-list");
someElements.forEach(someElement => {
    observer.observe(someElement);
});

let advantagesHeadElements = document.querySelectorAll(".title-section");
advantagesHeadElements.forEach(advantagesHeadElement => {
    observer.observe(advantagesHeadElement);
});

let sideRightElements = document.querySelectorAll(".side-right");
sideRightElements.forEach(sideRightElement => {
    observer.observe(sideRightElement);
});

let sideLeftNumbersElements = document.querySelectorAll(".side-left__item");
sideLeftNumbersElements.forEach(sideLeftNumbersElement => {
    observer.observe(sideLeftNumbersElement);
});

let roomItemElements = document.querySelectorAll(".room__item");
roomItemElements.forEach(roomItemElement => {
    observer.observe(roomItemElement);
});

let aboutTextElements = document.querySelectorAll(".about-us__text");
aboutTextElements.forEach(aboutTextElement => {
    observer.observe(aboutTextElement);
});

let entertainmentItemElements = document.querySelectorAll(".entertainment__item");
entertainmentItemElements.forEach(entertainmentItemElement => {
    observer.observe(entertainmentItemElement);
});
