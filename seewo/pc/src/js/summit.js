$(function(){
    var celebrationbanner = new Swiper('.celebration-banner', {
        //如果需要分页器
        pagination: {
            el: '.celebration-swiper-pagination',
            clickable :true,
            type: 'bullets',
        },
        observer:true,
    })
    
    var guestSwiper = new Swiper ('.guest-banner', {
        autoplay:true,
        loop:true,
        loopedSlides:4,
        observer:true,
        slidesPerView : 'auto',
        lazy: {
            loadPrevNext: true,
        },
        slideToClickedSlide: true,
    })   

    guestSwiper.on('slideChangeTransitionStart',change)
    function change(){
        // $(".guest-banner .swiper-slide img").attr('src','./images/banner-d.png');
        // $(".guest-banner .swiper-slide-active img").attr('src','./images/banner-l.png');
    }
    // 预约弹窗关闭
    $('.popup .title .close').click(function(){
        clearTimeout(times);
        $('.mode').fadeOut(300);
        $('.popup').fadeOut(300);
        setTimeout(function(){
            $('#getcode').removeClass('active').html('获取验证码');
        },300)
    })
    // 验证码获取
    $('#getcode').click(function(){
        $(this).addClass('active').html('正在发送...');
        daoshu(60,$(this))
    })
    //预约确定
    $('.popup .popup-sub').click(function(){
        $('.popup-book-going').hide();
        $('.popup-book-success').show();
    })
    // 预约弹窗
    $('.technology-btn .book').click(function(){
        $('.mode').show();
        $('.popup-book-going').show();
    })
    // 60s倒计时
    var times ;
    var daoshu = function(time,node){
        times = setTimeout(function(){
            console.log(time)
            node.html(time+'秒后重新发送')
            if(time==0){
                node.html('重新发送')
                node.removeClass('active')
                return ;
            }
            time--;
            daoshu(time,node);
        },1000)
    }
})