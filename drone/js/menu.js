$(document).ready(function(){
    $(".menu li, .fot-menu li, .cart-gallery li, .pagination-list li").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

});