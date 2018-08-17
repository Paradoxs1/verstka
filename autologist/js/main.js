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
function isValidPass(pass){
    if(!(pass == '')) {
        if (!(/.{5,}/.test(pass.val()))) {
            pass.addClass('red-border');
            return false;
        }
        pass.removeClass('red-border');
        return true;
    }
    pass = '1111111111';
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
  
  $('.phone').mask('+7 (000) 000-00-00');
  $('.birthday').mask('99.99.9999');
	
	$('.procent').mask('999');
	
	var procent;
	$('.procent').change(function(){
		procent = $(this).val();
		if(procent > 100){
			 $(this).val(100);
			}
	});
  
  $("footer .submit" ).click(function() {
      isValidPhone($(this ).parent().find(".phone"));
      if(isValidPhone($(this ).parent().find(".phone"))){
        $(".submit" ).click();
      }else {
        return false;
      }
  });
  
  $(".profile .submit" ).click(function() {
      isValidPhone($(this ).parents('form').find(".phone"));
      isValidName($(this ).parents('form').find(".name"));
      isValidMail($(this ).parents('form').find(".mail"));
      isValidPass($(this ).parents('form').find(".pass"));
      if(isValidPhone($(this ).parents('form').find(".phone")) && isValidName($(this ).parents('form').find(".name")) && isValidMail($(this ).parents('form').find(".mail")) && isValidPass($(this ).parents('form').find(".pass"))){
        $(".submit" ).click();
      }else {
        return false;
      }
  });
  
  $(".basket-form .submit" ).click(function() {
      isValidPhone($(this ).parents('form').find(".phone"));
      isValidName($(this ).parents('form').find(".name"));
      if(isValidPhone($(this ).parents('form').find(".phone")) && isValidName($(this ).parents('form').find(".name"))){
        $(".submit" ).click();
      }else {
        return false;
      }
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
  
  var src, title, price;
  $('.product-block .product-img a, .product-block .product-link').click(function(){
      src = $(this).parents('.product-block').find('.product-img img').attr('src');
      title = $(this).parents('.product-block').find('.product-link').html();
      price = $(this).parents('.product-block').find('.price').html();
    
      $('#popup .product-title').html(title);
      $('#popup img').attr('src', src);
      $('#popup .price').html(price);
  });
  
  $('.order-top .left a, .alert-top a').click(function(){
    $(this).addClass('active').siblings().removeClass('active'); 
  });
  
  $('#datepicker').datepicker();
  $('#datepicker1').datepicker();
  $('#datepicker2').datepicker();
	
	$('#pass').hideShowPassword({
    innerToggle: true
  });
	
	
	$('.number').mask('99');
  var num = $('.number').val(), index;
  var tr = $('.order-bottom tbody tr').length;
  
	function trRow(num){
		$('.order-bottom tbody tr').removeClass('row');
		
    for(var i = 1; i <= num; i++){
      index = $('.order-bottom tbody tr:nth-child(' + i + ')').index();
      if( index+1 === i){
        $('.order-bottom tbody tr:nth-child(' + i + ')').addClass('row');
      }
    }
  }
	if(num < 1){
		$('.number').val(1);
		num = 1;
	}
  if(num => 1){
     trRow(num);
  }
  
  $('.number').change(function(){
    num = $('.number').val();
    if(num < 1){
      $('.number').val(1);
			num = 1;
    }
		trRow(num);
  });
 
  
$('.order-bottom tbody label[for^="order"]').click(function(){
    $(this).parents('tr.row').toggleClass('active');
});

var counter = 0;
	
$('.order-bottom thead label[for^="order"]').click(function(){
		 ++counter;
		 if(counter % 2 != 0){
			 $('tbody tr.row').not('.active').find('label[for^="order"]').click();
			 $('tbody tr.row').not('.active').addClass('active');
			}
			if(counter % 2 == 0){
				$('tbody tr.row').find('label[for^="order"]').click(); 
			}															
	});
	
	
	
	$(".tab").click(function(){
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
  
});






















