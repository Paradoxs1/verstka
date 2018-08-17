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




jQuery.noConflict();



(function($){ 
    
$(document).ready(function(){
  
  /*****Filter catalog*****/
  
    $('.sort').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
    $('.group').click(function(){
      $(this).parents('.catalog-product').addClass('active');
    });
    $('.list').click(function(){
      $(this).parents('.catalog-product').removeClass('active');
    });
  
    /*********Popup**********/
  
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
  
      $("#popup .submit" ).click(function(){
          isValidName($(this).parent().find(".name"));
          isValidPhone($(this).parent().find(".phone"));
          if(isValidName($(this).parent().find(".name")) 
             && isValidPhone($(this).parent().find(".phone"))){
              $(this).click();
          }else{
              return false;
          }
      });
  
    /************Order form***************/
  
     $('.form-order .btn-order').click(function(){
        var url = document.location.href;
        var num = $(this).parents('.form-order').find('.counter-num input').val();
        var title = $(this).parents('.product-container').find('.product-description .product-title').html();
       
        $(this).parents('body').find('#popup .title_product').val(title);
        $(this).parents('body').find('#popup .num_product').val(num);
        $(this).parents('body').find('#popup .url_page').val(url);
     });

    /****Gallery****/
  
    $('.gallery-container').magnificPopup({
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
  
    /*****Tab in product page*******/
  
    $(".tab-block .tab").click(function() {
        $(".tab-block .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active"); 
  
    /**********Сounter in form**********/  
    
    $('.counter-num input').mask('99999999');  
    var num = $('.counter-num input').val();
  
    $('.counter-top').click(function(){
      num++;
      $('.counter-num input').val(num);
    });
    $('.counter-bottom').click(function(){
      if(num>1){
        num--;
        $('.counter-num input').val(num);
      }
    });
    $('.counter-num input').keyup(function(){
      var value = $(this).val();
      num = value;
    });
});
})(jQuery);


























