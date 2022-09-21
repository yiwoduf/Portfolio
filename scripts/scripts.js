/*
// CHECKING SCROLL POSITION
window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};
*/

$(document).on("scroll", function () {
  // FADE IN AND OUT EFFECT
  if ($(document).scrollTop() > 2700 && $(document).scrollTop() < 4200) {
    $(".badge-container").fadeIn();
  } else {
    $(".badge-container").fadeOut();
  }

  if ($(document).scrollTop() > 3900 && $(document).scrollTop() < 7500) {
    $(".container-section-project-main-one").fadeIn(2000);
  } else {
    $(".container-section-project-main-one").fadeOut();
  }

  if ($(document).scrollTop() > 4500 && $(document).scrollTop() < 7500) {
    $(".container-section-project-main-two").fadeIn(2000);
    $(".container-section-project-main-three").fadeIn(2000);
  } else {
    $(".container-section-project-main-two").fadeOut();
    $(".container-section-project-main-three").fadeOut();
  }

  if ($(document).scrollTop() > 5800 && $(document).scrollTop() < 7500) {
    $(".container-section-project-main-four").fadeIn(2000);
    $(".container-section-project-main-five").fadeIn(2000);
  } else {
    $(".container-section-project-main-four").fadeOut();
    $(".container-section-project-main-five").fadeOut();
  }
});
