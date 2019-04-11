$(function() {
  var step2 = false;
  var step4 = false;
  var step6 = false;
  var $body = $('body');
  var defaultHeight = $(window).height();

  $body.on('click', '#gotop', function(){
    $('html,body').animate({
        scrollTop: 0
    }, 500);
  });

  $('#showQr').hover(function(){
    $('.qrcode-box').stop(false,false).fadeIn();
  }, function(){
    $('.qrcode-box').stop(false,false).fadeOut();
  });

  getScrollTop();

  $(document).scroll(function() {
    getScrollTop();
  });

  function getScrollTop() {
    var bodyScrollTop = $(document).scrollTop();
    bodyScrollTop > 350 ? $('#header').addClass('blue') : $('#header').removeClass('blue');
    var part1Height = $('#cover-part-1').height();
    if (bodyScrollTop >= part1Height) {
      $('#paste-part-2').html($('#cover-part-2').html());
      $('#paste-part-2').css({'background': '#fff'});
    } else {
      $('#paste-part-2').html('');
      $('#paste-part-2').css({'background': 'transparent'});
    }

    if (bodyScrollTop >= ($('#part-1').height() - 150)) {
      $('#gotop').show();
      $('#cover-part-2').hide();
      $('#cover-part-2-2').show();
      if (!step2) {
        runPart1();
      }
    } else {
      $('#gotop').hide();
      $('#cover-part-2').show();
      $('#cover-part-2-2').hide();
    }
    var part3Height = $('#part-1').height() + $('#cover-part-2-1').height() + 140;
    if (bodyScrollTop >= part3Height) {
      $('#paste-part-4').html($('#cover-part-2-2').html());
      $('#paste-part-4').css({'background': '#f2f6f9'});
    } else {
      $('#paste-part-4').html('');
      $('#paste-part-4').css({'background': 'transparent'});
    }

    var part4Height = $('#part-1').height() + $('#part-2').height();
    if (bodyScrollTop >= part4Height - 150) {
      $('#cover-part-2-2').hide();
      $('#cover-part-3-2').show();
      if (!step4) {
        runPart2();
      }
    } else {
      $('#cover-part-2-2').show();
      $('#cover-part-3-2').hide();
    }

    var part5Height = $('#part-1').height() + $('#part-2').height() + $('#cover-part-3-1').height() + 240;
    if (bodyScrollTop >= part5Height) {
      $('#paste-part-6').html($('#cover-part-3-2').html());
      $('#paste-part-6').css({'background': '#fff'});
    } else {
      $('#paste-part-6').html('');
      $('#paste-part-6').css({'background': 'transparent'});
    }

    var part6Height = $('#part-1').height() + $('#part-2').height() + $('#part-3').height();
    if (bodyScrollTop >= part6Height - 150) {
      if (!step6) {
        runPart3();
      }
    } else {
    }

    if (bodyScrollTop >= (part6Height + defaultHeight)) {
      $('.bg-box').hide();
    } else {
      $('.bg-box').show();
    }

  }

  $('#paste-part-2, #paste-part-4, #paste-part-6').css({'height': defaultHeight});

  function runPart1() {
    step2 = true;
    $('#part-2-left-img').addClass('animate');
    $('#animate-bg1').show();
    $('#cover-part-2-2').css({'height': defaultHeight});
    setTimeout(function(){
      $('#animate-bg1').animate({
        'backgroundSize': '100%',
      }, 600);
    }, 300);
    setTimeout(function() {
      $('#txt1').addClass('animate');
    }, 1200);
    setTimeout(function() {
      $('#part-2-right-img').addClass('animate');
    }, 800);
  }

  function runPart2() {
    step4 = true;
    $('#part-3-left-img').addClass('animate');
    $('#animate-bg2').show();
    setTimeout(function(){
      $('#animate-bg2').animate({
        'backgroundSize': '100%',
      }, 600);
    }, 300);
    setTimeout(function() {
      $('#txt2').addClass('animate');
    }, 1200);
    setTimeout(function() {
      $('#part-3-right-img').addClass('animate');
    }, 800);
  }

  function runPart3() {
    step6 = true;
    $('#part-4-left-img').addClass('animate');
    $('#animate-bg3').show();
    setTimeout(function(){
      $('#animate-bg3').animate({
        'backgroundSize': '100%',
      }, 600);
    }, 300);
    setTimeout(function() {
      $('#txt3').addClass('animate');
    }, 1200);
    setTimeout(function() {
      $('#part-4-right-img').addClass('animate');
    }, 800);
  }
});
