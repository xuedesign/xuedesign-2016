//justfont
loadjs('../script/lib/justfonts.js');

//返回頂端
loadjs('../script/lib/scrollTo.js', function() {
      $(function(){
      $("#top-menu").scrollTo(700)
    });
    $(function(){
      $("#mouse-move").scrollTo(700)
    });
    $(function(){
      $("#btn-first").scrollTo(700)
    });
});

//icon文字
loadjs('https://pro.fontawesome.com/releases/v5.6.1/css/all.css');

//wow載入動畫
loadjs('../script/lib/wow.min.js', function() {
  new WOW().init();
});

//圖片延遲載入
loadjs('../script/lib/jquery.lazyload.js', function() {
  $(function() {
    $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
});

//高解析圖片切換
loadjs('https://cdn.jsdelivr.net/retinajs/1.3.0/retina.min.js', function() {
  retinajs();
});

//chatcode
loadjs('../script/lib/chatcode.js');

//icon文字
loadjs('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-583a5e74fc646174');

//頂端隱藏選單
$(function(){
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊	
			if($this_Top < 150){
				$('#top-bar').stop().animate({top:"-65px"});
				}
			if($this_Top > 150){
				$('#top-bar').stop().animate({top:"0px"});
						
			}
		}).scroll();
	});
});

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

