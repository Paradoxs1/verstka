$(document).ready(function () {
          
    
    $(".clone_submit").click(function (){
        var checkForm = $(this).parent().find(".track_number_field").val();
        if(checkForm != '') 
        {
        $(this).parent().find(".track_number_field").css("border","1px #cbcbcb solid");
        $(this).parent().find(".subm").click();
        $(this).parent().parent().slideUp("fast");
        }
        else {
        $(this).parent().find(".track_number_field").css("border","1px red solid");
        }
        });
     $(".close_this_window").click(function (){
         $(this).parent().parent().slideUp();
    });
    
    $(".track_number span").click(function (){
         $(".pop_up_track_num").slideUp("fast");
         $(this).parent().find(".pop_up_track_num").slideDown("fast");
    });
    
    
    $(".profile").click(function (){
        
        if ($(".full_profile").is(":visible"))
     {
         $(".full_profile").slideUp();
         $(".profile span").removeClass("movebg");
     }
        else {
        $(".full_profile").slideDown();
        $(".profile span").addClass("movebg");
        }
    });
    
    
    $( function() {
        $( ".status-select" ).selectmenu();
    } );
    
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

    $('.counter-num').mask('000000000');

    var sum = 10;

    var num = $('.counter-num').val();
      $('.counter-right').click(function(){
        num = +num + 100;
        $('.counter-num').val(num);

        $('#popup').find('.sum').html(sum*num);
      });
      $('.counter-left').click(function(){
        if( num>100 ){
          num = +num - 100;
          $('.counter-num').val(num);
          $('#popup').find('.sum').html(sum*num);
        }
      });
      
      $('.counter-num').keyup(function(){
        var Value = $('.counter-num').val();
        num = +Value;
        $('#popup').find('.sum').html(sum*num);
      });

   });


