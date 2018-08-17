 // (function() {
 //          if (window.pluso)if (typeof window.pluso.start == "function") return;
 //          if (window.ifpluso==undefined) { window.ifpluso = 1;
 //            var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
 //            s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
 //            s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
 //            var h=d[g]('body')[0];
 //            h.appendChild(s);
 //          }})();

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

         $(".toggle-block").click(function () {
            $('.toggle-mnu').toggleClass("on");
            $(".main-mnu").slideToggle();
            $('.menu').slideToggle(500);
            return false;
        });

        $('.slider-content, .slider').slick({
            dots: true,
            infinite: true,
            speed: 300
        });

        $('.phone ').mask('+7 (000) 000-00-00');

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


        if ($(window).width() > 769) {
            $(".content-top-left, .preventing .left, .test-form, .reason-block, .slider-content").animated2("fadeInLeft", "zoomOutDown");
            $(".content-top-right, .preventing .right, .symptoms>div, .problem-form, .slider").animated2("fadeInRight", "zoomOutDown");
            $(".elem2, .elem3").animated("fadeIn", "fadeOut");
            $(".warning-block, .hospital .container").animated("bounce", "fadeOut");
            $(".list li").animated("fadeInUp", "fadeOut");
        }





        
    });