$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 50,
  nav: true,
  navText: [
    "<img src='../img/left_button.png'>",
    "<img src='../img/right_button.png'>",
  ],
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  smartSpeed: 1450,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
  },
});
