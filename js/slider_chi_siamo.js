"use strict";

const splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  arrows: false,
  pagination: false,
  autoplay: true,
  speed: 1500,
  pauseOnHover: false,
  keyboard: "global",
});

const splideTrack = document.querySelector(".splide__track");
const bar = document.querySelector(".my-slider-progress-bar");

splide.on("mounted move", function () {
  const end = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});

splide.mount();
