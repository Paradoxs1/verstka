var target = $('.elem');
var checked = 0;
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
        if( checked != 1){
            function animateCircle(duration){
                 
                 Circles.create({
                    id:         'circles-2',
                    value:      50,
                    radius:     62,
                    width:      7,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });
    

                };

            if ($(window).width() > 769) {
                  animateCircle(1500);
            }
            else{
                animateCircle(0);
            }

            checked = 1;
        }

    }

});


var target2 = $('.elem2');
var checked2 = 0;
var targetPos2 = target2.offset().top;
var winHeight2 = $(window).height();
var scrollToElem2 = targetPos2 - winHeight2;
$(window).scroll(function(){
  var winScrollTop2 = $(this).scrollTop();
  if(winScrollTop2 > scrollToElem2){
        if( checked2 != 1){
            function animateCircle(duration){

                Circles.create({
                    id:         'circles-4',
                    value:      70,
                    radius:     48,
                    width:      5,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });

                 Circles.create({
                    id:         'circles-5',
                    value:      56,
                    radius:     48,
                    width:      5,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });

                 Circles.create({
                    id:         'circles-6',
                    value:      50,
                    radius:     48,
                    width:      5,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });
                 

                };

            if ($(window).width() > 769) {
                  animateCircle(1500);
            }
            else{
                animateCircle(0);
            }

            checked2 = 1;
        }

    }

});


var target3 = $('.elem3');
var checked3 = 0;
var targetPos3 = target3.offset().top;
var winHeight3 = $(window).height();
var scrollToElem3 = targetPos3 - winHeight3;
$(window).scroll(function(){
  var winScrollTop3 = $(this).scrollTop();
  if(winScrollTop3 > scrollToElem3){
        if( checked3 != 1){
            function animateCircle(duration){
                

                 Circles.create({
                    id:         'circles-7',
                    value:      53,
                    radius:     48,
                    width:      5,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });

                 Circles.create({
                    id:         'circles-8',
                    value:      51,
                    radius:     48,
                    width:      5,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });

                 Circles.create({
                    id:         'circles-9',
                    value:      46,
                    radius:     48,
                    width:      5,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });

                 

                };

            if ($(window).width() > 769) {
                  animateCircle(1500);
            }
            else{
                animateCircle(0);
            }

            checked3 = 1;
        }

    }

});


var target4 = $('.elem4');
var checked4 = 0;
var targetPos4 = target4.offset().top;
var winHeight4 = $(window).height();
var scrollToElem4 = targetPos4 - winHeight4;
$(window).scroll(function(){
  var winScrollTop4 = $(this).scrollTop();
  if(winScrollTop4 > scrollToElem4){
        if( checked4 != 1){
            function animateCircle(duration){

                 Circles.create({
                    id:         'circles-3',
                    value:      67,
                    radius:     75,
                    width:      10,
                    duration:   duration,
                    colors:     ['#4b4b4b', '#2ab59c']
                    });
                            

                };

            if ($(window).width() > 769) {
                  animateCircle(1500);
            }
            else{
                animateCircle(0);
            }

            checked4 = 1;
        }

    }

});








function animateCircle(duration){
                Circles.create({
                        id:         'circles-1',
                        value:      87,
                        radius:     78,
                        width:      22,
                        duration:   duration,
                        colors:     ['#fff', '#31e2a7']
                    });

};

if ($(window).width() > 769) {
                  animateCircle(1500);
            }
            else{
                animateCircle(0);
            }