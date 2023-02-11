("use strict");

//////////////////////
// Sticky navigation

let prevScrollpos = window.scrollY;
const nav = document.querySelector(".nav-bar");
const logo = document.querySelector(".logo");
const mainNavLink = document.querySelector(".main-nav-text");
const mainNav = document.querySelector(".main-nav-list");
const btnNav = document.querySelector(".btn-mobile-nav");
const position = document.querySelector("body");

position.addEventListener("scroll", () => {
  const currentScrollPos = position.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    nav.style.height = "12" + "rem";
    logo.style.transform = "translateY(0)";
    mainNavLink.style.transform = "translateY(0)";
    btnNav.style.transform = "translateY(0)";
  } else {
    nav.style.height = "0" + "rem";
    logo.style.transform = "translateY(-50%)";
    mainNavLink.style.transform = "translateY(-60%)";
    btnNav.style.transform = "translateY(-65%)";
  }
  prevScrollpos = currentScrollPos;
});

/////////////////////////
// LAZY LOADING IMGS ////
/////////////////////////

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  // Ei lataa kaikkia kuvia jos on rullannut liian alas, vaihda niin ettei pysayta latausta ennenkuin valmis
  observer.unobserve(entry.target);
};

let imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: [0],
  rootMargin: "150px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////
////// SHOWING UP WHEN SCROLLING
///////////////////////////////////

const observerUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.style.transform = intersecting
      ? "translateY(0)"
      : "translateY(-20px)";
  });
});

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.style.transform = intersecting
      ? "translateX(0)"
      : "translateX(-20px)";
  });
});

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.style.transform = intersecting
      ? "translateX(0)"
      : "translateX(20px)";
  });
});

// Moving elements

const treatmentImgEL = document.querySelectorAll(".treatment-img");
treatmentImgEL.forEach((el) => {
  observerUp.observe(el);
});

const subheadingEL = document.querySelectorAll(".subheading");
subheadingEL.forEach((el) => {
  observerRight.observe(el);
});

const headingSecondaryEL = document.querySelectorAll(".heading-secondary");
headingSecondaryEL.forEach((el) => {
  observerLeft.observe(el);
});
