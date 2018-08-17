$(document).ready(function(){

    $(".toggle-block").click(function(){
        $('.toggle-mnu').toggleClass("on");
        $('.menu').slideToggle();
        return false;
    });
    
    if($(window).width()>768){
       $('.home .submenu').hover(
          function(){
            $(this).children('a').addClass('active').next().slideDown();
          },
          function(){
            $(this).children('a').removeClass('active').next().slideUp();
        });
    }else{
        $('.home .submenu>a').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active').next().slideToggle();
        });       
    }
  
    $('.inner .submenu>a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').next().slideToggle();
    }); 
    
  
  $(".inner .search button").on("click", function () {
    $(".search").toggleClass("active");

    if ($(".search").hasClass("active")) {
        $('.search').focus();
        return false;
    }
  });
  $(".inner .search .search-close").on("click", function (e) {
      e.preventDefault();
      $(".search").removeClass("active");
      $(".search input").val("");
  });
  
  
  $('.info-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
  });
    
   if($(window).width()>480){
      $('.news-slider').slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ]
        });
    }
});
