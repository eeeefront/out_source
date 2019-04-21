$(function () {
  var swiper = new Swiper('#first-swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.line-pagination',
    },
  });

  var swiper2 = new Swiper('#second-swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: '.dot-pagination',
    },
  });

  var swiper3 = new Swiper('#third-swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: '.img-pagination',
    },
  });
});
