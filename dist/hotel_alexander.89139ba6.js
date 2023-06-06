"use strict";
const splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    arrows: true,
    pagination: false,
    autoplay: false,
    keyboard: "global"
});
// Collects LI elements:
const thumbnails = document.getElementsByClassName("thumbnail");
let current; // Keeps the current thumbnail
for(let i = 0; i < thumbnails.length; i++)initThumbnail(thumbnails[i], i);
// The function to initialize each thumbnail.
function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function() {
        splide.go(index);
    });
}
splide.on("mounted move", function() {
    if (current) current.classList.remove("is-active");
    // Splide#index returns the latest slide index:
    var thumbnail = thumbnails[splide.index];
    if (thumbnail) {
        thumbnail.classList.add("is-active");
        current = thumbnail;
    }
});
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay__img");
const mainCarousel = document.querySelector("#main-carousel");
const classSplide = document.querySelector(".splide");
// splide.on("click", function () {
//   overlay.style.scale = "1";
//   mainCarousel.style.scale = "1.3";
//   mainCarousel.style.zIndex = "10";
// });
splide.mount();
///////////////////////////////////// Activate Overlay on Click ///////////////////////////
const link = document.querySelectorAll(".overlay__link");

//# sourceMappingURL=hotel_alexander.89139ba6.js.map
