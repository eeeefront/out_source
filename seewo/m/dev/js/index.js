$(function(){new Swiper("#first-swiper",{autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".line-pagination"}}),new Swiper("#second-swiper",{autoplay:{delay:3e3,disableOnInteraction:!1},spaceBetween:30,pagination:{el:".dot-pagination"}});var e=new Swiper("#img-gallery-thumbs",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0}),i=(new Swiper("#img-gallery-top",{spaceBetween:20,thumbs:{swiper:e},autoplay:{delay:5e3,disableOnInteraction:!1}}),new Swiper("#txt-gallery-thumbs",{spaceBetween:0,slidesPerView:3,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0})),n=(new Swiper("#txt-gallery-top",{spaceBetween:0,thumbs:{swiper:i},autoplay:{delay:5e3,disableOnInteraction:!1}}),new Swiper("#five-swiper",{autoplay:{delay:3e3,disableOnInteraction:!1},spaceBetween:30,pagination:{el:".dot-pagination"}}),new Swiper("#deficul-gallery-thumbs",{spaceBetween:10,slidesPerView:2,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,pagination:{el:".dot-pagination"}})),t=(new Swiper("#deficul-gallery-top",{spaceBetween:120,thumbs:{swiper:n},autoplay:{delay:5e3,disableOnInteraction:!1}}),$("body")),a=!1;t.on("click","#menu",function(){(a=!a)?($(this).find(".close").show(),$(this).find(".menu").hide(),$("#point-wrapper").slideDown()):($(this).find(".close").hide(),$(this).find(".menu").show(),$("#point-wrapper").slideUp(100))}).on("click","#point-wrapper .point-item",function(){a=!1,$("#menu").find(".close").hide(),$("#menu").find(".menu").show(),$("#point-wrapper").slideUp(100),function(e){var i=$("#p"+e);$("html,body").animate({scrollTop:i.offset().top-$(".header").height()},1e3)}($(this).index()+1)}).on("click","#live-btn",function(){$("#live-pop").fadeIn()}).on("click",".live-container .pop-close",function(){$(this).parents(".live-container").fadeOut()})});