$(function(){
    function hide(){
        $('.mode').fadeOut(300);
        $('.fixed-block').fadeOut(300);
    }
    $('.fixed-block .close').click(function(){hide()});
    $('.go-back').click(function(){hide()});
    $("#getRule").click(function(){
        $('.mode').show();
        $('.fixed-block').show();
    })
    $('.page .page-box').click(function(){
        var node = $('.click');
        // 箭头翻页
        if($(this).attr('id')=='pre'||$(this).attr('id')=='up'){
            if($(this).hasClass('ban')) return;
            node.removeClass('click');
            if($(this).attr('id')=='pre'){
                node.prev().addClass('click');
            }else if($(this).attr('id')=='up'){
                node.next().addClass('click');
            }
        }else{ // 页码翻页
            node.removeClass('click');
            $(this).addClass('click');
        }
        // 箭头按钮禁用
        var cnode = $('.click').html()
        if(cnode ==='1'){
            $("#pre").addClass('ban')
            $("#up").removeClass('ban')
        }else if(cnode ==='2'){
            $("#pre").removeClass('ban')
            $("#up").removeClass('ban')
        }else if(cnode ==='3'){
            $("#pre").removeClass('ban')
            $("#up").addClass('ban')
        }
        // 翻页
        $('.box').hide();
        $('.page'+cnode).fadeIn(300);
    })
})