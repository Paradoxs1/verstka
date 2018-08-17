 $(document).ready(function(){
    if ($(window).width() > 992) {
        $('.slider-content').slick({
          infinite: true,
          slidesToShow: 4
        });
    }else{
        $('.slider-content').slick({
          infinite: true,
          slidesToShow: 3
        });
    }

    $('.btn-open').click(function(){
		$(this).parent().find('.hide-block').animate({
			height: 'toggle'
		}, "slow");
    	return false;
    });


    $(".toggle-block").click(function () {
        $('.toggle-mnu').toggleClass("on");
        $(".main-mnu").slideToggle();
        $('#menu').slideToggle(500);
        return false;
    });


});