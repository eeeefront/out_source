$(function () {
  var topbanner = new Swiper('.top-banner', {
    //如果需要分页器
    pagination: {
      el: '.top-swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    }, //自动播放
    loop: true,
    observer: true
  });
  //故事图文旧
  // var storybanner = new Swiper('.story-banner', {
  //   //如果需要分页器
  //   pagination: {
  //     el: '.story-swiper-pagination',
  //     clickable: true,
  //     type: 'bullets',
  //   },
  //   observer: true,
  // })
  var storybanner = new Swiper('.story-banner', {
    //如果需要分页器
    pagination: {
      el: '.story-swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    observer: true,
    loop : true,
    loopAdditionalSlides : 3,
    slidesPerView : 1.4,
    centeredSlides : true,
    navigation: {
      nextEl: '.story-banner .swiper-button-next',
      prevEl: '.story-banner .swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  })
  var mediabanner = new Swiper('.media-banner', {
    observer: true,
    loop : true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.block-media .swiper-button-next',
      prevEl: '.block-media .swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  })

  var celebrationbanner = new Swiper('.celebration-banner', {
    //如果需要分页器
    pagination: {
      el: '.celebration-swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    observer: true,
  })
  var technologybanner = new Swiper('.technology-banner', {
    //如果需要分页器
    pagination: {
      el: '.technology-swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    }, //自动播放
    observer: true,
    navigation: {
      nextEl: '.block-technology .swiper-button-next',
      prevEl: '.block-technology .swiper-button-prev',
    },
  })


  var planbanner = new Swiper('.plan-banner .banner-img', {
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    }, //自动播放
    loop: true,
    effect : 'fade',
    observer: true,
    on: {
      slideChangeTransitionStart: function(){
        var num = this.activeIndex==4?'1':this.activeIndex
        $(".plan .banner-btn-block .banner-btn").removeClass('active');
        $('.plan .banner-btn-block .banner-btn:nth-child('+num+')').addClass('active');
      }
    }
  })

  // 视频播放显示
  $(".play").click(function () {
    var src = $(this).attr("data-src");
    if ($(this).attr("data-id")) {
      $(".playVideo video").attr("poster", "")//未播放前的图片
    }
    $(".playVideo").addClass("playVideo-show")
    $(".playVideo video").attr("src", src)
  })
  $(".playVideo").click(function () {
    $(".playVideo").removeClass("playVideo-show")
    $(".playVideo video").attr({"src":"#","poster": ""})
  })

  // 教育更美好轮播图放大
  $('.story-banner .swiper-wrapper .swiper-slide-box').hover(function (){
    if($(this).hasClass('active')) return;
    var nodeBox =  $(".story-banner .swiper-wrapper .swiper-slide-box"),
        nodeConten = $('.story-banner .swiper-wrapper .box-content')
    var index = nodeBox.index(this);
    nodeBox.removeClass('active');
    nodeConten.removeClass('active');
    $(this).addClass('active')
    nodeConten.eq(index).addClass('active')
  })

  // 育才计划banner切换
  $(".plan .banner-btn-block .banner-btn").click(function () {
    if($(this).hasClass('active')) return;
    $(".plan .banner-btn-block .banner-btn").removeClass('active');
    $(this).addClass('active');

    var id = $(this).attr('data-id')
    planbanner.slideTo(id, 1000, false);
  })
  //锚点跳转滑动效果
  $('a[href*=#],area[href*=#]').click(function () {
    if ($(this).parent().hasClass('active')) return
    //解除绑定滚动事件
    $(window).off('scroll', checkscroll);
    //导航切换
    $('.nav .nav-list').removeClass('active');
    $(this).parent().addClass('active');

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 500);
        setTimeout(function () {//绑定滚动事件
          $(window).on('scroll', checkscroll);
        }, 500)
        return false;
      }
    }
  });
  checkscroll();
  // 页面滚动
  $(window).on('scroll', checkscroll);
  function checkscroll() {
    var winPos = $(window).scrollTop(),
      Nodeheight = [
        $('#top').offset().top - 50,
        $('#educate').offset().top - 50,
        $('.block-media').offset().top - 80,
        //$('#celebration').offset().top - 50,
        $('#plan').offset().top - 50,
        $('#development').offset().top - 50,
        //$('#partner').offset().top - 50
      ],
      length = Nodeheight.length,
      navList = $('.nav .nav-list');
    if (winPos < Nodeheight[1]) {
      navList.removeClass('active');
      navList.eq(0).addClass('active');
    } else {
      for (var i = 1; i < length; i++) {
        if(Nodeheight[i + 1] ){
          if (winPos < Nodeheight[i + 1] && winPos >= Nodeheight[i]) {
            navList.removeClass('active');
            navList.eq(i).addClass('active');
            break;
          }
        }else{
          navList.removeClass('active');
          navList.eq(i).addClass('active');
          break;
        }
      }
    }
  }

  // 预约弹窗关闭
  $('.popup .title .close').click(function () {
    clearTimeout(times);
    $('.mode').fadeOut(300);
    $('.popup').fadeOut(300);
    setTimeout(function () {
      $('#getcode').removeClass('active').html('获取验证码');
    }, 300)
  })
  //手机号正则验证
  $("#popup-phone").blur(function(){
    var phone = $(this).val();
    console.log(phone);
    if(!(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/.test(phone))){
      $('.phone .tips').show();
      return ;
    }
    $('.phone .tips').fadeOut();
  })
  // 验证码获取
  $('#getcode').click(function () {
    $(this).addClass('active').html('正在发送...');
    daoshu(60, $(this))
  })
  //预约确定
  $('.popup .popup-sub').click(function () {
    $('.popup-book-going').hide();
    $('.popup-book-success').show();
  })
  // 预约弹窗
  $('.technology-btn .book').click(function () {
    $('.mode').show();
    $('.popup-book-going').show();
  })
  // 60s倒计时
  var times;
  var daoshu = function (time, node) {
    times = setTimeout(function () {
      node.html(time + '秒后重新发送')
      if (time == 0) {
        node.html('重新发送')
        node.removeClass('active')
        return;
      }
      time--;
      daoshu(time, node);
    }, 1000)
  }
});
