"use strict";const splide=new Splide(".splide",{type:"loop",perPage:1,arrows:!1,pagination:!1,autoplay:!0,speed:1500,pauseOnHover:!1,keyboard:"global"}),splideTrack=document.querySelector(".splide__track"),bar=document.querySelector(".my-slider-progress-bar"),slide1=document.querySelector(".h1__hero1"),slide2=document.querySelector(".h1__hero2"),slide3=document.querySelector(".h1__hero3"),btnSlide1=document.querySelector(".btn__slide--1"),btnSlide2=document.querySelector(".btn__slide--2"),btnSlide3=document.querySelector(".btn__slide--3");splide.on("mounted move",(function(){const e=splide.Components.Controller.getEnd()+1,t=Math.min((splide.index+1)/e,1);bar.style.width=String(100*t)+"%",splideTrack.addEventListener("mousedown",(function(){splideTrack.style.cursor="grabbing"})),splideTrack.addEventListener("mouseup",(function(){splideTrack.style.cursor="auto"})),t<.4&&(slide1.style.transform="translateY(0)",btnSlide1.style.transform="translateY(0)",slide2.style.transform="translateY(30px)",btnSlide2.style.transform="translateY(60px)",slide3.style.transform="translateY(30px)",btnSlide3.style.transform="translateY(60px)"),t>.4&&t<1?(slide1.style.transform="translateY(30px)",btnSlide1.style.transform="translateY(60px)",slide2.style.transform="translateY(0)",btnSlide2.style.transform="translateY(0)",slide3.style.transform="translateY(30px)",btnSlide3.style.transform="translateY(60px)"):(slide2.style.transform="translateY(30px)",btnSlide2.style.transform="translateY(60px)",slide3.style.transform="translateY(0)",btnSlide3.style.transform="translateY(0)")})),splide.mount();
//# sourceMappingURL=index.a9da0c63.js.map
