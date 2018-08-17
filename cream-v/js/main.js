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
            
            
            
            $(".dropdown_list b").click(function (){
     $(this).parent().find("ul").slideToggle();
        });

            
            
            

            $(".menu li").click(function () {
            $(".active").removeClass("active");
            $(this).addClass("active");
            });

            $('.phone ').mask('+38 (000) 000-00-00');

            

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
            if( isValidName($(this ).parent().find(".name")) && isValidPhone($(this ).parent().find(".phone")))
            {
                $( ".submit" ).click();
            }
            else {
                return false;
            }
        });


            $('.link-buy ').on('click' , function(){
                
                var GetNameCertificate = $(this).parents('.certificate-block').find(".certificate-name").html();
                $("#popup-buy .modal-name-certificate").html(GetNameCertificate);
                
                $("#certificate").val(GetNameCertificate);
            })


            $("#form-discount").submit(function() {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                    $("#form-discount").trigger("reset");
                });
                return false;
            });



            $("#guarantee-form").submit(function() {
                $.ajax({
                    type: "POST",
                    url: "mail2.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                    $("#guarantee-form").trigger("reset");
                });
                return false;
            });


            $("#modal-form").submit(function() {
                $.ajax({
                    type: "POST",
                    url: "mail3.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                    $("#modal-form").trigger("reset");
                    $.magnificPopup.close();
                });
                return false;
            });


            $("#modal-buy").submit(function() {
                $.ajax({
                    type: "POST",
                    url: "mail5.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                    $("#modal-buy").trigger("reset");
                    $.magnificPopup.close();
                });
                return false;
            });



            $("#consultation").submit(function() {
                $.ajax({
                    type: "POST",
                    url: "mail4.php",
                    data: $(this).serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
                    $("#consultation").trigger("reset");
                });
                return false;
            });


             


            var tileCountries = $('#counters-wrapper').html();

            $("#owl-reviews").owlCarousel({
                autoPlay : 3000,
                stopOnHover : true,
                navigation:true,
                paginationSpeed : 1000,
                goToFirstSpeed : 2000,
                singleItem:true,
                transitionStyle:"fade"
            });



            owlcounters();
            $(window).resize(function () {
                    owlcounters();
            });

            function owlcounters(){
            if (window.matchMedia("screen and (max-width: 768px)").matches) {
                $("#owl-counters").addClass('owl-carousel');
                $("#owl-counters").owlCarousel({
                    navigation:true,
                    paginationSpeed : 1000,
                    goToFirstSpeed : 2000,
                    singleItem:true,
                    transitionStyle:"fade"
                });
            }
            else{
                $('#counters-wrapper').html('');
                $('#counters-wrapper').html(tileCountries);
            }
        };
            
     });