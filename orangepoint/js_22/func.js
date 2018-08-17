

$(document).ready(function(){   
    $('.slider').bxSlider({
        pagerType: 'short'
    });

    $('.g-slider').bxSlider({
        pagerCustom: '#dpager',
        controls: false
    });
    $('#dpager').bxSlider({
        slideWidth: 110,
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 10,
        pager: false
    });

    $('.fancy').fancybox({

        padding: 50,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'titlePosition'     : 'over',
        'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
                    return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
                }

    });

}); // end document.ready
