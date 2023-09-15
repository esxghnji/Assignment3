// This code (lines 2-35) is for image carousels
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
     curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});