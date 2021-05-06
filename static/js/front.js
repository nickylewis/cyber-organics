/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  splash_carousel()
})

function submitLogin() {
  $("#shareholder_login")[0].reset()
  return false
}


function splash_carousel () {
  if ($('.owl-carousel').length) {
    $(".owl-carousel").owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      margin:30,
      stagePadding:30,
      smartSpeed:1000,
      center:true,
      autoplay:true,
      autoplayTimeout:4000,
      loop:true
    })
  }
}



