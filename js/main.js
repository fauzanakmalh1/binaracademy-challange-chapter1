$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  nav: true,
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});
