// This code (lines 2-29) is for image carousels
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* Select/Unselect all functions */
function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="game"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}
function checkAll() {
  check();
  this.onclick = uncheckAll;
}
function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}
const checkoutAll = document.querySelector('#checkoutAll');
checkoutAll.onclick = checkAll;


