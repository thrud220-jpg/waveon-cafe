$(document).ready(function(){ //시작

   AOS.init();

  /*depth2*/
  $("header .gnb > li .depth2").hide();
  
 
  /*mdepth2*/
  $("header .mgnb > li .mdepth2").hide();

  $("header .mgnb > li").click(function(){
        if($(this).children(".mdepth2").css("display") == "none"){

      $(this).children(".mdepth2").slideDown("slow");
      $(this).siblings().children(".mdepth2").slideUp("slow");

    }else{
      
      $(this).children(".mdepth2").slideUp("slow");

    }
  });

  /*mgnb-wrap*/ 
 $(".mgnb-wrap").hide();

 $(".ham").click(function(){
  $(".mgnb-wrap").fadeIn();
 });

 $(".mgnb-close").click(function(){
  $(".mgnb-wrap").fadeOut();
 });

 /*search*/
 $(".search").hide();
 $(".h-search").click(function(){
  $(".search").slideDown();
  $("header").addClass("active");
 });
 $(".search-close").click(function(){
  $(".search").slideUp();
  $("header").removeClass("active");
 });
 
 /*상단 메뉴*/
 $("header nav .gnb > li").mouseenter(function(){
  $(this).children(".depth2").stop().slideDown("slow");
  $("header").addClass("active");
 });

 $("header nav .gnb > li").mouseleave(function(){
  $(this).children(".depth2").stop().slideUp("slow");
  $("header").removeClass("active");
 });

 /*beat swiper*/
 const menu_list  = new Swiper(".menu-list", {
      
      
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      },
      
      loop: true,
      centeredSlides: true, 
      speed: 1000, 

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: 1,
      breakpoints: {
       390: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      
    },
 });

 const item_list  = new Swiper(".item-list", {
       
      
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      },
      
      loop: true,
      centeredSlides: true,
      observer: true,
      speed: 1000, 

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      },

      slidesPerView: 1,
      breakpoints: {
       390: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      
    },
 });

 $(".tab-inner > ul > li").hide();

 $(".tab-btn > ul > li").eq(0).addClass("active");
 $(".tab-inner > ul > li").eq(0).show();

 $(".tab-btn > ul > li").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  
  var num = $(this).index();

  $(".tab-inner > ul > li").eq(num).fadeIn().siblings().hide();
 });

  const look_list  = new Swiper(".look-list", {
       
      loop: true,

       pagination: {
          el: ".swiper-pagination",
          type : "fraction",
          clickable: true,
        },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      },

      breakpoints: {
       390: {
         height: 400,
      },
      
      768: {
         height: 800,
      },
    },
 });
 
const quick = document.querySelector('.quick');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const quickHeight = quick.offsetHeight;

  if (footerTop <= windowHeight - quickHeight - 40) {
    quick.classList.add('is-stop');
    quick.style.bottom = 'auto';
    quick.style.top =
      window.scrollY +
      footerTop -
      quickHeight -
      40 +
      'px';
  } else {
    quick.classList.remove('is-stop');
    quick.style.top = 'auto';
    quick.style.bottom = '92px';
  }
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

/*breadcrumbs*/


/*.b-depth2*/
$(".b-depth2 ul").hide();

$(".breadcrumbs li .b1").click(function(){
  $(".b-depth2 ul").stop().slideToggle();
  $(".breadcrumbs li").toggleClass("active")
});

/*paging*/
$(".paging li").click(function(){
  $(this).addClass("active").siblings().removeClass("active"); 
});

 /*inquiry*/

 $(".inquiry").hide();
 
 $(".quick").click(function(){
  $(".inquiry").fadeIn();
 });

 $(".inquiry .inner .in-close").click(function(){
  $(".inquiry").fadeOut();
 });

/*history*/
      aa = $('.sect01').position().top + 700;
      bb = $('.sect02').position().top + 700;
      cc = $(".sect03").position().top + 700;
      dd = $('.sect04').position().top + 700;
      ee = $('.sect05').position().top + 700;
      ff = $('.sect06').position().top + 700;
      gg = $(".sect07").position().top + 700;
      hh = $('.sect08').position().top + 700;
      ii = $('.sect09').position().top + 500;
      jj = $('.sect10').position().top + 300;


      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll <= aa) 
          {
            $(".year p").removeClass("add");
            $(".sect01 .year p").addClass("add");
          } 
          else if (aa <= scroll && scroll< bb) 
          {
            $(".year p").removeClass("add");
            $(".sect02 .year p").addClass("add");


          } 
          else if (bb <= scroll && scroll < cc) 
          {
            $(".year p").removeClass("add");
            $(".sect03 .year p").addClass("add");


          }
          else if (cc <= scroll && scroll < dd)
          {
            $(".year p").removeClass("add");
            $(".sect04 .year p").addClass("add");


          }
          else if (dd <= scroll && scroll < ee)
          {
            $(".year p").removeClass("add");
            $(".sect05 .year p").addClass("add");


          }
          else if (ee <= scroll && scroll < ff)
          {
            $(".year p").removeClass("add");
            $(".sect06 .year p").addClass("add");


          }
          else if (ff <= scroll && scroll < gg)
          {
            $(".year p").removeClass("add");
            $(".sect07 .year p").addClass("add");


          }
          else if (gg <= scroll && scroll < hh)
          {
            $(".year p").removeClass("add");
            $(".sect08 .year p").addClass("add");


          }
          else if (hh <= scroll && scroll < ii)
          {
            $(".year p").removeClass("add");
            $(".sect09 .year p").addClass("add");


          }

          else if (jj <= scroll)
          {
            $(".year p").removeClass("add");
            $(".sect10 .year p").addClass("add");


          }
        }); 

       
      

}); //끝