$(function () {
  var page = 1;
  var listJson = [
    {
      name: '黄吉雁',
      id: 1,
      img: '../images/example/1.jpg',
      desc: '以梦为马，逐梦前行',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?id=2354151&vid=nxedz1pz2n8o640'
    },
    {
      name: '赵小利',
      id: 2,
      img: '../images/example/2.jpg',
      desc: '希沃助我成长',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354152'
    },
    {
      name: '封爱玲',
      id: 3,
      img: '../images/example/3.jpg',
      desc: '与希沃同行的日子',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354153'
    },
    {
      name: '李亚宁',
      id: 4,
      img: '../images/example/4.jpg',
      desc: '我们都是追梦人',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354154'
    },
    {
      name: '严峥',
      id: 5,
      img: '../images/example/5.jpg',
      desc: '我和我的老朋友“希沃”的故事',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354155'
    },
    {
      name: '潘多玲',
      id: 6,
      img: '../images/example/6.jpg',
      desc: '希沃，看见成长的力量！',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354156'
    },
    {
      name: '闫社锋',
      id: 7,
      img: '../images/example/7.jpg',
      desc: '我和希沃的美丽邂逅',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354157'
    },
    {
      name: '罗群',
      id: 8,
      img: '../images/example/8.jpg',
      desc: '情不知所起，一往而深',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354158'
    },
    {
      name: '赵相文',
      id: 9,
      img: '../images/example/9.jpg',
      desc: '乐于希沃 让老师繁星不凡',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354159'
    },
    {
      name: '杨登骥',
      id: 10,
      img: '../images/example/10.jpg',
      desc: '苦涩的成长',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354160'
    },
    {
      name: '冯汝贵',
      id: 11,
      img: '../images/example/11.jpg',
      desc: '深化应用·融合创新',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354161'
    },
    {
      name: '刘霞',
      id: 12,
      img: '../images/example/12.jpg',
      desc: '校企结合，共同成长',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354162'
    },
    {
      name: '杨波',
      id: 13,
      img: '../images/example/13.jpg',
      desc: '希沃助我成长',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354163'
    },
    {
      name: '叶传意',
      id: 14,
      img: '../images/example/14.jpg',
      desc: '相识·相知·相携',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354164'
    },
    {
      name: '孙果',
      id: 15,
      img: '../images/example/15.jpg',
      desc: '相遇是机缘，但更是一种默契<br>所以，我来了',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354165'
    },
    {
      name: '陆炳康',
      id: 16,
      img: '../images/example/16.jpg',
      desc: '与希沃同行 遇见一路繁华',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354166'
    },
    {
      name: '曹燕',
      id: 17,
      img: '../images/example/17.jpg',
      desc: '遇见希沃，遇见美好',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354167'
    },
    {
      name: '李鹏',
      id: 18,
      img: '../images/example/18.jpg',
      desc: '我与希沃印象',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354168'
    },
    {
      name: '刘俊',
      id: 19,
      img: '../images/example/19.jpg',
      desc: '记一名体育教师<br>信息化教学成长之路',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354169'
    },
    {
      name: '陈科军',
      id: 20,
      img: '../images/example/20.jpg',
      desc: '怀揣梦想，一路追梦——因为有你',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2354170'
    },
    {
      name: '张楠',
      id: 21,
      img: '../images/example/21.jpg',
      desc: '探索融合之路，希沃伴我行',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2382647'
    },
    {
      name: '徐开容',
      id: 22,
      img: '../images/example/22.jpg',
      desc: '快乐成长，幸福收获',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2382648'
    },
    {
      name: '赵彩香',
      id: 23,
      img: '../images/example/23.jpg',
      desc: '只因多看了你一眼',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2382650'
    },
    {
      name: '陈跃飞',
      id: 24,
      img: '../images/example/24.jpg',
      desc: '相遇、相知、相识、相爱',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2382649'
    },
    {
      name: '温惠平',
      id: 25,
      img: '../images/example/25.jpg',
      desc: '希沃助力我成长',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2382651'
    },
    {
      name: '陈丽娟',
      id: 26,
      img: '../images/example/26.jpg',
      desc: '恋上“希沃”',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?vid=nxedz1pz2n8o640&id=2382652'
    },
    {
      name: '张颖',
      id: 27,
      img: '../images/example/27.jpg',
      desc: '遇见',
      voteLink: 'http://1139906024.ax.nofollow.51wtp.com/index.php/toupiao/h5/detail?id=2384442&vid=nxedz1pz2n8o640'
    }
  ];
  var listHtml = '';
  function getList() {
    listJson.forEach(function(v){
      var itemHtml = '<div class="vote-item" id="leader' + v.id + '">' +
        '<a href="' + v.voteLink + '" class="info-link">' +
          '<div class="name">' + v.name + '</div>' +
          '<div class="photograph">' +
            '<img src="' + v.img + '">' +
          '</div>' +
          '<div class="title-line">' + v.desc + '</div>' +
        '</a>' +
        '<div class="vote-box">' +
          '<a href="' + v.voteLink + '" class="vote-btn">去投票</a>' +
        '</div>' +
      '</div>';
      listHtml += itemHtml;
    });
    $('#vote-wrapper').html(listHtml);
  };

  getList();

  var show = false;

  $('body').on('click', '#go-top', function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
    setTimeout(function(){
      $('#go-top').fadeOut();
    }, 500)
  }).on('click', '#more-btn', function () {
    page++;
    getList(page);
    if (page >= 3) {
      $(this).hide();
    } else {
      $(this).show();
    }
  }).on('click', '#search', function(){
    show = !show;
    if (show) {
      $(this).find('.close').show();
      $(this).find('.search').hide();
      $('#vote-pop-wrapper').slideDown();
    } else {
      $(this).find('.close').hide();
      $(this).find('.search').show();
      $('#vote-pop-wrapper').slideUp(100);
    }
  }).on('click', '#vote-pop-wrapper .point-item', function(){
    show = false
    $('#search').find('.close').hide();
    $('#search').find('.search').show();
    $('#vote-pop-wrapper').slideUp(100);
    var index = $(this).index() + 1;
    scroll(index);
  });

  var scroll = function(index) {
    var $id = $('#leader' + index);
    $("html,body").animate({
      scrollTop: $id.offset().top - $('.header').height()
    }, 1000);
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
      $('#go-top').fadeIn();
    } else {
      $('#go-top').fadeOut();
    }
  });
});
