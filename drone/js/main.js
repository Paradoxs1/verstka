$(document).ready(function(){
    $(".menu li, .fot-menu li").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(".one").animated("fadeInLeft", "zoomOutDown");
    $(".income").animated("fadeInRight", "zoomOutDown");

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

});