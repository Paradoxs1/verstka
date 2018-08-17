// Validator form
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
        function isValidPass(pass){
            if(!(pass == '')) {
                if (!(/.{5,}/.test(pass.val()))) {
                    pass.addClass('red-border');
                    return false;
                }
                pass.removeClass('red-border');
                return true;
            }
            pass = '1111111111';
            return true;
        }

(function(s) {
        var n;
        s(".tabs").on("click", "li:not(.active)", function() {
            n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
        }), s.fn.dmtabs = function(n) {
            s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
                s(this).addClass("open_tab")
            }).siblings(".box").hide(1, function() {
                s(this).removeClass("open_tab")
            })
        }
    })(jQuery);

   

$(document).ready(function(){
    // bg video
    if ($(window).width() > 940) {
        var myPlayer;
        jQuery(function () {
            var isIframe = function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};
            myPlayer = jQuery("#video").YTPlayer();
        });
    }
    else{
        $('.head').addClass('normal');
        $('header #wrapper, header #video').fadeOut(300);
    }

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


    $( ".submit" ).click(function() {
            isValidName($('#name'));
            isValidPhone($('#phone'));
            isValidMail($('#mail'));
            isValidPass($('#pass'));
            if( isValidName($('#name')) && isValidPhone($('#phone')) && isValidMail($('#mail')) && isValidPass($('#pass')))
            {
                $( ".submit" ).click();
            }
            else {
                return false;
            }
        });

});

