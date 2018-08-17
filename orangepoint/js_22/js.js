
jQuery(document).ready(function () {

	$(".nav-tabs > li > a").click(function () {
		$(".dropdown-menu").height($(document).height() - $("header").height() * 2);
	});

	if ($('.owl-carousel-rew').length > 0) {
		$('.owl-carousel-rew').owlCarousel({
			navigation : true,
			pagination : false,
			navigationText : false,
			singleItem : true,
			autoPlay : true,
			stopOnHover : true
		});
	}

	if ($('.owl-carousel-logo').length > 0) {
		$('.owl-carousel-logo').owlCarousel({
			navigation : true,
			pagination : false,
			navigationText : false,
			autoPlay : true,
			responsiveClass : true,
			items : 5,
			itemsDesktop : [990, 4],
			itemsDesktopSmall : [750, 2],
			itemsMobile : false
		});
	}

	if ($('.owl-carousel-cat').length > 0) {
		$('.owl-carousel-cat').owlCarousel({
			navigation : true,
			pagination : false,
			navigationText : false,
			responsiveClass : true,
			items : 2,
			itemsDesktop : [990, 2],
			itemsDesktopSmall : [750, 2],
			itemsMobile : false
		});
	}

	$('.text-wrp-inner .arrow').on('click', function () {
		$(this).parent('.text-wrp-inner').toggleClass('active');
	});

	$('.nav-item-js').on('click', function () {
		var navItem = $(this);
		var boxItem = $(this).next('.box-item-js');

		if (boxItem.is(":hidden")) {
			boxItem.slideDown(300);
		} else {
			boxItem.slideUp(300);
		}
		navItem.toggleClass('active');
	});


});

$(window).load(function () {
	$('.flexslider').flexslider({
		animation : "fade",
		controlNav : false
	});




/******************NUMBER JQUERY UI PAGE CATALOG-PRODUCT ********************/	
	 $( function() {
	    var spinner = $( "#spinner" ).spinner({
	    	min: 1
	    });
	    var spinner2 = $( "#spinner2" ).spinner({
	    	min: 1
	    });
	    var spinner3 = $( "#spinner3" ).spinner({
	    	min: 1
	    });
	    var spinner4 = $( "#spinner4" ).spinner({
	    	min: 1
	    });
	 } );

/*********************NUMBER JQUERY UI PAGE CATALOG-PRODUCT*********************/	

/******************TABS JQUERY UI PAGE CATALOG-PRODUCT ********************/	
$( function() {
    $( "#goodtabs" ).tabs();
  } );

/******************TABS JQUERY UI PAGE CATALOG-PRODUCT ********************/	
/******************SELECT JQUERY UI PAGE ORDER ********************/
$( function() {
    $( "#adress" ).selectmenu();
} );
/******************SELECT JQUERY UI PAGE ORDER ********************/
/*********************ACORDEON*********************/
	$(".accordeon .sub-menu-accordeon").hide().prev().click(function() {
		$(this).parents(".accordeon").find(".sub-menu-accordeon").not(this).slideUp().prev().removeClass("accordeon-open");
		$(this).next().not(":visible").slideDown().prev().addClass("accordeon-open");
	});

/*********************ACORDEON*****************************/
/*********************GOODS-INFO**************************/
$(".sort-r-block a").click(function(){
	$(this).parents('.sort-r').find('a').removeClass("goods-active");
	$(this).addClass("goods-active");
	return false;
});
/*********************GOODS-INFO**********************/
/**********************SORT IN CATALOG************************/
$(".main-sort a").click(function(){
	$(".main-sort a").removeClass("sort-active");
	$(this).addClass("sort-active");
	if($(this).hasClass("sort-active")){
		$(this).toggleClass("sort-active2");
	}
	return false;
});


/**********************SORT IN CATALOG************************/

/**************flexslider PAGE CATALOG-PRODUCT********************/

	$('.flexslider-product').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });

/****************flexslider PAGE CATALOG-PRODUCT*******************/

/********************BASKET***********************/
    
     $('.btn-basket-active').click(function(){
         var cat_name = $(this).parent().parent().find(".catalog-title").html();
         var cat_price = $(this).parent().parent().find(".catalog-price").html();
         var img_link = $(this).parent().parent().find("a img").attr('src');
         
         $(".choosen_item_img img").attr('src',img_link);
         $(".choosen_item_name").html(cat_name);
         $(".choosen_item_price").html(cat_price);
         
	});
    
    $('.btn-basket-single').click(function(){
         var cat_name = $(this).parent().parent().find(".goods-title").html();
         var cat_price = $(this).parent().parent().find(".goods-price").html();
         var img_link = $(".flex-active").first().attr('src');
         

         $(".choosen_item_img img").attr('src',img_link);
         $(".choosen_item_name").html(cat_name);
         $(".choosen_item_price").html(cat_price);
         
	});
    
	$('.btn-basket-active').click(function(){
		$('.inline-popups a')[0].click();
		return false;
	});

	$('.basket-continue').click(function(){
		$('.mfp-close').click();
		return false;
	});
    
   
    
    
    
    
    
    

/********************BASKET***********************/
    
    $('#pickup').click(function(){
		$(this).parent().parent().find(".textarea_shipping").hide();
        $(this).parent().parent().find("#adress-button").show();
	});
    
    $('#shipping').click(function(){
		$(this).parent().parent().find("#adress-button").hide();
        $(this).parent().parent().find(".textarea_shipping").show();
	});
    

/********************CHECKBOX PAGE CATALOG***********************/


	$('.shop-block :checkbox').click(function(){
		var variable = $(this).parents('.shop-block').find('input:checked');
		var col = 0;
		variable.each(function( index ) {
			col++;
		});
		$(this).parents('.shop-filter-parent').find('.col').html("(" + col + ")");
		if(col == 0){
			$(this).parents('.shop-filter-parent').find('.col').html("");
		}
	});

/********************CHECKBOX PAGE CATALOG***********************/

/****************ORDER INPUT-FILE*******************/
$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".file-button" ),
        lbl = wrapper.find( "mark" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});

/****************ORDER INPUT-FILE*******************/
	
});

