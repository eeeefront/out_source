$(function(){
  var swiper = new Swiper('#guest-swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
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

  var $body = $('body');
  $body.on('click', '#tabs .tab-min', function(){
    $(this).addClass('active').siblings('.tab-min').removeClass('active');
    var moment = $(this).data('moment');
    $('#part-left').find('.' + moment).show().siblings('.kk').hide();
    $('#part-right').find('.' + moment).show().siblings('.part').hide();
  }).on('click', '#live-btn', function(){
    $('#live-pop').fadeIn();
  }).on('click', '.live-container .pop-close', function(){
    $(this).parents('.live-container').fadeOut();
  });
});
