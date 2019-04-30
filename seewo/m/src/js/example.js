$(function () {
  $('body').on('click', '#go-top', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
    setTimeout(function(){
      $('#go-top').fadeOut();
    }, 500)
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
      $('#go-top').fadeIn();
    }
  });
});
