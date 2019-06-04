$(function(){
    var cookie = {
        set:function(key,val,time){//设置cookie方法
            var date=new Date(); //获取当前时间
            var expiresDays=time;  //将date设置为n天以后的时间
            date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
            document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
        },
        get:function(key){//获取cookie方法
            /*获取cookie参数*/
            var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
            var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
            var tips;  //声明变量tips
            for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
                var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                    tips=arr[1];   //将cookie的值赋给变量tips
                    break;   //终止for循环遍历
                }
            }
            return tips;
        },
        delete:function(key){ //删除cookie方法
            var date = new Date(); //获取当前时间
            date.setTime(date.getTime()-10000); //将date设置为过去的时间
            document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
        }
    }
    console.log(cookie.get('page'));
    
    // 记录页面
    if(cookie.get('page')){
        var page = cookie.get('page'),
            num = 1+parseInt(page)
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
        cookie.set('page',parseInt(cnode),3);
    })
})