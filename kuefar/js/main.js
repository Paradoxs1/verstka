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

  $(".year, .head-top nav").on("click","a", function(event){
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  
  $(".toggle-block").click(function(){
    $('.toggle-mnu').toggleClass("on");
    $('.menu').slideToggle(500);
    return false;
  });

  $('.phone ').mask('+7 (000) 000-00-00');

  $(".order-form .submit" ).click(function() {
    isValidName($(this ).parents('.order-form').find(".name"));
    isValidPhone($(this ).parents('.order-form').find(".phone"));
      if(isValidName($(this ).parents('.order-form').find(".name")) 
        && isValidPhone($(this ).parents('.order-form').find(".phone"))){
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).closest("form").serialize()
      }).done(function(){
        $(this).closest("form").find("input").val("");
        $("form").trigger("reset");
        alert('Спасибо за заявку, мы обязательно с Вам свяжемся.');
      });
    return false;
    }else{
      return false;
    }
  });


  $(function(){
    var note = $('#note'),
      ts = new Date(2017, 06, 24),
      newYear = true;
    
    if((new Date()) > ts){
      // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
      // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
      ts = (new Date()).getTime() + 3*24*55*10*1000;
      newYear = false;
    }
      
    $('#countdown').countdown({
      timestamp : ts
    });
    
  });

});
























