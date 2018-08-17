$('.main aside .choose_metal').on('click', function (){
	if($(this).hasClass('show'))
		$(this).removeClass('show');
	else
		$(this).addClass('show');
})

$('.main .content .filter2 .ltr .checked').on('click', function (){
	if($(this).parent().hasClass('show'))
		$(this).parent().removeClass('show');
	else
		$(this).parent().addClass('show');
})

$('.tabN li').on('click', function(e){
	$(this).parent().children().removeClass('show');
	$(e.target).addClass('show');
	$(this).parents('.tabN').next().children('div').removeClass('show');
	$(this).parents('.tabN').next().children('#'+$(e.target).attr('id')).addClass('show');
})

$(document).on('click', function(e){
	if(!($(e.target).hasClass('ltr') || $(e.target).parents('.ltr').length)){
		$('.main .content .filter2 .ltr').removeClass('show');
	}

	if(!($(e.target).hasClass('choose_metal') || $(e.target).parents('.choose_metal').length)){
		$('.main aside .choose_metal').removeClass('show');
	}
})

$('.popup .close').on('click', function(){
	$('.popup').fadeOut(400);
	setTimeout(function(){$('body').css('overflow', 'auto');}, 300);
})

$('.to_top .top').on('click', function(){
	$('html, body').animate({'scrollTop': 0}, 400);
})

function popup(name){
	if($('.popup.added:visible').length){
		$('html, body').animate({'scrollTop': $('.popup.added').attr('data-scroll')}, 400);
		setTimeout(function(){
			$(e.target).find('.lr').not(':first').remove();
		}, 400);
	}

	$('.popup').fadeOut(400);
	$('.popup.'+name).stop().fadeIn(400);

	if(name == 'cart')
		$('body').css('overflow', 'hidden');
}

$('.popup').on('click', function(e){
	if($(e.target).hasClass('popup') || $(e.target).hasClass('in_call') || $(e.target).hasClass('in_added')){
		$('.popup').fadeOut(400);
		setTimeout(function(){$('body').css('overflow', 'auto');}, 300);

		if($(e.target).hasClass('added')){
			$('html, body').animate({'scrollTop': $('.popup.added').attr('data-scroll')}, 400);
			setTimeout(function(){
				$(e.target).find('.lr').not(':first').remove();
			}, 400);
		}

	}
})

$('.count .ctrl div').on('click', function(){
	var count = Number($(this).parents('.count').find('input').val().replace(/\D/gi, ''));

	if($(this).hasClass('add'))
		count++;
	else
		count--;

	if(count < 1) count = 1;

	$(this).parents('.count').find('input').val(count+' шт');

	var price = $(this).parents('.bulk').find('.row p');
	price.html((price.attr('data-price') * count) + ' р');
	
})
$('.count input').on('change', function(){
	var count = Number($(this).val().replace(/\D/gi, ''));

	if(count < 1) count = 1;

	$(this).val(count+' шт');

	var price = $(this).parents('.bulk').find('.row p');
	price.html((price.attr('data-price') * count) + ' р');
})
$('.count3 .ctrl div').on('click', function(){
	var count = Number($(this).parents('.count3').find('input').val().replace(/\D/gi, ''));

	if($(this).hasClass('add'))
		count++;
	else
		count--;

	if(count < 1) count = 1;

	$(this).parents('.count3').find('input').val(count+' шт');

	var price = $(this).parents('.item').find('.cost');
	price.html((price.attr('data-price') * count) + ' руб');

	var price = 0;

	$('.popup.cart .window .content .table .tbody .item').each(function(i,e){
		price = price + Number($(e).children('.cost').text().replace(/\D/gi, ''));
	})


	$('.popup.cart .window .content .res .result p').text(price + ' руб');
	
	var discount = parseInt($('.couponprice').html())
	
	if (discount > 0){
		var priced = (price-discount)
		$('#skidon').show().html('<strong>'+priced+'&nbsp;руб</strong>')
	}
	
	var id = $(this).parent().parent().parent().parent().find('.del').attr('data-id')
	$.post('/ajax/updatecart.php', {ID: id, QUANTITY: count})
	
})
$('.count3 input').on('change', function(){
	var count = Number($(this).val().replace(/\D/gi, ''));

	if(count){
		if(count < 1) count = 1;

		$(this).val(count+' шт');

		var price = $(this).parents('.item').find('.cost');
		price.html((price.attr('data-price') * count) + ' руб');

		var price = 0;

		$('.popup.cart .window .content .table .tbody .item').each(function(i,e){
			price = price + Number($(e).children('.cost').text().replace(/\D/gi, ''));
		})


		$('.popup.cart .window .content .res .result p').text(price + ' руб');
		
		var discount = parseInt($('.couponprice').html())
		
		if (discount > 0){
			var priced = (price-discount)
			$('#skidon').show().html('<strong>'+priced+'&nbsp;руб</strong>')
		}
		
		var id = $(this).parent().parent().parent().find('.del').attr('data-id')
		$.post('/ajax/updatecart.php', {ID: id, QUANTITY: count})
		
	}
})

$('.products .item .fun .one a').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.item');

	$('.popup.fast .content .lr img').attr('src', t.find('img').attr('src'));
	$('.popup.fast .content .lr .r .title').html(t.find('.title').text());
	$('.popup.fast .content .lr .r .itemid').html(t.find('.itemid').text());
	$('.popup.fast .content .lr .r .bulk .row .count input').val('1 шт');
	$('.popup.fast .content .lr .r .bulk .row p').text(t.find('.price').text()+' р').attr('data-price',t.find('.price').text());
	popup('fast');
})

$('.products .item .fun .l .cart').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.item');

	$('.popup.added').attr('data-scroll', $(window).scrollTop());
	$('.popup.added .lr img').attr('src', t.find('img').attr('src'));
	$('.popup.added .lr .r a').html(t.find('.title').text()).attr('href', t.find('.detail').attr('href'));
	//$('.popup.added .lr .r span').html('Артикул:'+t.attr('data-article'));
	$('.popup.added .lr .r p').text('Сумма:'+t.find('.price').text()+' р');

	$.post('/ajax/addcart.php', {ID: t.attr('data-article')}, function(data){
		$('.popup.cart').find('.tbody').html(data)
	})
	//$('header .top .b4 .cart').text('В корзине 2 товара');
	

	$('html, body').animate({'scrollTop': 0}, 400);

	popup('added');
})

$('.product-about .detail .bay .price button, .bay-wrap .bay .price button').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.content').children('.product-about');

	$('.popup.added').attr('data-scroll', $(window).scrollTop());
	$('.popup.added .lr img').attr('src', t.find('.gallery .big li:first').attr('data-src'));
	$('.popup.added .lr .r a').html(t.find('.detail .name').text()).attr('href', location.href);
	//$('.popup.added .lr .r span').html('Артикул:'+t.find('.detail .articul span').text());
	$('.popup.added .lr .r p').text('Сумма:'+$(this).siblings('span').text());

	$('header .top .b4 .cart').text('В корзине 2 товара');

	var count = $(this).parent().parent().find('input').val()
	
	$.post('/ajax/addcart.php', {ID: $(this).attr('data-article'), COUNT: count}, function(data){
		$('.popup.cart').find('.tbody').html(data)
	})

	$('html, body').animate({'scrollTop': 0}, 400);

	popup('added');
})

$('.del').click(function(){
	$(this).parent().remove()
	var del = $(this).attr('data-id')
	$.post('/ajax/addcart.php', {DEL: del}, function(data){
		$('.popup.cart').find('.tbody').html(data)
	})
})

$('.product-about .detail .bay2 button, .bay-wrap .bay2 button').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.content').children('.product-about');

	$('.popup.added').attr('data-scroll', $(window).scrollTop());
	$('.popup.added .lr img').attr('src', t.find('.gallery .big li:first').attr('data-src'));
	$('.popup.added .lr .r a').html(t.find('.detail .name').text()).attr('href', location.href);
	$('.popup.added .lr .r p').text('Сумма:'+$(this).siblings('p').text());
	
	$.post('/ajax/addcart.php', {ID: $(this).attr('data-article')}, function(data){$('.popup.cart').find('.tbody').html(data)})

	$('html, body').animate({'scrollTop': 0}, 400);

	popup('added');
})


$('.product-about .more .owl li .data button').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('li');

	$('.popup.added').attr('data-scroll', $(window).scrollTop());
	$('.popup.added .lr img').attr('src', t.find('img').attr('src'));
	$('.popup.added .lr .r a').html(t.find('a').text()).attr('href', t.find('a').attr('href'));
	$('.popup.added .lr .r span').html('Артикул:'+$(this).attr('data-sku'));
	$('.popup.added .lr .r p').text('Сумма:'+t.find('span').text());

	$.post('/ajax/addcart.php', {ID: $(this).attr('data-article')}, function(data){
		$('.popup.cart').find('.tbody').html(data)
	})

	$('html, body').animate({'scrollTop': 0}, 400);

	popup('added');
})

$('.special .prod .res button').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.prod').children('.item'),
		art = new Array;

	var price = $('#specprice').attr('data-price')
	
	t.each(function(){
		if($(this).index() === 0){
			$('.popup.added .lr img').attr('src', $(this).find('img').attr('src'));
			$('.popup.added .lr .r a').html($(this).find('a').text()).attr('href', $(this).find('a').attr('href'));
			$('.popup.added .lr .r span').html('');
			$('.popup.added .lr .r p').html('');
			art[art.length] = $(this).attr('data-sku');
		}else{
			$('.popup.added .lr:last').after('<div class="lr"><div class="l"><img alt=""></div><div class="r"><a href=""></a></div></div>');

			$('.popup.added .lr:last img').attr('src', $(this).find('img').attr('src'));
			$('.popup.added .lr:last .r a').html($(this).find('a').text()).attr('href', $(this).find('a').attr('href'));
			art[art.length] = $(this).attr('data-sku');
		}
	})
	$('.popup.added').attr('data-scroll', $(window).scrollTop());
	var p = $(this).parents('.prod').find('.res .price').attr('data-price');
	$('.popup.added .lr:last .r a').after('<span>&nbsp;</span><p>Сумма: '+p+'р.</p>');

	
	$.post('/ajax/addcart_complect.php', {PRICE: price, IDS: art.join()}, function(data){
		$('.popup.cart').find('.tbody').html(data)
	})


	$('html, body').animate({'scrollTop': 0}, 400);

	popup('added');
})


$('.popup.added .cart .back').on('click', function(){
	$('.popup').fadeOut(400);
	$('html, body').animate({'scrollTop': $('.popup.added').attr('data-scroll')}, 400);
})

$('header .top .b2 p span i').on('click', function(){
	popup('call');
	$('html, body').animate({'scrollTop': 0}, 400);
})

$('.popup.added .cart .go').on('click', function(){
	popup('cart');
})

$('header .top .b4 .cart').on('click', function(){
	popup('cart');
})

$('.products .item .fun .calltoprice').on('click', function(e){
	e.preventDefault();
	popup('call');
})

/****Checkout****/
$('.main form').on('submit', function(e){
	var name = $('#name').val()
	var email = $('#email').val()
	var phone = $('#phone').val()
	var city = $('#city').val()
	var address = $('#address').val()
	var err = ''
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var delivery = $('.deliv:checked').val()
	var pay = $('.paid:checked').val()
	var comment = $('#comment').val()
	var price = $('.itogprice').last().html()
	var price_delivery = $('.deliv:checked').attr('data-price');
	
	$('.cont').find('.error').removeClass('error')
	
	if (!regex.test(email)){ 
		err = true;
		$('#email').parent().addClass('error')
	}
	
	if (email.length < 1){ 
		err = true;
		$('#email').parent().addClass('error')
	}
	
	if (name.length < 2){ 
		err = true;
		$('#name').parent().addClass('error')
	}
	
	if (phone.length < 5){ 
		err = true;
		$('#phone').parent().addClass('error')
	}
	
	if (city.length < 3){ 
		err = true;
		$('#city').parent().addClass('error')
	}
	
	if (address.length < 3){ 
		err = true;
		$('#address').parent().addClass('error')
	}
	
	if(err){
		$('.errbtm').show()
	} else {
		$('.errbtm').hide()
		popup('checkout');
		$.post('/ajax/makeorder.php', {'NAME': name, 'EMAIL': email, 'PHONE': phone, 'CITY': city, 'ADDRESS': address, 'PRICE': price, 'PRICE_DELIVERY': price_delivery, 'COMMENT': comment, 'PAY': pay, 'DELIVERY': delivery}, function(data){
			$('.main form').html(data);
		})
	}
	
	e.preventDefault();
});

$('.popup.checkout .window .content .t6 .button').on('click', function(){
	popup('cart');
})

$('.popup.cart .window .content .buttons .continue').on('click', function(){
	$('.popup').fadeOut(400);
})

var slider = $(".product-about .gallery .big ul").lightSlider({
	gallery:true,
	item:1,
	thumbItem:3,
	slideMargin:0,
	currentPagerPosition:'left',
	onSliderLoad: function(plugin) {
	    plugin.lightGallery();
	}
});

$(".main .content .product-about .more .owl").mCustomScrollbar({
    axis:"y",
    mouseWheel:{ enable: true }
});

$('.counter .count2 div').on('click', function(){
	var count = Number($(this).parents('.count2').find('input').val().replace(/\D/gi, ''));

	if($(this).hasClass('add'))
		count++;
	else
		count--;

	if(count < 1) count = 1;

	$(this).parents('.count2').find('input').val(count+' шт');

	var price = $(this).parents('.bay').find('.price span');
	price.html((price.attr('data-price') * count) + ' р.'); 
})

$('.main aside .production li .more span').on('click', function(e){
	if($(e.target).hasClass('hide')){
		$(e.target).parent().parent().children('li').removeAttr('style');
		$(e.target).parent().parent().addClass('show');
		$(e.target).removeClass('hide').text('Раскрыть');
	}else{
		$(e.target).parents('.inside').children().css({'display': 'block'});
		$(e.target).addClass('hide').text('Скрыть');
	}
})

$('header .banner ul').lightSlider({
	item:1,
	easing: 'cubic-bezier(0.25, 0, 0.25, 1)'
});

$('.product-about .detail .bay .one span, .bay-wrap .bay .one span').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.content').children('.product-about');

	$('.popup.fast .content .lr img').attr('src', t.find('.gallery .big li:first').attr('data-src'));
	$('.popup.fast .content .lr .r .title').html(t.find('.detail .name').text());
	$('.popup.fast .content .lr .r .itemid').html(t.find('.itemid').text());
	$('.popup.fast .content .lr .r .bulk .row .count input').val('1 шт');
	$('.popup.fast .content .lr .r .bulk .row p').text(t.find('.detail .bay .price span').attr('data-price')+' р').attr('data-price',t.find('.detail .bay .price span').attr('data-price'));
	popup('fast');
})


$('.product-about .detail .bay2 i, .bay-wrap .bay2 i').on('click', function(e){
	e.preventDefault();
	var t = $(this).parents('.content').children('.product-about');
	$('.popup.fast .content .lr img').attr('src', t.find('.gallery .big li:first').attr('data-src'));
	$('.popup.fast .content .lr .r .title').html(t.find('.detail .name').text());
	$('.popup.fast .content .lr .r .itemid').html($(this).attr('data-id'));
	$('.popup.fast .content .lr .r .bulk .row .count input').val('1 шт');
	$('.popup.fast .content .lr .r .bulk .row p').text($(this).siblings('p').attr('data-price')+' р').attr('data-price',$(this).siblings('p').attr('data-price'));
	popup('fast');
})

$('.fast').find('form').submit(function(){
	var id = $('.fast').find('.itemid').html()
	var price = $('.fast').find('.prico').html()
	var cnt = $('.fast').find('.cnt').val()
	var name = $('.fast').find('.namo').val()
	var phone = $('.fast').find('.phona').val()
	var err
	
	if (name.length < 2) err = 'Впишите Ваше имя<br />';
	if (phone.length < 5) err += 'Впишите Ваш телефон';
	
	if (!err){
		$('.fast').find('.erra').html('');
		$('.fast').find('input[type=submit]').val('Секунду...')
		
		$.post('/ajax/fastorder.php', {'ID': id, 'PRICE': price, 'COUNT': cnt, 'NAME': name, 'PHONE': phone}, function(data){
			$('.saw').find('.lr').html(data)
			$('.fast').find('input[type=submit]').val('Оформить заказ')
			popup('saw');
		})
	} else {
		$('.fast').find('.erra').html(err)
	}
	return false
})

$('.promo button').click(function(){
	var coupon = $('.promo input').val()
	if (coupon) {
		$.post('/ajax/getdiscount.php', {COUPON: coupon}, function(data){
			$('.promo div').html(data)
		})
	}
})

$('.in_call').find('input[type=submit]').click(function(){
	var name = $('#call_name').val()
	var phone = $('#call_phone').val()
	var comment = $('#call_comment').val()
	var err = ''
	
	if (name.length < 2) err = 'Укажите имя<br />'
	if (phone.length < 2) err += 'Укажите телефон'
		
	if (err) {
		$('.callerr').html(err)
	} else {
		$('.in_call').find('.content').html('Спасибо, мы свяжемся с Вами в ближайшее время').css('font-size', '20px').css('padding', '30px')
		$.post('/ajax/sendphone.php', {NAME: name, PHONE: phone, COMMENT: comment}, function(data){})
	}
	
	return false
})

    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.to_top').fadeIn(duration);
        } else {
            jQuery('.to_top').fadeOut(duration);
        }
    });