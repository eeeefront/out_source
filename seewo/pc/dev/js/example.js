$(function(){var a,e,s=i(window.location.href,"page","1"),l=(a=new RegExp("(^|&)"+"page"+"=([^&]*)(&|$)"),null!=(e=window.location.search.substr(1).match(a))?unescape(e[2]):null);function i(a,e,s){if(!s)return a;var l=new RegExp("([?&])"+e+"=.*?(&|$)","i"),i=-1!==a.indexOf("?")?"&":"?";return a.match(l)?a.replace(l,"$1"+e+"="+s+"$2"):a+i+e+"="+s}if(2!=l&&3!=l&&window.history.replaceState({path:s},"",s),console.log(l),l){var c=1+parseInt(l);"1"===l?($("#pre").addClass("ban"),$("#up").removeClass("ban")):"2"===l?($("#pre").removeClass("ban"),$("#up").removeClass("ban")):"3"===l&&($("#pre").removeClass("ban"),$("#up").addClass("ban")),$(".box").hide(),$(".page"+l).fadeIn(300),$(".page-box").removeClass("click"),$(".page-box:nth-child("+c+")").addClass("click")}function n(){$(".mode").fadeOut(300),$(".fixed-block").fadeOut(300)}$(".fixed-block .close").click(function(){n()}),$(".go-back").click(function(){n()}),$("#getRule").click(function(){$(".mode").show(),$(".fixed-block").show()}),$(".page .page-box").click(function(){var a=$(".click");if("pre"==$(this).attr("id")||"up"==$(this).attr("id")){if($(this).hasClass("ban"))return;a.removeClass("click"),"pre"==$(this).attr("id")?a.prev().addClass("click"):"up"==$(this).attr("id")&&a.next().addClass("click")}else a.removeClass("click"),$(this).addClass("click");var e=$(".click").html();"1"===e?($("#pre").addClass("ban"),$("#up").removeClass("ban")):"2"===e?($("#pre").removeClass("ban"),$("#up").removeClass("ban")):"3"===e&&($("#pre").removeClass("ban"),$("#up").addClass("ban")),$(".box").hide(),$(".page"+e).fadeIn(300),s=i(window.location.href,"page",e),window.history.replaceState({path:s},"",s)})});