$(function () {
  var topbanner = new Swiper('.top-banner', {
    //如果需要分页器
    pagination: {
        el: '.top-swiper-pagination',
        clickable :true,
        type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    }, //自动播放
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    observer: true
  })

  var videobanner = new Swiper('.educate-banner', {
    //如果需要分页器
    pagination: {
        el: '.educate-swiper-pagination',
        clickable :true,
        type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    }, //自动播放
    loop: true,
    observer: true
  })

  var storybanner = new Swiper('.story-banner', {
    //如果需要分页器
    pagination: {
        el: '.story-swiper-pagination',
        clickable :true,
        type: 'bullets',
    },
    observer:true,
  })
  
    // 视频播放显示
  $(".play").click(function(){
      var src = $(this).attr("data-src");
      if( $(this).attr("data-id")){
          $(".playVideo video").attr("poster","")//未播放前的图片
      }
      $(".playVideo").addClass("playVideo-show")
      $(".playVideo video").attr("src",src)
  })
  $(".playVideo").click(function(){
      $(".playVideo").removeClass("playVideo-show")
      $(".playVideo video").attr("src","#")
      $(".playVideo video").attr("poster","")
  })
});
