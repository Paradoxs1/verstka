function isValidMail(mail){
      if(!(mail == '')) {
          if (!(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(mail.val()))) {
              mail.parent().addClass('border');
              return false;
          }
          mail.parent().removeClass('border');
          return true;
      }
      mail = 'mail@mail.com';
      return true;
  }


$(document).ready(function(){
  
    $(".toggle-block").click(function(){
      $('.menu-bottom .close').click();
      $('.toggle-mnu').addClass("on");
      $('.menu-top').animate({"left": "0"}, "slow");
      return false;
    });
    $('.menu-top .close').click(function(){
      $('.toggle-mnu').removeClass("on");
      $('.menu-top').animate({"left": "-300px"}, "slow");
    });
  
    $('.catalog').click(function(){
      $('.menu-top .close').click();
      $(this).addClass('active').parents('header').find('.menu-bottom').animate({"right": "0"}, "slow");
    });
    $('.menu-bottom .close').click(function(){
      $('.catalog').removeClass("active");
      $('.menu-bottom').animate({"right": "-300px"}, "slow");
    });
  
    
    $(".menu-bottom a.top-level").on("click", function(e) {
      
        var parent = $(this).parent("li");
        
            if (parent.find(".submenu").length > 0) {
                parent.siblings("li").removeClass("active").find('li').removeClass("active");
                if (!parent.hasClass("active")) {
                    parent.addClass("active");
                } else {
                    parent.removeClass("active");
                    parent.find('li').removeClass("active");
                } 
            }
          if($(window).width() < 993){
            if($(this).next('ul').html() != undefined ){
               e.preventDefault();
            }else{
            }
          }                     
                                     
          
    });
    
    
    
      
    $(window).resize(function(){
        if($('.block').is(':visible')){
            $('.menu-bottom').removeClass('desktop');
          }else{
            $('.menu-bottom').addClass('desktop');
            
          }
        
    });
  
    if($(window).width() < 993){
      $('.menu-bottom').removeClass('desktop');
    
    }
    
  
    if($(window).width()>1210){
       $('.menu-bottom>ul>li:last').hover(
          function(){
            $(this).parents('.menu-bottom').css("background-color", "#cae1e1");
          },
          function(){
            $(this).parents('.menu-bottom').css("background-color", "#edf6f6");
        });
    }
  
    $(".search button").on("click", function () {
      $(".search").toggleClass("active");

      if ($(".search").hasClass("active")) {
          $('.search').focus();
          return false;
      }
	});
	$(".search .search-close").on("click", function (e) {
		e.preventDefault();
		$(".search").removeClass("active");
		$(".search input").val("");
	});
  
  
    $('.head-link a, .link-manufacturers a').click(function(){
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
    });
    
  
    $('.counter-num').mask('0000');  
    var num = $('.counter-num').val();
      $('.counter-right').click(function(){
        num++;
      $('.counter-num').val(num);
    });
      $('.counter-left').click(function(){
        if( num>1 ){
          num--;
          $('.counter-num').val(num);
        }
    });
    $('.counter-num').keyup(function(){
      var Value = $('.counter-num').val();
      num = Value;
    });
    
  
    $(".accordeon ul").hide().prev().find('span').click(function() {
        $(this).parents('.accordeon').find("ul").not(this).slideUp().prev().removeClass("active");
        $(this).parents('li').next().not(":visible").slideDown().prev().addClass("active");
    });
  
    $(".subscribe .submit" ).click(function() {
        isValidMail($(this ).parents('.subscribe').find(".mail"));
        if(isValidMail($(this ).parents('.subscribe').find(".mail"))){
              $( ".submit" ).click();
          } else{
              return false;
          }
    });
    
    $('.product-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    
    $('.catalog-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
  
    $(".tabs .tab").click(function() {
        $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
  
    $(".tabs-two .tab-two").click(function() {
        $(".tabs-two .tab-two").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item_two").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
  
    $(".tabs-three .tab-three").click(function() {
        $(this).find(".catalog-slider").slick('reinit');
        $(".tabs-three .tab-three").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item_three").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
  
      
    $( ".room" ).selectmenu();
  
  
    $(".inner-structure .left div").hide().prev().click(function() {
      $(this).parents(".inner-structure .left").find("div").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
});
























