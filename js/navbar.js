"use strict";

const body = document.getElementById("body");

const generateMarkup = function () {
  return /*html*/ `
  <nav class="navbar">
  <div class="navbar__logo">
    <img src="https://res.cloudinary.com/mulaz/image/upload/v1669155224/logo_light_htlfqo.jpg" alt="logo" />
  </div>
  <ul class="navbar__ul">
    <li>Home</li>
    <li>Chi<span>_</span>Siamo</li>
    <li>Certificazioni</li>
    <li>Prodotti</li>
    <li>Realizzazioni</li>
    <li>News</li>
    <li>Contatti</li>
  </ul>
</nav>
    `;
};

const markup = generateMarkup();
body.insertAdjacentHTML("afterbegin", markup);

// Navbar a scomparsa
const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1400) {
    nav.style.transform = "translateY(-100%)";
    if (lastScrollY > this.window.scrollY) {
      nav.style.transform = "translateY(0)";
    }
  } else {
    nav.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});

// Footer
