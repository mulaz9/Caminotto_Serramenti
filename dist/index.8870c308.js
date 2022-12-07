"use strict";
const splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
    speed: 1500,
    pauseOnHover: false,
    // updateOnMove: true,
    keyboard: "global"
});
const splideTrack = document.querySelector(".splide__track");
const bar = document.querySelector(".my-slider-progress-bar");
const slide1 = document.querySelector(".h1__hero1");
const slide2 = document.querySelector(".h1__hero2");
const slide3 = document.querySelector(".h1__hero3");
const btnSlide1 = document.querySelector(".btn__slide--1");
const btnSlide2 = document.querySelector(".btn__slide--2");
const btnSlide3 = document.querySelector(".btn__slide--3");
// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function() {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
    splideTrack.addEventListener("mousedown", function() {
        splideTrack.style.cursor = "grabbing";
    });
    splideTrack.addEventListener("mouseup", function() {
        splideTrack.style.cursor = "auto";
    });
    if (rate < 0.4) {
        slide1.style.transform = "translateY(0)";
        btnSlide1.style.transform = "translateY(0)";
        slide2.style.transform = "translateY(30px)";
        btnSlide2.style.transform = "translateY(60px)";
        slide3.style.transform = "translateY(30px)";
        btnSlide3.style.transform = "translateY(60px)";
    }
    if (rate > 0.4 && rate < 1) {
        slide1.style.transform = "translateY(30px)";
        btnSlide1.style.transform = "translateY(60px)";
        slide2.style.transform = "translateY(0)";
        btnSlide2.style.transform = "translateY(0)";
        slide3.style.transform = "translateY(30px)";
        btnSlide3.style.transform = "translateY(60px)";
    } else {
        slide2.style.transform = "translateY(30px)";
        btnSlide2.style.transform = "translateY(60px)";
        slide3.style.transform = "translateY(0)";
        btnSlide3.style.transform = "translateY(0)";
    }
});
splide.mount();

//# sourceMappingURL=index.8870c308.js.map
