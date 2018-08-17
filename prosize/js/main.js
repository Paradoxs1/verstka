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
function isValidCity(city){
	if (!(city == '')) {
		if (!(/.{2,400}/.test(city.val()))){
			city.addClass('red-border');
			return false;
		}
		city.removeClass('red-border');
		return true;
	}
	city = 'city';
	return true;
}
function isValidText(comment){
	if (!(comment == '')) {
		if (!(/.{5,400}/.test(comment.val()))){
			comment.addClass('red-border');
			return false;
		}
		comment.removeClass('red-border');
		return true;
	}
	comment = 'comment';
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
  $(".toggle-block").click(function(){
    $('.toggle-mnu').toggleClass("on");
    $('.menu').slideToggle(500);
    return false;
  });
  
  $(window).resize(function(){
    if($('.head-online').is(':visible')){
      $('header nav .menu').show();
    }else{
      $('header nav .menu').hide();
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
    
  $('.device-gallery, .product-slider').magnificPopup({
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
    
    $(".else-block").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  
    
    $('.reviews-slider').slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  
    $('.phone').mask('+380 99 999 99 99');
  
    $("footer .submit" ).click(function() {
        isValidPhone($(this ).parent().find(".phone"));
        if(isValidPhone($(this ).parent().find(".phone"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $(".review-popup .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidText($(this ).parent().find(".comment"));
        isValidCity($(this ).parent().find(".city"));
        if(isValidName($(this ).parent().find(".name")) && isValidText($(this ).parent().find(".comment")) && isValidCity($(this ).parent().find(".city"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $(".callback-popup .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        if(isValidName($(this ).parent().find(".name")) && isValidPhone($(this ).parent().find(".phone"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $(".online-popup .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidText($(this ).parent().find(".comment"));
        isValidMail($(this ).parent().find(".mail"));
        if(isValidName($(this ).parent().find(".name")) && isValidText($(this ).parent().find(".comment")) && isValidMail($(this ).parent().find(".mail"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $(".contact-form .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        if(isValidName($(this ).parent().find(".name")) && isValidPhone($(this ).parent().find(".phone"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $(".now form .submit" ).click(function() {
        isValidName($(this ).parents('form').find(".name"));
        isValidPhone($(this ).parents('form').find(".phone"));
        isValidMail($(this ).parents('form').find(".mail"));
        if(isValidName($(this ).parents('form').find(".name")) && isValidMail($(this ).parents('form').find(".mail")) && isValidPhone($(this ).parents('form').find(".phone"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $("#basket-fast .submit" ).click(function() {
        isValidName($(this ).parents('form').find(".name"));
        isValidPhone($(this ).parents('form').find(".phone"));
        isValidMail($(this ).parents('form').find(".mail"));
        if(isValidName($(this ).parents('form').find(".name")) && isValidMail($(this ).parents('form').find(".mail")) && isValidPhone($(this ).parents('form').find(".phone"))){
          $(".submit" ).click();
        }else {
          return false;
        }
    });
  
    $('.popup-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
     $('.product-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          fade: true,
          asNavFor: '.gallery-product'
        });
        $('.gallery-product').slick({
          slidesToShow: 3,
          asNavFor: '.product-slider',
          dots: false,
          arrows: true,
          focusOnSelect: true
    });
  
    $('.head-basket a, .btn-buy').click(function(){
        $('.popup-slider').find('.slick-next').click();
    });
    
    $('.btn-cont').click(function(e){
        e.preventDefault();
        $.magnificPopup.close();
    });
    
    $('.close-basket, .basket-body-close').click(function(){
        $(this).parent().remove();
    });
    
    $('.number input, .counter-num').mask('999');
    
    $(".accordeon div").hide().prev().click(function(){
      $(this).parents(".accordeon").find("div").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
  
    var title, src, price;
  
    $('.btn-buy').click(function(){
       title = $(this).parents('.product').find('.product-page-title').html();
       src = $(this).parents('.product-inner').find('.product-slider .slick-current img').attr('src');
       price = $(this).parents('.product-description-inner').find('.price span').html();
       RegEx=/\s/g;
      
       $('#basket-order').find('.basket-middle-outer .b-left img').attr('src', src);
       $('#basket-order').find('.basket-middle-outer .b-left a').html(title);
       $('#basket-order').find('.basket-middle-outer .popup-price span').html(parseFloat(price.replace(RegEx,"")));
       $('#basket-order').find('.basket-middle-outer .popup-price span').attr('data-sum', parseFloat(price.replace(RegEx,"")));
       $(this).parents('body').find('#basket-order .basket-table-bottom .popup-price span').html(parseFloat(price.replace(RegEx,"")));
    });
  
    $('.fast-order').click(function(){
       title = $(this).parents('.product').find('.product-page-title').html();
       src = $(this).parents('.product-inner').find('.product-slider .slick-current img').attr('src');
       price = $(this).parents('.product-description-inner').find('.price span').html();
       RegEx=/\s/g;
      
       $('#basket-fast').find('.basket-body-product img').attr('src', src);
       $('#basket-fast').find('.basket-body-product a').html(title);
       $('#basket-fast').find('form .price span').html(parseFloat(price.replace(RegEx,"")));
    });
  
    var num = $('.counter-num').val();
      $('.counter-right').click(function(){
         num++;
         $('.counter-num').val(num);
         var count = $(this).prev().val();
         var price = $(this).parents('.basket-body').find('.price-one span').html();
         $(this).parents('.basket-body-inner').find('.price-all span').html( count * price );
         $('.basket-price .price span').text(count * price); 
    });
      $('.counter-left').click(function(){
        if( num>1 ){
          num--;
          $('.counter-num').val(num);
          var count = $(this).next().val();
          var price = $(this).parents('.basket-body').find('.price-one span').html();
          $(this).parents('.basket-body-inner').find('.price-all span').html( count * price );
          $('.basket-price .price span').text(count * price); 
        }
    });
    $('.counter-num').keyup(function(){
      var value = $('.counter-num').val();
      num = value;
      var price = $(this).parents('.basket-body').find('.price-one span').html();
      $(this).parents('.basket-body-inner').find('.price-all span').html( value * price );
      $('.basket-price .price span').text(value * price); 
    });

});

$(".basket-table-middle .number").delegate('input', 'keyup',  function(){
   console.log('dd');
    var value = $(this).val();
    var valueProduct = $(this).parents('.basket-table-middle').find('.popup-price span').attr('data-sum');
    
    $(this).parents('.basket-table-middle').find('.popup-price span').html(+valueProduct * +value);
    $(this).parents('form').find('.basket-table-bottom .popup-price span').html(+valueProduct * +value);
});

if(jQuery('section').hasClass('contact-map')){
  var map;
     var uluru = {lat: 50.445503, lng: 30.538729};
     function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.445503, lng: 30.538729},
          zoom: 18
        });
       
       var contentInfo = '<div class="map-info">Киев, Грушевского 28,<br/> офис 118</div>';
       
       var infowindow = new google.maps.InfoWindow({
          content: contentInfo,
          position: {lat: 50.444903, lng: 30.539300},
          maxWidth: 290
      });
       
        var image = 'img/marker.png';
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: image
        });
       
        infowindow.open(map);
    };
}
     





















