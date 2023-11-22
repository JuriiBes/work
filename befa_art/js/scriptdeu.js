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

    if (targetItem.closest(`.painting__button-info`)) {
        const targetItemParent = targetItem.parentElement;
        const parentTouchElement = targetItemParent.parentElement;
        const parentElement = parentTouchElement.parentElement;
        parentElement.classList.add("info-open");

    }
    if (targetItem.closest(".painting__button-close")) {
        const targetItemParent = targetItem.parentElement;
        const parentTouchElement = targetItemParent.parentElement;
        const parentElement = parentTouchElement.parentElement;
        parentElement.classList.remove("info-open");
    }
    if (targetItem.closest(".portfolio__work-button")) {
        const portfolioButton = document.querySelector('.portfolio__work-button');
        portfolioButton.classList.toggle("more");
        if (portfolioButton.classList.contains("more")) {
            portfolioButton.innerHTML = 'Ausblenden';
            const portfolioItems = document.querySelector('.portfolio__items');
            portfolioItems.style.height = portfolioItems.scrollHeight + 'px';
            portfolioItems.style.overflow = `visible`;

        } else {
            portfolioButton.innerHTML = 'Mehr laden';
            const portfolioItems = document.querySelector('.portfolio__items');
            portfolioItems.style.overflow = `hidden`;
            portfolioItems.style.height = (898 + 'px');
            portfolioItems.style.marginBottom = `58` + `px`;
        }

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

let someElements = document.querySelectorAll(".painting");
someElements.forEach(someElement => {
    observer.observe(someElement);
});


