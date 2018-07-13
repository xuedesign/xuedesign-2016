$LAB

//jQuery總碼
.script("https://code.jquery.com/jquery.min.js")

//載入動畫
jQuery(document).ready(function(){jQuery("#loading").fadeOut(0)})

//圖片延遲載入
.script("https://cdn.jsdelivr.net/npm/lazyload@1.8.4/jquery.lazyload.min.js").wait(function(){
    $("img.lazyload").lazyload();
  })

//區塊載入動畫
.script("https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min.js").wait(function(){
    wow=new WOW({animateClass:"animated",offset:100,callback:function(a){console.log("WOW: animating <"+a.tagName.toLowerCase()+">")}}),wow.init();
  })

//作品展示
.script("script/lib/pointy-slider.js")

//社群聯絡
.script("script/lib/chatcode.js")

//icon文字
.script("https://use.fontawesome.com/7b7fd6d88b.js")

//返回頂端
.script("script/lib/scrollTo.js").wait(function(){
    $(function(){
      $("#top-menu").scrollTo(700)
    });
    $(function(){
      $("#mouse-move").scrollTo(700)
    });
    $(function(){
      $("#btn-first").scrollTo(700)
    });    
})

//行動選單
.script("script/lib/overlay.modernizr.custom.js")
.script("script/lib/overlay-classie.js")
.script("script/lib/overlay-demo1.js")
.script("script/lib/overlay-demo2.js")

//圖片延遲載入
.script("https://cdn.jsdelivr.net/retinajs/1.3.0/retina.min.js").wait(function(){
    retinajs();
  })

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
})


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