"use strict";
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
  //textType();
}

document.addEventListener("click", documentClickInfoClose);
// window.addEventListener("scroll", windowScroll);

function documentClickInfoClose(e) {
  if (e.target.closest(".header__burger")) {
    document.documentElement.classList.toggle("menu-open");
    document.body.classList.toggle("lock");
  }
  if (e.target.closest(".menu__item")) {
    document.documentElement.classList.remove("menu-open");
    document.body.classList.remove("lock");
  }
  if (e.target.closest(`.painting__button-info`)) {
    const parentInfoOpen = e.target.closest(".painting");
    parentInfoOpen.classList.add("info-open");
  }
  if (e.target.closest(".painting__button-close")) {
    const parentInfoClose = e.target.closest(".painting");
    parentInfoClose.classList.remove("info-open");
  }
  if (e.target.closest(".portfolio__work-button")) {
    const portfolioButton = document.querySelector(".portfolio__work-button");
    portfolioButton.classList.toggle("more");

    if (portfolioButton.classList.contains("more")) {
      portfolioButton.innerHTML = "Hide works";
      const portfolioItems = document.querySelector(".portfolio__items");
      portfolioItems.style.height = portfolioItems.scrollHeight + "px";
      portfolioItems.style.overflow = `visible`;
    } else {
      portfolioButton.innerHTML = "Load more";
      const portfolioItems = document.querySelector(".portfolio__items");
      const portfolioItem = document.querySelector(".portfolio__item");
      const resultItem = portfolioItem.offsetHeight;
      portfolioItems.style.overflow = `hidden`;
      portfolioItems.style.height = resultItem * 2 + 100 + "px";
    }
  }
}

// window.addEventListener("resize", function (e) {

// });

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
};
let observer = new IntersectionObserver(callback, options);

let someElements = document.querySelectorAll(".painting");
someElements.forEach((someElement) => {
  observer.observe(someElement);
});
