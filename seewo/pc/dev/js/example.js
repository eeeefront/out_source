$(function(){function a(){$(".mode").fadeOut(300),$(".fixed-block").fadeOut(300)}$(".fixed-block .close").click(function(){a()}),$(".go-back").click(function(){a()}),$("#getRule").click(function(){$(".mode").show(),$(".fixed-block").show()}),$(".page .page-box").click(function(){var a=$(".click");if("pre"==$(this).attr("id")||"up"==$(this).attr("id")){if($(this).hasClass("ban"))return;a.removeClass("click"),"pre"==$(this).attr("id")?a.prev().addClass("click"):"up"==$(this).attr("id")&&a.next().addClass("click")}else a.removeClass("click"),$(this).addClass("click");var c=$(".click").html();"1"===c?($("#pre").addClass("ban"),$("#up").removeClass("ban")):"3"===c&&($("#pre").removeClass("ban"),$("#up").addClass("ban")),$(".box").hide(),$(".page"+c).fadeIn(300)})});