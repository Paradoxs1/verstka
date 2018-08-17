'use strict';


$(document).ready(function () {
    
    
    
    $(".step_one").click(function( event ) {
    event.preventDefault();
    if($('input[name=year]').is(':checked')) {
         $(".first-form").slideUp("slow");
         $(".two-form").slideDown("slow");
    }
        else 
        {
        alert("Сделайте свой выбор, для перехода на следующий шаг!");
        }
    });
    
    
    $(".step_two").click(function( event ) {
    event.preventDefault();
    if($('input[name=worry]').is(':checked')) {
         $(".two-form").slideUp("slow");
         $(".three-form").slideDown("slow");
    }
        else 
        {
        alert("Сделайте свой выбор, для перехода на следующий шаг!");
        }
    });
    
    
    
    
    $(".step_three").click(function( event ) {
    event.preventDefault();
    if($('input[name=bite]').is(':checked')) {
         $(".three-form").slideUp("slow");
         $(".four-form").slideDown("slow");
    }
        else 
        {
        alert("Сделайте свой выбор, для перехода на следующий шаг!");
        }
    });
    
    
    $('.comment-text-review a').click(function(e){
       e.preventDefault();
        $(this).parents('.comment-review').next().slideToggle();
        $(this).toggleClass('active');
      
        if($(this).hasClass('active')){
           $(this).text('Не отвечать');
        }else{
           $(this).text('Ответить');
        }
    });





    /**********************CHANGE********************/

	
    $('.review-service-top>span').click(function(){
        $(this).parents('.review-service').find('.review-service-block').slideToggle();
        $(this).toggleClass('active');
      
        if($(this).hasClass('active')){
           $(this).text('Скрыть оценку');
        }else{
           $(this).text('Раскрыть оценку');
        }
    });
    

   $('.eye').click(function(){
   		$(this).toggleClass('active').parents('.review-content').find('.eye-block').slideToggle();
   });

   $('.add-review .review-service>span').click(function(){
   		$(this).toggleClass('active').next().slideToggle();

   })


    $(".link-review").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


 	$('.review-file').imageuploadify();


	var src;
 	$('.add-social a').click(function(event){
 		event.preventDefault();
 		src = $(this).attr('data-src');
 		$(this).parent().hide()
 		.next().show().find('img:first').attr('src', src)
 		.parents('.add-review').find('.add-form-top .name').attr('disabled', 'disabled');
 	});

 	$('.add-social-curent .close').click(function(){
 		$(this).parent().hide().prev().show()
 		.parents('.add-review').find('.add-form-top .name').prop('disabled', false);
 	})



/**********************CHANGE********************/











    $(".raiting_star").each(function(){
        var total_reiting = parseFloat($(this).find(".raiting_votes span").html());
        var star_widht = total_reiting*34.9;
        $(this).find('.raiting_votes').width(star_widht);
        var margin_doc = $(this).find(".raiting").offset();
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


    
  
  
	$('.js-burger').click(function () {
		var elem = $('.js-adaptive-popup');
		var overlay = $('.overlay');

		elem.addClass('is-appearing');
		overlay.addClass('is-appearing');

		var animationEnd = function animationEnd(event) {
			elem.removeClass('is-appearing');
			overlay.removeClass('is-appearing');

			elem.addClass('is-active');
			overlay.addClass('is-active');

			elem.off('animationend', animationEnd);
		};
        
		elem.on('animationend', animationEnd);
	});

	$('.js-close-burger').click(function () {
		var elem = $('.js-adaptive-popup');
		var overlay = $('.overlay');

		elem.removeClass('is-active');
		overlay.removeClass('is-active');

		elem.addClass('is-hiding');
		overlay.addClass('is-hiding');

		var animationEnd = function animationEnd(event) {
			elem.removeClass('is-hiding');
			overlay.removeClass('is-hiding');

			elem.off('animationend', animationEnd);
		};

		elem.on('animationend', animationEnd);
	});
});
$(document).ready(function () {
	$('.before-after__control').click(function () {
		$(this).toggleClass('is-active');
		$(this).prev().toggleClass('is-active');
	});
});
$(document).ready(function () {

	var activateElem = function activateElem(elem) {
		elem.addClass('is-appearing');

		var animationEnd = function animationEnd(event) {
			elem.removeClass('is-appearing');

			elem.addClass('is-active');

			elem.off('animationend', animationEnd);
		};

		elem.on('animationend', animationEnd);
	};

	var deactivateItem = function deactivateItem(elem) {
		elem.removeClass('is-active');
		elem.addClass('is-hiding');

		var animationEnd = function animationEnd(event) {
			elem.removeClass('is-hiding');

			elem.off('animationend', animationEnd);
		};

		elem.on('animationend', animationEnd);
	};

	$('.js-faq').click(function () {
		var elem = $(this).parent();
		var active = elem.hasClass('is-active');

		deactivateItem($('.faq.is-active'));

		if (!active) {
			activateElem(elem);
		}
	});
});

$(document).ready(function () {
	$('.license').fancybox();
});
{
	var init = function init() {
		if (!document.getElementById('contact-map')) {
			return false;
		}

		myMap = new ymaps.Map("contact-map", {
			center: [55.76, 37.64],
			zoom: 7
		});
	};

	ymaps.ready(init);
	var myMap = void 0;
}

{
	var _init = function _init() {
		if (!document.getElementById('index-map')) {
			return false;
		}

		_myMap = new ymaps.Map("index-map", {
			center: [55.76, 37.64],
			zoom: 7,
			controls: []
		});
	};

	ymaps.ready(_init);
	var _myMap = void 0;
}
$(document).ready(function () {
  
  
    $(function () {
                $('.popup-modal').magnificPopup({
                    type: 'inline',
                    preloader: false,
                    focus: '#username',
                    modal: true
                });
                $(document).on('click', '.popup-modal-dismiss', function (e) {
                    e.preventDefault();
                    $.magnificPopup.close();
                });
            });
    

	$(".js-modal").on("click", function (event) {
		event.preventDefault();
		event.stopPropagation();
        
		var clickData = $(this).data("modal"),
		    modal = $(".modal").filter(function (index, el) {
            
			return $(this).data("modal") === clickData;
		});

		modalOpen(modal);
	});

	$(".js-modal-overlay-close").on("click", function (event) {

		if (event.target === event.currentTarget) {

			var modal = $(this).find(".modal");

			modalClose(modal);
		}
	});

	$(".js-modal-close").on("click", function (event) {

		var modal = $(this).parents(".modal");

		modalClose(modal);
	});
});

function modalOpen(modal) {

	$(".overlay").addClass("is-active");

	$("body").on("mousewheel", function (event) {
		event.preventDefault();
	});

	modal.addClass("is-active");
}

function modalClose(modal) {

	modal = modal.filter(function (index, el) {
		return $(el).hasClass('is-active');
	});

	modal.removeClass("is-active");
	$(".overlay").removeClass("is-active");
	$("body").off("mousewheel");
}

$(document).ready(function () {
	$('.js-person-more').click(function () {
		$(this).toggleClass('is-active');
		$(this).next().toggleClass('is-active');
	});
});
$(document).ready(function () {
	$('.opinion').fancybox({
		helpers: {
			media: {}
		}
	});
});
$(document).ready(function () {
	$('.slide-menu').owlCarousel({
		autoWidth: true
	});
});
$(document).ready(function () {

	{
		var slider = $('.js-slider-photo');

		slider.owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			navClass: ['slider__arrow slider__arrow--big slider__arrow--prev', 'slider__arrow slider__arrow--big slider__arrow--next']
		});
	}

	{
		var _slider = $('.js-slider-before-after');

		_slider.owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			navClass: ['slider__arrow slider__arrow--prev', 'slider__arrow slider__arrow--next']
		});
	}

	{
		var _slider2 = $('.js-slider-news');

		_slider2.owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			navClass: ['slider__arrow slider__arrow--prev', 'slider__arrow slider__arrow--next'],
			margin: 15,
			responsive: {
				768: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		});
	}

	{
		var _slider3 = $('.js-slider-opinion');

		_slider3.owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			navClass: ['slider__arrow slider__arrow--prev', 'slider__arrow slider__arrow--next'],
			margin: 115,
			responsive: {
				1024: {
					items: 2
				}
			}
		});
	}

	{
		var _slider4 = $('.js-slider-journal');

		_slider4.owlCarousel({
			loop: true,
			items: 3,
			nav: true,
			center: true,
			autoWidth: true,
			margin: 55,
			navClass: ['slider__arrow slider__arrow--prev', 'slider__arrow slider__arrow--next'],
			responsive: {
				460: {
					items: 3,
					margin: 135
				}
			}
		});
	}
});

          