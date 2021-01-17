"use strict";
const iataBtn = document.querySelector(".iata-btn");
const ceairBtn = document.querySelector(".ceair-btn");
const iataExp = document.querySelector(".iata");
const ceairExp = document.querySelector(".ceair");
const allSections = document.querySelectorAll(".section");
const navbar = document.querySelector(".navbar");

///Reveal section
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

///navbar smooth scolling
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navbar__links")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///Exeperience section
const displayExperience = function (ex1, ex2) {
  ex1.classList.remove("hidden");
  ex2.classList.add("hidden");
};

iataBtn.addEventListener("click", function () {
  displayExperience(iataExp, ceairExp);
});

ceairBtn.addEventListener("click", function () {
  displayExperience(ceairExp, iataExp);
});
