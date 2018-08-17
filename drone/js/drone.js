function go_next(n, t) {
    var i = $(n).data("target");
    $(i).addClass(t.target_active).siblings().removeClass(t.target_active);
    $(n).addClass(t.link_active).siblings().removeClass(t.link_active)
}


 $(document).ready(function() {
    function t() {
        var i = $(".b-infographic-item-active").next(),
            r = i.length > 0 ? i : $(".b-infographic-item")[0];
        go_next(r, {
            target_active: "b-infographic-big-contain-active",
            link_active: "b-infographic-item-active"
        });
        n = setTimeout(t, 5e3)
    }
    var n;
    $(".b-infographic-item").click(function(i) {
        i.preventDefault();
        go_next(this, {
            target_active: "b-infographic-big-contain-active",
            link_active: "b-infographic-item-active"
        });
        clearTimeout(n);
        n = setTimeout(t, 8e3)
    });
    $(".b-infographic-big").hover(function() {
        clearInterval(n)
    }, function() {
        n = setTimeout(t, 5e3)
    });
    n = setTimeout(t, 5e3)
});
$(document).ready(function() {
    function t() {
        var i = $(".b-cross-platform-devices-link-active").next(),
            r = i.length > 0 ? i : $(".b-cross-platform-devices-link")[0];
        go_next(r, {
            target_active: "b-cross-platform-target-active",
            link_active: "b-cross-platform-devices-link-active"
        });
        n = setTimeout(t, 4e3)
    }
    var n;
    
    $(".b-cross-platform-devices-link").hover(function() {
        go_next(this, {
            target_active: "b-cross-platform-target-active",
            link_active: "b-cross-platform-devices-link-active"
        });
        
        clearTimeout(n);
        n = setTimeout(t, 6e3);
        }, function() {
        
        })
});
 (function(n) {
    n().ready(function() {
        var t = n(".b-services-split-right");
        n("[data-services-hover]").hover(function() {
            t.addClass(n(this).data("services-hover"))
        }, function() {
            t.removeClass(n(this).data("services-hover"))
        })
    })
})(jQuery)