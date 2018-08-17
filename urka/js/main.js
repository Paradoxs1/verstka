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
function isValidText(comment) {
	if (!(comment == '')) {
		if (!(/.{20,400}/.test(comment.val()))) {
			comment.addClass('red-border');
			return false;
		}
		comment.removeClass('red-border');
		return true;
	}
	comment = '0000000000';
	return true;
}

$(document).ready(function(){

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
    
    $('.slider-partners').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
      autoplay: true,
      infinite: true,
	  dots: false,
      arrows: true,
	  focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '20px',
            slidesToScroll: 1,
          }
        }
      ]
	});
  
   if ($(window).width() < 768) {
        $('.slider-patents').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            centerMode: true,
            centerPadding: '20px',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });
    };
    
    
    var show = true;
    var countbox = ".numeral";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;
 
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".number-one").spincrement({
                from: 1,
                to: 5,
                duration: 5000
            });
          
            $(".number-two").spincrement({
                from: 250,
                to: 276,
                duration: 3000
            });
 
            show = false;
        }
    });
  
    $('.phone ').mask('+7 (000) 000-00-00');
	
	$('.alert-close').click(function(){
		$('.alert-wrapper').fadeOut("1500");
	});
  
    $("#modal-form .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidPhone($(this ).parent().find(".phone")))
        {
        $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).parents("form").serialize()
    }).done(function() {
        $(this).parents("form").find("input").val('');
        $("form").trigger("reset");
        $.magnificPopup.close();
        $('.alert-wrapper').show();
    });
      return false;
          }
          else {
              return false;
          }
    });
  
    $("#consultation-form .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        isValidText($(this ).parent().find(".comment"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidPhone($(this ).parent().find(".phone")) && isValidText($(this ).parent().find(".comment")))
        {
        $.ajax({
        type: "POST",
        url: "mail2.php",
        data: $(this).parents("form").serialize()
    }).done(function() {
        $(this).parents("form").find("input").val('');
        $("form").trigger("reset");
        $.magnificPopup.close();
        $('.alert-wrapper').show();
    });
      return false;
          }
          else {
              return false;
          }
    });
  
    $("#consul-form .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        isValidText($(this ).parent().find(".comment"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidPhone($(this ).parent().find(".phone")) && isValidText($(this ).parent().find(".comment")))
        {
        $.ajax({
        type: "POST",
        url: "mail2.php",
        data: $(this).parents("form").serialize()
    }).done(function() {
        $(this).parents("form").find("input").val('');
        $("form").trigger("reset");
        $.magnificPopup.close();
        $('.alert-wrapper').show();
    });
      return false;
          }
          else {
              return false;
          }
    });
  
    $("#head-form .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        isValidText($(this ).parent().find(".comment"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidPhone($(this ).parent().find(".phone")) && isValidText($(this ).parent().find(".comment")))
        {
        $.ajax({
        type: "POST",
        url: "mail2.php",
        data: $(this).parents("form").serialize()
    }).done(function() {
        $(this).parents("form").find("input").val('');
        $("form").trigger("reset");
        $('.alert-wrapper').show();
    });
      return false;
          }
          else {
              return false;
          }
    });
  
    $("#practice-form .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidPhone($(this ).parent().find(".phone"));
        isValidText($(this ).parent().find(".comment"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidPhone($(this ).parent().find(".phone")) && isValidText($(this ).parent().find(".comment")))
        {
        $.ajax({
        type: "POST",
        url: "mail2.php",
        data: $(this).parents("form").serialize()
    }).done(function() {
        $(this).parents("form").find("input").val('');
        $("form").trigger("reset");
        $('.alert-wrapper').show();
    });
      return false;
          }
          else {
              return false;
          }
    });
  
    if ($(window).width() > 768) {
        $(".law .left, .law .right, .situation-block, .situation-info, .dispute-block, .legal-block, .consultation .left, .consultation .right, .practice .left, .practice .right").animated2("fadeIn", "zoomOutDown");
    }
    
});

ymaps.ready(function () {
    var Map = new ymaps.Map('map', {
            center: [55.769487, 37.649303],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        Placemark = new ymaps.Placemark(Map.getCenter(), {
            hintContent: 'Правовая защита и решение юридических споров любой сложности',
            balloonContent: 'Правовая защита и решение<br/> юридических споров любой сложности<br/>8 (495) 790-98- 91<br/> 8 (800) 700-15- 93',
            iconCaption: 'Садово-Спасская улица, 21/1'
        }, {
            preset: 'islands#redDotIconWithCaption'
        });

    Map.geoObjects.add(Placemark);
	
	
});