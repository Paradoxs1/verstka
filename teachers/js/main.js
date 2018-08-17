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
  
  $('.slider-sites').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
  $(".toggle-block").click(function () {
      $('.toggle-mnu').toggleClass("on");
      $(this).next().slideToggle(500);
      return false;
  });
  
  $('.menu-arrow').click(function(){
    $(this).toggleClass('active').next().slideToggle();
  });
  
  $('.phone ').mask('+7 999 999-99-99');
  
  $('.btn-read').click(function(event){
    event.preventDefault();
    $(this).prev().find('.comments-text-hide').slideToggle();
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
  
  if($(window).width() > 769){
    $(".banner-form h2").typed({
        strings: ["Создайте собственный личный сайт педагога бесплатно"],
        typeSpeed: 50,
        loop: true,
        showCursor: false
    });
    
    $(".main-right .main-content, .sites-top-block ").animated2("fadeInLeft", "zoomOutDown");
    $(".main-left .main-content, .sites-bottom-block").animated2("fadeInRight", "zoomOutDown");
    $("").animated("fadeIn", "fadeOut");
    $(".slider h3, .sites h3").animated("bounce", "fadeOut");
    $("").animated("fadeInUp", "fadeOut");
  }
  
});
