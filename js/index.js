$(function () {





  // 轮播图......................
  var mySwiper = new Swiper('.swiper-container', {
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      }
    },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    }

  })




  // header-bottom下拉列表...................
  $(".nav1 li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  })
  // 下拉列表框的出现与消失
  $(".header-bottom-nav>li>a").mouseenter(function () {
    $(this).parent().find(".dropdown-menu").fadeIn();
    $(this).parent().siblings().find(".dropdown-menu").fadeOut();
  })

  //hours数字增加......................
  $(".countup").counterUp({
    delay: 5,
    time: 2000
  })

  // team阴影显示.....................
  $(".team-box").on("mouseenter", function () {
    $(this).find(".team-overlay").css({ "opacity": 1 });
  })
  $(".team-box").on("mouseleave", function () {
    $(this).find(".team-overlay").css({ "opacity": 0 });
  })

  // latest切换.......................
var $grid = $(".grid");

  $(".btn1").click(function(){
    $grid.isotope({ filter: '.isotope-item' });
    // $(".isotope-item").css("display","block")
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })
  $(".btn2").click(function(){
    $grid.isotope({ filter: '.financical'});
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");


  })
  $(".btn3").click(function(){
    $grid.isotope({ filter: '.business'});
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })
  $(".btn4").click(function(){
    $grid.isotope({ filter: '.marketing'});
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })

// latest阴影显示..............
$(".latest-overlay-content").on("mouseenter",function(){
  $(this).css({"opacity":1});
  
})
$(".latest-overlay-content").on("mouseleave",function(){
  $(this).css({"opacity":0});
  
})


})