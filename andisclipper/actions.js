jQuery(function ($) {

    var ts = $('.top-slider');
    if (ts.length != 0) {
        $(".top-slider").owlCarousel({
            navigation: false,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true
        });
    }

    correctSingleContent();

    var gp = $('.game-pictures');
    if (gp.length !== 0 && typeof fancybox == 'function') {
        gp.find('a').fancybox({
            padding: 0
        })
    }

    var mn = $('.mobile-nav');
    if (mn.length !== 0) {
        mn.find('.mobile-nav_btn').on('click', function () {
            mn.find('.mobile-nav_menu').toggle();
        })
    }

    //product-slider
    var itemSlider = function () {
        sync1 = $("#sync1");
        sync2 = $("#sync2");

        sync1.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });

        sync2.owlCarousel({
            items: 3,
			itemsDesktopSmall: [480, 2],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            $("#sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
            /* if ($("#sync2").data("owlCarousel") !== undefined) {
             center(current)
             }*/
        }

        $("#sync2").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).data("owlItem");
            console.log(number);
            sync1.trigger("owl.goTo", number);
        });

    }

    var itemSlider2 = function () {
        sync3 = $("#sync3");
        sync4 = $("#sync4");

        sync3.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });

        sync4.owlCarousel({
            items: 3,
			itemsDesktopSmall: [480, 2],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el) {
            var current = this.currentItem;
            $("#sync4")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced");
            /* if ($("#sync2").data("owlCarousel") !== undefined) {
             center(current)
             }*/
        }

        $("#sync4").on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).data("owlItem");
            console.log(number);
            sync3.trigger("owl.goTo", number);
        });

    }

    itemSlider();

    $('body').on('click', '.ajax-btn', function (e) {
        e.preventDefault();

        var post_id = $(this).data('id');

        var data = {
            action: 'showItem',
            id: post_id
        };

        //$('#ajax-content').html('<div class="content-box"></div>');

        // с версии 2.8 'ajaxurl' всегда определен в админке
        jQuery.get(showItem.url, data, function (response) {

            $('.content-box').html(response);
            $('.contact-form:eq(0)').appendTo('.right.clearfix');

            $.fancybox({
                'href': '#ajax-content',
                helpers: {
                    overlay: {
                        locked: false
                    }
                },
                'maxWidth': 742,
                'beforeClose': function () {
                    $('.contact-form:eq(0)').appendTo('#ajax-content');
                    $('.wpcf7-response-output').css('display', 'none');
                }
            });
            itemSlider2();
        });

        return false;
    });

    $(document).on('wpcf7:submit', function (e) {
        console.log(e);

        setTimeout(function () {
            $.fancybox.update();
        }, 500);

    });

    $('body').on('click', '.buy-btn2, .btn-blades', function (e) {
        e.preventDefault();

        var post_id = $(this).data('id');

        var data = {
            action: 'showBlades',
            id: post_id
        };

        // с версии 2.8 'ajaxurl' всегда определен в админке
        jQuery.get(showItem.url, data, function (response) {

            $('.content-box').html(response);
            $('.contact-form:eq(0)').appendTo('.right.clearfix');

            $.fancybox({
                'href': '#ajax-content',
                helpers: {
                    overlay: {
                        locked: false
                    }
                },
                'maxWidth': 742,
                'beforeClose': function () {
                    $('.contact-form:eq(0)').appendTo('#ajax-content');
                    $('.wpcf7-response-output').css('display', 'none');
                }
            });
            itemSlider2();
        });

        return false;
    });

    $('.new-btn').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        },
        'maxWidth': 742
    });

    $('.wp-pagenavi').on('click', ' > *', function (e) {
        e.preventDefault();

        var _this = $(this);
        var id = $(this).text();
        id = parseInt(id);

        var post_type = $(this).parent().attr('class').split(/\s+/)[0];

        $.ajax({
            'url': ajaxPagenav.url,
            'data': {
                'action': 'ajaxPagenav',
                'id': id,
                'post_type': post_type
            },
            'success': function (xhr) {
                $('#' + post_type).html(xhr);
                var i = _this.index();
                $('.tabs-content.active').find('.wp-pagenavi').each(function (index) {

                    $(this).find('span').replaceWith(function(index, oldHTML){
                        return $("<a href='#' class='page larger'>").html(oldHTML);
                    });

                    $(this).find('*:eq('+i+')').replaceWith(function(index, oldHTML){
                        return $("<span class='current clicked'>").html(oldHTML);
                    });
                });
            }
        })
    });


    $('ul.tabs-link').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('input[type="tel"]').attr('pattern', '[\x1F-\xBF]{5,13}');

    $('.howBuy .order').click(function () {
        $('.popup.order').css('display', 'block');
    });
    $(".call").submit(function () {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "contact-call.php",
            data: str,
            success: function (msg) {
                if (msg == 'ok') {
                    $(".popup.call").css('display', 'none');
                    $(".call-answer").css('display', 'block');
                }
                else {
                    $(".popup.call").css('display', 'none');
                    $(".call-answer").css('display', 'block');
                }
            }
        });
        return false;
    });
    $("form.buy").submit(function () {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "contact-call.php",
            data: str,
            success: function (msg) {
                if (msg == 'ok') {
                    $('.max-item').css('display', 'none');
                    $('.popup.thanks').css('display', 'block');
                }
                else {
                    $('.max-item').css('display', 'none');
                    $('.popup.thanks').css('display', 'block');
                }
            }
        });
        return false;
    });
    $("form.order").submit(function () {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "contact-order.php",
            data: str,
            success: function (msg) {
                if (msg == 'ok') {
                    $('.popup.order').css('display', 'none');
                    $('.popup.thanks').css('display', 'block');
                    $('.max-item').css('display', 'none');
                }
                else {
                    $('.popup.order').css('display', 'none');
                    $('.popup.thanks').css('display', 'block');
                    $('.max-item').css('display', 'none');
                }
            }
        });
        return false;
    });
    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    $(document).on('click', '.nav-links a', function (event) {
        event.preventDefault();
        alert('Clicked Link');
    })
    $('h2').addClass('wow pulse');
    $('h1').addClass('wow pulse');
    $('.expert').addClass('wow flipInY');
    $('.step').addClass('wow flipInX');
    $('header .left').addClass('wow slideInLeft');
    $('.choose-human').addClass('wow slideInRight');
    $('.choose-ultra').addClass('wow slideInRight');
    $('.choose-dog').addClass('wow slideInRight');
    $('.choose-ceramic').addClass('wow slideInRight');
    $('.choose-blade').addClass('wow slideInRight');
    $('.choose-ceramic').addClass('wow slideInRight');
    $('.choose-humans').addClass('wow slideInRight');
    $('.choose-ceramic').addClass('wow slideInRight');
    $('.order-call').addClass('wow slideInRight');
    $('.razor').addClass('wow slideInLeft');
    new WOW().init();

});

jQuery(window).resize(function () {
    correctSingleContent();
})

correctSingleContent = function () {
    if (jQuery('.single-content').length !== 0) {
        jQuery('.single-content').css(
            'top', jQuery('#game-container').height()
        );
    }
}






