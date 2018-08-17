$(document).ready(function() {

	function animate_bg2() {
		$('.screen_4_bg').addClass('screen_bg_animate');
		setTimeout(animate_bg20, 70000)
	}
	animate_bg2();
	function animate_bg20() {
		$('.screen_4_bg').removeClass('screen_bg_animate');
		setTimeout(animate_bg2, 70000)
	}


});