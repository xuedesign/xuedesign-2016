loadjs("https://use.fontawesome.com/7b7fd6d88b.js"),loadjs("script/lib/wow.min.js",(function(){(new WOW).init()})),loadjs("https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js",(function(){lozad().observe()})),loadjs("script/lib/chatcode.js"),$((function(){$(window).load((function(){$(window).bind("scroll resize",(function(){var o=$(this).scrollTop();o<150&&$("#top-bar").stop().animate({top:"-65px"}),o>150&&$("#top-bar").stop().animate({top:"0px"})})).scroll()}))}));