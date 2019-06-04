$(function(){
    var newurl = updateQueryStringParameter(window.location.href, 'page', '1');
    var page = GetQueryString('page');
    if(page!=2&&page!=3){
        //向当前url添加参数，没有历史记录
        window.history.replaceState({
            path: newurl
        }, '', newurl);
    }
    // 存放参数到地址后缀
    function updateQueryStringParameter(uri, key, value) {
        if(!value) {
            return uri;
        }
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }
    // 获取地址参数
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    console.log(page);
    // 显示页面
    if(page){
        var num = 1+parseInt(page)
        if(page ==='1'){
            $("#pre").addClass('ban')
            $("#up").removeClass('ban')
        }else if(page ==='2'){
            $("#pre").removeClass('ban')
            $("#up").removeClass('ban')
        }else if(page ==='3'){
            $("#pre").removeClass('ban')
            $("#up").addClass('ban')
        }
        // 翻页
        $('.box').hide();
        $('.page'+page).fadeIn(300);
        $('.page-box').removeClass('click');
        
        $('.page-box:nth-child('+num+')').addClass('click');
    }
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
        newurl = updateQueryStringParameter(window.location.href, 'page', cnode);
        //向当前url添加参数，没有历史记录
        window.history.replaceState({
            path: newurl
        }, '', newurl);
    })
})