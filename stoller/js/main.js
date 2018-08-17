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

	$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".toggle-block").click(function () {
        $('.toggle-mnu').toggleClass("on");
        $(".main-mnu").slideToggle();
        $('#menu').slideToggle(500);
        return false;
    });
      
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
          $('.button-top').fadeIn();   
      } else {
          $('.button-top').fadeOut();
      }
    });
    $('.button-top').click(function() {
        $('body,html').animate({scrollTop:0},800);
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
  
  $('.phone ').mask('+ 380 99 999 99 99');
	
	
	
	$('.alert-close').click(function(){
		$('.alert-wrapper').fadeOut("1500");
	});
  
		/////////////////////////////////////////////
		
		$("#form .submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidPhone($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
			$.ajax({
            type: "POST",
            url: "mail2.php",
            data: $(this).closest("form").serialize()
        }).done(function() {
            $(this).closest("form").find("input").val("");
            $("form").trigger("reset");
			//$('.alert-wrapper').show();
			alert('Сообщение');
        });
        return false;
            }
            else {
                return false;
            }
        });
		
		//////////////////////////////////////
		
		$("#modal-form .submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidPhone($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
			$.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).closest("form").serialize()
        }).done(function() {
            $(this).closest("form").find("input").val("");
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
		
		////////////////////////////////////////////////
		
		
		$("#form-bottom .submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidPhone($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
			$.ajax({
            type: "POST",
            url: "mail3.php",
            data: $(this).closest("form").serialize()
        }).done(function() {
            $(this).closest("form").find("input").val("");
            $("form").trigger("reset");
			$('.alert-wrapper').show();
        });
        return false;
            }
            else {
                return false;
            }
        });
		
		///////////////////////////////////////////////
		
  
});
