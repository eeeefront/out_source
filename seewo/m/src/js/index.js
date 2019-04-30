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

  var galleryThumbs = new Swiper('#img-gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var galleryTop = new Swiper('#img-gallery-top', {
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });

  var galleryThumbs2 = new Swiper('#txt-gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var galleryTop2 = new Swiper('#txt-gallery-top', {
    spaceBetween: 0,
    thumbs: {
      swiper: galleryThumbs2,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });

  var swiper5 = new Swiper('#five-swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
      el: '.dot-pagination',
    },
  });


  var galleryThumbs3 = new Swiper('#deficul-gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.dot-pagination',
    },
  });

  var galleryTop3 = new Swiper('#deficul-gallery-top', {
    spaceBetween: 120,
    thumbs: {
      swiper: galleryThumbs3,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });

  var scroll = function(index) {
    var $id = $('#p' + index);
    $("html,body").animate({
      scrollTop: $id.offset().top - $('.header').height()
    }, 1000);
  }

  var $body = $('body');
  var show = false;
  $body.on('click', '#menu', function(){
    show = !show;
    if (show) {
      $(this).find('.close').show();
      $(this).find('.menu').hide();
      $('#point-wrapper').slideDown();
    } else {
      $(this).find('.close').hide();
      $(this).find('.menu').show();
      $('#point-wrapper').slideUp(100);
    }
  }).on('click', '#point-wrapper .point-item', function(){
    show = false
    $('#menu').find('.close').hide();
    $('#menu').find('.menu').show();
    $('#point-wrapper').slideUp(100);
    var index = $(this).index() + 1;
    scroll(index);
  }).on('click', '#live-btn', function(){
    $('#live-pop').fadeIn();
  }).on('click', '.live-container .pop-close', function(){
    $(this).parents('.live-container').fadeOut();
  });
});
