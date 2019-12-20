const navbarBurger = document.querySelector('.navbar__burger');
const navbarList = document.querySelector('.navbar__list');

navbarBurger.addEventListener('click', () => {
    navbarList.classList.toggle('--visible')
})

function toggleNavBurger(open, closed) {
    open.classList.toggle('')
    closed.classList.toggle('')
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
window.onload = (function() {
  modal.style.display = "block";
})();
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// home form submission sends you to preps page for that apocalypse
const homeForm = document.querySelector('.home-section__form')

<<<<<<< HEAD
homeForm.addEventListener('submit', e => {
  e.preventDefault();
  window.location.href = `/preps/${e.target.apocalypse.value}`;
})
=======
// homeForm.addEventListener('submit', e => {
//   e.preventDefault();
//   window.location.href = `/preps/${e.target.apocalypse.value}`;
// })
>>>>>>> master
