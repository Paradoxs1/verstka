
/******************product gallery*******************/
		
		$(document).ready(function() {
			
			$(document).on("click",".send_otzuv",function(){
			$('#info_message').removeClass("error_pop_up");
			valid = true;
					$('#review_form .req').each(function(){
						if($(this).val()=='') { 
							$(this).css('border','1px solid red');
							valid = false;
						} else {
							$(this).css('border','1px solid #c8c8c8');
						}
					})
			//var captcha = $('#captcha_input').val();
			var captcha = $('#QapTcha2').val();
			var pass = $(".QapTcha").find('input').val();
			var name = $(".QapTcha").find('input').attr("name");
				$.ajax({
					type: "POST",
					async:false,
					url: location.protocol + "//" + location.host+"/reviews/captcha",
					data: {captcha:captcha, name:name, pass:pass},
					success: function(result) {
						if(result!='success') {
							//$('#captcha_input').css('border','1px solid red');
							$(".captcha_error").text("Вы не прошли проверку капчи.");
							valid = false;
						} else {
							$(".captcha_error").text("");
							$('#captcha_input').css('border','1px solid #c8c8c8');
						}
					}
				})
			if(valid) {
			data = $('#review_form').serialize();
			$.ajax({
			type: "POST",
			url: location.protocol + "//" + location.host+"/reviews/send_review",
			data: data,
			success: function(result) {
				$('#info_message_text').html('Отзыв отправлен на модерацию!');
				$('#info_message').fadeIn();
				setTimeout('location.reload();',2000);
			}
		})
		}
		return false;
			})

});