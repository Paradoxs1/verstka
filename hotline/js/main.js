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
		if (!(/.{1,400}/.test(comment.val()))) {
			comment.addClass('red-border');
			return false;
		}
		comment.removeClass('red-border');
		return true;
	}
	comment = '0000000000';
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
    $('.phone').inputmask('9{0,15}');

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
  
  
    $('.carousel').carousel({
      carouselWidth: 940,
      carouselHeight: 345,
      directionNav: false,
      reflection: false,
      shadow: false,
      buttonNav: 'none',
      autoplay: false
    });
      
    
   
  
  
      $('.slideItem').hover(
          function(){
             if($(this).width() > 500){
                $(this).find('.slide-block').hide();
                $('.slide-block').click(function(){
                   $(this).hide();
                });
             }
          },
          function(){
            $(this).find('.slide-block').show();
      });
  
      $('.slideItem').click(function(){
          var text = $(this).find('.slide-text').html();
          $('.carousel-content-inner').html(text);
      });
    
      $('.question-block .btn-question').click(function(){
        var question = $(this).parents('.question-block').find('.question').val();
        $('#popup').find('.comment').html(question);
      
      });
    
      $('#popup .submit').click(function(){      
          isValidName($(this ).parent().find(".name"));
          isValidPhone($(this ).parent().find(".phone"));
          isValidText($(this ).parent().find(".comment"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidPhone($(this ).parent().find(".phone")) 
              && isValidText($(this ).parent().find(".comment")))
          {
          $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          $("form").trigger("reset");
          $('.mfp-close').click();
        });
        return false;
          }
          else {
              return false;
          }
          });
    
    
        $('#quest .submit').click(function(){   
          isValidName($(this ).parent().find(".name"));
          isValidPhone($(this ).parent().find(".phone"));
          isValidText($(this ).parent().find(".comment"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidPhone($(this ).parent().find(".phone")) 
              && isValidText($(this ).parent().find(".comment")))
          {
          $.ajax({
          type: "POST",
          url: "mail2.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          $("form").trigger("reset");
          $('.mfp-close').click();
        });
        return false;
          }
          else {
              return false;
          }
          });
  
        $('#callback .submit').click(function(){      
          isValidName($(this ).parent().find(".name"));
          isValidPhone($(this ).parent().find(".phone"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidPhone($(this ).parent().find(".phone")))
          {
          $.ajax({
          type: "POST",
          url: "mail3.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          $("form").trigger("reset");
          $('.mfp-close').click();
        });
        return false;
          }
          else {
              return false;
          }
          });
  
         $('#write .submit').click(function(){      
          isValidName($(this ).parent().find(".name"));
          isValidText($(this ).parent().find(".comment"));
          isValidMail($(this ).parent().find(".mail"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidText($(this ).parent().find(".comment")) && isValidMail($(this ).parent().find(".mail")))
          {
          $.ajax({
          type: "POST",
          url: "mail4.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          $("form").trigger("reset");
          $('.mfp-close').click();
        });
        return false;
          }
          else {
              return false;
          }
          });
  
        $(".list-inner .left, .help-block:nth-child(odd)").animated2("fadeInLeft", "fadeOut");
        $(".list-inner .right, .help-block:nth-child(even)").animated2("fadeInRight", "fadeOut");
        
        $(".question-text").typed({
            strings: ["Я нахожусь за границей..", "Здравствуйте, мне нужна Ваша помощь...", 'У меня отобрали паспорт...', 'Помогите, мне с получением визы...'],
            typeSpeed: 50,
            loop: true,
            showCursor: true
        });
        
        $(".question-text").click(function(){
          $(this).hide();
          $(this).siblings('.question').focus();
        });
  
        
});

























