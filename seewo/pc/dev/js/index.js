$(function(){var e=!1,r=!1,o=!1,t=$("body"),s=$(window).height();function a(){var t=$(document).scrollTop();350<t?$("#header").addClass("blue"):$("#header").removeClass("blue"),$("#cover-part-1").height()<=t?($("#paste-part-2").html($("#cover-part-2").html()),$("#paste-part-2").css({background:"#fff"})):($("#paste-part-2").html(""),$("#paste-part-2").css({background:"transparent"})),t>=$("#part-1").height()-150?($("#gotop").show(),$("#cover-part-2").hide(),$("#cover-part-2-2").show(),e||(e=!0,$("#part-2-left-img").addClass("animate"),$("#animate-bg1").show(),$("#cover-part-2-2").css({height:s}),setTimeout(function(){$("#animate-bg1").animate({backgroundSize:"100%"},600)},300),setTimeout(function(){$("#txt1").addClass("animate")},1200),setTimeout(function(){$("#part-2-right-img").addClass("animate")},800))):($("#gotop").hide(),$("#cover-part-2").show(),$("#cover-part-2-2").hide()),$("#part-1").height()+$("#cover-part-2-1").height()+140<=t?($("#paste-part-4").html($("#cover-part-2-2").html()),$("#paste-part-4").css({background:"#f2f6f9"})):($("#paste-part-4").html(""),$("#paste-part-4").css({background:"transparent"})),$("#part-1").height()+$("#part-2").height()-150<=t?($("#cover-part-2-2").hide(),$("#cover-part-3-2").show(),r||(r=!0,$("#part-3-left-img").addClass("animate"),$("#animate-bg2").show(),setTimeout(function(){$("#animate-bg2").animate({backgroundSize:"100%"},600)},300),setTimeout(function(){$("#txt2").addClass("animate")},1200),setTimeout(function(){$("#part-3-right-img").addClass("animate")},800))):($("#cover-part-2-2").show(),$("#cover-part-3-2").hide()),$("#part-1").height()+$("#part-2").height()+$("#cover-part-3-1").height()+240<=t?($("#paste-part-6").html($("#cover-part-3-2").html()),$("#paste-part-6").css({background:"#fff"})):($("#paste-part-6").html(""),$("#paste-part-6").css({background:"transparent"}));var a=$("#part-1").height()+$("#part-2").height()+$("#part-3").height();a-150<=t&&(o||(o=!0,$("#part-4-left-img").addClass("animate"),$("#animate-bg3").show(),setTimeout(function(){$("#animate-bg3").animate({backgroundSize:"100%"},600)},300),setTimeout(function(){$("#txt3").addClass("animate")},1200),setTimeout(function(){$("#part-4-right-img").addClass("animate")},800))),a+s<=t?$(".bg-box").hide():$(".bg-box").show()}t.on("click","#gotop",function(){$("html,body").animate({scrollTop:0},500)}),$("#showQr").hover(function(){$(".qrcode-box").stop(!1,!1).fadeIn()},function(){$(".qrcode-box").stop(!1,!1).fadeOut()}),a(),$(document).scroll(function(){a()}),$("#paste-part-2, #paste-part-4, #paste-part-6").css({height:s})});