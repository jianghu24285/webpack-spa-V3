webpackJsonp([0],{FGJD:function(n,t){},Q3KW:function(n,t){},dBck:function(n,t){},lVK7:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Q3KW"),o=(e.n(a),e("FGJD")),s=(e.n(o),e("dBck"));e.n(s),e("vGYV")},vGYV:function(n,t,e){"use strict";(function(n){var t=function(){this.removeLoading(),this.initMusic(),this.bindEvents()};t.prototype.removeLoading=function(){window.onload=function(){n("#page-loading").hide()}},t.prototype.initMusic=function(){var t=n(".music-btn"),e=document.getElementById("music-bg");e.play()&&t.addClass("on"),document.addEventListener("WeixinJSBridgeReady",function(){e.play()},!1),t.on("tap",function(){e.paused?e.play():e.pause(),t.toggleClass("on",!e.paused)})},t.prototype.bindEvents=function(){var t=n("#home-page"),e=n("#content-page"),a=n(".page-content-04").find(".trainee-tab"),o=n(".page-content-04").find(".trainee-tab-body"),s=n(".page-content-bottom-rocket"),i=n(".media-wrap");n(document).on("tap",".menu-li",function(){var d=n(this);return e.find(".page-content-box").removeClass("show"),d.hasClass("page-content-01")&&(s.show(),e.find(".page-content-01").addClass("show")),d.hasClass("page-content-02")&&(s.show(),e.find(".page-content-02").addClass("show")),d.hasClass("page-content-03")?void(location.href="http://campus.51job.com/weichuan2017/game/"):d.hasClass("page-content-05")?void(location.href="http://tv.52campus.net/?c=activity&a=live&id=21098"):(d.hasClass("page-content-04")&&(s.show(),e.find(".page-content-04").addClass("show"),a.is(":hidden")&&a.show()&&o.hide()),d.hasClass("page-content-06")&&(s.hide(),e.find(".page-content-bottom-02").show().end().find(".page-content-bottom-01").hide().end().find(".page-content-06").addClass("show")),t.hide("fast"),e.fadeIn("fast").addClass("show"),void i.animate({right:"21%"},"fast"))}),n(".go-home").on("tap",function(){t.show("fast"),e.fadeOut("fast").removeClass("show").find(".page-content-bottom-02").hide().end().find(".page-content-bottom-01").show(),i.animate({right:"5%"},"fast")}),n(".job-apply").on("tap",function(){n(this).addClass("active").siblings().removeClass("active")}),n(".trainee-tab").on("tap","ul li img",function(){var t=n(this),e=t.parent("li"),s=e.index();e.addClass("active").siblings().removeClass("active"),a.hide(),o.show(),o.children().eq(s).addClass("show").show().siblings().removeClass("show").hide()}),n(".trainee-go-back").on("tap",function(){o.hide(),a.show()})};new t}).call(t,e("FgJa"))}},["lVK7"]);