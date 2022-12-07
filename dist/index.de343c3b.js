"use strict";
const body = document.getElementById("body");
// Navbar render
const navbarMarkup = function() {
    return /*html*/ `
  <nav class="navbar">
  <div class="navbar__logo">
  <a href="index.html">
    <img src="https://res.cloudinary.com/mulaz/image/upload/v1669155224/logo_light_htlfqo.jpg" alt="logo" />
    </a>
  </div>
  <div class="navbar__ul--container">
    <ul class="navbar__ul">
      <li><a href="index.html">Home</a></li>
      <li><a href="chi_siamo.html">Chi<span>_</span>Siamo</a></li>
      <li><a href="certificazioni.html">Certificazioni</a></li>
      <li class="navbar__prodotti"><a class="prodotti__link" href="#">Prodotti</a>
        <ul class="prodotti__ul">
          <li>
            <a href="prodotti.html">Serramenti in alluminio</a>
          </li>
          <li>
            <a href="./prodotti.html#serramenti-in-pvc">Serramenti in pvc</a></li>
          <li>
            <a href="./prodotti.html#schermature-solari">Schermature Solari</a>
          </li>
          <li>
            <a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a>
          </li>
          <li>
            <a href="./prodotti.html#opere-in-vetro">Opere in vetro</a>
          </li>
        </ul>
      </li>
      <li><a href="realizzazioni.html">Realizzazioni</a></li>
      <li><a href="news.html">News</a></li>
      <li><a href="contatti.html">Contatti</a></li>
    </ul>
  </div>
  <div class="menu-wrap">
    <div class="hamburger">
      <div class="line line--1"></div>
      <div class="line line--2"></div>
    </div>
  </div>
</nav>
<div class="menu">
    <div>
      <ul class="menu--ul">
        <li><a href="index.html">Home</a></li>
        <li><a href="chi_siamo.html">Chi Siamo</a></li>
        <li><a href="certificazioni.html">Certificazioni</a></li>
        <li class="prodotti"><a href="#">Prodotti<span class="arrow--down"><iconify-icon inline icon="material-symbols:keyboard-arrow-down-rounded" width="32"></iconify-icon></span
              ><span class="arrow--up hidden"><iconify-icon inline icon="material-symbols:keyboard-arrow-up-rounded" width="32"></iconify-icon></span></a>
          <ul class="menu--prodotti__ul hidden">
            <li>
             <a href="prodotti.html">Serramenti in alluminio</a>
            </li>
            <li>
             <a href="./prodotti.html#serramenti-in-pvc">Serramenti in pvc</a></li>
            <li>
              <a href="./prodotti.html#schermature-solari">Schermature Solari</a>
            </li>
            <li>
              <a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a>
            </li>
            <li>
             <a href="./prodotti.html#opere-in-vetro">Opere in vetro</a>
            </li>
          </ul>
        </li>
        <li><a href="realizzazioni.html">Realizzazioni</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="contatti.html">Contatti</a></li>
      </ul>
    </div>
</div>
    `;
};
const navMarkup = navbarMarkup();
body.insertAdjacentHTML("afterbegin", navMarkup);
//////////////////////////////////////////////// Prodotti Submenu /////////////////////////////////
const navbarProdotti = document.querySelector(".navbar__prodotti");
const prodottiUl = document.querySelector(".prodotti__ul");
const prodottiLink = document.querySelector(".prodotti__link");
let isOpen = false;
const prodottiSubmenu = function() {
    if (isOpen === false) {
        navbarProdotti.addEventListener("mouseover", function() {
            prodottiUl.style.visibility = "visible";
            prodottiUl.style.opacity = "1";
            prodottiUl.style.marginTop = "5px";
            prodottiLink.style.transform = "scale(1.1)";
            prodottiLink.style.transformOrigin = "center top";
        });
        prodottiUl.addEventListener("mouseover", function() {
            prodottiUl.style.visibility = "visible";
            prodottiUl.style.opacity = "1";
            prodottiUl.style.marginTop = "5px";
            prodottiLink.style.color = "#be1624";
            prodottiLink.style.transform = "scale(1.1)";
            prodottiLink.style.transformOrigin = "center top";
        });
        isOpen = true;
    }
    if (isOpen === true) {
        navbarProdotti.addEventListener("mouseout", function() {
            prodottiUl.style.visibility = "hidden";
            prodottiUl.style.opacity = "0";
            prodottiUl.style.marginTop = "15px";
            prodottiLink.style.transform = "scale(1)";
        });
        prodottiUl.addEventListener("mouseout", function() {
            prodottiUl.style.visibility = "hidden";
            prodottiUl.style.opacity = "0";
            prodottiUl.style.marginTop = "15px";
            prodottiLink.style.color = "";
            prodottiLink.style.transform = "scale(1)";
        });
        isOpen = false;
    }
};
prodottiSubmenu();
// Navbar a scomparsa
const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", function() {
    if (this.window.scrollY > 1400) {
        nav.style.transform = "translateY(-100%)";
        prodottiUl.style.visibility = "hidden";
        prodottiUl.style.opacity = "0";
        if (lastScrollY > this.window.scrollY) nav.style.transform = "translateY(0)";
    } else nav.style.transform = "translateY(0)";
    lastScrollY = window.scrollY;
});
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Footer Render /////////////////////////////////////
const footer = document.querySelector("#footer");
const footerMarkup = function() {
    return /*html*/ `
  <div class="footer__contatti">
  <h2 class="footer__title">Contatti</h2>
  <div class="footer__links">
    <p>
      <a href="tel: +390421316884">
        <iconify-icon icon="mdi:telephone"></iconify-icon>
        <span>_</span>+39 0421316884
      </a>
    </p>
    <p>
      <a href="mailto: info@caminottoserramenti.it">
        <iconify-icon icon="material-symbols:mail"></iconify-icon>
        <span>_</span>
        info@caminottoserramenti.it
      </a>
    </p>
    <p>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/CAMINOTTO+SERRAMENTI/@45.6986831,12.6906339,15z/data=!4m2!3m1!1s0x0:0xb4ca935ce8077423?sa=X&ved=2ahUKEwjyjP3ui8n7AhUXSfEDHau-BWYQ_BJ6BAhjEAg"
      >
        <iconify-icon icon="fa-solid:map-marker-alt"></iconify-icon>
        <span>--</span>
        Via Triestina, 4<br /><span>-----</span>30020 - Torre di mosto
        (VE)</a
      >
    </p>
  </div>
</div>
<div class="footer__link--utili">
  <h2>Link Utili</h2>
  <div class="footer__links">
    <p><a href="prodotti.html">Serramenti in alluminio</a></p>
    <p><a href="./prodotti.html#serramenti-in-pvc">Serramenti in PVC</a></p>
    <p><a href="./prodotti.html#schermature-solari">Schermature solari</a></p>
    <p><a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a></p>
    <p><a href="./prodotti.html#opere-in-vetro">Opere in vetro</a></p>
  </div>
</div>
<div class="footer__social">
  <a href="https://www.facebook.com/caminottoserramenti/" target="_blank"
    ><iconify-icon
      class="social__icon"
      icon="ic:baseline-facebook"
      width="60"
    ></iconify-icon
  ></a>
  <a href="https://www.instagram.com/caminottoserramen/" target="_blank"
    ><iconify-icon
      class="social__icon"
      icon="uil:instagram"
      width="60"
    ></iconify-icon
  ></a>
</div>
<p class="copyright">
  Caminotto Serramenti &copy; 2022, All Rights Reserved
</p>
  `;
};
const footMarkup = footerMarkup();
footer.insertAdjacentHTML("afterbegin", footMarkup);
/////////////////////////////////////////////////////////////////////////////
///////////////////////////// Show Menu ////////////////////////////////////
const html = document.querySelector(".html");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLine1 = document.querySelector(".line--1");
const menuLine2 = document.querySelector(".line--2");
let menuIsOpened = false;
const showMenu = function() {
    hamburger.addEventListener("click", function() {
        if (!menuIsOpened) {
            html.style.overflow = "hidden";
            menuLine1.style.transform = "rotate(135deg)";
            menuLine1.style.top = "40px";
            menuLine2.style.transform = "rotate(-135deg)";
            menuLine2.style.top = "40px";
            menuLine2.style.width = "40px";
            menu.style.transform = "translateX(0)";
            menuIsOpened = true;
            console.log("menuIsOpened");
        } else {
            html.style.overflow = "auto";
            menuLine1.style.transform = "rotate(0deg)";
            menuLine1.style.top = "32px";
            menuLine2.style.transform = "rotate(0deg)";
            menuLine2.style.top = "42px";
            menuLine2.style.width = "28px";
            menu.style.transform = "translateX(150%)";
            menuIsOpened = false;
        }
    });
};
showMenu();
////////////////////////////////////////// Show Submenu /////////////////////////////////////////
const prodotti = document.querySelector(".prodotti");
const menuProdottiUl = document.querySelector(".menu--prodotti__ul");
const arrowDown = document.querySelector(".arrow--down");
const arrowUp = document.querySelector(".arrow--up");
let submenuIsOpen = false;
const showSubmenu = function() {
    prodotti.addEventListener("click", function() {
        if (submenuIsOpen == false) {
            menuProdottiUl.style.display = "block";
            arrowDown.classList.add("hidden");
            arrowUp.classList.remove("hidden");
            submenuIsOpen = true;
        } else {
            menuProdottiUl.style.display = "none";
            arrowDown.classList.remove("hidden");
            arrowUp.classList.add("hidden");
            submenuIsOpen = false;
        }
    });
};
showSubmenu();

//# sourceMappingURL=index.de343c3b.js.map
