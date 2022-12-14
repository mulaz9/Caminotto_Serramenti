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
  <ul class="navbar__ul">
    <li><a href="index.html">Home</a></li>
    <li><a href="#">Chi<span>_</span>Siamo</a></li>
    <li><a href="#">Certificazioni</a></li>
    <li><a href="#">Prodotti</a></li>
    <li><a href="#">Realizzazioni</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Contatti</a></li>
  </ul>
</nav>
    `;
};
const navMarkup = navbarMarkup();
body.insertAdjacentHTML("afterbegin", navMarkup);
// Navbar a scomparsa
const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", function() {
    if (this.window.scrollY > 1400) {
        nav.style.transform = "translateY(-100%)";
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
    <p><a href="">Serramenti in alluminio</a></p>
    <p><a href="">Serramenti in PVC</a></p>
    <p><a href="">Schermature solari</a></p>
    <p><a href="">Controtelai isolanti</a></p>
    <p><a href="">Opere in vetro</a></p>
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

//# sourceMappingURL=index.8bb2c238.js.map
