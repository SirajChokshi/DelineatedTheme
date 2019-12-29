/**
 * A script to load functionality for a lightbox overlay
 * NOTE: var slideIndex should start at 1 and finish at the
 * size of the lightbox. slideIndex should NEVER == 0.
 *
 * @author Siraj Chokshi <sirajsc2@illinois.edu>
 */

// read keystrokes for extra functionality
document.onkeydown = function(evt) {
  evt = evt || window.event;
  // move to next slide if right arrow
  if (evt.keyCode == 39) {
    nextSlide();
  }
  // move to prev slide if left arrow
  else if (evt.keyCode == 37) {
    prevSlide();
  }
  // close if [ESC] key
  else if (evt.keyCode == 27) {
    quit();
  }
};

/**
 * prevents lightbox from being displayed on page when called
 */
function quit() {
  document.getElementById('lightbox').style.display = "none";
}

/**
 * integer to represent the index of the current slide, initialized to '1'
 *
 * @type {number}
 */
var slideIndex = 1;

repaint(slideIndex);


/**
 * moves to one slide forward from the current index
 * if the current slide is the last this function will
 * cycle through to the first display
 */

function nextSlide() {
  if (slideIndex == 16) {
    slideIndex = 1;
    repaint(slideIndex);
  }
  else repaint(slideIndex += 1);
}

/**
 * moves to one slide previous from the current index
 * if the current slide is the first this function will
 * cycle through to the last display
 */

function prevSlide() {
  if (slideIndex == 1) {
    slideIndex = 16;
    repaint(slideIndex);
  }
  else repaint(slideIndex -= 1);
}

/**
 * recieves a slide number 'n' and opens to it by drawing it on the page
 *
 * @param {number} n - received slide index
 */

function openTo(n) {
  document.getElementById('lightbox').style.display = "block";
  repaint(slideIndex = n);
}

/**
 * recieves a slide number 'n' and draws the #lightbox at the received slide
 *
 * @param {number} n - received slide index
 */

function repaint(n) {
  var gallery = document.getElementsByClassName("slide");
  document.getElementById('photoNumber').innerHTML = slideIndex + '/16';
  if (n > gallery.length) {slideIndex = 1}
  if (n <= 0) {slideIndex = slides.length}
  var i;
  for (i = 0; i < gallery.length; i++) {
      gallery[i].style.display = "none";
  }
  gallery[slideIndex-1].style.display = "block";
}
