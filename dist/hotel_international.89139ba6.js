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
splide.mount();

//# sourceMappingURL=hotel_international.89139ba6.js.map
