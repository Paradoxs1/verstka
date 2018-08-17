function isValidName(name) {
	if (!(name == '')) {
		if (!(/[a-zA-ZА-Я\-а-я]+/.test(name.val()))) {
			name.addClass('red-border');
			return false;
		}
		name.removeClass('red-border');
		return true;
	}
	name = 'name';
	return true;
}
function isValidPhone(phone) {
	if (!(phone == '')) {
		if (!(/\+?\d+\ ?\(?\d+\)?\ ?\d+\ ?\d+\ ?\d+/.test(phone.val()))) {
			phone.addClass('red-border');
			return false;
		}
		phone.removeClass('red-border');
		return true;
	}
	phone = '0000000000';
	return true;
}

$(document).ready(function(){
  
    $('.slider-top').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1
    });
  
    $('.slider-hit').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
       responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              vertical: true,
              dots: false,
              arrows: true,
              verticalSwiping: true,
              infinite: true
            }
          }
         
        ]
    });
    
  $(".toggle-mnu").click(function () {
      $('.toggle-mnu').addClass("on");
      $('body').addClass('hidden-body');
      return false;
    });
  $(".close-menu").click(function(){
      $('body').removeClass('hidden-body');
      $('.toggle-mnu').removeClass("on");
  });
  
  var flag = 0;
  if($(window).width() < 768){
    $('.menu-top').clone().appendTo('nav .container');
    flag = 1;
  }
  $(window).resize(function(){
    if($(window).width() < 768){
      if(flag == 0){
         $('.menu-top').clone().appendTo('nav .container');
         flag = 1;
        }
      }else{
        $('nav').find('.menu-top').remove();
      }
  }); 
  
  $(".menu a.top-level").on("click", function (e) {
		var parent = $(this).parent("li");
		if (parent.find(".submenu").length > 0) {
			parent.siblings("li").removeClass("active").find('li').removeClass("active");
			if (!parent.hasClass("active")) {
				parent.addClass("active");
			} else {
				parent.removeClass("active");
				parent.find('li').removeClass("active");
			}
			return false;
		}
	});
  
  $(".search button").on("click", function () {
      $(".search").toggleClass("active");

      if ($(".search").hasClass("active")) {
          $('.search').focus();
          return false;
      }
	});

	$(".search .close").on("click", function (e) {
		e.preventDefault();
		$(".search").removeClass("active");
		$(".search input").val("");
	});
    
  $('.delete').click(function(){
    var deleteNum = $(this).parents('table').find('tbody tr').length;
    
    if(deleteNum > 1){
      $(this).parents('tr').remove();
    }else{
      $(this).parents('.basket-hide').remove();
      $('.basket-show').show();
    }

  });
  
  $('.counter-num').mask('0000');
  
  $('.counter-right').click(function(){ 
    
    var price =  $(this).parents('tr').find('.price-num').html();
    price = parseFloat(price);
    
    var count = $(this).prev().val();
    var startPrice = price / count;
    count++;  

    $(this).parents('tr').find('.price-num').html(startPrice*count);
    $('.counter-num').val(count);

  });
  $('.counter-left').click(function(){
    var count = $(this).next().val();
    if( count>1 ){
      var price =  $(this).parents('tr').find('.price-num').html();
      price = parseFloat(price);
      var startPrice = price / count;
      count--;
      $(this).parents('tr').find('.price-num').html(startPrice*count);
      $('.counter-num').val(count);
    }
  });
  
  $('label[for="check"]').click(function(){
    $('.difference').toggleClass('active');
  });
  
  $('.config span').click(function(){
    $('.config-hide').slideToggle();
  });
  
 $('.comparison .close img').click(function() {
   var colnum = $(this).parents('th').prevAll('th').length;
   $(this).parents('th').remove();
  
   $('.comparison table').find('tr').find('td:eq(' + colnum + ')').remove();
});
  
  $('.gallery-block').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
  
  $('.catalog-product-title .left a, .catalog-product-title .right a, .catalog-page-link ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  
  $('.inline-popups').magnificPopup({
	  delegate: 'a',
	  removalDelay: 500,
	  fixedContentPos: true,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});
  
  $( "#sort" ).selectmenu();
    
  $('#min-range').mask('0000');
  $('#max-range').mask('0000');
  
  
  $("#slider-range").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("input#min-range").val($("#slider-range").slider("values",0));
            $("input#max-range").val($("#slider-range").slider("values",1));

        },
        slide: function(event, ui){
            $("input#min-range").val($("#slider-range").slider("values",0));
            $("input#max-range").val($("#slider-range").slider("values",1));
        }
    });

    $("input#min-range").change(function(){

        var value1=$("input#min-range").val();
        var value2=$("input#max-range").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#min-range").val(value1);
        }
        $("#slider-range").slider("values",0,value1);	
    });
    

    $("input#max-range").change(function(){

        var value1=$("input#min-range").val();
        var value2=$("input#max-range").val();

        if (value2 > 1000) { value2 = 1000; jQuery("input#max-range").val(1000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#max-range").val(value2);
        }
        $("#slider-range").slider("values",1,value2);
    });
  
    $('.tile').click(function(e){
        e.preventDefault();
        $('.catalog-product-container').removeClass('active');
    });
    $('.product-table').click(function(e){
        e.preventDefault();
        $('.catalog-product-container').addClass('active');
    });
  
    $('.btn-filter').click(function(){
        $('.filter').slideToggle('slow');
    });
  
    $('.menu-banner').each(function(index){
        var number = $(this).find('li').length;     
        if(number == 3){
          $(this).addClass('menu-banner-three');
        } else if(number == 4){
          $(this).addClass('menu-banner-four');
        } else if(number == 5){
          $(this).addClass('menu-banner-five');       
        }else{
          
        }
    });
  
    $('.search').find('input').focusin(function(){
      $(this).parents('.search').find('.search-block').addClass('active');
    });
    $('.search').find('input').focusout(function(){
      $(this).parents('.search').find('.search-block').removeClass('active');
    });
    
    $('.variants').click(function(){
        $(this).parent().find('.variants-hide').slideToggle();
    });
  
    $('.btn-buy').click(function(){
        $(this).parents('#popup').find('.mfp-close').click();
    });
    
    var title, priceProduct, src, model, info;
    
    $('.catalog-product-container .link').click(function(){
      var father = $(this).parents('.catalog-product-item');
      
      title = father.find('.catalog-item-info a').html();
      priceProduct = father.find('.price').html();
      src = father.find('img').attr('src');
      model = father.find('.catalog-item-info a').attr('data-model');
      info = father.find('.catalog-item-info a').attr('data-info');
      
      $('#popup').find('.popup-info-title').html(title);
      $('#popup').find('.price').html(priceProduct);
      $('#popup').find('img').attr('src', src);
      $('#popup').find('.popup-info ul li:first').html(model);
      $('#popup').find('.popup-info ul li:last').html(info);
    });
  
    $('.product .link').click(function(){
      var father = $(this).parents('.product');
      
      title = father.find('.section-title').html();
      priceProduct = father.find('.price').html();
      src = father.find('.gallery-block').find('img').attr('src');
      model = father.find('.list-info li:nth-child(2)').html();
      info = father.find('.list-info li:last').html();
      
      $('#popup').find('.popup-info-title').html(title);
      $('#popup').find('.price').html(priceProduct);
      $('#popup').find('img').attr('src', src);
      $('#popup').find('.popup-info ul li:first').html(model);
      $('#popup').find('.popup-info ul li:last').html(info);
    });
    
    var basketNum = $('.basket-page').find('tbody tr').length;
    
    if(basketNum == 1){
       $('.table-number').html(basketNum + " товар");
    }else if(basketNum > 1 && basketNum < 5){
      $('.table-number').html(basketNum + " товара");
    }else{
      $('.table-number').html(basketNum + " товаров");       
    }
    
        
    var searchForm = $('.search').clone();
    var tel = $('.tel').clone();
    tel.append("<span>029<br/>033<br/>025<br/></span>")
    var time = $('.time').clone();
    var basket = $('.basket').clone();
    var menu = $('.menu').clone();
  
    if($(window).width() > 768){
        $(window).scroll(function() {
          if($(this).scrollTop() >= 200) {
            $('.head-fixed').fadeIn();

            $('.menu-fixed').append(searchForm, tel, time, basket, menu);
          } else {
            $('.head-fixed').fadeOut();
          }
        });
      
        
      
      }
    if($(window).width() > 768){
        $('.menu>li').hover(
          function(){
            $(this).find('.menu-hide>ul>li:first .menu-banner').show();
          },
          function(){
            $(this).find('.menu-hide>ul>li:first .menu-banner').hide();
          });
  
    }
  
    $('.head-category').click(function(){
        $(this).parents('.menu-fixed').find('.menu').slideToggle();
    });
  
    
});

if($('#adress-map').html() != undefined){
   ymaps.ready(function () {
      var Map = new ymaps.Map('adress-map', {
              center: [53.871225, 27.605922],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          }),
          Placemark = new ymaps.Placemark(Map.getCenter(), {
              hintContent: 'E-климат',
              balloonContent: 'Адрес: Беларусь, г. Минск, ул. Горовца, д. 24, пом. 16.<br> Время работы: с 9 00 до 21 00'
          }, {
              iconLayout: 'default#image',
              iconImageHref: 'js/img/marker.png',
              iconImageSize: [90, 38],
              iconImageOffset: [-70, -32]
          });

      Map.geoObjects.add(Placemark);
  });
}
