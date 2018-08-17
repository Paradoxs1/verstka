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
		if (!(/.{10,400}/.test(comment.val()))) {
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
	$('.menu a').each(function () {
		if ( this.href == location.href){
			jQuery(this).addClass('active');
		};
	});
   	
    $('.phone ').mask('+7 (000) 000-00-00');
	
	
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
	
	
    $('#modal-form').find(".submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidName($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
                $( this ).parents('form').submit();
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$('input[type="text"]').val('');
            }
            else {
                return false;
            }
        });
	
	$('#form').find(".submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidName($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
                $( this ).parents('form').submit();
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$('input[type="text"]').val('');
            }
            else {
                return false;
            }
        });
	
	$('#product-form').find(".submit" ).click(function() {
            isValidName($(this ).parent().find(".name"));
            isValidName($(this ).parent().find(".phone"));
            if( isValidName($(this ).parent().find(".name")) 
                && isValidPhone($(this ).parent().find(".phone")))
            {
                $( this ).parents('form').submit();
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$('input[type="text"]').val('');
            }
            else {
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
	
	$("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#modal-form").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });
	
	$("#product-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail3.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#modal-form").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });
	
	$(".produced-container .tab").click(function() {
		$(".produced-container .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$(".product-tab").click(function() {
		$(".product-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".product-tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	 

});
ymaps.ready(function () {
    var Map = new ymaps.Map('map', {
            center: [55.755260, 37.619495],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),
        Placemark = new ymaps.Placemark([55.705276, 37.869434], {
            hintContent: '«Brick Stanok»',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'js/img/marker.png',
            iconImageSize: [77, 67],
            iconImageOffset: [-25, -20]
        });

    Map.geoObjects.add(Placemark);
	
	Map.balloon.open([55.705276, 37.869434], "<div class='ballon'>г. Москва, ул. Большая садовая,  д. 5, подъезд 3,этаж 2.</div>", {
        closeButton: false
    });
});
