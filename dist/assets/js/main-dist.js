$(function(){$(".nojs.notice-message").addClass("hidden");var t=$("#about"),o=$("#html"),e=$("#webdev"),s=$("#learning"),a=$("#msgForm"),i=$("#name"),n=$("#email"),c=$("#msg"),r=$("#submit"),d={},l=$(".grid").masonry({itemSelector:".grid-item",percentPosition:!0,fitWidth:!0,gutter:20,columnWidth:".grid-sizer"});l.imagesLoaded().progress(function(){l.masonry()}),l.on("layoutComplete",function(){var n=$(window).height(),c=200;d={about:t.offset().top-t.height()+2*c,aboutEnd:t.offset().top+t.height()-50,dot1:o.offset().top-n+0*c,dot2:e.offset().top-n+0*c,dot3:s.offset().top-n+0*c,form:a.offset().top-n,name:i.offset().top-n+c,msg:i.offset().top-n+c+i.height(),submit:r.offset().top-n+c/3},gumshoe.init({offset:200})}),$(".grid-item").on("click",function(){$(".grid-item").not(this).removeClass("active"),$(this).toggleClass("active")}),$("section#about").removeClass("nojs"),$("section#about .dot").removeClass("active");var m=function(t,o){var e=t.find(".dot");e.each(function(t,e){t<o&&setTimeout(function(){$(e).addClass("active")},200*t)})};$("section#contact").removeClass("nojs");var u=function(){i.addClass("active"),n.addClass("active")},f=function(){c.addClass("active")},h=function(){r.addClass("active")},v=function(){$(document).on("scroll",function(){var t=$(this).scrollTop(),o=$(this).width();console.log(o);var e=$(window).height();t>100&&o>768||t>=e&&o<=768?$("#sidebar").addClass("retracted"):$("#sidebar").removeClass("retracted"),t>d.about&&t<d.aboutEnd?$("section#about").addClass("unwrapped"):($("section#about").removeClass("unwrapped"),$("section#about .dot").removeClass("active")),t>d.dot1&&(m($("section#about #html .dots"),9),m($("section#about #js .dots"),9)),t>d.dot2&&(m($("section#about #webdev .dots"),9),m($("section#about #webdesign .dots"),7)),t>d.dot3&&(m($("section#about #organization .dots"),8),m($("section#about #learning .dots"),10)),t<d.form&&(i.removeClass("active"),n.removeClass("active"),c.removeClass("active"),r.removeClass("active")),t>d.name&&u(),t>d.msg&&f(),t>d.submit&&h()})};v()}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length&&(t.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){var t=$(o);return t.focus(),!t.is(":focus")&&(t.attr("tabindex","-1"),void t.focus())}))}}),$(function(){function t(){const t=$("#msgForm");$(t).on("submit",function(o){o.preventDefault(),$("#submit").prop("disabled",!0);const e=$(t).serialize();$.ajax({method:"POST",url:"server-assets/private-mailer.php",data:e}).done(function(){console.log("message sent"),$("#submit-success").toggleClass("hidden"),t.fadeOut(),$("#name").val(""),$("#email").val(""),$("#msg").val(""),$("#submit").prop("disabled",!1)}).fail(function(t){$("#submit-error").html(t.responseText),$("#submit-error").toggleClass("hidden")})})}t()});