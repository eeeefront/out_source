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

  var celebrationbanner = new Swiper('.celebration-banner', {
    //如果需要分页器
    pagination: {
        el: '.celebration-swiper-pagination',
        clickable :true,
        type: 'bullets',
    },
    observer:true,
  })
  var technologybanner = new Swiper('.technology-banner', {
    //如果需要分页器
    pagination: {
        el: '.technology-swiper-pagination',
        clickable :true,
        type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    }, //自动播放
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
  // 育才计划banner切换
  $(".plan .banner-btn-block .banner-btn").click(function(){
    $(".plan .banner-btn-block .banner-btn").removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('data-id')
    $(".plan .banner-img img").hide();
    $(".plan .banner-img img:nth-child("+id+")").fadeIn();
  })
  //导航切换
  $('.nav>.nav-list a').click(function(){
    $('.nav .nav-list').removeClass('active');
    $(this).parent().addClass('active');
  })
   //锚点跳转滑动效果            
   $('a[href*=#],area[href*=#]').click(function() {       
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) { 
            var targetOffset = $target.offset().top;
            $('html,body').animate({ 
                scrollTop: targetOffset
            },500);
            return false;
        }
    }
  });
  // 页面滚动
  $(window).scroll(function(event){
    checkscroll()
  });
  function checkscroll(){
    var winPos = $(window).scrollTop(); //屏幕位置
    var winHeight = $(window).height(); //屏幕高度
    var Nodeheight = [$('#top'),$('#educate'),$('#celebration'),$('#plan'),$('#development'),$('#partner')],
        length = Nodeheight.length;
    if(winPos<Nodeheight[1].offset().top){
      $('.nav .nav-list').removeClass('active');
      $('.nav .nav-list:nth-child(1)').addClass('active');
    }else{
      for(var i = 1;i<length; i++){
        if(winPos<Nodeheight[i+1].offset().top-50&&winPos>=Nodeheight[i].offset().top-50){
          $('.nav .nav-list').removeClass('active');
          $('.nav .nav-list:nth-child('+(i+1)+')').addClass('active');
          break;
        }
      }
    }
  }

  
  // 预约弹窗 
  $('.popup .title .close').click(function(){
    $('.mode').fadeOut(300);
    $('.popup').fadeOut(300);
  })
  $('.technology-btn .book').click(function(){
      $('.mode').show();
      $('.popup').show();
  })
});
