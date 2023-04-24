"use strict";const body=document.getElementById("body"),navbarMarkup=function(){return'\n  <nav class="navbar">\n  <div class="navbar__logo">\n  <a href="index.html">\n    <img src="https://res.cloudinary.com/mulaz/image/upload/v1669155224/logo_light_htlfqo.jpg" alt="logo" />\n    </a>\n  </div>\n  <div class="navbar__ul--container">\n    <ul class="navbar__ul">\n      <li><a class="home" href="index.html">Home</a></li>\n      <li><a class="chi_siamo" href="chi_siamo.html">Chi<span>_</span>Siamo</a></li>\n      <li><a class="certificazioni" href="certificazioni.html">Certificazioni</a></li>\n      <li class="navbar__prodotti"><a class="prodotti__link" href="#">Prodotti</a>\n        <ul class="prodotti__ul">\n          <li>\n            <a href="prodotti.html">Serramenti in alluminio</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#serramenti-in-pvc">Serramenti in pvc</a></li>\n          <li>\n            <a href="./prodotti.html#schermature-solari">Schermature Solari</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#zanzariere">Zanzariere</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#opere-in-vetro">Opere in vetro</a>\n          </li>\n        </ul>\n      </li>\n      <li><a class="realizzazioni" href="realizzazioni.html">Realizzazioni</a></li>\n      <li><a class="news" href="news.html">News</a></li>\n      <li><a class="contatti" href="contatti.html">Contatti</a></li>\n    </ul>\n  </div>\n  <div class="menu-wrap">\n    <div class="hamburger">\n      <div class="line line--1"></div>\n      <div class="line line--2"></div>\n    </div>\n  </div>\n</nav>\n<div class="menu">\n    <div>\n      <ul class="menu--ul">\n        <li><a href="index.html">Home</a></li>\n        <li><a href="chi_siamo.html">Chi Siamo</a></li>\n        <li><a href="certificazioni.html">Certificazioni</a></li>\n        <li class="prodotti">Prodotti<span class="arrow--down"><iconify-icon inline icon="material-symbols:keyboard-arrow-down-rounded" width="32"></iconify-icon></span\n              ><span class="arrow--up hidden"><iconify-icon inline icon="material-symbols:keyboard-arrow-up-rounded" width="32"></iconify-icon></span>\n          <ul class="menu--prodotti__ul hidden">\n            <li>\n             <a class="submenu__link" href="prodotti.html">Serramenti in alluminio</a>\n            </li>\n            <li>\n             <a class="submenu__link" href="./prodotti.html#serramenti-in-pvc">Serramenti in pvc</a></li>\n            <li>\n              <a class="submenu__link" href="./prodotti.html#schermature-solari">Schermature Solari</a>\n            </li>\n            <li>\n              <a class="submenu__link" href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a>\n            </li>\n            <li>\n            <a href="./prodotti.html#zanzariere">Zanzariere</a>\n          </li>\n            <li>\n             <a class="submenu__link" href="./prodotti.html#opere-in-vetro">Opere in vetro</a>\n            </li>\n          </ul>\n        </li>\n        <li><a href="realizzazioni.html">Realizzazioni</a></li>\n        <li><a href="news.html">News</a></li>\n        <li><a href="contatti.html">Contatti</a></li>\n      </ul>\n    </div>\n</div>\n    '},navMarkup='\n  <nav class="navbar">\n  <div class="navbar__logo">\n  <a href="index.html">\n    <img src="https://res.cloudinary.com/mulaz/image/upload/v1669155224/logo_light_htlfqo.jpg" alt="logo" />\n    </a>\n  </div>\n  <div class="navbar__ul--container">\n    <ul class="navbar__ul">\n      <li><a class="home" href="index.html">Home</a></li>\n      <li><a class="chi_siamo" href="chi_siamo.html">Chi<span>_</span>Siamo</a></li>\n      <li><a class="certificazioni" href="certificazioni.html">Certificazioni</a></li>\n      <li class="navbar__prodotti"><a class="prodotti__link" href="#">Prodotti</a>\n        <ul class="prodotti__ul">\n          <li>\n            <a href="prodotti.html">Serramenti in alluminio</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#serramenti-in-pvc">Serramenti in pvc</a></li>\n          <li>\n            <a href="./prodotti.html#schermature-solari">Schermature Solari</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#zanzariere">Zanzariere</a>\n          </li>\n          <li>\n            <a href="./prodotti.html#opere-in-vetro">Opere in vetro</a>\n          </li>\n        </ul>\n      </li>\n      <li><a class="realizzazioni" href="realizzazioni.html">Realizzazioni</a></li>\n      <li><a class="news" href="news.html">News</a></li>\n      <li><a class="contatti" href="contatti.html">Contatti</a></li>\n    </ul>\n  </div>\n  <div class="menu-wrap">\n    <div class="hamburger">\n      <div class="line line--1"></div>\n      <div class="line line--2"></div>\n    </div>\n  </div>\n</nav>\n<div class="menu">\n    <div>\n      <ul class="menu--ul">\n        <li><a href="index.html">Home</a></li>\n        <li><a href="chi_siamo.html">Chi Siamo</a></li>\n        <li><a href="certificazioni.html">Certificazioni</a></li>\n        <li class="prodotti">Prodotti<span class="arrow--down"><iconify-icon inline icon="material-symbols:keyboard-arrow-down-rounded" width="32"></iconify-icon></span\n              ><span class="arrow--up hidden"><iconify-icon inline icon="material-symbols:keyboard-arrow-up-rounded" width="32"></iconify-icon></span>\n          <ul class="menu--prodotti__ul hidden">\n            <li>\n             <a class="submenu__link" href="prodotti.html">Serramenti in alluminio</a>\n            </li>\n            <li>\n             <a class="submenu__link" href="./prodotti.html#serramenti-in-pvc">Serramenti in pvc</a></li>\n            <li>\n              <a class="submenu__link" href="./prodotti.html#schermature-solari">Schermature Solari</a>\n            </li>\n            <li>\n              <a class="submenu__link" href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a>\n            </li>\n            <li>\n            <a href="./prodotti.html#zanzariere">Zanzariere</a>\n          </li>\n            <li>\n             <a class="submenu__link" href="./prodotti.html#opere-in-vetro">Opere in vetro</a>\n            </li>\n          </ul>\n        </li>\n        <li><a href="realizzazioni.html">Realizzazioni</a></li>\n        <li><a href="news.html">News</a></li>\n        <li><a href="contatti.html">Contatti</a></li>\n      </ul>\n    </div>\n</div>\n    ';body.insertAdjacentHTML("afterbegin",navMarkup);const navbarProdotti=document.querySelector(".navbar__prodotti"),prodottiUl=document.querySelector(".prodotti__ul"),prodottiLink=document.querySelector(".prodotti__link");let isOpen=!1;const prodottiSubmenu=function(){!1===isOpen&&(navbarProdotti.addEventListener("mouseover",(function(){prodottiUl.style.visibility="visible",prodottiUl.style.opacity="1",prodottiUl.style.marginTop="5px",prodottiLink.style.transform="scale(1.1)",prodottiLink.style.transformOrigin="center top"})),prodottiUl.addEventListener("mouseover",(function(){prodottiUl.style.visibility="visible",prodottiUl.style.opacity="1",prodottiUl.style.marginTop="5px",prodottiLink.style.color="#be1624",prodottiLink.style.transform="scale(1.1)",prodottiLink.style.transformOrigin="center top"})),isOpen=!0),!0===isOpen&&(navbarProdotti.addEventListener("mouseout",(function(){prodottiUl.style.visibility="hidden",prodottiUl.style.opacity="0",prodottiUl.style.marginTop="15px",prodottiLink.style.transform="scale(1)"})),prodottiUl.addEventListener("mouseout",(function(){prodottiUl.style.visibility="hidden",prodottiUl.style.opacity="0",prodottiUl.style.marginTop="15px",prodottiLink.style.color="",prodottiLink.style.transform="scale(1)"})),isOpen=!1)};!1===isOpen&&(navbarProdotti.addEventListener("mouseover",(function(){prodottiUl.style.visibility="visible",prodottiUl.style.opacity="1",prodottiUl.style.marginTop="5px",prodottiLink.style.transform="scale(1.1)",prodottiLink.style.transformOrigin="center top"})),prodottiUl.addEventListener("mouseover",(function(){prodottiUl.style.visibility="visible",prodottiUl.style.opacity="1",prodottiUl.style.marginTop="5px",prodottiLink.style.color="#be1624",prodottiLink.style.transform="scale(1.1)",prodottiLink.style.transformOrigin="center top"})),isOpen=!0),!0===isOpen&&(navbarProdotti.addEventListener("mouseout",(function(){prodottiUl.style.visibility="hidden",prodottiUl.style.opacity="0",prodottiUl.style.marginTop="15px",prodottiLink.style.transform="scale(1)"})),prodottiUl.addEventListener("mouseout",(function(){prodottiUl.style.visibility="hidden",prodottiUl.style.opacity="0",prodottiUl.style.marginTop="15px",prodottiLink.style.color="",prodottiLink.style.transform="scale(1)"})),isOpen=!1);const nav=document.querySelector(".navbar");let lastScrollY=window.scrollY;window.addEventListener("scroll",(function(){this.window.scrollY>1400?(nav.style.transform="translateY(-100%)",prodottiUl.style.visibility="hidden",prodottiUl.style.opacity="0",lastScrollY>this.window.scrollY&&(nav.style.transform="translateY(0)")):nav.style.transform="translateY(0)",lastScrollY=window.scrollY}));const footer=document.querySelector("#footer"),footerMarkup=function(){return'\n  <div class="footer__contatti">\n  <h2 class="footer__title">Contatti</h2>\n  <div class="footer__links">\n    <p>\n      <a href="tel: +390421316884">\n        <iconify-icon icon="mdi:telephone"></iconify-icon>\n        <span>_</span>+39 0421316884\n      </a>\n    </p>\n    <p>\n      <a href="mailto: info@caminottoserramenti.it">\n        <iconify-icon icon="material-symbols:mail"></iconify-icon>\n        <span>_</span>\n        info@caminottoserramenti.it\n      </a>\n    </p>\n    <p>\n      <a\n        target="_blank"\n        href="https://www.google.com/maps/place/CAMINOTTO+SERRAMENTI/@45.6986831,12.6906339,15z/data=!4m2!3m1!1s0x0:0xb4ca935ce8077423?sa=X&ved=2ahUKEwjyjP3ui8n7AhUXSfEDHau-BWYQ_BJ6BAhjEAg"\n      >\n        <iconify-icon icon="fa-solid:map-marker-alt"></iconify-icon>\n        <span>--</span>\n        Via Triestina, 4<br /><span>-----</span>30020 - Torre di mosto\n        (VE)</a\n      >\n    </p>\n    <p>\n      <a\n        target="_blank"\n        href="https://www.google.com/maps/place/Via+Livenza,+3,+30022+Ceggia+VE/@45.6777978,12.633703,21z/data=!4m5!3m4!1s0x4779581342861a27:0x56328c40c04bbe12!8m2!3d45.6778429!4d12.6337893"\n      >\n        <iconify-icon icon="fa-solid:map-marker-alt"></iconify-icon>\n        <span>--</span>\n        Via Livenza, 3<br /><span>-----</span>30022 - Ceggia\n        (VE)</a\n      >\n    </p>\n  </div>\n</div>\n<div class="footer__link--utili">\n  <h2>Link Utili</h2>\n  <div class="footer__links">\n    <p><a href="prodotti.html">Serramenti in alluminio</a></p>\n    <p><a href="./prodotti.html#serramenti-in-pvc">Serramenti in PVC</a></p>\n    <p><a href="./prodotti.html#schermature-solari">Schermature solari</a></p>\n    <p><a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a></p>\n    <p><a href="./prodotti.html#zanzariere">Zanzariere</a></p>\n    <p><a href="./prodotti.html#opere-in-vetro">Opere in vetro</a></p>\n  </div>\n</div>\n<div class="footer__social">\n  <a href="https://www.facebook.com/caminottoserramenti/" target="_blank"\n    ><iconify-icon\n      class="social__icon"\n      icon="ic:baseline-facebook"\n      width="60"\n    ></iconify-icon\n  ></a>\n  <a href="https://www.instagram.com/caminottoserramen/" target="_blank"\n    ><iconify-icon\n      class="social__icon"\n      icon="uil:instagram"\n      width="60"\n    ></iconify-icon\n  ></a>\n  <a href="#" class="iubenda-cs-preferences-link">Aggiorna le tue preferenze di <br> tracciamento della pubblicità</a>\n</div>\n<h6 class="copyright">\n<a href="https://www.iubenda.com/privacy-policy/41291582" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);<\/script><br>\n  CDF-GROUP SRLS &copy; 2022, All Rights Reserved<br> P.I. e C.F. 04493220273 PEC: cdf-groupsrls@pecimprese.it\n</h6>\n  '},footMarkup='\n  <div class="footer__contatti">\n  <h2 class="footer__title">Contatti</h2>\n  <div class="footer__links">\n    <p>\n      <a href="tel: +390421316884">\n        <iconify-icon icon="mdi:telephone"></iconify-icon>\n        <span>_</span>+39 0421316884\n      </a>\n    </p>\n    <p>\n      <a href="mailto: info@caminottoserramenti.it">\n        <iconify-icon icon="material-symbols:mail"></iconify-icon>\n        <span>_</span>\n        info@caminottoserramenti.it\n      </a>\n    </p>\n    <p>\n      <a\n        target="_blank"\n        href="https://www.google.com/maps/place/CAMINOTTO+SERRAMENTI/@45.6986831,12.6906339,15z/data=!4m2!3m1!1s0x0:0xb4ca935ce8077423?sa=X&ved=2ahUKEwjyjP3ui8n7AhUXSfEDHau-BWYQ_BJ6BAhjEAg"\n      >\n        <iconify-icon icon="fa-solid:map-marker-alt"></iconify-icon>\n        <span>--</span>\n        Via Triestina, 4<br /><span>-----</span>30020 - Torre di mosto\n        (VE)</a\n      >\n    </p>\n    <p>\n      <a\n        target="_blank"\n        href="https://www.google.com/maps/place/Via+Livenza,+3,+30022+Ceggia+VE/@45.6777978,12.633703,21z/data=!4m5!3m4!1s0x4779581342861a27:0x56328c40c04bbe12!8m2!3d45.6778429!4d12.6337893"\n      >\n        <iconify-icon icon="fa-solid:map-marker-alt"></iconify-icon>\n        <span>--</span>\n        Via Livenza, 3<br /><span>-----</span>30022 - Ceggia\n        (VE)</a\n      >\n    </p>\n  </div>\n</div>\n<div class="footer__link--utili">\n  <h2>Link Utili</h2>\n  <div class="footer__links">\n    <p><a href="prodotti.html">Serramenti in alluminio</a></p>\n    <p><a href="./prodotti.html#serramenti-in-pvc">Serramenti in PVC</a></p>\n    <p><a href="./prodotti.html#schermature-solari">Schermature solari</a></p>\n    <p><a href="./prodotti.html#controtelai-isolanti">Controtelai isolanti</a></p>\n    <p><a href="./prodotti.html#zanzariere">Zanzariere</a></p>\n    <p><a href="./prodotti.html#opere-in-vetro">Opere in vetro</a></p>\n  </div>\n</div>\n<div class="footer__social">\n  <a href="https://www.facebook.com/caminottoserramenti/" target="_blank"\n    ><iconify-icon\n      class="social__icon"\n      icon="ic:baseline-facebook"\n      width="60"\n    ></iconify-icon\n  ></a>\n  <a href="https://www.instagram.com/caminottoserramen/" target="_blank"\n    ><iconify-icon\n      class="social__icon"\n      icon="uil:instagram"\n      width="60"\n    ></iconify-icon\n  ></a>\n  <a href="#" class="iubenda-cs-preferences-link">Aggiorna le tue preferenze di <br> tracciamento della pubblicità</a>\n</div>\n<h6 class="copyright">\n<a href="https://www.iubenda.com/privacy-policy/41291582" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);<\/script><br>\n  CDF-GROUP SRLS &copy; 2022, All Rights Reserved<br> P.I. e C.F. 04493220273 PEC: cdf-groupsrls@pecimprese.it\n</h6>\n  ';footer.insertAdjacentHTML("afterbegin",footMarkup);const html=document.querySelector(".html"),hamburger=document.querySelector(".hamburger"),menu=document.querySelector(".menu"),menuLine1=document.querySelector(".line--1"),menuLine2=document.querySelector(".line--2"),submenuLink=document.querySelectorAll(".submenu__link");let menuIsOpened=!1;const showMenu=function(){hamburger.addEventListener("click",(function(){menuIsOpened?(html.style.overflow="auto",menuLine1.style.transform="rotate(0deg)",menuLine1.style.top="32px",menuLine2.style.transform="rotate(0deg)",menuLine2.style.top="42px",menuLine2.style.width="28px",menu.style.transform="translateX(150%)",menuIsOpened=!1):(html.style.overflow="hidden",menuLine1.style.transform="rotate(135deg)",menuLine1.style.top="40px",menuLine2.style.transform="rotate(-135deg)",menuLine2.style.top="40px",menuLine2.style.width="40px",menu.style.transform="translateX(0)",menuIsOpened=!0,console.log("menuIsOpened"))})),submenuLink.forEach((n=>n.addEventListener("click",(function(){html.style.overflow="auto",menuLine1.style.transform="rotate(0deg)",menuLine1.style.top="32px",menuLine2.style.transform="rotate(0deg)",menuLine2.style.top="42px",menuLine2.style.width="28px",menu.style.transform="translateX(150%)",menuIsOpened=!1}))))};hamburger.addEventListener("click",(function(){menuIsOpened?(html.style.overflow="auto",menuLine1.style.transform="rotate(0deg)",menuLine1.style.top="32px",menuLine2.style.transform="rotate(0deg)",menuLine2.style.top="42px",menuLine2.style.width="28px",menu.style.transform="translateX(150%)",menuIsOpened=!1):(html.style.overflow="hidden",menuLine1.style.transform="rotate(135deg)",menuLine1.style.top="40px",menuLine2.style.transform="rotate(-135deg)",menuLine2.style.top="40px",menuLine2.style.width="40px",menu.style.transform="translateX(0)",menuIsOpened=!0,console.log("menuIsOpened"))})),submenuLink.forEach((n=>n.addEventListener("click",(function(){html.style.overflow="auto",menuLine1.style.transform="rotate(0deg)",menuLine1.style.top="32px",menuLine2.style.transform="rotate(0deg)",menuLine2.style.top="42px",menuLine2.style.width="28px",menu.style.transform="translateX(150%)",menuIsOpened=!1}))));const prodotti=document.querySelector(".prodotti"),menuProdottiUl=document.querySelector(".menu--prodotti__ul"),arrowDown=document.querySelector(".arrow--down"),arrowUp=document.querySelector(".arrow--up");let submenuIsOpen=!1;const showSubmenu=function(){prodotti.addEventListener("click",(function(){0==submenuIsOpen?(menuProdottiUl.style.display="block",arrowDown.classList.add("hidden"),arrowUp.classList.remove("hidden"),submenuIsOpen=!0):(menuProdottiUl.style.display="none",arrowDown.classList.remove("hidden"),arrowUp.classList.add("hidden"),submenuIsOpen=!1)}))};prodotti.addEventListener("click",(function(){0==submenuIsOpen?(menuProdottiUl.style.display="block",arrowDown.classList.add("hidden"),arrowUp.classList.remove("hidden"),submenuIsOpen=!0):(menuProdottiUl.style.display="none",arrowDown.classList.remove("hidden"),arrowUp.classList.add("hidden"),submenuIsOpen=!1)}));
//# sourceMappingURL=index.bc871e9d.js.map
