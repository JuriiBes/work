// * ------------------------------ responsive properties
function resizeProperty(elementsArray) {
  elementsArray.forEach((element) => {
    if (element.minWidth <= innerWidth && innerWidth <= element.maxWidth) {
      let percentResize =
        (element.maxWidth - innerWidth) / (element.maxWidth - element.minWidth);
      let bodyForChange = document.querySelector(
        `.${element.elementForChange}`
      );

      bodyForChange.style[element.property] =
        element.maxSize -
        (element.maxSize - element.minSize) * percentResize +
        "px";
    }
  });
}

let arrayElements = [

  {
    elementForChange: "about-me__text",
    property: "fontSize",
    maxWidth: 1440,
    minWidth: 320,
    maxSize: 80,
    minSize: 24,
  },
  {
    elementForChange: "head__sub-title",
    property: "fontSize",
    maxWidth: 1440,
    minWidth: 320,
    maxSize: 45,
    minSize: 24,
  },
  {
    elementForChange: "head__title",
    property: "fontSize",
    maxWidth: 1440,
    minWidth: 320,
    maxSize: 220,
    minSize: 65,
  },
];

resizeProperty(arrayElements);

addEventListener("resize", (e) => {
  resizeProperty(arrayElements);

  if (buttonMore.dataset.status === "hide") {
    bodyChangeStyle.style.maxHeight = bodyChangeStyle.scrollHeight + "px";
  }
});
// * ------------------------------end responsive properties
function changeInnerTextButton() {
  let checkLang = document.querySelector(".menu-choise__active").dataset.lang;
  let result;
  if (checkLang === "en") {
    if (buttonMore.dataset.status === "more") {
      result = "Hide works";
    } else {
      result = "Load more";
    }
  }
  if (checkLang === "deu") {
    if (buttonMore.dataset.status === "more") {
      result = "Ausblenden";
    } else {
      result = "Mehr laden";
    }
  }
  if (checkLang === "ua") {
    if (buttonMore.dataset.status === "more") {
      result = "Сховати";
    } else {
      result = "Показати ще";
    }
  }
  return result;
}

addEventListener("click", documentClickInfoClose);

let buttonMore = document.getElementById("button-more");
let bodyChangeStyle = document.querySelector(".portfolio__items-hidden");

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
    if (buttonMore.dataset.status === "more") {
      buttonMore.innerText = `${changeInnerTextButton()}`;
      buttonMore.dataset.status = "hide";
      bodyChangeStyle.style.maxHeight = bodyChangeStyle.scrollHeight + "px";
      bodyChangeStyle.style.opacity = 1;
    } else {
      buttonMore.innerText = `${changeInnerTextButton()}`;
      buttonMore.dataset.status = "more";
      bodyChangeStyle.style.maxHeight = null;
      bodyChangeStyle.style.opacity = 0;
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
};
let observer = new IntersectionObserver(callback, options);

let someElements = document.querySelectorAll(".painting");
someElements.forEach((someElement) => {
  observer.observe(someElement);
});
