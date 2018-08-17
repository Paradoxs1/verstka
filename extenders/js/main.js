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

$(document).ready(function(){
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
  

  if($('.hidden').is(':visible')){
    var elem = $('aside.left').clone().appendTo('.main-content>.container');
    console.log(1);
  }
  
  $('.number').mask('0000');
      
  var num = $('.counter .number').val(), price, sum = 0, priceAll = 0;
  
  $('.basket-inner tbody tr').each(function(){
    priceAll = $(this).find('.price-all span').html();
    sum += parseFloat(priceAll);
    $('.basket-price span').html(sum + ' руб.');
  })
  
  $('.counter-right').click(function(){
    num++;
    $(this).prev().val(num);
    
    price = $(this).parents('tr').find('.price-one span').html();
    $(this).parents('tr').find('.price-all span').html(num * price);
    sum = 0;
    $('.basket-inner tbody tr').each(function(){
      priceAll = $(this).find('.price-all span').html();
      sum += parseFloat(priceAll);
      $('.basket-price span').html(sum + ' руб.');
    })
  });
  
  $('.counter-left').click(function(){
    if( num>1 ){
      num--;
      $(this).next().val(num);
      
      price = $(this).parents('tr').find('.price-one span').html();
      $(this).parents('tr').find('.price-all span').html(num * price);
      sum = 0;
      $('.basket-inner tbody tr').each(function(){
        priceAll = $(this).find('.price-all span').html();
        sum += parseFloat(priceAll);
        $('.basket-price span').html(sum + ' руб.');
      })
    }
  });
  
  $('.number').keyup(function(){
    num = $(this).val();
    
    price = $(this).parents('tr').find('.price-one span').html();
    $(this).parents('tr').find('.price-all span').html(num * price);
    sum = 0;
    $('.basket-inner tbody tr').each(function(){
      priceAll = $(this).find('.price-all span').html();
      sum += parseFloat(priceAll);
      $('.basket-price span').html(sum + ' руб.');
    })
  });
  
  $('.close img').click(function(){
    sum = 0;
    var len = $('.basket-inner').find('tbody tr').length;
    if(len == 1){
      $(this).parents('.basket').find('.basket-info').show();
      $(this).parents('.basket-outer').remove();
  
    }else{
      $(this).parents('tr').remove();
      $('.basket-inner tbody tr').each(function(){
        priceAll = $(this).find('.price-all span').html();
        sum += parseFloat(priceAll);
        $('.basket-price span').html(sum + ' руб.');
      })
    }
  });
  
  
  $(".center .submit" ).click(function() {
      isValidMail($(this ).parent().find(".mail"));
      if(isValidMail($(this ).parent().find(".mail"))){
        $(".submit" ).click();
      }else {
        return false;
      }
  });
  
  $("#popup .submit, .contact form" ).click(function() {
      isValidName($(this ).parent().find(".name"));
      isValidPhone($(this ).parent().find(".phone"));
      if(isValidPhone($(this ).parent().find(".phone")) && isValidName($(this ).parent().find(".name"))){
        $(".submit" ).click();
      }else {
        return false;
      }
  });
  
  $('.gallery, .product-slider').magnificPopup({
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
  
    
  $('.slider-inner').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  $(".toggle-block").click(function () {
      $('.toggle-mnu').toggleClass("on");
      $(".menu").slideToggle();
      return false;
  });
  
  var num, width = $(window).outerWidth();
  
  $(window).resize(function(){
      width = $(window).outerWidth();
  });
  
  if($('section').hasClass('home-content')){
   $(window).scroll(function(){
      num = $(this).scrollTop();
      if(width > 700){
          if(num >= 550) {
            $('.head-nav').addClass('active');
          }
          else{
            $('.head-nav').removeClass('active');
          }
      }else if(width <= 700 ){
         if(num >= 700) {
            $('.head-nav').addClass('active');
          }
          else{
            $('.head-nav').removeClass('active');
          }
      }
      
    });
   }else{
     $(window).scroll(function(){
        num = $(this).scrollTop();
          if(num >= 120) {
            $('.head-nav').addClass('active');
          }
          else {
            $('.head-nav').removeClass('active');
          }
        
      });
   }
  
	
  $('.questions-form a').click(function(event){
    event.preventDefault();
    
    $(this).parent().slideUp().parent().find('.questions-block').slideDown();
    $(this).parents('.questions').find('.aside-title').next().addClass('active');
  });
  
  $(".accordeon div").hide().prev().click(function(){
    $(this).parents(".accordeon").find("div").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
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
  
  var input;
  $('#country, #region').keyup(function(){
    input = $(this).val();
    if(input != ''){
       $(this).prev().addClass('active');
    }else{
      $(this).prev().removeClass('active');
    }
  });
  
});


if(jQuery('div').hasClass('map')){
  var map;
     var uluru = {lat: 54.896355, lng: 38.060269};
     function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 54.896355, lng: 38.060269},
          zoom: 18
        });
       
       var contentInfo = '<div class="info-map"><span>Адрес:</span> Транспортная ул., 3, Ступино, Московская обл., Россия</div>';
       
       var infowindow = new google.maps.InfoWindow({
          content: contentInfo,
          position: {lat: 54.896355, lng: 38.060269},
          maxWidth: 220,
          pixelOffset: new google.maps.Size(-175, 70)
      });
       
        var image = 'js/images/marker.png';
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: image
        });
       
        infowindow.open(map);
    };
}






















