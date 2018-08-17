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
function isValidPhone(phone) {
	if (!(phone == '')) {
		if (!(/\+?\d+\ ?\(?\d+\)?\ ?\d+\ ?\d+\ ?\d+/.test(phone.val()))) {
			phone.addClass('red-border');
			return false;
		}
		phone.removeClass('red-border');
		return true;
	}
	phone = '0000000000';
	return true;
}


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['', '«вклад сохранить и приумножить', '«вклад столичный»', '«вклад рантье»'],
          ['',  0,   0,   0],
          ['',  400,   300,   20],
          ['',  500,    400,  300],
          ['',  600,   500,   500],
          ['',  800,   600,   550],
          ['',  1000,   900,   600],
          ['',  1100,   1050,   900]
        ]);

        var options = {
          title: '',
          colors: ['#ebf6ff', '#b4deff', '#9ad2ff'],
          vAxis: {minValue: 0, textStyle:{color: 'transparent'}},
          series: {
          0: { areaOpacity: 0.7},
          1: { areaOpacity: 0.7},
          2: { areaOpacity: 0.7}
          },
          legend: {position: 'none'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('diagram-content'));
        chart.draw(data, options);
        
        var chart2 = new google.visualization.AreaChart(document.getElementById('diagram-content2'));
        chart2.draw(data, options);
        
        var chart3 = new google.visualization.AreaChart(document.getElementById('diagram-content3'));
        chart3.draw(data, options);
      }




$(document).ready(function(){
    $( "#datepicker" ).datepicker();
    $('.phone ').mask('+7 (000) 000-00-00');
    $('#datepicker ').mask('00/00/0000');
  
    $( function() {
        $( ".slider-range-invest" ).slider({
          range: "min",
          value: 400000,
          min: 10000,
          max: 800000,
          step: 10000,
          slide: function( event, ui ) {
            $( ".amount" ).html( ui.value + " Р");
          }
        });
        
        $( ".slider-range-year" ).slider({
          range: "min",
          value: 3,
          min: 1,
          max: 3,
          step: 1,
          slide: function( event, ui ) {
            $( ".amount2" ).html( ui.value + " года");
          }
        });
      
        $( ".slider-range-month" ).slider({
          range: "min",
          value: 20000,
          min: 1000,
          max: 40000,
          step: 1000,
          slide: function( event, ui ) {
            $( ".amount3" ).html( ui.value + " Р");
          }
        });
        
        $( ".amount" ).html( $( ".slider-range-invest" ).slider( "value" ) + " Р" );
        $( ".amount2" ).html( $( ".slider-range-year" ).slider( "value" ) + " года" );
        $( ".amount3" ).html( $( ".slider-range-month" ).slider( "value" ) + " Р" );
  } );  
  
    $(".banner-inner").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
    setTimeout(function() {
      $('.tab_item:not(:first-child)').fadeOut('fast');
    }, 3000);
  
    $(".tabs .tab").click(function() {
	   $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	   $(".tab_item").hide().eq($(this).index()).fadeIn();
    });
    
  
    $('.inline-popups').magnificPopup({
	  delegate: 'a',
	  removalDelay: 500,
	  fixedContentPos: true,
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true
	});
  
    $("#modal-form .submit" ).click(function() {
          isValidName($(this ).parent().find(".name"));
          isValidPhone($(this ).parent().find(".phone"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidPhone($(this ).parent().find(".phone")))
          {
          $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          $("form").trigger("reset");
          $('.mfp-close').click();
          $('.alert-wrapper').show();
        });
        return false;
          }
          else {
              return false;
          }
      });
      
      $('.alert-close').click(function(){
		$('.alert-wrapper').fadeOut("1500");
	  });
      
      $('.btn-form').click(function(){
          isValidName($(this ).parent().find(".name"));
          isValidPhone($(this ).parent().find(".phone"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidPhone($(this ).parent().find(".phone")))
          {
          var date = $('#datepicker').val();
          $('#data-visit').val(date);
          $.ajax({
          type: "POST",
          url: "mail2.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          $("form").trigger("reset");
        });
        return false;
          }
          else {
              return false;
          }
        
      });
  
      $('#diagram-form .submit').click(function(){
          isValidName($(this ).parent().find(".name"));
          isValidPhone($(this ).parent().find(".phone"));
          if( isValidName($(this ).parent().find(".name")) 
              && isValidPhone($(this ).parent().find(".phone")))
          {
          $.ajax({
          type: "POST",
          url: "mail3.php",
          data: $(this).parent("form").serialize()
        }).done(function() {
          $(this).parent("form").find("input").val("");
          alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
          $("form").trigger("reset");
          $('.mfp-close').click();
        });
        return false;
          }
          else {
              return false;
          }
        
          });
});

























