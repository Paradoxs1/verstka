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
function isValidText(comment) {
	if (!(comment == '')) {
		if (!(/.{20,400}/.test(comment.val()))) {
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
  
    $(".toggle-block").click(function () {
        $('.toggle-mnu').toggleClass("on");
        $(".main-mnu").slideToggle();
        $('#menu').slideToggle(500);
        return false;
    });
    
    $('.inline-popups').magnificPopup({
	  delegate: 'a',
	  removalDelay: 500,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});
  
       
    
  
      $('.counter-num').mask('0000');
      
      var num = $('.counter-num').val();
        $('.counter-right').click(function(){
          num++;
          $('.counter-num').val(num);
        });
        $('.counter-left').click(function(){
          if( num>1 ){
            num--;
            $('.counter-num').val(num);
          }
        });

        $('.counter-num').keyup(function(){
          var Value = $('.counter-num').val();
          num = Value;
        });
  
    $("#slider-range").slider({
        min: 0,
        max: 2000,
        step: 10,
        values: [250,1720],
        range: true,
        stop: function(event, ui) {
            $("input#min-range").val($("#slider-range").slider("values",0));
            $("input#max-range").val($("#slider-range").slider("values",1));

        },
        slide: function(event, ui){
            $("input#min-range").val($("#slider-range").slider("values",0));
            $("input#max-range").val($("#slider-range").slider("values",1));
        }
    });

    $("input#min-range").change(function(){

        var value1=$("input#min-range").val();
        var value2=$("input#max-range").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#min-range").val(value1);
        }
        $("#slider-range").slider("values",0,value1);	
    });

    $("input#max-range").change(function(){

        var value1=$("input#min-range").val();
        var value2=$("input#max-range").val();

        if (value2 > 2000) { value2 = 2000; jQuery("input#max-range").val(2000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#max-range").val(value2);
        }
        $("#slider-range").slider("values",1,value2);
    });
  
  
  $("#slider-range2").slider({
        min: 0,
        max: 700,
        step: 5,
        values: [65,600],
        range: true,
        stop: function(event, ui) {
            $("input#min-range2").val($("#slider-range2").slider("values",0));
            $("input#max-range2").val($("#slider-range2").slider("values",1));

        },
        slide: function(event, ui){
            $("input#min-range2").val($("#slider-range2").slider("values",0));
            $("input#max-range2").val($("#slider-range2").slider("values",1));
        }
    });

    $("input#min-range2").change(function(){

        var value1=$("input#min-range2").val();
        var value2=$("input#max-range2").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#min-range2").val(value1);
        }
        $("#slider-range2").slider("values",0,value1);	
    });

    $("input#max-range2").change(function(){

        var value1=$("input#min-range2").val();
        var value2=$("input#max-range2").val();

        if (value2 > 700) { value2 = 700; jQuery("input#max-range2").val(700)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#max-range2").val(value2);
        }
        $("#slider-range2").slider("values",1,value2);
    });
    
    $("#slider-range3").slider({
        min: 0.0,
        max: 60.0,
        step: 1.1,
        values: [10.0,50.0],
        range: true,
        stop: function(event, ui) {
            $("input#min-range3").val($("#slider-range3").slider("values",0));
            $("input#max-range3").val($("#slider-range3").slider("values",1));

        },
        slide: function(event, ui){
            $("input#min-range3").val($("#slider-range3").slider("values",0));
            $("input#max-range3").val($("#slider-range3").slider("values",1));
        }
    });

    $("input#min-range3").change(function(){

        var value1=$("input#min-range3").val();
        var value2=$("input#max-range3").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#min-range3").val(value1);
        }
        $("#slider-range3").slider("values",0,value1);	
    });

    $("input#max-range3").change(function(){

        var value1=$("input#min-range3").val();
        var value2=$("input#max-range3").val();

        if (value2 > 60.0) { value2 = 60.0; jQuery("input#max-range3").val(60.0)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#max-range3").val(value2);
        }
        $("#slider-range3").slider("values",1,value2);
    });
    
    
    $(".accordeon ul").hide().prev().click(function() {
        $(this).parent().find("ul").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
    
    $( "#sort" ).selectmenu();
    $( "#number" ).selectmenu();
    
    $('.news-slider').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    
     $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
          $('.button-top').fadeIn();   
      } else {
          $('.button-top').fadeOut();
      }
    });
    $('.button-top').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
  
    $('.catalog-block').find('.catalog-block-title span').click(function(){
        $(this).toggleClass('active').parents('.catalog-block').find('.hide-block').slideToggle(500);
    });
    $('.arrow').click(function(){
        $(this).toggleClass('active').parent().next('.hide-block').slideToggle(500);
    });
  
    $('.double-arrow span').click(function(){
      $(this).toggleClass('active').parent().parent().find('.label-hide').slideToggle(500);
    });
    
    $('.reset').click(function(){
        event.preventDefault();
        $(this).parents('form.hide-block').trigger("reset")
          .find('input:checkbox').removeAttr("checked");
    });
  
    $('.btn-aside span').click(function(){
        $(this).toggleClass('active').parent().next().slideToggle(800);
    });
  
      $('.slider-big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          fade: true,
          asNavFor: '.slider-small'
        });
        $('.slider-small').slick({
          slidesToShow: 4,
          asNavFor: '.slider-big',
          dots: false,
          arrows: false,
          focusOnSelect: true
    });
  
    $('.product-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });
  
  
    $(".tabs-block .tab").click(function() {
	$(".tabs-block .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");    
  
    $('.document-tab').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
  
    $("#popup .submit" ).click(function() {
        isValidName($(this ).parent().find(".name"));
        isValidMail($(this ).parent().find(".mail"));
        isValidText($(this ).parent().find(".comment"));
        if( isValidName($(this ).parent().find(".name")) 
            && isValidMail($(this ).parent().find(".mail")) && isValidText($(this ).parent().find(".comment")))
        {
            $( ".submit" ).click();
        }
        else {
            return false;
        }
    });
    
//    $('.detail-thumb').click(function(){
//        
//    });
      
  
    $('.slider').bxSlider({
        pagerType: 'short'
    });

    $('.g-slider').bxSlider({
        pagerCustom: '#dpager',
        controls: false
    });
    $('#dpager').bxSlider({
        slideWidth: 85,
        minSlides: 4,
        maxSlides: 4,
        slideMargin: 5,
        pager: false
    });

    $('.fancy').fancybox({
        padding: 20
    });


    $(".slider-range").each(function(){
        var min = parseInt($(this).data('min')),
            max = parseInt($(this).data('max')),
            val = parseInt($(this).data('val')),
            label_id = $(this).data('label-id');
            label_name = $(this).data('label-name');

        $(this).slider({
            range: "min",
            min: min,
            max: max,
            value: val,
            slide: function(event, ui) {
                $('#' + label_id).val(ui.value);
            },
            create: function(event, ui) {
                var i = $(this),
                    v = i.slider('value'),
                    p = i.find('.ui-slider-handle');
                p.append('<label class="amount-lable" for="' + label_id + '"><input type="text" name="' + label_name + '" value="' + v + '" id="' + label_id + '" readonly="readonly" /></label>');
            }
        });
    });
});
























