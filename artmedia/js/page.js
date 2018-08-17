
; /* Start:"a:4:{s:4:"full";s:57:"/local/components/sam/feedback/ajax.min.js?14937337715547";s:6:"source";s:38:"/local/components/sam/feedback/ajax.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function addSubmitParams() {
    if ($(this).is(":disabled") || $(this).is(".disabled")) return !1;
    $("body").trigger("onAjaxReloadBeforeSubmitClick");
    var e = $(this).attr("name"),
        a = $(this).val();
    "undefined" != typeof e && $(this).closest("form").append('<input type="hidden" name="' + e + '" " value="' + a + '"/>')
}

function bitrixFormAjaxReplaseInit(e) {
    $("input[name=bxajaxidjQuery]", e).length && ($(e).attr("action", $("input[name=FORM_ACTION]", e).val()), $("input[name=FORM_ACTION]", e).remove(), $("input[name=AJAX_CALLjQuery]", e).remove(), $("input[name=bxajaxidjQuery]", e).attr("name", "bxajaxid"), $("input[type=submit],button[type=submit]", e).on("click", addSubmitParams), $(e).removeClass("replaceFormBitixAjax"), $(e).submit(bitrixFormAjaxReplase))
}

function checkForAjaxForms() {
    $("form.replaceFormBitixAjax").each(function() {
        bitrixFormAjaxReplaseInit(this)
    })
}

function bitrixFormAjaxReplase() {
    var e = $("#comp_" + $("input[name=bxajaxid]", this).val());
    loader_Custom_ajax_shadow(e);
    var a = {
        url: $(this).attr("action"),
        dataType: "html",
        type: "POST",
        data: $(this).serialize()
    };
    return $.ajax(a).done(function(a) {
        $(e).html(a), checkForAjaxForms(), loader_Custom_ajax_remove(), $("body").trigger("onAjaxReload", [e])
    }), !1
}

function loader_Custom_ajax_remove() {}

function loader_Custom_ajax_shadow(e) {
    var a = $(e);
    a.length && (a.find(".butt").html('<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>').attr("disabled", !0), $("body").trigger("onAjaxReloadBefore", [a]))
}

function windowHeight() {
    var e = document.documentElement;
    return self.innerHeight || e && e.clientHeight || document.body.clientHeight
}

function windowWidth() {
    var e = document.documentElement;
    return self.innerWidth || e && e.clientWidth || document.body.clientWidth
}
BX.ajax && (BX._showWait = BX.showWait, BX.showWait = function(e, a) {
        loader_Custom_ajax_shadow(e), BX._showWait(e, a)
    }, BX.ajax._UpdatePageData = BX.ajax.UpdatePageData, BX.ajax.UpdatePageData = function(e) {
        BX.ajax._UpdatePageData(e)
    }, BX._closeWait = BX.closeWait, BX.closeWait = function(e, a) {
        checkForAjaxForms(e), loader_Custom_ajax_remove(), BX._closeWait(e, a)
    }, BX.ajax._submitComponentForm = BX.ajax.submitComponentForm, BX.ajax.submitComponentForm = function(e, a) {
        function t() {
            loader_Custom_ajax_remove(), $("body").trigger("onAjaxReload", [o])
        }
        var o = $("#" + a);
        loader_Custom_ajax_shadow(o), BX.ajax._submitComponentForm(e, a), BX.addCustomEvent("onAjaxSuccess", t)
    }, BX.ajax._insertToNode = BX.ajax.insertToNode, BX.ajax.insertToNode = function(e, a) {
        var t = $("#" + a);
        loader_Custom_ajax_shadow(t);
        var o = {
            url: e,
            dataType: "html",
            type: "GET"
        };
        $.ajax(o).done(function(e) {
            var a = {
                obj: t,
                data: e
            };
            $("body").trigger("onAjaxBeforeInsert", [a]), loader_Custom_ajax_remove(), $(a.obj).html(a.data), checkForAjaxForms(), $("body").trigger("onAjaxReload", [t])
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function a(e) {
            return d.raw ? e : encodeURIComponent(e)
        }

        function t(e) {
            return d.raw ? e : decodeURIComponent(e)
        }

        function o(e) {
            return a(d.json ? JSON.stringify(e) : String(e))
        }

        function n(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(r, " ")), d.json ? JSON.parse(e) : e
            } catch (e) {}
        }

        function i(a, t) {
            var o = d.raw ? a : n(a);
            return e.isFunction(t) ? t(o) : o
        }
        var r = /\+/g,
            d = e.cookie = function(n, r, u) {
                if (arguments.length > 1 && !e.isFunction(r)) {
                    if (u = e.extend({}, d.defaults, u), "number" == typeof u.expires) {
                        var s = u.expires,
                            c = u.expires = new Date;
                        c.setTime(+c + 864e5 * s)
                    }
                    return document.cookie = [a(n), "=", o(r), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
                }
                for (var m = n ? void 0 : {}, x = document.cookie ? document.cookie.split("; ") : [], l = 0, f = x.length; l < f; l++) {
                    var j = x[l].split("="),
                        p = t(j.shift()),
                        h = j.join("=");
                    if (n && n === p) {
                        m = i(h, r);
                        break
                    }
                    n || void 0 === (h = i(h)) || (m[p] = h)
                }
                return m
            };
        d.defaults = {}, e.removeCookie = function(a, t) {
            return void 0 !== e.cookie(a) && (e.cookie(a, "", e.extend({}, t, {
                expires: -1
            })), !e.cookie(a))
        }
    }), $(document).ready(function() {
        checkForAjaxForms()
    });
/* End */
;
; /* Start:"a:4:{s:4:"full";s:58:"/local/components/sam/feedback/script.min.js?1491075293824";s:6:"source";s:40:"/local/components/sam/feedback/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $("form .butt").on("click", function() {
        $(this).closest("form").find("input[name=submit]").val(1)
    }), $("body").on("onAjaxReload", function(n, o) {
        if ($(o).find("input[name=form_success]").val()) {
            var i = $(o).find("input[name=ya_goal]").val(),
                t = $(o).find("input[name=ga_goal]").val();
            console.log(i), console.log(t), yaCounter674653.reachGoal(i);
            var e = t.split(",");
            ga("send", "event", e[0].trim(), e[1].trim(), window.location.href), setTimeout(function() {
                $(o).find(".js_release_form").trigger("click")
            }, 3e3)
        }
        $("form .butt", o).on("click", function() {
            $(this).closest("form").find("input[name=submit]").val(1)
        })
    })
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/local/components/sam/feedback/ruscript.js?14925141987535";s:6:"source";s:42:"/local/components/sam/feedback/ruscript.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
    

    $("body").on("onAjaxReload", function (event, obj) {
        var maskList = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
            var maskOpts = {
                inputmask: {
                    definitions: {
                        '#': {
                            validator: "[0-9]",
                            cardinality: 1
                        }
                    },
                    showMaskOnHover: true,
                    autoUnmask: false,
                    clearMaskOnLostFocus: false
                },
                match: /[0-9]/,
                replace: '#',
                list: maskList,
                listKey: "mask",
                onMaskChange: function(maskObj, determined) {
                    if (determined) {
                        var hint = maskObj.name_en;
                        if (maskObj.desc_en && maskObj.desc_en != "") {
                            hint += " (" + maskObj.desc_en + ")";
                        }
                        $("#descr").html(hint);
                    } else {
                        $("#descr").html("Mask of input");
                    }
                }
            };
      
                $.getJSON('https://ipinfo.io', function(data){
				    
                      switch(data.country){
                      case 'UA' || 'UKR':
                    	  $("input[type=tel]").val('380');
                          break;
                      case 'RU' || 'RUS':
                    	  $("input[type=tel]").val('7');
                          break;
                      case 'BY' || 'BLZ':
                    	  $("input[type=tel]").val('375');
                          break;
                      case 'KZ' || 'KAZ':
                    	  $("input[type=tel]").val('7');
                          break;
                      default:
                    	  $("input[type=tel]").val('7');
                      }
                  });   
      
                	$("input[type=tel]").inputmask("remove");
                    $("input[type=tel]").inputmasks(maskOpts);
                    $('#phone_mask').change();
    });
});

$(document).ready(function () {
    var isMobile = {
        Android: function() {

            return navigator.userAgent.match(/Android/i);

        },
        BlackBerry: function() {

            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {

            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {

            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {

            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {

            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

        }
    };



    if(isMobile.any()){
        

        $("body").on("onAjaxReload", function (event, obj) {
            var maskList = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
            var maskOpts = {
                inputmask: {
                    definitions: {
                        '#': {
                            validator: "[0-9]",
                            cardinality: 1
                        }
                    },
                    showMaskOnHover: true,
                    autoUnmask: false,
                    clearMaskOnLostFocus: false
                },
                match: /[0-9]/,
                replace: '#',
                list: maskList,
                listKey: "mask",
                onMaskChange: function(maskObj, determined) {
                    if (determined) {
                        var hint = maskObj.name_en;
                        if (maskObj.desc_en && maskObj.desc_en != "") {
                            hint += " (" + maskObj.desc_en + ")";
                        }
                        $("#descr").html(hint);
                    } else {
                        $("#descr").html("Mask of input");
                    }
                }
            };
      
                $.getJSON('https://ipinfo.io', function(data){
				    
                      switch(data.country){
                      case 'UA' || 'UKR':
                    	  $("input[type=tel]").val('380');
                          break;
                      case 'RU' || 'RUS':
                    	  $("input[type=tel]").val('7');
                          break;
                      case 'BY' || 'BLZ':
                    	  $("input[type=tel]").val('375');
                          break;
                      case 'KZ' || 'KAZ':
                    	  $("input[type=tel]").val('7');
                          break;
                      default:
                    	  $("input[type=tel]").val('7');
                      }
                  });   
      
                	$("input[type=tel]").inputmask("remove");
                    $("input[type=tel]").inputmasks(maskOpts);
                    $('#phone_mask').change();
        });
    }else
    {
        

        $("body").on("onAjaxReload", function (event, obj) {
            var maskList = $.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
            var maskOpts = {
                inputmask: {
                    definitions: {
                        '#': {
                            validator: "[0-9]",
                            cardinality: 1
                        }
                    },
                    showMaskOnHover: true,
                    autoUnmask: false,
                    clearMaskOnLostFocus: false
                },
                match: /[0-9]/,
                replace: '#',
                list: maskList,
                listKey: "mask",
                onMaskChange: function(maskObj, determined) {
                    if (determined) {
                        var hint = maskObj.name_en;
                        if (maskObj.desc_en && maskObj.desc_en != "") {
                            hint += " (" + maskObj.desc_en + ")";
                        }
                        $("#descr").html(hint);
                    } else {
                        $("#descr").html("Mask of input");
                    }
                }
            };
      
                $.getJSON('https://ipinfo.io', function(data){
				    
                      switch(data.country){
                      case 'UA' || 'UKR':
                    	  $("input[type=tel]").val('380');
                          break;
                      case 'RU' || 'RUS':
                    	  $("input[type=tel]").val('7');
                          break;
                      case 'BY' || 'BLZ':
                    	  $("input[type=tel]").val('375');
                          break;
                      case 'KZ' || 'KAZ':
                    	  $("input[type=tel]").val('7');
                          break;
                      default:
                    	  $("input[type=tel]").val('7');
                      }
                  });   
      
                	$("input[type=tel]").inputmask("remove");
                    $("input[type=tel]").inputmasks(maskOpts);
                    $('#phone_mask').change();
        });
    }

});
/* End */
;; /* /local/components/sam/feedback/ajax.min.js?14937337715547*/
; /* /local/components/sam/feedback/script.min.js?1491075293824*/
; /* /local/components/sam/feedback/ruscript.js?14925141987535*/
