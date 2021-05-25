//google map
loadjs(['https://maps.googleapis.com/maps/api/js?key=AIzaSyB1SdPebAPswNZfePSNDoGGSlh1ZPUP3Ok&callback=initMap', 
        'script/lib/googlemap.js']);

//icon文字
loadjs('https://kit.fontawesome.com/daece105d8.js');

//wow載入動畫
loadjs('script/lib/wow.min.js', function() {
  new WOW().init();
});

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//chatcode
loadjs('script/lib/chatcode.js');

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

