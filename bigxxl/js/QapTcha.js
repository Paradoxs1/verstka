/************************************************************************
*************************************************************************
@Name :       	QapTcha - jQuery Plugin
@Revison :    	4.2
@Date : 		06/09/2012  - dd/mm/YYYY
@Author:     	 ALPIXEL Agency - (www.myjqueryplugins.com - www.alpixel.fr)
@License :		 Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php

**************************************************************************
*************************************************************************/
jQuery.QapTcha = {
	build : function(options)
	{
        var defaults = {
			txtLock : 'Перетащите ползунок вправо',
			txtUnlock : 'Спасибо, можете отправлять',
			disabledSubmit : true,
			autoRevert : true,
			PHPfile : 'php/Qaptcha.jquery.php',
			autoSubmit : false
        };

		if(this.length>0)
		return jQuery(this).each(function(i) {
			/** Vars **/
			var
				opts = $.extend(defaults, options),
				$this = $(this),
				form = $('form').has($this),
				Clr = jQuery('<div>',{'class':'clr'}),
				bgSlider = jQuery('<div>',{'class':'bgSlider'}),
				Slider = jQuery('<div>',{'class':'Slider'}),
				TxtStatus = jQuery('<div>',{'class':' TxtStatus dropError',text:opts.txtLock}),
				inputQapTcha = jQuery('<input>',{name:generatePass(32),value:generatePass(9),type:'hidden'});

			/** Disabled submit button **/
			//if(opts.disabledSubmit) form.find('input[type=\'submit\']').attr('disabled','disabled');

			/** Construct DOM **/
			bgSlider.appendTo($this);
			Clr.insertAfter(bgSlider);
			TxtStatus.insertAfter(Clr);
			inputQapTcha.appendTo($this);
			Slider.appendTo(bgSlider);
			$this.show();

			Slider.draggable({
				revert: function(){
					if(opts.autoRevert)
					{
						if(parseInt(Slider.css("left")) > (bgSlider.width()-Slider.width()-10)) return false;
						else return true;
					}
				},
				containment: bgSlider,
				axis:'x',
				stop: function(event,ui){
					if(ui.position.left > (bgSlider.width()-Slider.width()-10))
					{
						// set the SESSION iQaptcha in PHP file
						$.ajax({
							type: "POST",
							url: opts.PHPfile,
							data: {action : 'qaptcha',qaptcha_key : inputQapTcha.attr('name')},
							dataType: "json",
							success: function(result) {
								if(!result.error)
								{
									Slider.draggable('disable').css('cursor','default');
									inputQapTcha.val('');
									if($(".non_active_button").hasClass("review"))
									{
										$(".non_active_button").addClass("send_otzuv");
										$(".non_active_button").removeClass("blocked");
									}
									if($(".non_active_button").hasClass("registration"))
									{
										$(".non_active_button").attr('id', 'register_button');
										$(".non_active_button").removeClass("blocked");
									}
									TxtStatus.text(opts.txtUnlock).addClass('dropSuccess').removeClass('dropError');
								}
							}
						});
					}
				}
			});

			function generatePass(nb) {
		        var chars = 'abdefhiknrstyzABDEFGHKNQRSTYZ23456789';
		        var pass = '';
		        for(i=0;i<nb;i++){
		            var wpos = Math.round(Math.random()*chars.length);
		            pass += chars.substring(wpos,wpos+1);
		        }
		        return pass;
		    }

		});
	}
}; jQuery.fn.QapTcha = jQuery.QapTcha.build;

$(document).ready(function(){
    // More complex call
    $('.QapTcha').QapTcha({
      autoSubmit : false,
      autoRevert : false,
      PHPfile : location.protocol + "//" + location.host+"/registration/kaptcha"
    });
  });