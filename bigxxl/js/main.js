function isValidName(name){
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
function isValidText(comment){
	if (!(comment == '')) {
		if (!(/.{10,400}/.test(comment.val()))){
			comment.addClass('red-border');
			return false;
		}
		comment.removeClass('red-border');
		return true;
	}
	comment = '0000000000';
	return true;
}
function isValidMail(mail){
      if(!(mail == '')){
          if (!(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(mail.val()))) {
              mail.addClass('red-border');
              return false;
          }
          mail.removeClass('red-border');
          return true;
      }
      mail = 'mail@mail.com';
      return true;
}
function isValidPhone(phone){
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
  
    $(".toggle-block").click(function () {
        $('.toggle-mnu').toggleClass("on");
        $('#menu').slideToggle(500);
        return false;
    });
  
    $('.slider-banner').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    });
  
    $('.slider-product').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    
    
  
    $(".button-top").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $(".accordeon div").hide().prev().click(function() {
        $(this).parent().find("div").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
  
    $('.gallery').magnificPopup({
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
  
     $('.product-inner').magnificPopup({
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
  
     $('.product-inner').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          fade: true,
          asNavFor: '.gallery-product'
        });
        $('.gallery-product').slick({
          slidesToShow: 8,
          asNavFor: '.product-inner',
          dots: false,
          arrows: false,
          focusOnSelect: true
    });
    
    $('.link-gallery').click(function(){
        $(this).parents('.product-wrapper').find('.product-inner .slick-active img').click();
    });
  
    $('.phone').inputmask('9{0,15}');
    
    $(function () {
        $(".select_box").selectbox();
    });
  
    $(".contact-form .submit" ).click(function(){
        isValidName($(this ).parent().find(".name"));
        isValidMail($(this ).parent().find(".mail"));
        isValidText($(this ).parent().find(".comment"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidMail($(this ).parent().find(".mail")) 
            && isValidText($(this ).parent().find(".comment"))){
          
            $( ".submit" ).click();
        }else{
            return false;
        }
    });
  
    $("#fast-order .submit" ).click(function(){
        isValidName($(this ).parent().find(".name"));
        isValidMail($(this ).parent().find(".mail"));
        isValidPhone($(this ).parent().find(".phone"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidMail($(this ).parent().find(".mail")) 
            && isValidPhone($(this ).parent().find(".phone"))){
          
            $( ".submit" ).click();
        }else{
            return false;
        }
    });
  
    $(".basket-form .submit" ).click(function(){
        isValidName($(this ).parent().find(".name"));
        isValidMail($(this ).parent().find(".mail"));
        isValidPhone($(this ).parent().find(".phone"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidMail($(this ).parent().find(".mail")) 
            && isValidPhone($(this ).parent().find(".phone"))){
          
            $( ".submit" ).click();
        }else{
            return false;
        }
    });
  
    $('.inline-popups').magnificPopup({
	  delegate: 'a',
	  removalDelay: 500,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});
  
    $('.link-reviews').click(function(){
       if ($(this).next().is(':visible')) {
			$(this).text('Посмотреть отзывы').next().hide(500);
		}else{
            $(this).text('Скрыть отзывы').next().show(500);
		}
    });
  
    $('.product-description .btn-order').click(function(){
        var title = $(this).parents('.content-inner').find('.page-title').text();
        var img = $(this).parents('.content-inner').find('.product-inner .slick-active a').html();
        
        $(this).parents('body').find('#fast-order .fast-product p').text(title);
        $(this).parents('body').find('#fast-order .fast-product div').html(img);
    });
  
  
    $('.popup-slider').slick({
          infinite: true,
          dots: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
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
  
  
    $('.counter-num').mask('000');
    var total = 0;
  
    $('.basket-body-inner .price-all .price span').each(function(){
        total += +$(this).html();
      })
      
    $('.basket-price .price span').text(total);
  
    $('.counter-right').click(function(){
      var count = $(this).prev().val();
      var price = $(this).parents('.basket-body').find('.price-one span').html();
      //var finishPrice = $(this).parents('.basket-block').find('.basket-price span').html();

      count++;
      
      $(this).parents('.basket-body-inner').find('.price-all span').html( count * price );

      
      //$(this).parents('.basket-block').find('.basket-price span').html( count * price );
      $(this).parent().find('.counter-num').val(count);
      
      
      total = 0;
      $('.basket-body-inner .price-all .price span').each(function(){
        total += +$(this).html();
      })
      
      $('.basket-price .price span').text(total);
      
      
    });
    $('.counter-left').click(function(){
      var count = $(this).next().val();
      var price = $(this).parents('.basket-body').find('.price-one span').html();
      if( count>1 ){
        count--;
        $(this).parent().find('.counter-num').val(count);
      }
      $(this).parents('.basket-body-inner').find('.price-all span').html( count * price );
      //$(this).parents('.basket-block').find('.basket-price span').html( count * price );
      total = 0;
      $('.basket-body-inner .price-all .price span').each(function(){
        total += +$(this).html();
      })
      
      $('.basket-price .price span').text(total);
    });
  
    $('.basket-body-close').click(function(){
        var price = $(this).parents('.basket-body').find('.price-all span').html();
        var finishPrice = $(this).parents('.basket-block').find('.basket-price span').html();
      
        $(this).parents('.basket-block').find('.basket-price span').html(finishPrice - price);
        $(this).parents('.basket-body').remove();
    });
    
    
    $('.counter-num').keyup(function(){
        var val = $(this).val();
        var price = $(this).parents('.basket-body').find('.price-one span').html();
        
        $(this).parents('.basket-body-inner').find('.price-all span').html( val * price );
        $(this).parents('.basket-block').find('.basket-price span').html( val * price );
    });
  
  
  
    
    var html = '<div class="b-left clearfix"><div class="left"><img src="" alt=""></div><p><a href="#"></a></p></div></div><div class="b-right number"><input type="text" value="1" min="1"> <span>шт</span></div><div class="b-right"><div class="popup-price"><span data-sum=""></span> грн.</div>';
  
    $('.product-description .btn-basket').click(function(){
      
      
        $(this).parents('body').find('#basket-order .basket-table-middle .basket-table-inner').html(html);
        $(this).parents('body').find('#basket-order .basket-table-middle .close-basket').show();
        $(this).parents('body').find('.popup-slider .slick-prev').click();
      
        var title = $(this).parents('.content-inner').find('.page-title').text();
        var img = $(this).parents('.content-inner').find('.product-inner .slick-active img').attr('src');
        var price = $(this).parents('.content-inner').find('.product-description .product-price').html();
        RegEx=/\s/g;
        
        
        $(this).parents('body').find('#basket-order .basket-table-middle .b-left a').text(title);
        $(this).parents('body').find('#basket-order .basket-table-middle img').attr('src', img);
        $(this).parents('body').find('#basket-order .basket-table-middle .popup-price span').html(parseFloat(price.replace(RegEx,"")));
        $(this).parents('body').find('#basket-order .basket-table-middle .popup-price span').attr('data-sum', parseFloat(price.replace(RegEx,"")));
        $(this).parents('body').find('#basket-order .basket-table-bottom .popup-price span').html(parseFloat(price.replace(RegEx,"")));
      
        $('.number input').mask('999');
      
    });
  
    $('.btn-cont').click(function(e){
        e.preventDefault();
        $.magnificPopup.close();
    });
  
  
    $('.popup-slide-block .btn-basket').click(function(e){
        e.preventDefault();
        var productBlock = $('.basket-table-middle').clone();
        
        
        $(this).parents('body').find('#basket-order .basket-middle-outer').append($(productBlock));
    });
    
});

if($('.contact-block').hasClass('block-map')){
   ymaps.ready(function () {
      var Map = new ymaps.Map('map', {
              center: [55.803108, 37.757843],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          })
          Placemark = new ymaps.Placemark(Map.getCenter(), {
              hintContent: 'BIGXXL',
              balloonContent: 'Россия, Москва, район<br>  Гольяново, Щелковское шосе,<br>  2, офис 34'
          }, {
              iconLayout: 'default#image',
              iconImageHref: 'js/img/marker2.png',
              iconImageSize: [218, 112],
              iconImageOffset: [-50,-40]
          });

      Map.geoObjects.add(Placemark);
   });
};


$(".basket-table-middle").delegate('input', 'keyup',  function(){
    var value = $(this).val();
    var valueProduct = $(this).parents('.basket-table-middle').find('.popup-price span').attr('data-sum');
    
    $(this).parents('.basket-table-middle').find('.popup-price span').html(+valueProduct * +value);
    $(this).parents('form').find('.basket-table-bottom .popup-price span').html(+valueProduct * +value);
});


//$('.basket-table-middle').delegate('.close-basket', 'click', function(){
//        var sumFinish = $(this).parents('form').find('.basket-table-bottom .popup-price span').html();
//        var sumProduct = $(this).parents('.basket-table-middle').find('.popup-price span').html();
//      
//        $(this).hide().parents('.basket-table-middle').find('.basket-table-inner div').remove();
//        $(this).parents('form').find('.basket-table-bottom .popup-price span').html(+sumFinish - +sumProduct);
//  });







