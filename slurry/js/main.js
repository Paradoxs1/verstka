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

function init(){
    var myMap = new ymaps.Map('map',{
      center: [55.789910, 37.61736],
      zoom: 12
    }),

    myPlacemark1 = new ymaps.Placemark([55.759529, 37.660281], {  
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-18, -77],
    }),

    myPlacemark2 = new ymaps.Placemark([55.772497, 37.708003], {  
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    }),

    myPlacemark3 = new ymaps.Placemark([55.726550, 37.760016], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark4 = new ymaps.Placemark([55.789758, 37.782847], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark5 = new ymaps.Placemark([55.796818, 37.759158], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark6 = new ymaps.Placemark([55.820433, 37.703683], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark7 = new ymaps.Placemark([55.796757, 37.636642], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark8 = new ymaps.Placemark([55.732732, 37.572872], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark9 = new ymaps.Placemark([55.777890, 37.577336], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark10 = new ymaps.Placemark([55.830630, 37.518198], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark11 = new ymaps.Placemark([55.744933, 37.496724], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark12 = new ymaps.Placemark([55.758584, 37.471834], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark13 = new ymaps.Placemark([55.806082, 37.411580], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
  
    myPlacemark14 = new ymaps.Placemark([55.732069, 37.391485], {
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'js/img/marker.png',
        iconImageSize: [55, 77],
        iconImageOffset: [-28, -77]
    });
 
    myMap.geoObjects
      .add(myPlacemark1)
      .add(myPlacemark2)
      .add(myPlacemark3)
      .add(myPlacemark4)
      .add(myPlacemark5)
      .add(myPlacemark6)
      .add(myPlacemark7)
      .add(myPlacemark8)
      .add(myPlacemark9)
      .add(myPlacemark10)
      .add(myPlacemark11)
      .add(myPlacemark12)
      .add(myPlacemark13)
      .add(myPlacemark14);
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
  
  $('.phone').mask('+7 (000) 000-00-00');
  
  $("#popup .submit, .customer .submit" ).click(function() {
      isValidPhone($(this).parent().find(".phone"));
      isValidName($(this).parent().find(".name"));
      if(isValidPhone($(this ).parent().find(".phone")) && isValidName($(this).parent().find(".name"))){
        $(".submit" ).click();
      }else {
        return false;
      }
  });
  
  $('.languages a, .catalog-top-block').click(function(event){
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  });
  
  $('.slider, .basket-slider-inner').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
//  .on('afterChange', function(){
//    $('.slider .slick-active p').animated2("fadeInLeft", "zoomOutDown");
//    $('.slider .slick-active img').animated2("fadeInRight", "zoomOutDown");
//  })
  
  $('.number').mask('999');
  
  
  
  var num = $('.number').val(), price, sum = 0, priceAll = 0;
  $('.basket-block').each(function(){
    priceAll = $(this).find('.all-price span').html();
    sum += parseFloat(priceAll);
    $(this).parents('.basket-outer').find('.basket-bottom .right span').html(sum + ' руб.');
  })
  $('.counter-right').click(function(){
     num++;
     $(this).prev().val(num);
    
     price = $(this).parents('.basket-block').find('.price span').html();
     $(this).parents('.basket-block').find('.all-price span').html(num * price);
     sum = 0;
     $('.basket-block').each(function(){
        priceAll = $(this).find('.all-price span').html();
        sum += parseFloat(priceAll);
        $(this).parents('.basket-outer').find('.basket-bottom .right span').html(sum + ' руб.');
      })
  });
  $('.counter-left').click(function(){
    if( num>1 ){
      num--;
      $(this).next().val(num);
      price = $(this).parents('.basket-block').find('.price span').html();
      $(this).parents('.basket-block').find('.all-price span').html(num * price);
      sum = 0;
      $('.basket-block').each(function(){
        priceAll = $(this).find('.all-price span').html();
        sum += parseFloat(priceAll);
        $(this).parents('.basket-outer').find('.basket-bottom .right span').html(sum + ' руб.');
      })
    }
  });
  $('.number').keyup(function(){
    var value = $(this).val();
    num = value;
    price = $(this).parents('.basket-block').find('.price span').html();
    $(this).parents('.basket-block').find('.all-price span').html(num * price);
    sum = 0;
    $('.basket-block').each(function(){
      price = $(this).find('.all-price span').html();
      sum += parseFloat(price);
      $(this).parents('.basket-outer').find('.basket-bottom .right span').html(sum + ' руб.');
    })
  });
  
  $('.basket-close span').click(function(){
    sum = 0;
    var len = $('.basket-inner').find('.basket-block').length;
    console.log(len);
    if(len == 1){
      $(this).parents('.basket').remove();
    }else{
      $(this).parents('.basket-block').remove();
      $('.basket-block').each(function(){
        price = $(this).find('.all-price span').html();
        sum += parseFloat(price);
        $(this).parents('.basket-outer').find('.basket-bottom .right span').html(sum + ' руб.');
      })
    }
    
  });
  
  
  
  
  
  $('.product-img, .product-page-img').hover(
    function(){
      $(this).find('.img-product').fadeIn(0).animate({marginLeft: "70px"}, 600);
      $(this).find('.img-box').animate({marginLeft: "-60px"}, 600);
    },function(){
      $(this).find('.img-product').fadeOut(100).animate({ marginLeft: "0"}, 300);
      $(this).find('.img-box').animate({marginLeft: "0"}, 300);
  });
  
  $('.btn-filter').click(function(event){
    event.preventDefault();
    $(this).parents('form').find('input').prop('checked', false);
  });
  
  $('.certificate-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
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
  
  
  
if($(window).width() > 769){
   $(".production-content, .buy-bottom .buy-title, .customer-left, .comparison img.left, .slurry-content, .basket-form-inner>div:first, .marketing-left, .presentation-title, .shine .left ").animated2("fadeInLeft", "zoomOutDown");
   $(".video, .buy-bottom img, .customer form, .comparison-content, .slurry img.right, .basket-form-inner>div:last, .marketing-right, .presentetion img, .shine .right").animated2("fadeInRight", "zoomOutDown");
  
  $('.btn-buy, .franchise-link, .marketing-link, .presentetion-link').animated2("bounceInDown", "zoomOutDown");
  
 
   
  //$("").animated("fadeIn", "fadeOut");
}
  
  $(".toggle-block").click(function () {
    $('.toggle-mnu').toggleClass("on");
    $('.menu').slideToggle();
    return false;
  });

  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
  });
  
  if($('section').hasClass('map')){
    ymaps.ready(init);
  }
   
});























