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
};
let observer = new IntersectionObserver(callback, options);

let someElements = document.querySelectorAll(".anime");
someElements.forEach((someElement) => {
  observer.observe(someElement);
});
