//icon文字
loadjs('https://use.fontawesome.com/7b7fd6d88b.js');

//wow載入動畫
loadjs('../script/lib/wow.min.js', function() {
  new WOW().init();
});

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//高解析圖片切換
loadjs('https://cdn.jsdelivr.net/retinajs/1.3.0/retina.min.js', function() {
  retinajs();
});

//chatcode
loadjs('../script/lib/chatcode.js');

//分享按鈕
loadjs('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-583a5e74fc646174');

//Fancybox
loadjs(['https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css', 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js']); 

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
/* function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks; */
