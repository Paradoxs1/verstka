 $(document).ready(function(){
 	var src,
 		max,
 		max = $('.counter-num').length,
 		doc,
 		sumMaxMega;

 	function image(element){
 		src = element.parents('.counter-block').find('.counter-num').attr('data-src');
	    return element.parents('.clearfix').find('.sex-man img').attr('src', src); 	
	};

 	$('.counter-right').click(function(){
 		var element = $(this);
 		var count = $(this).prev().val();

 		var sum = 0;
		for(var i = 0; i < max; i++){
			doc = $('.counter-num')[i]['value'];
			sum = Number(sum) + Number(doc);
		};

		sumMaxMega = Math.abs(40 - sum-1);
		
		if(count < 10 && sum < 40){
	    	count++;
	    	$('.count').html(sumMaxMega);
	    	$(this).prev().val(count);
	    }

	    image(element);
	});

	$('.counter-left').click(function(){
		var element = $(this);
		var count = $(this).next().val();

		var sum = 0;	
		for (var i = 0; i < max; i++) {
			doc = $('.counter-num')[i]['value'];
			sum = Number(sum) + Number(doc)
		};

		sumMaxMega = Math.abs(40 - sum+1);

		if(count > 1 && sum <= 40){
	    	count--;
	    	$('.count').text(sumMaxMega);
	    	$(this).next().val(count);
	    }
	    
	    image(element);
	});

	$('.counter-num').keyup(function(){
	
		var sum = 0;
		for (var i = 0; i < max; i++) { 
			doc = $('.counter-num')[i]['value']; 
			sum = Number(sum) + Number(doc);
		};

		sumMaxMega = 40 - sum;

		if(sumMaxMega < 0) {
			$(this).val(1); 
		}
		
		var count = $(this).val();
		if(count > 10){ 
			count = 10; 
			$(this).val(count); 
		} 
		if(count == "0"){ 
			count = 1; 
			$(this).val(count); 
		} 
	});

	$('.reset').click(function(e){
		e.preventDefault();
		$(this).parents('.fallout-form').find('.counter-num').val(1);

		var sum = 0;
		for (var i = 0; i < max; i++) {
			doc = $('.counter-num')[i]['value'];
			sum = Number(sum) + Number(doc)
		};		
		sumMaxMega = Math.abs(40 - sum);

		$(this).parents('.fallout-form').find('.count').text(sumMaxMega);
	});


	$('.hero li').hover(
		function(){
			src = $(this).attr('data-src');
			$(this).parents('.clearfix').find('.sex-man img').attr('src', src);
		},function(){
			
	});	

	$('.counter-num').mask('99').each(
		function(){
			$(this).val('5');
		}).focus(function(){
			var element = $(this);
			image(element);
	});

});