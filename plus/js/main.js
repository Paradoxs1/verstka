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
    
    $('.phone ').mask('+7 (000) 000-00-00');

    $(".submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidName($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
                $( this ).parents('form').submit();
				$('input[type="text"]').val('');
                alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            }
            else {
                return false;
            }
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
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});

    $("#modal-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#modal-form").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });

    $("#form-send").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(".form-send").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });
	
	$("#form-contact").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail3.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(".form-send").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });
 	
	$('.tarif-block').find('.btn-order').click(function(){
		var tarif = $(this).parents('.tarif-block').find('.tarif-title').html();
		$('#popup').find('.hidden').val(tarif);
	});
});