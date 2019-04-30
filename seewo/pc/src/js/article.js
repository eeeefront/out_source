$(function(){
    
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
  $(".go-back").click(function(){
      window.history.go(-1);
  })
})