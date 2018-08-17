function isValidName(name) {
      if (!(name == '')) {
          if (!(/\d [0-9]/.test(name.val()))) {
              name.addClass('red-border2');
              return false;
          }
          name.removeClass('red-border2');
          return true;
      }
      name = 'name';
      return true;
  }
  function isValidPhone(phone) {
      if (!(phone == '')) {
          if (!(/\+?\d+\ ?\(?\d+\)?\ ?\d+\ ?\d+\ ?\d+/.test(phone.val()))) {
              phone.addClass('red-border2');
              return false;
          }
          phone.removeClass('red-border2');
          return true;
      }
      phone = '0000000000';
      return true;
  }
  function isValidMail(mail){
      if(!(mail == '')) {
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


$(document).ready(function(){
  var package = 0, paper = 0, print = 0, pan = 0, eyelets = 0, lamination = 0, assembly = 0, box = 0, sum = 0, priceNum, paperColor, panColor, panNum = 0;
  
  var packageText, paperText, printText, panText, eyeletsText, laminationText, assemblyText, boxText;
  
  
  $('.package-radio').find('label').click(function(){
    package = $(this).parent().find('input').attr('data-price');
    packageText = $(this).text();
    
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
    
    $('.price').html(num * sum + " руб.");
  });
  
   $('.paper-block>label').click(function(){
    paper = $(this).siblings('input').attr('data-price');
    paperText = $(this).text();
     
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
     
     $('.price').html(num * sum + " руб.");
  });
  
  $('.print-block').find('label').click(function(){
    print = $(this).siblings('input').attr('data-price');
    printText = $(this).text();
    
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
    
    $('.price').html(num * sum + " руб.");
  });
  
  $('.pan-block').find('label').click(function(){
    $(this).parents('.pan').find('.band').find("input:radio:checked").removeAttr("checked");
    panNum = $(this).parents('.pan-block').find('input').attr('data-num');
    panText = $(this).parents('.pan-block').find('p').text();
    panColor = 0;
    
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
    
    $('.price').html(num * sum + " руб.");
  });
  
  $('.eyelets-block').find('label').click(function(){
    eyelets = $(this).parent().find('input').attr('data-price');
    eyeletsText = $(this).text();
    
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
    
    $('.price').html(num * sum + " руб.");
  });
  
  $('.lamination-block').find('label').click(function(){
    lamination = $(this).parent().find('input').attr('data-price');
    laminationText = $(this).text();
    
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
    
    $('.price').html(num * sum + " руб.");
  });
  
   $('.assembly-block').find('label').click(function(){
    assembly = $(this).parent().find('input').attr('data-price');
    assemblyText = $(this).parent().find('p').text();
     
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
     
    $('.price').html(num * sum + " руб.");
  });
  
   $('.box-block').find('label').click(function(){
    box = $(this).parent().find('input').attr('data-price');
    boxText = $(this).parent().find('p').text();
     
    sum = 0;
    sum = +package + +paper + +print + +panNum + +eyelets + +lamination + +assembly + +box;
     
    $('.price').html(num * sum + " руб.");
  });
  
  $('.paper-color').find('label').click(function(){
    paperColor = $(this).prev().attr('data-color');
  });
  
  $('.rope-container, .tape-container').find('label').click(function(){
    panColor = $(this).prev().attr('data-pan');
  });
  
  
  
 
  
  
  

  $('.package-img img, .eyelets-block img').click(function(){
      $(this).parents('.package-block, .eyelets-block').find('label').click();
  }); 
   
  

  
  var num = $('.counter-num').val();
  $('.counter-right').click(function(){
    num++;
    $('.price').html(num * sum + " руб.");
    $('.counter-num').val(num);
  });
  $('.counter-left').click(function(){
    if( num>1 ){
      num--;
      $('.price').html(num * sum + " руб.");
      $('.counter-num').val(num);
    }
  });
  
  $('.counter-num').keyup(function(){
    var Value = $('.counter-num').val();
    num = Value;
  Value = +(Value * sum);
    
    $('.price').text(Value + " руб.");
  });
  
  
  
  
  
  $('.paper-block:first label').click(function(){
    $('.label-hide').hide();
  });
  $('.paper-block:last label').click(function(){
    $('.label-hide').show();
  });
  
  
  
  
  $(".menu-block").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  
  $(".toggle-block").click(function () {
      $('.toggle-mnu').toggleClass("on");
      $(".main-mnu").slideToggle();
      $('.menu-block').slideToggle(500);
      return false;
    });
  
  $('.phone ').mask('+7 (000) 000-00-00');
  $('.counter-num ').mask('0000');
  
  $('.p-block1 .select-pan label').click(function(){
    $('.tape-container').hide();
    $('.rope-container').slideToggle(500);
  });

  $('.p-block2 .select-pan label').click(function(){
    $('.rope-container').hide();
    $('.tape-container').slideToggle(500);
  });

  
  
  
$(".form-data button").click(function() {
      
      
      
        isValidPhone($(this ).parents('.form-data').find(".phone"));
        if( isValidPhone($(this ).parents('.form-data').find(".phone")))
      {
          var LastPrice;
      LastPrice = $(".price").html();
        
    
        
      $(".get_pac_size").val(packageText);
      $(".get_pac_type").val(paperText);
      $(".get_pac_type_color").val(paperColor);
      $(".get_print_type").val(printText);
      $(".get_handle_type").val(panText);
      $(".get_handle_type_number").val(panColor);
      $(".get_luvers").val(eyeletsText);
      $(".get_lamination_type").val(laminationText);
      $(".get_assembly_type").val(assemblyText);
      $(".get_packaging_type").val(boxText);
      $(".get_order_summ").val(LastPrice);
      $(".get_order_kolv").val(num);
        
          
           
            $( "#data-form" ).submit();  
          alert("Ваш заказ успешно отправлен. Мы свяжемся с Вами в ближайшее время!");
          
      }
        else {
            
            return false;
        }
    }); 
    
  
  $("#fot-form").submit(function() {
    
   
    
    isValidMail($(this ).parent().find(".mail"));
        if( isValidMail($(this ).parent().find(".mail")))
      {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#fot-form").trigger("reset");
		});
        
		return false;
        }
        else {
            alert("Емейл введен не верно!");
           return false;
        }
        
        
        
	});
 
});

ymaps.ready(function () {
    var Map = new ymaps.Map('map-content', {
            center: [55.822219, 37.423088],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        Placemark = new ymaps.Placemark(Map.getCenter(), {
            hintContent: 'МЫ  НАХОДИМСЯ  ЗДЕСЬ',
            balloonContent: 'МЫ  НАХОДИМСЯ  ЗДЕСЬ'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'js/img/marker1.png',
            iconImageSize: [283, 281],
            iconImageOffset: [-120, -80]
        });

    Map.geoObjects.add(Placemark);
});