$("a").bind("click",(function(t){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-70+"px"},750),t.preventDefault(),$(".active").removeClass("active"),$(this).addClass("active")})),$(".mob-menu__list li a").click((function(){$("body").removeClass("no-scroll")}));
//# sourceMappingURL=index.754ecbf0.js.map
