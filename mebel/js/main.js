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

	$("#menu, #footer-menu").on("click","a", function (event) {
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
                $( ".submit" ).click();
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
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#modal-form").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });

    $(".form-send").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail2.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form-send").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });

    $('.gallery-block').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
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


    if ($(window).width() > 769) {
            $(".door-block-left, .production-block-left").animated2("fadeInLeft", "zoomOutDown");
            $(".door-block-right,.production-block-right").animated2("fadeInRight", "zoomOutDown");
            $(".cupboard-block, .why-block, .materials-block").animated("fadeIn", "fadeOut");
            $(".why-form").animated("bounce", "fadeOut");
            $(".gallery-block a").animated("fadeInUp", "fadeOut");
        }
});

ymaps.ready(function () {
    var Map = new ymaps.Map('map', {
            center: [55.796960, 37.492130],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        Placemark = new ymaps.Placemark(Map.getCenter(), {
            hintContent: 'Студия мебели',
            balloonContent: 'Позвоните нам 8 (499) 394-12-01 или напишите info@mebel.ru'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'js/img/marker.png',
            iconImageSize: [115, 139],
            iconImageOffset: [-70, -70]
        });

    Map.geoObjects.add(Placemark);
	
	
});