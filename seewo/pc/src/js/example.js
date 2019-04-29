$(function(){
    console.log(123321);
    function hide(){
        $('.mode').fadeOut(300);
        $('.rules').fadeOut(300);
    }
    $('.mode .close').click(function(){hide()});
    $('.go-back').click(function(){hide()});
    $("#getRule").click(function(){
        $('.mode').show();
        $('.rules').show();
    })
})