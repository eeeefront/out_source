$(function(){new Swiper(".top-banner",{pagination:{el:".top-swiper-pagination",clickable:!0,type:"bullets"},autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,observer:!0}),new Swiper(".educate-banner",{pagination:{el:".educate-swiper-pagination",clickable:!0,type:"bullets"},autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},loop:!0,observer:!0}),new Swiper(".story-banner",{pagination:{el:".story-swiper-pagination",clickable:!0,type:"bullets"},observer:!0}),new Swiper(".celebration-banner",{pagination:{el:".celebration-swiper-pagination",clickable:!0,type:"bullets"},observer:!0}),new Swiper(".technology-banner",{pagination:{el:".technology-swiper-pagination",clickable:!0,type:"bullets"},autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!0},observer:!0});$(".play").click(function(){var e=$(this).attr("data-src");$(this).attr("data-id")&&$(".playVideo video").attr("poster",""),$(".playVideo").addClass("playVideo-show"),$(".playVideo video").attr("src",e)}),$(".playVideo").click(function(){$(".playVideo").removeClass("playVideo-show"),$(".playVideo video").attr("src","#"),$(".playVideo video").attr("poster","")}),$(".plan .banner-btn-block .banner-btn").click(function(){$(".plan .banner-btn-block .banner-btn").removeClass("active"),$(this).addClass("active");var e=$(this).attr("data-id");$(".plan .banner-img img").hide(),$(".plan .banner-img img:nth-child("+e+")").fadeIn()}),$(".nav>.nav-list a").click(function(){$(".nav .nav-list").removeClass("active"),$(this).parent().addClass("active")}),$("a[href*=#],area[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var a=e.offset().top;return $("html,body").animate({scrollTop:a},500),!1}}}),$(window).scroll(function(e){!function(){var e=$(window).scrollTop(),a=($(window).height(),[$("#top"),$("#educate"),$("#celebration"),$("#plan"),$("#development"),$("#partner")]),t=a.length;if(e<a[1].offset().top)$(".nav .nav-list").removeClass("active"),$(".nav .nav-list:nth-child(1)").addClass("active");else for(var n=1;n<t;n++)if(e<a[n+1].offset().top-50&&e>=a[n].offset().top-50){$(".nav .nav-list").removeClass("active"),$(".nav .nav-list:nth-child("+(n+1)+")").addClass("active");break}}()}),$(".popup .title .close").click(function(){$(".mode").fadeOut(300),$(".popup").fadeOut(300)}),$(".technology-btn .book").click(function(){$(".mode").show(),$(".popup").show()})});